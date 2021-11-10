<?php

namespace App\Http\Controllers\Api\Reserve;

use App\Department;
use App\Helpers\CollectionHelper;
use App\Http\Controllers\Api\BaseController;
use App\MasterDocumentType;
use App\Project;
use App\ProjectParentTypeDepartment;
use App\ProjectStatus;
use App\ProjectTypeDepartment;
use App\ProjectView;
use App\RealStatePackage;
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

    public function getDepartmentsWithCombos(){
        $departments = Department::selectRaw('id,slug,description,available,price,price_foreign,area,floor,view_id,type_department_id,project_id,image,sap_code')->with('viewRel:id,name', 'tipologyRel:id,name,room,parent_type_department_id,image','tipologyRel.parentTypeDepartmentRel:id,room,name', 'projectRel:id,logo_colour,price_separation,name_es,name_en,code_ubigeo,project_status_id,master_currency_id,reservation_in_package,package_description', 'projectRel.ubigeoRel', 'projectRel.statusRel:id,name_es,name_en','projectRel.currencyRel:id,name,abbreviation,symbol')
        ->where('available', 1)
        ->doesnthave('packageRel')
        ->whereIn('sector_id', [1,4])->get();

        $combos = RealStatePackage::where('stock', 1)->where('status', 1)->
        with('departmentsRel:id,slug,description,available,price,price_foreign,area,floor,view_id,type_department_id,project_id,image,sap_code','departmentsRel.viewRel:id,name','departmentsRel.tipologyRel:id,name,room,parent_type_department_id,image','departmentsRel.tipologyRel.parentTypeDepartmentRel:id,room,name','projectRel:id,logo_colour,price_separation,name_es,name_en,code_ubigeo,project_status_id,master_currency_id,reservation_in_package,package_description', 'projectRel.ubigeoRel', 'projectRel.statusRel:id,name_es,name_en','projectRel.currencyRel:id,name,abbreviation,symbol')
        ->get();

        $combosArray = [];
        if(count($combos)){
            foreach ($combos as $key => $value) {
                $department = $value->departmentsRel()->where('sector_id',1)->orWhere('sector_id',4)->first();  
                $priceFormat = $value->departmentsRel->pluck('price');
                $sumPrice = $priceFormat->sum();
                $priceFormat = $value->projectRel->currencyRel->symbol.' '.number_format($sumPrice, 0, '.', ',');
                $priceFormatForeign = $sumPriceForeign = NULL;
                if($value->projectRel->master_currency_id == 2){
                    $priceFormatForeign = $value->departmentsRel->pluck('price_foreign');
                    $sumPriceForeign = $priceFormatForeign->sum();
                    $priceFormatForeign = '$ '.number_format($sumPriceForeign, 0, '.', ',');
                }
                $areaTotal = $value->departmentsRel->pluck('area')->sum();
                $areaTotalFormat = number_format($areaTotal,2);

                $package = $value;
                $package->setAttribute("departmentsRel",$value->departmentsRel);
                $combosArray[] = [
                    "id" => $department->id,
                    "slug" => $department->slug,
                    "description" => $department->description,
                    "sap_code" => $department->sap_code,
                    "available" => $department->available,
                    "price" => $sumPrice,
                    "price_format" => $priceFormat,
                    "price_foreign" => $sumPriceForeign,
                    "price_foreign_format" => $priceFormatForeign,
                    "area" => $areaTotal,
                    "area_format" => $areaTotalFormat,
                    "floor" => $department->floor,
                    "view_id" => $department->view_id,
                    "type_department_id" => $department->type_department_id,
                    "project_id" => $value->project_id,
                    "image" => $department->image,
                    "sector" => $department->sector_id,
                    "view_rel" => $department->viewRel,
                    "tipologyRel" => $department->tipologyRel,
                    "tipology_rel" => [
                        "id" => $department->tipologyRel->id,
                        "name" => $department->tipologyRel->name,
                        "image" => $department->tipologyRel->image,
                        "room" => $department->tipologyRel->room,
                        "parent_type_department_id" => $department->tipologyRel->parent_type_department_id,
                        "parent_type_department_rel" => $department->tipologyRel->parentTypeDepartmentRel
                    ],
                    "project_rel" => $value->projectRel,
                    "projectRel" => $value->projectRel,
                    "mainDepartment" => $department,
                    "package_rel" => $package,
                    "package_id" => $value->id,
                    "created_at" => $value->created_at
                ];
            }
            $departments = $departments->concat(collect($combosArray));
        }
        return $departments->sortBy('description');
    }

    public function paginateDepartments(Request $request)
    {
        $ubigeo = $statuses = $rooms = $floors = $projects = $typeDepartments = $range = $views = [];
        $sort = $request->sort_by;
        $data = $this->getDepartmentsWithCombos();
        //Tablas Relacionadas
        if ($request->statuses) {
            $statuses = $request->statuses;
            $data = $data->filter(function($dep) use ( $statuses ){
                return in_array($dep["projectRel"]["project_status_id"], $statuses);
            });
        }

        if($request->ubigeo){
            $ubigeoFormat = $this->getUbigeoFormat($request->ubigeo);
            $ubigeoDistricts = $ubigeoFormat["districts"];
            $data = $data->whereIn('projectRel.ubigeoRel.code_ubigeo',$ubigeoDistricts);
        }
        if ($request->type) {
            $typeDepartments = $request->type;
            $data = $data->filter(function($dep) use ( $typeDepartments ){
                return in_array($dep["tipologyRel"]["parent_type_department_id"], $typeDepartments);
            });
        }

        if ($request->rooms) {
            $rooms = $request->rooms;
            $data = $data->filter(function($dep) use ( $rooms ){
                return in_array($dep["tipologyRel"]["room"], $rooms);
            });
        }
        //Misma tabla
        if ($request->floors) {
            $floors = $request->floors;
            $data = $data->filter(function($dep) use ( $floors ){
                return in_array($dep["floor"], $floors);
            });
        }
        if ($request->projects) {
            $projects = $request->projects;
            $data = $data->filter(function($dep) use ( $projects ){
                return in_array($dep["project_id"], $projects);
            });
        }
        if ($request->views) {
            $views = $request->views;
            $data = $data->filter(function($dep) use ( $views ){
                return in_array($dep["view_id"], $views);
            });
        }
        $range =  $request->range;
        if ($range && $range[0]) {
            $data = $data->filter(function($dep) use ( $range ){
                return $dep['price'] >= $range[0];
            });
        }
        if ($range && isset($range[1])) {
            $data = $data->filter(function($dep) use ( $range ){
                return $dep['price'] <= ($range[1] + 1);
            });
        }
        $rangeArea =  $request->range_area;
        if ($rangeArea && $rangeArea[0]) {
            $data = $data->filter(function($dep) use ( $rangeArea ){
                return $dep["area"] >= $rangeArea[0];
            });
        }
        if ($rangeArea && isset($rangeArea[1])) {
            $data = $data->filter(function($dep) use ( $rangeArea ){
                return $dep["area"] <= $rangeArea[1];
            });
        }
        switch ($sort) {
            case 'low-high':
                $data = $data->sortBy('price');
                break;

            case 'high-low':
                $data = $data->sortByDesc('price');
                break;

            default:
                $data = $data->sortBy('description');
                break;
        }
        $data = CollectionHelper::paginate($data, 12);
        return $data;
    }

    public function getFilters()
    {
        $projects = $this->getProjects();
        $departments = $this->getUbigeoEstates();
        $status = $this->getStatusEstates();
        $rooms = $this->getRoomsEstates();
        $typeDepartments = $this->getTypeEstates();
        $floors = $this->getFloorsEstates();
        $views = $this->getViewsEstates();
        $prices = $this->getPricesEstates();
        $areas = $this->getAreas();
        $data = [
            "departments" => $departments,
            "status" => $status,
            "rooms" => $rooms,
            "typeDepartments" => $typeDepartments,
            "projects" => $projects,
            "floors" => $floors,
            "views" => $views,
            "prices" => $prices,
            "areas" => $areas
        ];
        return $data;
    }

    public function getProjects($statuses = false, $rooms = false, $floors = false, $views = false, $types = false, $ubigeo = false)
    {
        $data = $this->getDepartmentsWithCombos();
        if ($views) {
            $data = $data->whereIn('view_id', $views);
        }
        if ($rooms) {
            $data = $data->whereIn('tipologyRel.room', $rooms);
        }
        if ($types) {
            $data = $data->whereIn('tipologyRel.parent_type_department_id', $types);
        }
        if ($floors) {
            $data = $data->whereIn('floor', $floors);
        }
        if ($statuses) {
            $data = $data->whereIn('projectRel.project_status_id', $statuses);
        }
        if($ubigeo){
            $ubigeoFormat = $this->getUbigeoFormat($ubigeo);
            $ubigeoDistricts = $ubigeoFormat["districts"];
            $data = $data->whereIn('projectRel.ubigeoRel.code_ubigeo',$ubigeoDistricts);
        }
        $data = $data->pluck('projectRel')->unique()->flatten()->sortBy('name_es')->values()->all();
        return $data;
    }

    public function getStatusEstates($projects = false, $rooms = false, $floors = false, $views = false, $types = false, $ubigeo = false)
    {
        $data = $this->getDepartmentsWithCombos();
        if($ubigeo){
            $ubigeoFormat = $this->getUbigeoFormat($ubigeo);
            $ubigeoDistricts = $ubigeoFormat["districts"];
            $data = $data->whereIn('projectRel.ubigeoRel.code_ubigeo',$ubigeoDistricts);
        }
        if ($projects) {
            $data = $data->whereIn('project_id', $projects);
        }
        if ($views) {
            $data = $data->whereIn('view_id', $views);
        }
        if ($rooms) {
            $data = $data->whereIn('tipologyRel.room', $rooms);
        }
        if ($types) {
            $data = $data->whereIn('tipologyRel.parent_type_department_id', $types);
        }
        if ($floors) {
            $data = $data->whereIn('floor', $floors);
        }
        $data = $data->pluck('projectRel.statusRel')->unique()->flatten()->sortBy('id')->values()->all();
        return $data;
    }

    public function getRoomsEstates($statuses = false, $projects = false, $floors = false, $views = false, $types = false, $ubigeo = false)
    {
        $data = $this->getDepartmentsWithCombos();
        if ($views) {
            $data = $data->whereIn('view_id', $views);
        }
        if ($floors) {
            $data = $data->whereIn('floor', $floors);
        }
        if ($types) {
            $data = $data->whereIn('tipologyRel.parent_type_department_id', $types);
        }
        if($ubigeo){
            $ubigeoFormat = $this->getUbigeoFormat($ubigeo);
            $ubigeoDistricts = $ubigeoFormat["districts"];
            $data = $data->whereIn('projectRel.ubigeoRel.code_ubigeo',$ubigeoDistricts);
        }
        if ($statuses) {
            $data = $data->whereIn('projectRel.project_status_id', $statuses);
        }
        if ($projects) {
            $data = $data->whereIn('project_id', $projects);
        }
        $data = $data->pluck('tipologyRel.room')->unique()->flatten()->sort()->values()->all();
        return $data;
    }

    public function getTypeEstates($statuses = false, $projects = false, $rooms = false, $floors = false, $views = false, $ubigeo = false)
    {
        $data = ProjectParentTypeDepartment::select('id', 'name', 'slug')->whereHas('tipologyRel', function ($query) use ($statuses, $projects, $rooms, $floors, $views, $ubigeo) {
            $query->whereHas('departmentsRel', function ($query2) use ($statuses, $projects, $rooms, $floors, $views, $ubigeo) {
                $query2->where('available', 1);
                if ($views) {
                    $query2->whereIn('view_id', $views);
                }
                if ($floors) {
                    $query2->whereIn('floor', $floors);
                }
                $query2->whereHas('projectRel', function ($query3) use ($statuses, $projects, $rooms, $ubigeo) {
                    $query3->where('active', 1);
                    if($ubigeo){
                        $departments = $districts = [];
                        foreach ($ubigeo as $key => $value) {
                            $isDepartment = strlen($value);
                            if ($isDepartment == 2) {
                                $departments[] = $value;
                            } else {
                                $districts[] = $value;
                            }
                        }
                        if (count($districts) > 0) {
                            $query3->whereHas('ubigeoRel', function ($query4) use ($districts) {
                                    return $query4->whereIn('code_ubigeo', $districts);
                            });
                        }
                    }
                    if ($statuses) {
                        $query3->whereIn('project_status_id', $statuses);
                    }
                    if ($projects) {
                        $query3->whereIn('id', $projects);
                    }
                });
                if ($rooms) {
                    $query2->whereHas('tipologyRel', function ($query3) use ($rooms) {
                        $query3->whereIn('room', $rooms);
                    });
                }
            });
        })->get();
        return $data;
    }

    public function getFloorsEstates($statuses = false, $projects = false, $rooms = false, $views = false, $types = false, $ubigeo = false)
    {
        $data = $this->getDepartmentsWithCombos();
        if($ubigeo){
            $ubigeoFormat = $this->getUbigeoFormat($ubigeo);
            $ubigeoDistricts = $ubigeoFormat["districts"];
            $data = $data->whereIn('projectRel.ubigeoRel.code_ubigeo',$ubigeoDistricts);
        }
        if ($statuses) {
            $data = $data->whereIn('projectRel.project_status_id', $statuses);
        }
        if ($projects) {
            $data = $data->whereIn('project_id', $projects);
        }
        if ($views) {
            $data = $data->whereIn('view_id', $views);
        }
        if ($rooms) {
            $data = $data->whereIn('tipologyRel.room', $rooms);
        }
        if ($types) {
            $data = $data->whereIn('tipologyRel.parent_type_department_id', $types);
        }
        $data = $data->sortBy('floor');
        $data = $data->pluck('floor')->unique()->flatten()->all();
        return $data;
    }

    public function getViewsEstates($statuses = false, $projects = false, $rooms = false, $floors = false, $types = false, $ubigeo = false)
    {
        $data = ProjectView::with('departmentsRel')->whereHas('departmentsRel', function ($query) use ($statuses, $projects, $rooms, $floors, $types, $ubigeo) {
            if ($floors) {
                $query->whereIn('floor', $floors);
            }
            $query->whereHas('tipologyRel', function ($query2) use ($rooms, $types) {
                if ($rooms) {
                    $query2->whereIn('room', $rooms);
                }
                if ($types) {
                    $query2->whereIn('parent_type_department_id', $types);
                }
            });
            $query->where('available', 1)->whereHas('projectRel', function ($query2) use ($statuses, $projects, $ubigeo) {
                $query2->where('active', 1);
                if($ubigeo){
                    $departments = $districts = [];
                    foreach ($ubigeo as $key => $value) {
                        $isDepartment = strlen($value);
                        if ($isDepartment == 2) {
                            $departments[] = $value;
                        } else {
                            $districts[] = $value;
                        }
                    }
                    if (count($districts) > 0 ) {
                        $query2->whereHas('ubigeoRel', function ($query4) use ($districts) {
                                return $query4->whereIn('code_ubigeo', $districts);
                        });
                    }
                }
                if ($statuses) {
                    $query2->whereIn('project_status_id', $statuses);
                }
                if ($projects) {
                    $query2->whereIn('id', $projects);
                }
            });
        })->orderBy('name')->get();
        return $data;
    }

    public function getPricesEstates($statuses = false, $projects = false, $rooms = false, $floors = false, $views = false, $types = false, $ubigeo = false)
    {
        $departments = $this->getDepartmentsWithCombos();
        if ($views) {
            $departments = $departments->whereIn('view_id', $views);
        }
        if ($floors) {
            $departments = $departments->whereIn('floor', $floors);
        }
        if ($rooms) {
            $departments = $departments->whereIn('tipologyRel.room', $rooms);
        }
        if ($types) {
            $departments = $departments->whereIn('tipologyRel.parent_type_department_id', $types);
        }
        if($ubigeo){
            $ubigeoFormat = $this->getUbigeoFormat($ubigeo);
            $ubigeoDistricts = $ubigeoFormat["districts"];
            $departments = $departments->whereIn('projectRel.ubigeoRel.code_ubigeo',$ubigeoDistricts);
        }
        if ($statuses) {
            $departments = $departments->whereIn('projectRel.project_status_id', $statuses);
        }
        if ($projects) {
            $departments = $departments->whereIn('project_id', $projects);
        }
        $min = $departments->min('price');
        $max = $departments->max('price');
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

    public function getAreas($statuses = false, $projects = false, $rooms = false, $floors = false, $views = false, $types = false, $ubigeo = false)
    {
        $departments = $this->getDepartmentsWithCombos();
        if ($views) {
            $departments = $departments->whereIn('view_id', $views);
        }
        if ($floors) {
            $departments = $departments->whereIn('floor', $floors);
        }
        if ($rooms) {
            $departments = $departments->whereIn('tipologyRel.room', $rooms);
        }
        if ($types) {
            $departments = $departments->whereIn('tipologyRel.parent_type_department_id', $types);
        }
        if($ubigeo){
            $ubigeoFormat = $this->getUbigeoFormat($ubigeo);
            $ubigeoDistricts = $ubigeoFormat["districts"];
            $departments = $departments->whereIn('projectRel.ubigeoRel.code_ubigeo',$ubigeoDistricts);
        }
        if ($statuses) {
            $departments = $departments->whereIn('projectRel.project_status_id', $statuses);
        }
        if ($projects) {
            $departments = $departments->whereIn('project_id', $projects);
        }
        $min = $departments->min('area');
        $max = $departments->max('area');
        $min = floor(floatval($min));
        $max = ceil(floatval($max));
        $data = [
            "min" => $min,
            "max" => $max,
        ];
        return $data;
    }

    public function getUbigeoEstates($statuses = false, $projects = false, $rooms = false, $floors = false, $views = false, $types = false)
    {
        $departments = Ubigeo::select('code_ubigeo', 'code_department', 'department', 'code_district')->distinct('code_department')
            ->whereHas('projectsRel', function ($query) use ($statuses, $projects, $rooms, $floors, $views, $types) {
                $query->where('active', 1);
                if ($statuses) {
                    $query->whereIn('project_status_id', $statuses);
                }
                if ($projects) {
                    $query->whereIn('id', $projects);
                }
                $query->whereHas('departmentsRel', function ($query2) use ($rooms, $floors, $views, $types) {
                    $query2->where('available', 1);
                    $query2->whereHas('tipologyRel', function ($query3) use ($rooms, $types) {
                        if ($rooms) {
                            $query3->whereIn('room', $rooms);
                        }
                        if ($types) {
                            $query3->whereIn('parent_type_department_id', $types);
                        }
                    });
                    
                    if ($floors) {
                        $query2->whereIn('floor', $floors);
                    }
                    if ($views) {
                        $query2->whereIn('view_id', $views);
                    }
                });
            })
            ->orderBy('code_ubigeo', 'DESC')->groupBy('code_department')->get();
        foreach ($departments as $key => $value) {
            $departments[$key]["is_department"] = true;
        }
        $districtsTemp = null;
        foreach ($departments as $key => $value) {
            $districtsTemp[] = $this->getDistricts($value->code_department, $statuses, $projects, $rooms, $floors, $views, $types);
        }
        $districtsTemp2 = collect($districtsTemp);
        $districtsTemp3 = $districtsTemp2->flatten();
        $districtsTemp3 = $districtsTemp3->sortBy('district');
        $districtsTemp3 = $districtsTemp3->values()->all();
        $districts = collect($districtsTemp3);
        $data = $departments->concat($districts)->sortByDesc('code_department')->values()->all();
        return $data;
    }

    public function getDistricts($code, $statuses = false, $projects = false, $rooms = false, $floors = false, $views = false, $types = false)
    {
        $data = Ubigeo::select('code_district', 'district', 'code_ubigeo', 'code_department')->distinct()->where('code_department', $code)
            ->whereHas('projectsRel', function ($query) use ($statuses, $projects, $rooms, $floors, $views, $types) {
                $query->where('active', 1);
                if ($statuses) {
                    $query->whereIn('project_status_id', $statuses);
                }
                if ($projects) {
                    $query->whereIn('id', $projects);
                }
                $query->whereHas('departmentsRel', function ($query2) use ($rooms, $floors, $views, $types) {
                    $query2->where('available', 1);
                    if ($views) {
                        $query2->whereIn('view_id', $views);
                    }
                    $query2->whereHas('tipologyRel', function ($query3) use ($rooms, $types) {
                        if ($rooms) {
                            $query3->whereIn('room', $rooms);
                        }
                        if ($types) {
                            $query3->whereIn('parent_type_department_id', $types);
                        }
                    });
                    if ($floors) {
                        $query2->whereIn('floor', $floors);
                    }
                });
            })
            ->where('code_district', '!=', '00')->orderBy('district')->get();
        return $data;
    }

    public function updateFilters(Request $request)
    {
        $rStatuses = $request->statuses;
        $rProjects = $request->projects;
        $rTypes = $request->types;
        $rRooms = $request->rooms;
        $rFloors = $request->floors;
        $rViews = $request->views;
        $rUbigeo = $request->ubigeo;

        $projects = $this->getProjects($rStatuses, $rRooms, $rFloors, $rViews, $rTypes, $rUbigeo);
        $departments = $this->getUbigeoEstates($rStatuses, $rProjects, $rRooms, $rFloors, $rViews, $rTypes);
        $status = $this->getStatusEstates($rProjects, $rRooms, $rFloors, $rViews, $rTypes, $rUbigeo);
        $rooms = $this->getRoomsEstates($rStatuses, $rProjects, $rFloors, $rViews, $rTypes, $rUbigeo);
        $typeDepartments = $this->getTypeEstates($rStatuses, $rProjects, $rRooms, $rFloors, $rViews, $rUbigeo);
        $floors = $this->getFloorsEstates($rStatuses, $rProjects, $rRooms, $rViews, $rTypes, $rUbigeo);
        $views = $this->getViewsEstates($rStatuses, $rProjects, $rRooms, $rFloors, $rTypes, $rUbigeo);
        $prices = $this->getPricesEstates($rStatuses, $rProjects, $rRooms, $rFloors, $rViews, $rTypes, $rUbigeo);
        $areas = $this->getAreas($rStatuses, $rProjects, $rRooms, $rFloors, $rViews, $rTypes, $rUbigeo);
        $data = array(
            "filters" => [
                "departments" => $departments,
                "status" => $status,
                "rooms" => $rooms,
                "typeDepartments" => $typeDepartments,
                "projects" => $projects,
                "floors" => $floors,
                "views" => $views,
                "prices" => $prices,
                "areas" => $areas
            ]
        );
        return $this->sendResponse($data, '');
    }

    public function detail(Request $request, $code)
    {
        $department = Department::where('slug', $code)->with('viewRel', 'tipologyRel.parentTypeDepartmentRel', 'projectRel:id,logo_colour,price_separation,name_es,name_en,code_ubigeo,project_status_id,master_currency_id,has_warehouse,has_parking,stock_warehouse,stock_parking,reservation_in_package,package_description', 'projectRel.ubigeoRel', 'projectRel.statusRel')->first();
        if (!$department) {
            return $this->sendError("");
        }
        $page = $this->getSeoPage('reserve-your-department', $request->locale);
        $content = $this->getContentPage('reserve-your-department');
        $typeDocuments = MasterDocumentType::select('id', 'name', 'description')->get();
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
        $department = Department::where('slug', $code)->where('available', 1)->with('viewRel', 'tipologyRel.parentTypeDepartmentRel', 'projectRel:id,logo_colour,price_separation,name_es,name_en,code_ubigeo,project_status_id,master_currency_id,has_warehouse,has_parking,stock_warehouse,stock_parking,reservation_in_package,package_description', 'projectRel.ubigeoRel', 'projectRel.statusRel')->first();
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
