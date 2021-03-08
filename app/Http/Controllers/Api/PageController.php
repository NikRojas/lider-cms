<?php

namespace App\Http\Controllers\Api;

use App\AboutCustomerSupport;
use App\AboutProjectFinished;
use App\AboutText;
use App\AboutWarrantyElement;
use App\Cami;
use App\CamiElement;
use App\Category;
use App\FinancingOption;
use App\Http\Controllers\Api\BaseController;
use App\MasterLeadMedium;
use App\MasterLeadTimeDay;
use App\Post;
use App\Project;
use App\ProjectBanner;
use App\ProjectQuotation;
use App\ProjectTypeDepartment;
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
        $content = $this->getContentPage(NULL);
        $data = array(
            "filters" => $filters,
            "page" => $page,
            "slider" => $slider,
            "projects" => $projects,
            "posts" => $posts,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

    public function projects(Request $request)
    {
        $page = $this->getSeoPage('projects', $request->locale);
        $projects = $this->paginateProjects($request);
        $content = $this->getContentPage('projects');
        $filters = $this->getFilters();
        $data = array(
            "page" => $page,
            "projects" => $projects,
            "content" => $content,
            "filters" => $filters
        );
        return $this->sendResponse($data, '');
    }

    public function blog(Request $request)
    {
        $page = $this->getSeoPage('blog', $request->locale);
        $categories = Category::has('post')->orderBy('name_' . $request->locale)->get();
        $posts = $this->paginateBlog($request->q, $request);
        $content = $this->getContentPage('blog');
        $data = array(
            "page" => $page,
            "categories" => $categories,
            "posts" => $posts,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

    public function blogCategory(Request $request)
    {
        $category = Category::select('id', 'name_' . $request->locale, 'slug_es', 'slug_en')->where('slug_' . $request->locale, $request->slug)->first();
        if (!$category) {
            return $this->sendError("");
        }
        $posts = $this->paginateBlog($request->q, $request,$category->id);
        $page = $this->getSeoPage('blog', $request->locale);
        $categories = Category::has('post')->orderBy('name_' . $request->locale)->get();
        $content = $this->getContentPage('blog');
        $data = array(
            "page" => $page,
            "category" => $category,
            "categories" => $categories,
            "posts" => $posts,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

    public function blogCategoryPost(Request $request)
    {
        $category = Category::select('id', 'name_' . $request->locale, 'slug_es', 'slug_en')->where('slug_' . $request->locale, $request->slug)->first();
        if (!$category) {
            return $this->sendError("Not found");
        }
        $post = Post::where('slug_' . $request->locale, $request->post)->where('category_id', $category->id)->where('published', 1)->first();
        if (!$post) {
            return $this->sendError("Not found");
        }
        $page = $this->getSeoPage('blog', $request->locale);
        $categories = Category::has('post')->orderBy('name_' . $request->locale)->get();
        $posts = Post::where('published', 1)->where('id', '!=', $post->id)->with('category:id,name_' . $request->locale . ',slug_' . $request->locale)->inRandomOrder()->take(3)->get();
        $content = $this->getContentPage('blog');
        $data = array(
            "page" => $page,
            "category" => $category,
            "posts" => $posts,
            'post' => $post,
            "categories" => $categories,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

    public function onlineAppointment(Request $request)
    {
        $project = Project::where('slug_' . $request->locale, $request->project)->where('form_videocall',true)->first();
        $page = $this->getSeoPage('online-appointment', $request->locale);
        $timeDay = MasterLeadTimeDay::get();
        $projects = Project::select('id', 'logo','logo_colour', 'name_es', 'name_en','code_ubigeo')->where('active', 1)
        ->where('form_videocall',true)->with('ubigeoRel')->get();
        $content = $this->getContentPage('online-appointment');
        $terms = $this->getContentPage('terms-conditions');
        $privacy = $this->getContentPage('privacy-policies');
        $data = array(
            "page" => $page,
            "timeDay" => $timeDay,
            "project" => $project,
            "projects" => $projects,
            "content" => $content,
            'privacy' => $privacy,
            'terms' => $terms
        );
        return $this->sendResponse($data, '');
    }

    public function contactUs(Request $request)
    {
        $page = $this->getSeoPage('contact-us', $request->locale);
        $medium = MasterLeadMedium::where('videocall', 0)->get();
        $projects = Project::select('id', 'logo','logo_colour', 'name_es', 'name_en')->where('active', 1)->get();
        $content = $this->getContentPage('contact-us');
        $terms = $this->getContentPage('terms-conditions');
        $privacy = $this->getContentPage('privacy-policies');
        $data = array(
            "page" => $page,
            "medium" => $medium,
            "projects" => $projects,
            "content" => $content,
            'privacy' => $privacy,
            'terms' => $terms
        );
        return $this->sendResponse($data, '');
    }

    public function sellLand(Request $request)
    {
        $page = $this->getSeoPage('sell-your-land', $request->locale);
        $content = $this->getContentPage('sell-your-land');
        $data = array(
            "page" => $page,
            "content" => $content
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
            ->load('advisorsRel')->load('featuresRel')->load('galleryRel:id,title_es,title_en,image as src')->load('galleryRel.typeGalleryRel')
            //->load('tipologiesRel')
            ->load('filesRel');
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
            $projects_related = Project::select('id', 'project_status_id', 'logo','logo_colour', 'slug_' . $request->locale, 'images', 'code_ubigeo', 'name_' . $request->locale, 'rooms_' . $request->locale, 'footage_' . $request->locale, 'price_total', 'price_total_foreign')
            ->where('id','!=',$project->id)->with('statusRel', 'ubigeoRel')->where('active', 1)->inRandomOrder()->limit(4)->get();
        }
        $tipologies = ProjectTypeDepartment::where('project_id',$project->id)->where('available',true)->get();
        $project["tipologies_rel"] = $tipologies;
        $tipologiesCount = $tipologies->count();
        $banners = ProjectBanner::where('project_id', $project->id)->orderBy('index', 'asc')->get();
        $project["banners"] = $banners;
        $terms = $this->getContentPage('terms-conditions');
        $privacy = $this->getContentPage('privacy-policies');
        $data = array(
            "page" => $page,
            "project" => $project,
            "projects" => $projects_related,
            "tipologies_count" => $tipologiesCount,
            'privacy' => $privacy,
            'terms' => $terms
        );
        return $this->sendResponse($data, '');
    }

    public function workWithUs(Request $request)
    {
        $page = $this->getSeoPage('work-with-us', $request->locale);
        $content = $this->getContentPage('work-with-us');
        $data = array(
            "page" => $page,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

    public function termsConditions(Request $request)
    {
        $page = $this->getSeoPage('terms-conditions', $request->locale);
        $content = $this->getContentPage('terms-conditions');
        $data = array(
            "page" => $page,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

    public function privacityPolicy(Request $request)
    {
        $page = $this->getSeoPage('privacy-policies', $request->locale);
        $content = $this->getContentPage('privacy-policies');
        $data = array(
            "page" => $page,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

    public function aboutUs(Request $request)
    {
        $page = $this->getSeoPage('about-us', $request->locale);
        $first_1 = AboutText::where('type','first-block-1')->first();
        $first_2 = AboutText::where('type','first-block-2')->first();
        $first_3 = AboutText::where('type','first-block-3')->first();
        $first_4 = AboutText::where('type','first-block-4')->first();
        $first_5 = AboutText::where('type','first-block-5')->first();
        $first_6 = AboutText::where('type','first-block-6')->first();
        $first_7 = AboutText::where('type','first-block-7')->first();
        $first_8 = AboutText::where('type','first-block-8')->first();
        $second = AboutText::where('type','compromise')->first();
        $third_1 = AboutText::where('type','project-finished')->orderBy('created_at', 'desc')->first();
        $third_2 = AboutProjectFinished::where('active',true)->orderBy('index')->get();
        $fourth_1 = AboutText::where('type','warranty')->orderBy('created_at', 'desc')->first();
        $fourth_2 = AboutWarrantyElement::orderBy('index')->get();
        $fifth_1 = AboutText::where('type','customer-support')->orderBy('created_at', 'desc')->first();
        $fifth_2 = AboutCustomerSupport::orderBy('index')->get();
        $content = $this->getContentPage('about-us');
        $temp = null;
        $lastDiv = 0;
        $max = 2;
        $tempTwoItem = [];
        if(count($third_2) > 0){
            foreach ($third_2 as $key => $value) {
                $div = $key / 2;
                if($key == 0){
                    $lastDiv = $div;
                    $temp[][$key] = $value;
                }
                else{
                    if(($lastDiv+1.5 == $div)){
                        $temp[] = array($value);
                        $lastDiv = $div;
                    }
                    else{
                        $tempTwoItem[] = $value;
                        if(count($tempTwoItem) == $max){
                            $temp[] = $tempTwoItem;
                            $tempTwoItem = [];
                        }
                        
                    }
                }
                if ($key == count($third_2) - 1) {
                    if(count($tempTwoItem) == 1){
                        $temp[] = $tempTwoItem;
                    }
                }
            }
        }
        $data = array(
            "first" => [
                "1" => $first_1,
                "2" => $first_2,
                "3" => $first_3,
                "4" => $first_4,
                "5" => $first_5,
                "6" => $first_6,
                "7" => $first_7,
                "8" => $first_8
            ],
            "second" => $second,
            "third" => [
                "1" => $third_1,
                "2" => $third_2 ? $temp : $third_2
            ],
            "fourth" => [
                "1" => $fourth_1,
                "2" => $fourth_2
            ],
            "fifth" => [
                "1" => $fifth_1,
                "2" => $fifth_2
            ],
            "page" => $page,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

    public function testimonials(Request $request)
    {
        $page = $this->getSeoPage('testimonials', $request->locale);
        $testimonials = $this->paginateTestimonials($request);
        $content = $this->getContentPage('testimonials');
        $data = array(
            "page" => $page,
            "testimonials" => $testimonials,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

    public function cami(Request $request)
    {
        $page = $this->getSeoPage('cami', $request->locale);
        $content = $this->getContentPage('cami');
        $cami = Cami::orderBy('created_at', 'desc')->first();
        $elements = CamiElement::orderBy('index', 'asc')->get();
        $data = array(
            "page" => $page,
            "cami" => $cami,
            "cami_elements" => $elements,
            "content" => $content
        );
        return $this->sendResponse($data, '');
    }

    public function quotation(Request $request){
        $lead = ProjectQuotation::where('identifier_str',$request->id)->first();
        if (!$lead) {
            return $this->sendError("");
        }
        $lead = $lead->load('projectRel.statusRel','advisorRel','projectTypeDepartmentRel');
        $financingOptions = FinancingOption::where('active',true)->orderBy('index','asc')->get();
        $data = array(
            "lead" => $lead,
            "financingOptions" => $financingOptions
        );
        return $this->sendResponse($data, '');
    }
}
