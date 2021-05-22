<?php

namespace App\Http\Controllers\Api\Reserve;

use App\Department;
use App\Http\Controllers\Api\BaseController;
use App\MasterDocumentType;
use App\Project;
use App\ProjectParentTypeDepartment;
use App\ProjectStatus;
use App\ProjectTypeDepartment;
use App\ProjectView;
use App\Ubigeo;
use Carbon\Carbon;
use Illuminate\Http\Request;

class IndexController extends BaseController
{
    public function index(Request $request)
    {
        $page = $this->getSeoPage('reserve-your-department', $request->locale);
        $departments = $this->paginateDepartments($request);
        $content = $this->getContentPage('reserve-your-department');
        $filters = $this->getFilters();
        $data = array(
            "page" => $page,
            "departments" => $departments,
            "content" => $content,
            "filters" => $filters
        );
        return $this->sendResponse($data, '');
    }

    public function paginateDepartments(Request $request)
    {
        $ubigeo = $statuses = $rooms = $floors = $projects = $typeDepartments = $range = $views = [];
        $sort = $request->sort_by;
        $data = Department::with('viewRel', 'tipologyRel.parentTypeDepartmentRel', 'projectRel:id,logo_colour,price_separation,name_es,name_en,code_ubigeo,project_status_id', 'projectRel.ubigeoRel', 'projectRel.statusRel')->where('available', 1);
        //Tablas Relacionadas
        if ($request->statuses) {
            $statuses = $request->statuses;
            $data = $data->whereHas('projectRel', function ($query) use ($statuses){
                $query->whereIn('project_status_id',$statuses);
            });
        }
        if ($request->ubigeo) {
            $ubigeo = $request->ubigeo;
            $departments = $districts = [];
            foreach ($ubigeo as $key => $value) {
                $isDepartment = strlen($value);
                if($isDepartment == 2){
                    $departments[] = $value;
                }
                else{
                    $districts[] = $value;
                }
            }
            if(count($departments) > 0 && count($districts)== 0){
                $data = $data->whereHas('projectRel', function ($query) use ($departments){
                    $query->whereHas('ubigeoRel', function ($query2) use ($departments) {
                        return $query2->whereIn('code_department', $departments);
                    });
                });
            }
            if(count($districts) > 0  && count($departments)== 0){
                $data = $data->whereHas('projectRel', function ($query) use ($districts){
                    $query->whereHas('ubigeoRel', function ($query2) use ($districts) {
                        return $query2->whereIn('code_ubigeo', $districts);
                    });
                });
            }
            if(count($districts) > 0  && count($departments) > 0){
                $data = $data->whereHas('projectRel', function ($query) use ($departments, $districts){
                    $query->whereHas('ubigeoRel', function ($query2) use ($departments, $districts) {
                        return $query2->whereIn('code_ubigeo', $districts)->orWhereIn('code_department', $departments);
                    });
                });
            }
        }
        if ($request->type) {
            $typeDepartments = $request->type;
            $data = $data->whereHas('tipologyRel', function ($query) use ($typeDepartments) {
                $query->whereIn('parent_type_department_id',$typeDepartments);
            });
        }

        if ($request->rooms) {
            $rooms = $request->rooms;
            $data = $data->whereHas('tipologyRel', function ($query) use ($rooms) {
                $query->whereIn('room',$rooms);
                /*$query->whereHas('parentTypeDepartmentRel', function ($query2) use ($rooms){
                    $query2->whereIn('room',$rooms);
                });*/
            });
        }
        //Misma tabla
        if ($request->floors) {
            $floors = $request->floors;
            $data = $data->whereIn('floor', $floors);
        }
        if ($request->projects) {
            $projects = $request->projects;
            $data = $data->whereIn('project_id', $projects);
        }
        if ($request->views) {
            $views = $request->views;
            $data = $data->whereIn('view_id', $views);
        }
        $range =  $request->range;
        if ($range && $range[0]) {
            $data = $data->where('price', '>=', $range[0]);
        }
        if ($range && isset($range[1])) {
            $data = $data->where('price', '<=', ($range[1] + 1));
        }
        //$views =  $request->views;
        switch ($sort) {
            case 'low-high':
                $data = $data->orderBy('price','asc');
                break;

            case 'high-low':
                $data = $data->orderBy('price', 'desc');
                break;

            default:
                $data = $data->orderBy('created_at');
                break;
        }
        $data = $data->paginate(8);
        return $data;
    }

    public function getFilters()
    {
        $projects = $this->getProjects();
        $departments = $this->getDepartmentsEstates();
        $status = $this->getStatusEstates();
        $rooms = $this->getRoomsEstates();
        $typeDepartments = $this->getTypeEstates();
        $floors = $this->getFloorsEstates();
        $views = $this->getViewsEstates();
        $prices = $this->getPricesEstates();
        $data = [
            "departments" => $departments,
            "status" => $status,
            "rooms" => $rooms,
            "typeDepartments" => $typeDepartments,
            "projects" => $projects,
            "floors" => $floors,
            "views" => $views,
            "prices" => $prices,
        ];
        return $data;
    }

