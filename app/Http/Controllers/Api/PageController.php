<?php

namespace App\Http\Controllers\Api;

use App\Cami;
use App\CamiElement;
use App\Category;
use App\Http\Controllers\Api\BaseController;
use App\MasterLeadMedium;
use App\MasterLeadTimeDay;
use App\Post;
use App\Project;
use App\Slider;
use App\Testimonial;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PageController extends BaseController
{

    public function home(Request $request)
    {
        $page = $this->getSeoPage(NULL, $request->locale);
        $slider = Slider::select('id', 'image_' . $request->locale, 'image_responsive_' . $request->locale)->where('from', '<=', Carbon::now()->toDateTimeString())
            ->where('to', '>=', Carbon::now()->toDateTimeString())->orderBy('index')->get();
        $projects = $this->paginateProjects($request);
        $posts = Post::select('id', 'excerpt_' . $request->locale, 'created_at', 'category_id', 'thumbnail', 'title_' . $request->locale, 'slug_' . $request->locale)
            ->orderBy('created_at', 'desc')->where('published', 1)->with('category:id,name_' . $request->locale . ',slug_' . $request->locale)->take(9)->get();
        $filters = $this->getFilters();
        $data = array(
            "page" => $page,
            "slider" => $slider,
            "projects" => $projects,
            "posts" => $posts,
            "filters" => $filters
        );
        return $this->sendResponse($data, '');
    }

    public function projects(Request $request)
    {
        $page = $this->getSeoPage('projects', $request->locale);
        $projects = $this->paginateProjects($request);
        $data = array(
            "page" => $page,
            "projects" => $projects,
        );
        return $this->sendResponse($data, '');
    }

    public function blog(Request $request)
    {
        $page = $this->getSeoPage('blog', $request->locale);
        $categories = Category::orderBy('name_' . $request->locale)->get();

        /*$posts = Post::select('id', 'excerpt_' . $request->locale, 'created_at', 'category_id', 'thumbnail', 'title_' . $request->locale, 'slug_' . $request->locale)
            ->orderBy('created_at', 'desc')->where('published', 1)->with('category:id,name_' . $request->locale . ',slug_' . $request->locale)->take(9)->get();*/
        
        $posts = $this->paginateBlog($request->q, $request);

        $data = array(
            "page" => $page,
            "categories" => $categories,
            "posts" => $posts,
        );
        return $this->sendResponse($data, '');
    }

    public function blogCategory(Request $request)
    {
        $category = Category::select('id', 'name_' . $request->locale, 'slug_' . $request->locale)->where('slug_' . $request->locale, $request->slug)->first();
        if (!$category) {
            return $this->sendError("");
        }

        /*$posts = Post::select('id', 'excerpt_' . $request->locale, 'created_at', 'category_id', 'thumbnail', 'title_' . $request->locale, 'slug_' . $request->locale)
            ->where('category_id',$category->id)
            ->orderBy('created_at', 'desc')->where('published', 1)->with('category:id,name_' . $request->locale . ',slug_' . $request->locale)->take(9)->get();*/
        
        $posts = $this->paginateBlog($request->q, $request,$category->id);
        $page = $this->getSeoPage('blog', $request->locale);
        $categories = Category::orderBy('name_' . $request->locale)->get();
        $data = array(
            "page" => $page,
            "category" => $category,
            "categories" => $categories,
            "posts" => $posts,
        );
        return $this->sendResponse($data, '');
    }

    public function blogCategoryPost(Request $request)
    {
        $category = Category::select('id', 'name_' . $request->locale, 'slug_' . $request->locale)->where('slug_' . $request->locale, $request->slug)->first();
        if (!$category) {
            return $this->sendError("Not found");
        }
        $post = Post::where('slug_' . $request->locale, $request->post)->where('category_id', $category->id)->where('published', 1)->first();
        if (!$post) {
            return $this->sendError("Not found");
        }
        $page = $this->getSeoPage('blog', $request->locale);
        $categories = Category::orderBy('name_' . $request->locale)->get();
        $posts = Post::where('published', 1)->where('id', '!=', $post->id)->with('category:id,name_' . $request->locale . ',slug_' . $request->locale)->inRandomOrder()->take(3)->get();
        $data = array(
            "page" => $page,
            "category" => $category,
            "posts" => $posts,
            'post' => $post,
            "categories" => $categories
        );
        return $this->sendResponse($data, '');
    }

    public function onlineAppointment(Request $request)
    {
        $project = Project::where('slug_' . $request->locale, $request->project)->where('form_videocall',true)->first();
        $page = $this->getSeoPage('online-appointment', $request->locale);
        $timeDay = MasterLeadTimeDay::get();
        $projects = Project::select('id', 'logo','logo_colour', 'name_es', 'name_en','code_ubigeo')->where('active', 1)->with('ubigeoRel')->get();
        $data = array(
            "page" => $page,
            "timeDay" => $timeDay,
            "project" => $project,
            //"medium" => $medium,
            "projects" => $projects
        );
        return $this->sendResponse($data, '');
    }

    public function contactUs(Request $request)
    {
        $page = $this->getSeoPage('contact-us', $request->locale);
        $medium = MasterLeadMedium::where('videocall', 0)->get();
        $projects = Project::select('id', 'logo','logo_colour', 'name_es', 'name_en')->where('active', 1)->get();
        $data = array(
            "page" => $page,
            "medium" => $medium,
            "projects" => $projects
        );
        return $this->sendResponse($data, '');
    }

    public function sellLand(Request $request)
    {
        $page = $this->getSeoPage('sell-your-land', $request->locale);
        $data = array(
            "page" => $page,
        );
        return $this->sendResponse($data, '');
    }

    public function projectsRead(Request $request)
    {
        $project = Project::where('slug_' . $request->locale, $request->slug)->where('active',true)->first();
        if (!$project) {
            return $this->sendError("");
        }
        $page = $this->getSeoPage('projects', $request->locale);
        $project = $project->load('statusRel')->load('ubigeoRel')->load('banksRel')->load('bondsRel')->load('virtualTourRel')
            ->load('advisorsRel')->load('featuresRel')->load('galleryRel:id,title_es,title_en,image as src')->load('galleryRel.typeGalleryRel')->load('tipologiesRel')->load('filesRel');
        if ($project->galleryRel) {
            $project["typeGallery"] = $project->galleryRel->pluck('typeGalleryRel.name', 'typeGalleryRel.id');
            foreach ($project->galleryRel as $key => $value) {
                $value["src"] = config('services.images_url').'/projects/gallery/'.$value["image"];
                $value["caption"] = $value["title_" . $request->locale];
            }
            $project["galleryFilter"] = $project->galleryRel->groupBy('typeGalleryRel.id');
        }
        $projects_related = [];
        if($project->projects_related){
            $projects_related = null;
            foreach (json_decode($project->projects_related) as $key => $value) {
                $projects_related[] = Project::select('id', 'project_status_id', 'logo','logo_colour', 'slug_' . $request->locale, 'images', 'code_ubigeo', 'name_' . $request->locale, 'rooms_' . $request->locale, 'footage_' . $request->locale, 'price_total', 'price_total_foreign')->where('id',$value)->with('ubigeoRel','statusRel')->get()->toArray();
            }
        }   
        else{
            /*$projects_related = Project::select('id', 'project_status_id', 'logo','logo_colour', 'slug_' . $request->locale, 'images', 'code_ubigeo', 'name_' . $request->locale, 'rooms_' . $request->locale, 'footage_' . $request->locale, 'price_total', 'price_total_foreign')
            ->where('id','!=',$project->id)->with('statusRel', 'ubigeoRel')->where('active', 1)->whereHas('ubigeoRel', function ($query) use ($project) {
                return $query->where('code_department', $project->ubigeoRel["code_department"]);
            })->inRandomOrder()->limit(4)->get();*/
            $projects_related = Project::select('id', 'project_status_id', 'logo','logo_colour', 'slug_' . $request->locale, 'images', 'code_ubigeo', 'name_' . $request->locale, 'rooms_' . $request->locale, 'footage_' . $request->locale, 'price_total', 'price_total_foreign')
            ->where('id','!=',$project->id)->with('statusRel', 'ubigeoRel')->where('active', 1)->inRandomOrder()->limit(4)->get();
        }
        $data = array(
            "page" => $page,
            "project" => $project,
            "projects" => $projects_related
            //"projects" => $projects
        );
        return $this->sendResponse($data, '');
    }

    public function workWithUs(Request $request)
    {
        $page = $this->getSeoPage('work-with-us', $request->locale);
        $data = array(
            "page" => $page,
        );
        return $this->sendResponse($data, '');
    }

    public function aboutUs(Request $request)
    {
        $page = $this->getSeoPage('about-us', $request->locale);
        $data = array(
            "page" => $page,
        );
        return $this->sendResponse($data, '');
    }

    public function testimonials(Request $request)
    {
        $page = $this->getSeoPage('testimonials', $request->locale);
        $testimonials = $this->paginateTestimonials($request);
        $data = array(
            "page" => $page,
            "testimonials" => $testimonials
        );
        return $this->sendResponse($data, '');
    }

    public function cami(Request $request)
    {
        $page = $this->getSeoPage('cami', $request->locale);
        $cami = Cami::orderBy('created_at', 'desc')->first();
        $elements = CamiElement::orderBy('index', 'asc')->get();
        $data = array(
            "page" => $page,
            "cami" => $cami,
            "cami_elements" => $elements
        );
        return $this->sendResponse($data, '');
    }
}
