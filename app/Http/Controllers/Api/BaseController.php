<?php


namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;
use App\Information;
use App\MasterPage;
use App\Member;
use App\Project;
use App\SocialNetwork;
use App\Ubigeo;

class BaseController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendResponse($result, $message)
    {
    	$response = [
            'success' => true,
            'data'    => $result,
            'message' => $message,
        ];
        return response()->json($response, 200);
    }


    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendError($error, $errorMessages = [], $code = 404)
    {
    	$response = [
            'success' => false,
            'message' => $error,
        ];

        
        if(!empty($errorMessages)){
            $response['data'] = $errorMessages;
        }


        return response()->json($response, $code);
    }

    public function layout(){
        $social_networks = SocialNetwork::select('id','url','master_social_network_id')->with('master_social_networks:id,icon,name')->orderBy('index','asc')->get();  
        $information = Information::first();
        $members = Member::select('image','name')->orderBy('index','asc')->get();
        $data = array(
            "menu" => array(
                "social_networks" => $social_networks,
                "information" => $information,
            ),
            "footer" => array(
                "social_networks" => $social_networks,
                "information" => $information,
                "members" => $members
            )
        );
        return $this->sendResponse($data,'');
    }

    public function getSeoPage($slug, $lang){
        $page = MasterPage::select('id','title_'.$lang,'seo_description_'.$lang,'seo_keywords_'.$lang,'seo_image','slug_'.$lang)->where('slug_en',$slug)->first()->toArray();
        return $page;
    }

    public function getDepartments(){
        $data = Ubigeo::select('code_ubigeo','code_department','department')->distinct('code_department')
        ->has('projectsRel')->orderBy('department')->get();
        $data =  $data->pluck('department','code_department');
        return $this->sendResponse($data,'');
    }

    public function getDistricts(Request $request){
        $data = Ubigeo::select('code_district','district')->distinct()->where('code_department',$request->code)
        ->has('projectsRel')
        ->where('code_district','!=','00')->orderBy('district')->get();
        return $this->sendResponse($data,'');
    }

    public function paginateProjects(Request $request){
        $department = $request->department;
        $district = $request->district;
        $projects = Project::select('id','project_status_id','logo','slug_'.$request->locale,'images','code_ubigeo','name_'.$request->locale,'rooms_'.$request->locale,'footage_'.$request->locale,'price_total','price_total_foreign')
        ->where('active',1);
        if($department && !$district){
            $projects = $projects->whereHas('ubigeoRel', function ($query) use ($department) {
                return $query->where('code_department', $department);
            });
        }
        else if($department && $district){
            $projects = $projects->whereHas('ubigeoRel', function ($query) use ($department, $district) {
                return $query->where('code_department', $department)->where('code_district', $district);
            });
        }
        $projects = $projects->with('ubigeoRel','statusRel')->orderBy('index')->paginate(9);
        return $projects;
    }

    public function setFileName($name,$file) {
        $nameFile = $name.time().uniqid().'.'.$file->getClientOriginalExtension();
        return $nameFile;
    }

    /*public function paginateBlog(Request $request){
        $posts = Post::select('title','slug','thumbnail','excerpt','category_id','image','created_at')->where('published',1)->with('category:id,name,slug')->orderBy('created_at','desc')->paginate(6);
        $data = array(
            "blog" => $posts
        );
        return $this->sendResponse($data);
    }

    public function paginateSuccessStories(Request $request){
        $master_page = MasterPage::where('slug',$request->department)->first();
        if(!$master_page){
            return $this->sendError("Not found");
        }
        $success_stories = $this->getPaginateSuccessStories($request);
        $data = array(
            "success_stories" => $success_stories
        );
        return $this->sendResponse($data);
    }*/
}