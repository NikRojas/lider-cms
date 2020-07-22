<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Traits\ApiTrait;

use App\Award;
use App\Post;
use App\Department;
use App\Customer;
use App\MasterPage; 
use App\Category;
use App\CoolturaADN;
use App\Cooltura;
use App\Player;

class PageController extends Controller
{
    use ApiTrait;

    public function home(){
        $page = $this->getSeoPage(NULL); 
        $awards = Award::select('name','image','position','category')->orderBy('index')->take(3)->get(); 
        $posts = Post::select('title','slug','thumbnail','category_id')->where('published',1)->with('category:id,name,slug')->orderBy('created_at','desc')->take(6)->get();
        $customers = Customer::select('name','image')->where('status',1)->orderBy('index')->get();
        //$departments = Department::select('logo','banner','logo_white','title','excerpt')->where('main','!=',1)->get();
        $departments = $this->getDepartments();
        $main = Department::select('excerpt','title','logo_white','logo')->where('main',1)->first();
        $content = $this->getContentPage(NULL);
        $data = array(
            "page" => $page,
            "awards" => $awards,
            "posts" => $posts,
            "departments" => $departments,
            "customers" => $customers,
            "main" => $main,
            "content" => $content
        );
        return $this->sendResponse($data);
    }

    public function department(Request $request){
        $master_page = MasterPage::where('slug',$request->department)->first();
        if(!$master_page){
            return $this->sendError("Not found");
        }
        $page = $this->getSeoPage($request->department); 
        $department = Department::find($master_page->department_id);
        $content = $this->getContentPage($request->department);
        $success_stories = $this->getPaginateSuccessStories($request);
        $data = array(
            "page" => $page,
            "department" => $department,
            "content" => $content,
            "success_stories" => $success_stories
        );
        return $this->sendResponse($data);
    }

    public function blog(){
        $page = $this->getSeoPage('blog'); 
        $posts = Post::select('title','slug','thumbnail','image','excerpt','published','category_id','created_at')->where('published',1)->with('category:id,name,slug')->orderBy('created_at','desc')->paginate(6);
        $categories = Category::select('id','name','slug')->get();
        $content = $this->getContentPage( "blog");
        $count = 0;
        foreach ($categories as $key => $category) {
            $categories[$count++]["count"] = Post::where('category_id',$category->id)->count();
        }
        $data = array(
            "page" => $page,
            "posts" => $posts,
            "categories" => $categories,
            "content" => $content
        );
        return $this->sendResponse($data);
    }

    public function blogCategory(Request $request){
        $category = Category::select('id','name','slug')->where('slug',$request->category)->first();
        if(!$category){
            return $this->sendError("Not found");
        }
        $page = $this->getSeoPage('blog'); 
        $posts = Post::select('title','slug','thumbnail','image','excerpt','published','category_id','created_at')->where('published',1)->where('category_id',$category->id)->with('category:id,name,slug')->orderBy('created_at')->paginate(6);
        $categories = Category::select('id','name','slug')->get();
        $count = 0;
        $content = $this->getContentPage( "blog");
        foreach ($categories as $key => $item) {
            $categories[$count++]["count"] = Post::where('category_id',$item->id)->count();
        }
        $data = array(
            "page" => $page,
            "category" => $category,
            "posts" => $posts,
            "categories" => $categories,
            "content" => $content
        );
        return $this->sendResponse($data);
    }

    public function blogCategoryPost(Request $request){
        $category = Category::select('id','name','slug')->where('slug',$request->category)->first();
        if(!$category){
            return $this->sendError("Not found");
        }
        $post = Post::where('slug',$request->post)->where('category_id',$category->id)->where('published',1)->first();
        if(!$post){
            return $this->sendError("Not found");
        }
        $page = $this->getSeoPage('blog'); 
        $categories = Category::select('id','name','slug')->get();
        $count = 0;
        foreach ($categories as $key => $item) {
            $categories[$count++]["count"] = Post::where('category_id',$item->id)->count();
        }
        $content = $this->getContentPage( "blog");
        //$posts = 
        $posts = Post::where('published',1)->where('id','!=',$post->id)->with('category:id,name,slug')->inRandomOrder()->take(4)->get();
        $data = array(
            "page" => $page,
            "category" => $category,
            "posts" => $posts,
            'post' => $post,
            "categories" => $categories,
            "content" => $content
        );
        return $this->sendResponse($data);
    }

    public function privacityPolicy(){
        $page = $this->getSeoPage('politicas-privacidad'); 
        $content = $this->getContentPage('politicas-privacidad');
        $main = Department::select('excerpt','title','logo_white','logo')->where('main',1)->first();
        $data = array(
            "page" => $page,
            "content" => $content,
            "main" => $main
        );
        return $this->sendResponse($data);
    }

    public function contactUs(){
        $page = $this->getSeoPage('conversemos'); 
        $content = $this->getContentPage('conversemos');
        $main = Department::select('excerpt','title','logo_white','logo')->where('main',1)->first();
        $data = array(
            "page" => $page,
            "content" => $content,
            "main" => $main
        );
        return $this->sendResponse($data);
    }

    public function workWithUs(){
        $page = $this->getSeoPage('trabaja-con-nosotros'); 
        $content = $this->getContentPage('trabaja-con-nosotros');
        $main = Department::select('excerpt','title','logo_white','logo')->where('main',1)->first();
        $data = array(
            "page" => $page,
            "content" => $content,
            "main" => $main
        );
        return $this->sendResponse($data);
    }

    public function knowUs(){
        $page = $this->getSeoPage('conocenos'); 
        $content = $this->getContentPage('conocenos');
        $awards = Award::select('name','image','position','category')->orderBy('index')->take(3)->get(); 
        $players = Player::with('relDepartment:id,title')->orderBy('index','asc')->get(); 
        $adn = CoolturaADN::orderBy('index','asc')->get(); 
        $cooltura = Cooltura::orderBy('index','asc')->get(); 
        $main = Department::select('title','logo_white')->where('main',1)->first();
        $data = array(
            "page" => $page,
            "content" => $content,
            "awards" => $awards,
            "players" => $players,
            "adn" => $adn,
            "cooltura" => $cooltura,
            "main" => $main
        );
        return $this->sendResponse($data);
    }
}
