<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Post;
use App\Player;
use App\Customer;
use App\SuccessStory;
use App\Department;
use App\Lead;
use App\Applicant;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view ("pages.dashboard");    
    }

    public function getStatistics(){
        $posts = Post::where('published',true)->get()->count();
        $players = Player::get()->count();
        $customers = Customer::get()->count();
        $applicants = Applicant::get()->count();

        $departments = Department::where('main','!=',1)->get();
        $success_stories = NULL;
        $departments_label = [];
        $success_stories_count = [];
        foreach ($departments as $key => $value) {
            $departments_label[] =  $value["name"];
        }

        foreach ($departments as $key => $value) {
            $success_stories_count[] =  SuccessStory::where('department_id',$value["id"])->get()->count();
        }

        $success_stories = array(
            "labels" => $departments_label,
            "datasets" => [[
                "backgroundColor" => "#007bff",
                "data" => $success_stories_count
            ]]
        );


        $leads_count = NULL;
        foreach ($departments as $key => $value) {
            $leads_count[] =  Lead::where('department_id',$value["id"])->get()->count();
        }

        $leads = array(
            "labels" => $departments_label,
            "datasets" => [[
                "backgroundColor" => "#007bff",
                "data" => $leads_count,
                "fill" => false,
                "borderColor" => "#007bff",
            ]]
        );


        $data = array(
            "posts" => $posts,
            "players" => $players,
            "customers" => $customers,
            "applicants" => $applicants,
            "success_stories" => $success_stories,
            "leads" => $leads
        ); 
        return response()->json($data);  
    }
}
