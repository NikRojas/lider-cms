<?php


namespace App\Http\Controllers\Api;

use App\Certification;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;
use App\Information;
use App\MasterPage;
use App\Member;
use App\Post;
use App\Project;
use App\ProjectStatus;
use App\SocialNetwork;
use App\Testimonial;
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
        $certificates = Certification::select('image','name')->orderBy('index','asc')->get();
        $data = array(
            "menu" => array(
                "social_networks" => $social_networks,
                "information" => $information,
            ),
            "footer" => array(
                "social_networks" => $social_networks,
                "information" => $information,
                "members" => $members,
                "certificates" => $certificates
            )
        );
        return $this->sendResponse($data,'');
    }

    public function getSeoPage($slug, $lang){
        $page = MasterPage::select('id','title_'.$lang,'seo_description_'.$lang,'seo_keywords_'.$lang,'seo_image','slug_'.$lang)->where('slug_en',$slug)->first()->toArray();
        return $page;
    }

    public function getDepartments(){
        $departments = Ubigeo::select('code_ubigeo','code_department','department')->distinct('code_department')
        ->has('projectsRel')->orderBy('department')->groupBy('code_department')->get();
        foreach ($departments as $key => $value) {
            $departments[$key]["districts"] = $this->getDistricts($value->code_department);
        }
        return $departments;
    }

    public function getDistricts($code){
        $data = Ubigeo::select('code_district','district','code_department')->distinct()->where('code_department',$code)
        ->has('projectsRel')
        ->where('code_district','!=','00')->orderBy('district')->get();
        return $data;
    }

    public function getStatus(){
        $data = ProjectStatus::has('projectsRel')->get();
        return $data;
    }

    public function getFilters(){
        $departments = $this->getDepartments();
        $status = $this->getStatus();
        $data = [
            "departments" => $departments,
            "status" => $status
        ];
        return $data;
    }

    public function paginateProjects(Request $request){
        $departments = $districts = $statuses = $rooms = null;
        $departments = $request->departments;
        $districts = $request->districts;
        $statuses =  $request->statuses;
        $rooms =  $request->rooms;
        $projects = Project::select('id','project_status_id','logo','logo_colour','slug_'.$request->locale,'images','code_ubigeo','name_'.$request->locale,'rooms_'.$request->locale,'footage_'.$request->locale,'price_total','price_total_foreign')
        ->where('active',1);
        if($statuses){
            $projects->whereIn('project_status_id', $statuses);
        }
        /*if($department && !$district){
            $projects = $projects->whereHas('ubigeoRel', function ($query) use ($department) {
                return $query->where('code_department', $department);
            });
        }
        else if($department && $district){
            $projects = $projects->whereHas('ubigeoRel', function ($query) use ($department, $district) {
                return $query->where('code_department', $department)->where('code_district', $district);
            });
        }*/
        $projects = $projects->with('ubigeoRel','statusRel')->orderBy('index')->paginate(9);
        return $projects;
    }

    public function setFileName($name,$file) {
        $nameFile = $name.time().uniqid().'.'.$file->getClientOriginalExtension();
        return $nameFile;
    }

    public function paginateTestimonials(Request $request){
        $testimonials = Testimonial::orderBy('index', 'asc')->paginate(9);
        return $testimonials;
    }

    public function paginateBlog($q = false, Request $request, $category = false){
        $posts = Post::select('id', 'excerpt_' . $request->locale, 'created_at', 'category_id', 'thumbnail', 'title_' . $request->locale, 'slug_' . $request->locale)
        ->where('published',1);
        if($q){
            $posts = $posts->where('title_' . $request->locale, 'like', '%'.$q.'%');
        }
        if($category){
            $posts = $posts->where('category_id',$category);
        }
        $posts = $posts->with('category:id,name_' . $request->locale . ',slug_' . $request->locale)->orderBy('created_at','desc')->paginate(8);
        return $posts;
    }

    public function getContentPage($slug){
        $content = MasterPage::where('slug_en',$slug)->first()->load('sections:id,name,master_page_id','sections.content:id,master_section_id,field,value,value_en,value_es')->sections->toArray();
        return $content;
    }
}