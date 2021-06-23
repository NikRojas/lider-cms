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
        //$filters = $this->getFilters();
        $data = array(
            "page" => $page,
            "departments" => $departments,
            "content" => $content,
            //"filters" => $filters
        );
        return $this->sendResponse($data, '');
    }

    public function paginateDepartments(Request $request)
    {
        $ubigeo = $statuses = $rooms = $floors = $projects = $typeDepartments = $range = $views = [];
        $sort = $request->sort_by;
        $data = Department::with('viewRel', 'tipologyRel.parentTypeDepartmentRel', 'projectRel:id,logo_colour,price_separation,name_es,name_en,code_ubigeo,project_status_id,master_currency_id', 'projectRel.ubigeoRel', 'projectRel.statusRel')->where('available', 1);
        //Tablas Relacionadas
        if ($request->statuses) {
            $statuses = $request->statuses;
            $data = $data->whereHas('projectRel', function ($query) use ($statuses) {
                $query->whereIn('project_status_id', $statuses);
            });
        }
        if ($request->ubigeo) {
            $ubigeo = $request->ubigeo;
            $departments = $districts = [];
            foreach ($ubigeo as $key => $value) {
                $isDepartment = strlen($value);
                if ($isDepartment == 2) {
                    $departments[] = $value;
                } else {
                    $districts[] = $value;
                }
            }
            if (count($departments) > 0 && count($districts) == 0) {
                $data = $data->whereHas('projectRel', function ($query) use ($departments) {
                    $query->whereHas('ubigeoRel', function ($query2) use ($departments) {
                        return $query2->whereIn('code_department', $departments);
                    });
                });
            }
            if (count($districts) > 0  && count($departments) == 0) {
                $data = $data->whereHas('projectRel', function ($query) use ($districts) {
                    $query->whereHas('ubigeoRel', function ($query2) use ($districts) {
                        return $query2->whereIn('code_ubigeo', $districts);
                    });
                });
            }
            if (count($districts) > 0  && count($departments) > 0) {
                $data = $data->whereHas('projectRel', function ($query) use ($departments, $districts) {
                    $query->whereHas('ubigeoRel', function ($query2) use ($departments, $districts) {
                        return $query2->whereIn('code_ubigeo', $districts)->orWhereIn('code_department', $departments);
                    });
                });
            }
        }
        if ($request->type) {
            $typeDepartments = $request->type;
            $data = $data->whereHas('tipologyRel', function ($query) use ($typeDepartments) {
                $query->whereIn('parent_type_department_id', $typeDepartments);
            });
        }

        if ($request->rooms) {
            $rooms = $request->rooms;
            $data = $data->whereHas('tipologyRel', function ($query) use ($rooms) {
                $query->whereIn('room', $rooms);
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
        $rangeArea =  $request->range_area;
        if ($rangeArea && $rangeArea[0]) {
            $data = $data->where('area', '>=', $rangeArea[0]);
        }
        if ($rangeArea && isset($rangeArea[1])) {
            $data = $data->where('area', '<=', ($rangeArea[1]));
        }
        //$views =  $request->views;
        switch ($sort) {
            case 'low-high':
                $data = $data->orderBy('price', 'asc');
                break;

            case 'high-low':
                $data = $data->orderBy('price', 'desc');
                break;

            default:
                $data = $data->orderBy('created_at');
                break;
        }
        $data = $data->paginate(12);
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
        $data = Project::select('id', 'name_es', 'name_en', 'slug_es', 'slug_en')->with('departmentsRel')->whereHas('departmentsRel', function ($query) use ($rooms, $floors, $views, $types) {
            $query->where('available', 1);
            if ($views) {
                $query->whereIn('view_id', $views);
            }
            $query->whereHas('tipologyRel', function ($query2) use ($rooms, $types) {
                if ($rooms) {
                    $query2->whereIn('room', $rooms);
                }
                if ($types) {
                    $query2->whereIn('parent_type_department_id', $types);
                }
            });
            if ($floors) {
                $query->whereIn('floor', $floors);
            }
        })->where('active', 1)->orderBy('index');
        if ($statuses) {
            $data = $data->whereIn('project_status_id', $statuses);
        }
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
            if (count($departments) > 0 && count($districts) == 0) {
                $data = $data->whereHas('ubigeoRel', function ($query2) use ($departments) {
                        return $query2->whereIn('code_department', $departments);
                });
            }
            if (count($districts) > 0  && count($departments) == 0) {
                $data = $data->whereHas('ubigeoRel', function ($query2) use ($districts) {
                        return $query2->whereIn('code_ubigeo', $districts);
                });
            }
            if (count($districts) > 0  && count($departments) > 0) {
                $data = $data->whereHas('ubigeoRel', function ($query2) use ($departments, $districts) {
                        return $query2->whereIn('code_ubigeo', $districts)->orWhereIn('code_department', $departments);
                });
            }
        }
        $data = $data->get();
        return $data;
    }

    public function getStatusEstates($projects = false, $rooms = false, $floors = false, $views = false, $types = false, $ubigeo = false)
    {
        $data = ProjectStatus::whereHas('projectsRel', function ($query) use ($projects, $rooms, $floors, $views, $types, $ubigeo) {
            $query->where('active', 1);
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
                if (count($departments) > 0 && count($districts) == 0) {
                    $query->whereHas('ubigeoRel', function ($query2) use ($departments) {
                            return $query2->whereIn('code_department', $departments);
                    });
                }
                if (count($districts) > 0  && count($departments) == 0) {
                    $query->whereHas('ubigeoRel', function ($query2) use ($districts) {
                            return $query2->whereIn('code_ubigeo', $districts);
                    });
                }
                if (count($districts) > 0  && count($departments) > 0) {
                    $query->whereHas('ubigeoRel', function ($query2) use ($departments, $districts) {
                            return $query2->whereIn('code_ubigeo', $districts)->orWhereIn('code_department', $departments);
                    });
                }
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
        })->get();
        return $data;
    }

    public function getRoomsEstates($statuses = false, $projects = false, $floors = false, $views = false, $types = false, $ubigeo = false)
    {
        $data = ProjectTypeDepartment::whereHas('departmentsRel', function ($query2) use ($statuses, $projects, $floors, $views, $types, $ubigeo) {
            if ($views) {
                $query2->whereIn('view_id', $views);
            }
            if ($floors) {
                $query2->whereIn('floor', $floors);
            }
            if($types){
                $query2->whereHas('tipologyRel', function ($query3) use ($types) {
                    $query3->whereIn('parent_type_department_id', $types);
                });
            }
            $query2->where('available', 1)->whereHas('projectRel', function ($query3) use ($statuses, $projects, $floors, $views, $ubigeo) {
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
                    if (count($departments) > 0 && count($districts) == 0) {
                        $query3->whereHas('ubigeoRel', function ($query4) use ($departments) {
                                return $query4->whereIn('code_department', $departments);
                        });
                    }
                    if (count($districts) > 0  && count($departments) == 0) {
                        $query3->whereHas('ubigeoRel', function ($query4) use ($districts) {
                                return $query4->whereIn('code_ubigeo', $districts);
                        });
                    }
                    if (count($districts) > 0  && count($departments) > 0) {
                        $query3->whereHas('ubigeoRel', function ($query4) use ($departments, $districts) {
                                return $query4->whereIn('code_ubigeo', $districts)->orWhereIn('code_department', $departments);
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
        })->get();
        $data = $data->pluck('room')->unique()->flatten()->sort()->values()->all();;
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
                        if (count($departments) > 0 && count($districts) == 0) {
                            $query3->whereHas('ubigeoRel', function ($query4) use ($departments) {
                                    return $query4->whereIn('code_department', $departments);
                            });
                        }
                        if (count($districts) > 0  && count($departments) == 0) {
                            $query3->whereHas('ubigeoRel', function ($query4) use ($districts) {
                                    return $query4->whereIn('code_ubigeo', $districts);
                            });
                        }
                        if (count($districts) > 0  && count($departments) > 0) {
                            $query3->whereHas('ubigeoRel', function ($query4) use ($departments, $districts) {
                                    return $query4->whereIn('code_ubigeo', $districts)->orWhereIn('code_department', $departments);
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
        $data = Department::where('available', 1);
        $data = $data->whereHas('projectRel', function ($query) use ($statuses, $projects, $ubigeo) {
            $query->where('active', 1);
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
                if (count($departments) > 0 && count($districts) == 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($departments) {
                            return $query4->whereIn('code_department', $departments);
                    });
                }
                if (count($districts) > 0  && count($departments) == 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($districts) {
                            return $query4->whereIn('code_ubigeo', $districts);
                    });
                }
                if (count($districts) > 0  && count($departments) > 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($departments, $districts) {
                            return $query4->whereIn('code_ubigeo', $districts)->orWhereIn('code_department', $departments);
                    });
                }
            }
            if ($statuses) {
                $query->whereIn('project_status_id', $statuses);
            }
            if ($projects) {
                $query->whereIn('id', $projects);
            }
        });
        if ($views) {
            $data = $data->whereIn('view_id', $views);
        }
        $data = $data->whereHas('tipologyRel', function ($query2) use ($rooms, $types) {
            if ($rooms) {
                $query2->whereIn('room', $rooms);
            }
            if ($types) {
                $query2->whereIn('parent_type_department_id', $types);
            }
        });
        $data = $data->orderBy('floor')->get();
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
                    if (count($departments) > 0 && count($districts) == 0) {
                        $query2->whereHas('ubigeoRel', function ($query4) use ($departments) {
                                return $query4->whereIn('code_department', $departments);
                        });
                    }
                    if (count($districts) > 0  && count($departments) == 0) {
                        $query2->whereHas('ubigeoRel', function ($query4) use ($districts) {
                                return $query4->whereIn('code_ubigeo', $districts);
                        });
                    }
                    if (count($districts) > 0  && count($departments) > 0) {
                        $query2->whereHas('ubigeoRel', function ($query4) use ($departments, $districts) {
                                return $query4->whereIn('code_ubigeo', $districts)->orWhereIn('code_department', $departments);
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
        $min = Department::where('available', true);
        if ($views) {
            $min = $min->whereIn('view_id', $views);
        }
        if ($floors) {
            $min = $min->whereIn('floor', $floors);
        }
        $min = $min->whereHas('tipologyRel', function ($query) use ($rooms, $types) {
            if ($rooms) {
                $query->whereIn('room', $rooms);
            }
            if ($types) {
                $query->whereIn('parent_type_department_id', $types);
            }
        });
        $min = $min->whereHas('projectRel', function ($query) use ($statuses, $projects, $ubigeo) {
            $query->where('active', 1);
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
                if (count($departments) > 0 && count($districts) == 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($departments) {
                            return $query4->whereIn('code_department', $departments);
                    });
                }
                if (count($districts) > 0  && count($departments) == 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($districts) {
                            return $query4->whereIn('code_ubigeo', $districts);
                    });
                }
                if (count($districts) > 0  && count($departments) > 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($departments, $districts) {
                            return $query4->whereIn('code_ubigeo', $districts)->orWhereIn('code_department', $departments);
                    });
                }
            }
            if ($statuses) {
                $query->whereIn('project_status_id', $statuses);
            }
            if ($projects) {
                $query->whereIn('id', $projects);
            }
        });
        $max = Department::where('available', true);
        if ($views) {
            $max = $max->whereIn('view_id', $views);
        }
        if ($floors) {
            $max = $max->whereIn('floor', $floors);
        }
        $max = $max->whereHas('tipologyRel', function ($query) use ($rooms, $types) {
            if ($rooms) {
                $query->whereIn('room', $rooms);
            }
            if ($types) {
                $query->whereIn('parent_type_department_id', $types);
            }
        });
        $max = $max->whereHas('projectRel', function ($query) use ($statuses, $projects, $ubigeo) {
            $query->where('active', 1);
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
                if (count($departments) > 0 && count($districts) == 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($departments) {
                            return $query4->whereIn('code_department', $departments);
                    });
                }
                if (count($districts) > 0  && count($departments) == 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($districts) {
                            return $query4->whereIn('code_ubigeo', $districts);
                    });
                }
                if (count($districts) > 0  && count($departments) > 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($departments, $districts) {
                            return $query4->whereIn('code_ubigeo', $districts)->orWhereIn('code_department', $departments);
                    });
                }
            }
            if ($statuses) {
                $query->whereIn('project_status_id', $statuses);
            }
            if ($projects) {
                $query->whereIn('id', $projects);
            }
        });
        $min = $min->min('price');
        $max = $max->max('price');
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
        $min = Department::where('available', true);
        if ($views) {
            $min = $min->whereIn('view_id', $views);
        }
        if ($floors) {
            $min = $min->whereIn('floor', $floors);
        }
        $min = $min->whereHas('tipologyRel', function ($query) use ($rooms, $types) {
            if ($rooms) {
                $query->whereIn('room', $rooms);
            }
            if ($types) {
                $query->whereIn('parent_type_department_id', $types);
            }
        });
        $min = $min->whereHas('projectRel', function ($query) use ($statuses, $projects, $ubigeo) {
            $query->where('active', 1);
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
                if (count($departments) > 0 && count($districts) == 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($departments) {
                            return $query4->whereIn('code_department', $departments);
                    });
                }
                if (count($districts) > 0  && count($departments) == 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($districts) {
                            return $query4->whereIn('code_ubigeo', $districts);
                    });
                }
                if (count($districts) > 0  && count($departments) > 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($departments, $districts) {
                            return $query4->whereIn('code_ubigeo', $districts)->orWhereIn('code_department', $departments);
                    });
                }
            }
            if ($statuses) {
                $query->whereIn('project_status_id', $statuses);
            }
            if ($projects) {
                $query->whereIn('id', $projects);
            }
        });
        $max = Department::where('available', true);
        if ($views) {
            $max = $max->whereIn('view_id', $views);
        }
        if ($floors) {
            $max = $max->whereIn('floor', $floors);
        }
        $max = $max->whereHas('tipologyRel', function ($query) use ($rooms, $types) {
            if ($rooms) {
                $query->whereIn('room', $rooms);
            }
            if ($types) {
                $query->whereIn('parent_type_department_id', $types);
            }
        });
        $max = $max->whereHas('projectRel', function ($query) use ($statuses, $projects, $ubigeo) {
            $query->where('active', 1);
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
                if (count($departments) > 0 && count($districts) == 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($departments) {
                            return $query4->whereIn('code_department', $departments);
                    });
                }
                if (count($districts) > 0  && count($departments) == 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($districts) {
                            return $query4->whereIn('code_ubigeo', $districts);
                    });
                }
                if (count($districts) > 0  && count($departments) > 0) {
                    $query->whereHas('ubigeoRel', function ($query4) use ($departments, $districts) {
                            return $query4->whereIn('code_ubigeo', $districts)->orWhereIn('code_department', $departments);
                    });
                }
            }
            if ($statuses) {
                $query->whereIn('project_status_id', $statuses);
            }
            if ($projects) {
                $query->whereIn('id', $projects);
            }
        });
        $min = $min->min('area');
        $max = $max->max('area');
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
                    /*if ($rooms) {
                        $query2->whereHas('tipologyRel', function ($query3) use ($rooms) {
                            $query3->whereIn('room', $rooms);
                        });
                    }*/
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
        $department = Department::where('slug', $code)->with('viewRel', 'tipologyRel.parentTypeDepartmentRel', 'projectRel:id,logo_colour,price_separation,name_es,name_en,code_ubigeo,project_status_id,master_currency_id', 'projectRel.ubigeoRel', 'projectRel.statusRel')->first();
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
        $department = Department::where('slug', $code)->where('available', 1)->with('viewRel', 'tipologyRel.parentTypeDepartmentRel', 'projectRel:id,logo_colour,price_separation,name_es,name_en,code_ubigeo,project_status_id,master_currency_id', 'projectRel.ubigeoRel', 'projectRel.statusRel')->first();
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