    public function getProjects()
    {
        $data = Project::select('id', 'name_es', 'name_en', 'slug_es', 'slug_en')->with('departmentsRel:id,sap_code,available,project_id')->whereHas('departmentsRel', function ($query) {
            $query->where('available', 1);
        })->where('active', 1)->orderBy('index')->get();
        return $data;
    }

    public function getStatusEstates()
    {
        $data = ProjectStatus::select('id', 'name_es', 'name_en', 'slug_es', 'slug_en')->whereHas('projectsRel', function ($query) {
            $query->whereHas('departmentsRel', function ($query2) {
                $query2->where('available', 1);
            });
        })->get();
        return $data;
    }

    public function getRoomsEstates()
    {
        $data = ProjectTypeDepartment::whereHas('departmentsRel', function ($query2) {
            $query2->where('available', 1);
        })->get();
        $data = $data->pluck('room')->unique()->flatten()->all();
        return $data;
    }

    public function getTypeEstates()
    {
        $data = ProjectParentTypeDepartment::select('id', 'name', 'slug')->whereHas('tipologyRel', function ($query) {
            $query->whereHas('departmentsRel', function ($query2) {
                $query2->where('available', 1);
            });
        })->get();
        return $data;
    }

    public function getFloorsEstates()
    {
        $data = Department::select('id', 'sap_code', 'floor')->where('available',1)->orderBy('floor')->get();
        $data = $data->pluck('floor')->unique()->flatten()->all();
        return $data;
    }

    public function getViewsEstates()
    {
        $data = ProjectView::with('departmentsRel:id,sap_code,available,view_id')->whereHas('departmentsRel', function ($query) {
            $query->where('available', 1);
        })->orderBy('name')->get();
        return $data;
    }

    public function getPricesEstates()
    {
        $min = Department::where('available', true)->min('price');
        $max = Department::where('available', true)->max('price');
        $min = floatval($min);
        $max = floatval($max);
        if (floor($min) != $min) {
            $min = floor($min);
        }
        if (floor($max) != $max) {
            $max = floor($max);
        }
        $data = [
            "min" => $min,
            "max" => $max,
            "min_format" => 'S/ ' . number_format($min, 0, '.', ','),
            "max_format" => 'S/ ' . number_format($max, 0, '.', ',')
        ];
        return $data;
    }

    public function getDepartmentsEstates()
    {
        $departments = Ubigeo::select('code_ubigeo', 'code_department', 'department', 'code_district')->distinct('code_department')
            ->whereHas('projectsRel', function ($query) {
                $query->where('active', 1)->whereHas('departmentsRel', function ($query2) {
                    $query2->where('available', 1);
                });
            })
            ->orderBy('code_ubigeo', 'DESC')->groupBy('code_department')->get();
        $districtsTemp = null;
        foreach ($departments as $key => $value) {
            $districtsTemp[] = $this->getDistricts($value->code_department);
        }
        $districtsTemp2 = collect($districtsTemp);
        $districtsTemp3 = $districtsTemp2->flatten();
        $districtsTemp3 = $districtsTemp3->sortBy('district');
        $districtsTemp3 = $districtsTemp3->values()->all();
        $districts = collect($districtsTemp3);
        $data = $departments->concat($districts)->sortByDesc('code_department')->values()->all();
        return $data;
    }

    public function getDistricts($code)
    {
        $data = Ubigeo::select('code_district', 'district', 'code_ubigeo', 'code_department')->distinct()->where('code_department', $code)
            ->whereHas('projectsRel', function ($query) {
                $query->where('active', 1)->whereHas('departmentsRel', function ($query2) {
                    $query2->where('available', 1);
                });
            })
            ->where('code_district', '!=', '00')->orderBy('district')->get();
        return $data;
    }

    public function detail(Request $request, $code){
        $department = Department::where('slug',$code)->with('viewRel', 'tipologyRel.parentTypeDepartmentRel', 'projectRel:id,logo_colour,price_separation,name_es,name_en,code_ubigeo,project_status_id', 'projectRel.ubigeoRel', 'projectRel.statusRel')->first();
        if (!$department) {
            return $this->sendError("");
        }
        $page = $this->getSeoPage('reserve-your-department', $request->locale);
        $content = $this->getContentPage('reserve-your-department');
        $typeDocuments = MasterDocumentType::select('id','name','description')->get();
        $terms = $this->getContentPage('terms-conditions');
        $privacy = $this->getContentPage('privacy-policies');
        $data = array(
            "page" => $page,
            "department" => $department,
            "content" => $content,
            "typeDocuments" => $typeDocuments,
            "terms" => $terms,
            "privacy" => $privacy
        );
        return $this->sendResponse($data, '');
    }

    public function summary(Request $request, $code)
    {
        $department = Department::where('slug',$code)->where('available',1)->with('viewRel', 'tipologyRel.parentTypeDepartmentRel', 'projectRel:id,logo_colour,price_separation,name_es,name_en,code_ubigeo,project_status_id', 'projectRel.ubigeoRel', 'projectRel.statusRel')->first();
        if (!$department) {
            return $this->sendError("");
        }
        $page = $this->getSeoPage('reserve-your-department', $request->locale);
        $content = $this->getContentPage('reserve-your-department');
        $data = array(
            "page" => $page,
            "content" => $content,
            "department" => $department
        );
        return $this->sendResponse($data, '');
    }
}
