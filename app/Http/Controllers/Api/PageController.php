<?php

namespace App\Http\Controllers\Api;

use App\Category;
use App\Http\Controllers\Api\BaseController;
use App\MasterLeadMedium;
use App\MasterLeadTimeDay;
use App\Post;
use App\Project;
use App\Slider;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PageController extends BaseController
{

    public function home(Request $request){
        $page = $this->getSeoPage(NULL,$request->locale);
        $slider = Slider::where('from', '<=' , Carbon::now()->toDateTimeString())
        ->where('to', '>=' , Carbon::now()->toDateTimeString())->orderBy('index')->get();
        //$projects = Project::select('id','project_status_id','logo','slug_'.$request->locale,'images','code_ubigeo','name_'.$request->locale,'rooms_'.$request->locale,'footage_'.$request->locale,'price_total','price_total_foreign')->with('ubigeoRel','statusRel')->orderBy('index')->get();
        $projects = $this->paginateProjects($request);
        $posts = Post::select('id','excerpt_'.$request->locale,'created_at','category_id','thumbnail','title_'.$request->locale,'slug_'.$request->locale)
        ->orderBy('created_at', 'desc')->where('published',1)->with('category:id,name_'.$request->locale.',slug_'.$request->locale)->take(9)->get();
        $data = array(
            "page" => $page,
            "slider" => $slider,
            "projects" => $projects,
            "posts" => $posts,
        );
        return $this->sendResponse($data, '');
    }

    public function blog(Request $request){
        $page = $this->getSeoPage('blog',$request->locale);
        $categories = Category::orderBy('name_'.$request->locale)->get();

        $posts = Post::select('id','excerpt_'.$request->locale,'created_at','category_id','thumbnail','title_'.$request->locale,'slug_'.$request->locale)
        ->orderBy('created_at', 'desc')->where('published',1)->with('category:id,name_'.$request->locale.',slug_'.$request->locale)->take(9)->get();

        $data = array(
            "page" => $page,
            "categories" => $categories,
            "posts" => $posts,
        );
        return $this->sendResponse($data, '');
    }

    public function blogCategory(Request $request){
        $category = Category::select('id','name_'.$request->locale,'slug_'.$request->locale)->where('slug_'.$request->locale,$request->slug)->first();
        if(!$category){
            return $this->sendError("");
        }

        $posts = Post::select('id','excerpt_'.$request->locale,'created_at','category_id','thumbnail','title_'.$request->locale,'slug_'.$request->locale)
        ->orderBy('created_at', 'desc')->where('published',1)->with('category:id,name_'.$request->locale.',slug_'.$request->locale)->take(9)->get();

        $page = $this->getSeoPage('blog',$request->locale);
        $categories = Category::orderBy('name_'.$request->locale)->get();
        $data = array(
            "page" => $page,
            "category" => $category,
            "categories" => $categories,
            "posts" => $posts,
        );
        return $this->sendResponse($data, '');
    }

    public function blogCategoryPost(Request $request){
        $category = Category::select('id','name_'.$request->locale,'slug_'.$request->locale)->where('slug_'.$request->locale,$request->slug)->first();
        if(!$category){
            return $this->sendError("Not found");
        }
        $post = Post::where('slug_'.$request->locale,$request->post)->where('category_id',$category->id)->where('published',1)->first();
        if(!$post){
            return $this->sendError("Not found");
        }
        $page = $this->getSeoPage('blog',$request->locale);
        $categories = Category::orderBy('name_'.$request->locale)->get();
        $posts = Post::where('published',1)->where('id','!=',$post->id)->with('category:id,name_'.$request->locale.',slug_'.$request->locale)->inRandomOrder()->take(3)->get();
        $data = array(
            "page" => $page,
            "category" => $category,
            "posts" => $posts,
            'post' => $post,
            "categories" => $categories
        );
        return $this->sendResponse($data,'');
    }

    public function onlineAppointment(Request $request){
        $page = $this->getSeoPage('online-appointment',$request->locale);
        $timeDay = MasterLeadTimeDay::get();
        $medium = MasterLeadMedium::where('videocall',1)->get();
        $projects = Project::select('id','logo','name_es','name_en')->where('active',1)->get();
        $data = array(
            "page" => $page,
            "timeDay" => $timeDay,
            "medium" => $medium,
            "projects" => $projects
        );
        return $this->sendResponse($data, '');
    }

    public function contactUs(Request $request){
        $page = $this->getSeoPage('contact-us',$request->locale);
        $medium = MasterLeadMedium::where('videocall',0)->get();
        $projects = Project::select('id','logo','name_es','name_en')->where('active',1)->get();
        $data = array(
            "page" => $page,
            "medium" => $medium,
            "projects" => $projects
        );
        return $this->sendResponse($data, '');
    }

    public function sellLand(Request $request){
        $page = $this->getSeoPage('sell-your-land',$request->locale);
        $data = array(
            "page" => $page,
        );
        return $this->sendResponse($data, '');
    }

    public function projects(Request $request){
        $page = $this->getSeoPage('projects',$request->locale);
        $projects = Project::select('id','logo','name_es','name_en')->where('active',1)->get();
        $data = array(
            "page" => $page,
            "projects" => $projects
        );
        return $this->sendResponse($data, '');
    }

    public function projectsRead(Request $request){
        $project = Project::where('slug_'.$request->locale,$request->slug)->first();
        if(!$project){
            return $this->sendError("");
        }
        $page = $this->getSeoPage('projects',$request->locale);
        $project = $project->load('statusRel')->load('ubigeoRel')->load('banksRel')
        ->load('advisorsRel')->load('featuresRel')->load('galleryRel')->load('tipologiesRel')->load('filesRel');
        //IN DEPARTMENT
        //$projects = Project::select('id','logo','name_es','name_en')->where('active',1)->get();
        $data = array(
            "page" => $page,
            "project" => $project
        );
        return $this->sendResponse($data, '');
    }
}