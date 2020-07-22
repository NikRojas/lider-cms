<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Traits\ApiTrait;
use App\SocialNetwork;
use App\Department;
use App\Information;
use App\MasterPage;
use App\Post;
use App\Partner;
use App\SuccessStory;
use App\LeadMedium;

class ApiController extends Controller
{
    use ApiTrait;

    public function layout(){
        $social_networks = SocialNetwork::select('id','url','master_social_network_id')->with('master_social_networks:id,icon,name')->orderBy('index','asc')->get();  
        $main = Department::select('title','logo_white')->where('main',1)->first();
        $information = Information::first();
        //$pages = MasterPage::select('name','slug')->where('slug','!=','politicas-privacidad')->where('department_id',NULL)->orWhere('slug',NULL)->get();
        $pages = MasterPage::select('name','slug')->where('slug','!=','politicas-privacidad')->where('department_id',NULL)->orWhere('slug',NULL)->orderBy('index')->get();
        $departments = $this->getDepartments();
        $partners = Partner::select('image','name')->orderBy('index','asc')->get();
        $medium = LeadMedium::get();
        $data = array(
            "menu" => array(
                "social_networks" => $social_networks,
                "main" => $main,
                "departments" => $departments,
                "pages" => $pages,
            ),
            "footer" => array(
                "social_networks" => $social_networks,
                "main" => $main,
                "departments" => $departments,
                "information" => $information,
                "pages" => $pages,
                "partners" => $partners
            ),
            "form" => array(
                "medium" => $medium
            )
        );
        return $this->sendResponse($data);
    }

    public function paginateBlog(Request $request){
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
    }
}