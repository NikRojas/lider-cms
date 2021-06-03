<?php

namespace App\Http\Controllers\Cms;

use App\Advisor;
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
use App\Bank;
use App\Project;
use App\ProjectTypeDepartment;
use App\Http\Traits\CmsTrait;
use App\LeadVideocall;
use App\Order;
use App\ProjectQuotation;
use App\Suscriber;

class DashboardController extends Controller
{
    use CmsTrait;
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
        $advisors = Advisor::get()->count();
        $banks = Bank::get()->count();
        $projects = Project::with('departmentsRel','statusRel')->get();
        $suscribers = Suscriber::get()->count();
        $customers = Customer::whereMonth('created_at', Carbon::now()->month)->get()->count();
        $orders = Order::whereMonth('created_at', Carbon::now()->month)->get()->count();

        foreach ($projects as $key => $value) {
            $projects[$key]["departmentsActive"] = Department::where('project_id',$value->id)->where('available',true)->count();
        }

        $data = array(
            "posts" => $posts,
            "advisors" => $advisors,
            "banks" => $banks,
            "projects" => $projects,
            "suscribers" => $suscribers,
            "customers" => $customers,
            "orders" => $orders
        ); 
        return response()->json($data);  
    }

    public function getStatisticsByDate(Request $request){
        //$subscriptions = $this->getSubscriptions($request->date, $request->range);
        $leadsVideocall = $this->getLeadsVideocall($request->date, $request->range);
        $leadsQuotations = $this->getLeadsQuotations($request->date, $request->range);
        //$response = ["subscriptions" => $subscriptions, "leadsVideocall" => $leadsVideocall, "leadsQuotations"=> $leadsQuotations];
        $response = ["leadsVideocall" => $leadsVideocall, "leadsQuotations"=> $leadsQuotations];
        return response()->json($response, 200);
    }

    public function getLeadsVideocall($date, $range){
        $columns = [
            'date', //'Valor'
        ];
        $rangeStatisticsTemp = $this->getRangeStatistics($date, $range);
        $rangeStatistics = $rangeStatisticsTemp["rows"];
        $rangeType = $rangeStatisticsTemp["rangeType"];
        $projects = Project::get();
        foreach ($projects as $key => $value) {
            $columns[] = $value->name_es;
        }
            foreach ($rangeStatistics as $key => $value) {
                switch ($date) {
                    case 'today':
                        foreach ($projects as $key2 => $value2) {
                            $temp = LeadVideocall::where('project_id',$value2->id)->whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]])->get()->count();
                            $rangeStatistics[$key][$value2->name_es] = $temp ?? 0;
                        }
                        break;
                    case 'range':
                        foreach ($projects as $key2 => $value2) {
                            if ($rangeType == "day") {
                                $temp = LeadVideocall::where('project_id',$value2->id)->whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]]);
                            } else if ($rangeType == "month") {
                                $temp = LeadVideocall::where('project_id',$value2->id)->whereMonth('created_at', $value["dateValue"])->whereYear('created_at', $value["dateYear"]);
                            }
                            $temp = $temp->get()->count();
                            $rangeStatistics[$key][$value2->name_es] = $temp ?? 0;
                        }
                        break;
                    case '7':
                        foreach ($projects as $key2 => $value2) {
                            $temp = LeadVideocall::where('project_id',$value2->id)->whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]])->get()->count();
                            $rangeStatistics[$key][$value2->name_es] = $temp ?? 0;
                        }
                        break;
                    case '30':
                        foreach ($projects as $key2 => $value2) {
                            $temp = LeadVideocall::where('project_id',$value2->id)->whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]])->get()->count();
                            $rangeStatistics[$key][$value2->name_es] = $temp ?? 0;
                        }
                        break;

                    case '90':
                        foreach ($projects as $key2 => $value2) {
                            $temp = LeadVideocall::where('project_id',$value2->id)->whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]])->get()->count();
                            $rangeStatistics[$key][$value2->name_es] = $temp ?? 0;
                        }
                        break;

                    case 'this_year':
                        foreach ($projects as $key2 => $value2) {
                            $temp = LeadVideocall::where('project_id',$value2->id)->whereMonth('created_at', $value["dateValue"])->whereYear('created_at', $value["dateYear"])->get()->count();
                            $rangeStatistics[$key][$value2->name_es] = $temp ?? 0;
                        }
                        break;
                }
            }
        $chartData = ["columns" => $columns, "rows" => $rangeStatistics];
        return $chartData;
    }

    public function getLeadsQuotations($date, $range){
        $columns = [
            'date', //'Valor'
        ];
        $rangeStatisticsTemp = $this->getRangeStatistics($date, $range);
        $rangeStatistics = $rangeStatisticsTemp["rows"];
        $rangeType = $rangeStatisticsTemp["rangeType"];
        $projects = Project::get();
        foreach ($projects as $key => $value) {
            $columns[] = $value->name_es;
        }
            foreach ($rangeStatistics as $key => $value) {
                switch ($date) {
                    case 'today':
                        foreach ($projects as $key2 => $value2) {
                            $temp = ProjectQuotation::where('project_id',$value2->id)->whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]])->get()->count();
                            $rangeStatistics[$key][$value2->name_es] = $temp ?? 0;
                        }
                        break;
                    case 'range':
                        foreach ($projects as $key2 => $value2) {
                            if ($rangeType == "day") {
                                $temp = ProjectQuotation::where('project_id',$value2->id)->whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]]);
                            } else if ($rangeType == "month") {
                                $temp = ProjectQuotation::where('project_id',$value2->id)->whereMonth('created_at', $value["dateValue"])->whereYear('created_at', $value["dateYear"]);
                            }
                            $temp = $temp->get()->count();
                            $rangeStatistics[$key][$value2->name_es] = $temp ?? 0;
                        }
                        break;
                    case '7':
                        foreach ($projects as $key2 => $value2) {
                            $temp = ProjectQuotation::where('project_id',$value2->id)->whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]])->get()->count();
                            $rangeStatistics[$key][$value2->name_es] = $temp ?? 0;
                        }
                        break;
                    case '30':
                        foreach ($projects as $key2 => $value2) {
                            $temp = ProjectQuotation::where('project_id',$value2->id)->whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]])->get()->count();
                            $rangeStatistics[$key][$value2->name_es] = $temp ?? 0;
                        }
                        break;

                    case '90':
                        foreach ($projects as $key2 => $value2) {
                            $temp = ProjectQuotation::where('project_id',$value2->id)->whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]])->get()->count();
                            $rangeStatistics[$key][$value2->name_es] = $temp ?? 0;
                        }
                        break;

                    case 'this_year':
                        foreach ($projects as $key2 => $value2) {
                            $temp = ProjectQuotation::where('project_id',$value2->id)->whereMonth('created_at', $value["dateValue"])->whereYear('created_at', $value["dateYear"])->get()->count();
                            $rangeStatistics[$key][$value2->name_es] = $temp ?? 0;
                        }
                        break;
                }
            }
        $chartData = ["columns" => $columns, "rows" => $rangeStatistics];
        return $chartData;

    }

    public function getSubscriptions($date, $range)
    {
        $columns = [
            'date', 'Valor'
        ];
        $rangeStatisticsTemp = $this->getRangeStatistics($date, $range);
        $rangeStatistics = $rangeStatisticsTemp["rows"];
        $rangeType = $rangeStatisticsTemp["rangeType"];
        foreach ($rangeStatistics as $key => $value) {
            switch ($date) {
                case 'today':
                    $temp = Suscriber::whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]])->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;
                case 'range':
                    if ($rangeType == "day") {
                        $temp = Suscriber::whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]]);
                    } else if ($rangeType == "month") {
                        $temp = Suscriber::whereMonth('created_at', $value["dateValue"])->whereYear('created_at', $value["dateYear"]);
                    }
                    $temp = $temp->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;
                case '7':
                    $temp = Suscriber::whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]])->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;
                case '30':
                    $temp = Suscriber::whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]])->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;

                case '90':
                    $temp = Suscriber::whereBetween('created_at', [$value["dateValue"], $value["dateValue2"]])->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;

                case 'this_year':
                    $temp = Suscriber::whereMonth('created_at', $value["dateValue"])->whereYear('created_at', $value["dateYear"])->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;
            }
        }
        $chartData = ["columns" => $columns, "rows" => $rangeStatistics];
        return $chartData;
    }

}
