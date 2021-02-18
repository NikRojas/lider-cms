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
use App\ProjectTypeDepartment;
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
        //->has('projectsRel')
        ->whereHas('projectsRel', function ($query) {
            $query->where('active', 1);
        })
        ->orderBy('department')->groupBy('code_department')->get();
        foreach ($departments as $key => $value) {
            $departments[$key]["districts"] = $this->getDistricts($value->code_department);
        }
        return $departments;
    }

    public function getDistricts($code){
        $data = Ubigeo::select('code_district','district','code_ubigeo','code_department')->distinct()->where('code_department',$code)
        //->has('projectsRel')
        ->whereHas('projectsRel', function ($query) {
            $query->where('active', 1);
        })
        ->where('code_district','!=','00')->orderBy('district')->get();
        return $data;
    }

    public function getStatus(){
        //$data = ProjectStatus::has('projectsRel')->get();
        $data = ProjectStatus::whereHas('projectsRel', function ($query) {
            $query->where('active', 1);
        })->get();
        return $data;
    }

    public function getFilters(){
        $departments = $this->getDepartments();
        $status = $this->getStatus();
        $rooms = $this->getRooms();
        $data = [
            "departments" => $departments,
            "status" => $status,
            "rooms" => $rooms
        ];
        return $data;
    }

    public function getRooms(){
        $data = ProjectTypeDepartment::where('available',true)->whereHas('projectRel', function ($query) {
            $query->where('active', 1);
        })->groupBy('room')->get();
        if($data){
            $data = $data->pluck('room');
        }
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
        if($rooms){
            $projects->whereHas('tipologiesRel', function ($query) use ($rooms) {
                return $query->whereIn('room', $rooms)->where('available',true);
            });
        }
        if($departments && !$districts){
            $projects->whereHas('ubigeoRel', function ($query) use ($departments) {
                return $query->whereIn('code_department', $departments);
            });
        }
        else if($departments && $districts){
            $departmentsTemp = null;
            //$districtsTemp = null;
            foreach ($districts as $k => $f) {
                //$districtsTemp[$k] = substr($f, 2,2);
                $departmentsTemp[] = substr($f, 0, 2);
            }
            foreach ($departmentsTemp as $key => $value) {
                $pos = array_search($value, $departments);
                if($pos !== FALSE){
                    unset($departments[$pos]);
                }
            }
            $projects->whereHas('ubigeoRel', function ($query) use ($departments, $districts) {
                if(!$departments){
                    return $query->whereIn('code_ubigeo',$districts);
                }
                else{
                    return $query->whereIn('code_ubigeo',$districts)->orWhereIn('code_department', $departments);
                }
            });
        }
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