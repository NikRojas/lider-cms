<?php

namespace App\Http\Controllers\Cms\OrdersStatistics;

use App\Http\Controllers\Controller;
use App\MasterOrderCycle;
use App\MasterTransactionStatus;
//use App\Http\Traits\CmsTrait;
use App\Order;
use App\Project;
use App\ProjectParentTypeDepartment;
use App\ProjectTypeDepartment;
use App\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    //use CmsTrait;

    public function index()
    {
        return view("pages.sales-statistics.statistics.index");
    }

    public function getAll(Request $request)
    {
        $totalSales = $this->getTotalSales($request->date, $request->range);
        $totalReserves = $this->getTotalOrders($request->date, $request->range);
        $reservesPerProject = $this->getReservesPerProject($request->date, $request->range);
        $reservesPerTipology = $this->getReserversPerEstate($request->date, $request->range);
        $reservesPerType = $this->getReserversPerType($request->date, $request->range);
        $response = [
            "total_sales" => $totalSales, "total_orders" => $totalReserves, "reservers_per_project" => $reservesPerProject, "reservers_per_tipology" => $reservesPerTipology, "reservers_per_type" => $reservesPerType
        ];
        return response()->json($response, 200);
    }

    public function getRangeStatistics($valueDate, $valueRange)
    {
        $date = $max = $rows = $dateSub = $date2 = $rangeType = null;
        switch ($valueDate) {
            case 'today':
                $date = Carbon::today();
                $max = 4;
                $format = 'h a';
                break;
            case 'range':
                $date = Carbon::parse($valueRange[0]);
                $date2 = Carbon::parse($valueRange[1]);
                $max = $date->diffInDays($date2) + 1;
                if ($max > 90) {
                    $rangeType = "month";
                    $max = intdiv($max, 30);
                    if($max >= 5){
                        $max = $max + 2;
                    }
                    else{
                        $max = $max + 1;
                    }
                    $format = 'MMM YY';
                } else {
                    $rangeType = "day";
                    $format = 'D MMM';
                }
                break;
            case '7':
                $date = Carbon::today()->subDays(6);
                $max = 7;
                $format = 'D MMM';
                break;

            case '30':
                $date = Carbon::today()->subDays(30);
                $max = 30;
                $format = 'D MMM';
                break;

            case '90':
                $date = Carbon::today()->subDays(90);
                $max = 90;
                $format = 'D MMM';
                break;

            case 'this_year':
                $date = Carbon::today()->subYear(1);
                $max = 12;
                $format = 'MMM';
                break;
        }
        $dateSub = $date->copy()->toDateTimeString();
        for ($i = 0; $i < $max; $i++) {
            switch ($valueDate) {
                case 'today':
                    $dateTemp = $date;
                    $rows[] = ["date" => $dateTemp->format($format), "dateValue" => $dateTemp->toDateTimeString(), "dateValue2" => $dateTemp->addHours(6)->toDateTimeString()];
                    break;
                case '7':
                    $dateTemp = $date;
                    $rows[] = ["date" => $dateTemp->isoFormat($format), "dateValue" => $dateTemp->copy()->startOfDay()->toDateTimeString(), "dateValue2" => $dateTemp->endOfDay()->toDateTimeString()];
                    $dateTemp = $date->addDay();
                    break;
                case 'range':
                    if ($rangeType == 'month') {
                        if ($i != 0) {
                            $dateTemp = $date->addMonth();
                        } else {
                            $dateTemp = $date;
                        }
                        $rows[] = ["date" => $dateTemp->isoFormat($format), "dateValue" => $dateTemp->month, "dateYear" => $dateTemp->year];
                    } else if ($rangeType == 'day') {
                        $dateTemp = $date;
                        $rows[] = ["date" => $dateTemp->isoFormat($format), "dateValue" => $dateTemp->copy()->startOfDay()->toDateTimeString(), "dateValue2" => $dateTemp->endOfDay()->toDateTimeString()];
                        $dateTemp = $date->addDay();
                    }
                    break;
                case '30':
                    $dateTemp = $date->addDay();
                    $rows[] = ["date" => $dateTemp->isoFormat($format), "dateValue" => $dateTemp->copy()->startOfDay()->toDateTimeString(), "dateValue2" => $dateTemp->endOfDay()->toDateTimeString()];
                    break;
                case '90':
                    $dateTemp = $date->addDay();
                    $rows[] = ["date" => $dateTemp->isoFormat($format), "dateValue" => $dateTemp->copy()->startOfDay()->toDateTimeString(), "dateValue2" => $dateTemp->endOfDay()->toDateTimeString()];
                    break;
                case 'this_year':
                    $dateTemp = $date->addMonth();
                    $rows[] = ["date" => $dateTemp->isoFormat($format), "dateValue" => $dateTemp->month, "dateYear" => $dateTemp->year];
                    break;
            }
        }
        return ["rows" => $rows, "dateSub" => $dateSub, "rangeType" => $rangeType];
    }

    public function getReserversPerType($date, $range)
    {
        $rangeStatistics = $this->getRangeStatistics($date, $range);
        $rangeType = $rangeStatistics["rangeType"];
        $parentType = ProjectParentTypeDepartment::get();
        $statusesPaidId = MasterTransactionStatus::where('value_status', 'PAID')->get();
        $statusesPaidId = $statusesPaidId->pluck('id');
        $orderCycleClosed = MasterOrderCycle::where('payment_gateway_value', 'CLOSED')->first()->id;
        foreach ($parentType as $key => $value) {
            foreach ($rangeStatistics["rows"] as $key2 => $value2) {
                switch ($date) {
                    case 'today':
                        $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->whereHas('departmentRel', function ($q2) use ($value) {
                                $q2->whereHas('tipologyRel', function ($q3) use ($value) {
                                    $q3->where('parent_type_department_id', $value->id);
                                });
                            });
                        })->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            $q->whereIn('transaction_status_id', $statusesPaidId)
                                ->where('order_cycle_id', $orderCycleClosed)
                                ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);
                        })->get()->count();
                        break;
                    case 'range':
                        if ($rangeType == "day") {
                            $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                                $q->whereHas('departmentRel', function ($q2) use ($value) {
                                    $q2->whereHas('tipologyRel', function ($q3) use ($value) {
                                        $q3->where('parent_type_department_id', $value->id);
                                    });
                                });
                            })->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $value2, $orderCycleClosed) {
                                $q->whereIn('transaction_status_id', $statusesPaidId)
                                    ->where('order_cycle_id', $orderCycleClosed)
                                    ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);
                            });
                        } else if ($rangeType == "month") {
                            $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                                $q->whereHas('departmentRel', function ($q2) use ($value) {
                                    $q2->whereHas('tipologyRel', function ($q3) use ($value) {
                                        $q3->where('parent_type_department_id', $value->id);
                                    });
                                });
                            })->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $value2, $orderCycleClosed) {
                                $q->whereIn('transaction_status_id', $statusesPaidId)
                                    ->where('order_cycle_id', $orderCycleClosed)
                                    ->whereMonth('transaction_date', $value2["dateValue"])->whereYear('transaction_date', $value2["dateYear"]);
                            });
                        }
                        $temp = $temp->get()->count();
                        break;
                    case '7':
                        $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->whereHas('departmentRel', function ($q2) use ($value) {
                                $q2->whereHas('tipologyRel', function ($q3) use ($value) {
                                    $q3->where('parent_type_department_id', $value->id);
                                });
                            });
                        })->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            $q->whereIn('transaction_status_id', $statusesPaidId)
                                ->where('order_cycle_id', $orderCycleClosed)
                                ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);
                        })->get()->count();
                        break;
                    case '30':
                        $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->whereHas('departmentRel', function ($q2) use ($value) {
                                $q2->whereHas('tipologyRel', function ($q3) use ($value) {
                                    $q3->where('parent_type_department_id', $value->id);
                                });
                            });
                        })->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            $q->whereIn('transaction_status_id', $statusesPaidId)
                                ->where('order_cycle_id', $orderCycleClosed)
                                ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);
                        })->get()->count();
                        break;
                    case '90':
                        $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->whereHas('departmentRel', function ($q2) use ($value) {
                                $q2->whereHas('tipologyRel', function ($q3) use ($value) {
                                    $q3->where('parent_type_department_id', $value->id);
                                });
                            });
                        })->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            $q->whereIn('transaction_status_id', $statusesPaidId)
                                ->where('order_cycle_id', $orderCycleClosed)
                                ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);
                        })->get()->count();
                        break;
                    case 'this_year':
                        $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->whereHas('departmentRel', function ($q2) use ($value) {
                                $q2->whereHas('tipologyRel', function ($q3) use ($value) {
                                    $q3->where('parent_type_department_id', $value->id);
                                });
                            });
                        })->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            $q->whereIn('transaction_status_id', $statusesPaidId)
                                ->where('order_cycle_id', $orderCycleClosed)
                                ->whereMonth('transaction_date', $value2["dateValue"])->whereYear('transaction_date', $value2["dateYear"]);
                        })->get()->count();
                        break;
                }
                $temp2 = null;
                $rangeStatistics["rows"][$key2]["Valor"] = $temp ?? 0;
                $temp2 = $rangeStatistics["rows"];
                $parentType[$key]["value"] = collect($temp2)->sum('Valor') ?? 0;
            }
        }
        $columns = [
            'name', 'value'
        ];
        return ["rows" => $parentType, "columns" => $columns];
    }

    public function getReservesPerProject($date, $range)
    {
        $rangeStatistics = $this->getRangeStatistics($date, $range);
        $rangeType = $rangeStatistics["rangeType"];
        $projects = Project::select("id", "name_es")->get();
        $statusesPaidId = MasterTransactionStatus::where('value_status', 'PAID')->get();
        $statusesPaidId = $statusesPaidId->pluck('id');
        $orderCycleClosed = MasterOrderCycle::where('payment_gateway_value', 'CLOSED')->first()->id;
        foreach ($projects as $key => $value) {
            foreach ($rangeStatistics["rows"] as $key2 => $value2) {
                switch ($date) {
                    case 'today':
                        $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q2) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            $q2->whereIn('transaction_status_id', $statusesPaidId)
                                ->where('order_cycle_id', $orderCycleClosed)
                                ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);
                        })->get()->count();
                        break;
                    case 'range':
                        if ($rangeType == "day") {
                            $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                                $q->where('project_id', $value->id);
                            })->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $value2, $orderCycleClosed) {
                                $q->whereIn('transaction_status_id', $statusesPaidId)
                                    ->where('order_cycle_id', $orderCycleClosed)
                                    ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);
                            });
                        } else if ($rangeType == "month") {
                            $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                                $q->where('project_id', $value->id);
                            })->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $value2, $orderCycleClosed) {
                                $q->whereIn('transaction_status_id', $statusesPaidId)
                                    ->where('order_cycle_id', $orderCycleClosed)
                                    ->whereMonth('transaction_date', $value2["dateValue"])->whereYear('transaction_date', $value2["dateYear"]);
                            });
                        }
                        $temp = $temp->get()->count();
                        break;
                    case '7':
                        $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            $q->whereIn('transaction_status_id', $statusesPaidId)
                                ->where('order_cycle_id', $orderCycleClosed)
                                ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);
                        })->get()->count();
                        break;
                    case '30':
                        $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            $q->whereIn('transaction_status_id', $statusesPaidId)
                                ->where('order_cycle_id', $orderCycleClosed)
                                ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);
                        })->get()->count();
                        break;
                    case '90':
                        $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            $q->whereIn('transaction_status_id', $statusesPaidId)
                                ->where('order_cycle_id', $orderCycleClosed)
                                ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);
                        })->get()->count();
                        break;
                    case 'this_year':
                        $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            $q->whereIn('transaction_status_id', $statusesPaidId)
                                ->where('order_cycle_id', $orderCycleClosed)
                                ->whereMonth('transaction_date', $value2["dateValue"])->whereYear('transaction_date', $value2["dateYear"]);
                        })->get()->count();
                        break;
                }
                $temp2 = null;
                $rangeStatistics["rows"][$key2]["Valor"] = $temp ?? 0;
                $temp2 = $rangeStatistics["rows"];
                $projects[$key]["value"] = collect($temp2)->sum('Valor') ?? 0;
            }
        }
        $columns = [
            'name_es', 'value'
        ];
        return ["rows" => $projects, "columns" => $columns];
    }

    public function getReserversPerEstate($date, $range)
    {
        $rangeStatistics = $this->getRangeStatistics($date, $range);
        $dateSub = $rangeStatistics["dateSub"];
        $rangeType = $rangeStatistics["rangeType"];
        $statusesPaidId = MasterTransactionStatus::where('value_status', 'PAID')->get();
        $statusesPaidId = $statusesPaidId->pluck('id');
        $orderCycleClosed = MasterOrderCycle::where('payment_gateway_value', 'CLOSED')->first()->id;
        $data = [];
        foreach ($rangeStatistics["rows"] as $key2 => $value2) {
            switch ($date) {
                case 'today':
                    $temp = Order::with('orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel')->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $orderCycleClosed, $value2) {
                        $q->whereIn('transaction_status_id', $statusesPaidId)
                            ->where('order_cycle_id', $orderCycleClosed)
                            ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);
                    })->get();

                    break;

                case 'range':
                    if ($rangeType == "day") {
                        $temp = Order::with('orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel')
                            ->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $value2, $orderCycleClosed) {
                                $q->whereIn('transaction_status_id', $statusesPaidId)
                                    ->where('order_cycle_id', $orderCycleClosed)
                                    ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);
                            });
                    } else if ($rangeType == "month") {
                        $temp = Order::with('orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel')
                            ->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $value2, $orderCycleClosed) {
                                $q->whereIn('transaction_status_id', $statusesPaidId)
                                    ->where('order_cycle_id', $orderCycleClosed)
                                    ->whereMonth('transaction_date', $value2["dateValue"])->whereYear('transaction_date', $value2["dateYear"]);
                            });
                    }
                    $temp = $temp->get();
                    break;

                case '7':
                    $temp = Order::with('orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel')->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $orderCycleClosed, $value2) {
                        $q->whereIn('transaction_status_id', $statusesPaidId)
                            ->where('order_cycle_id', $orderCycleClosed)
                            ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);;
                    })->get();

                    break;
                case '30':
                    $temp = Order::with('orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel')->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $orderCycleClosed, $value2) {
                        $q->whereIn('transaction_status_id', $statusesPaidId)
                            ->where('order_cycle_id', $orderCycleClosed)
                            ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);
                    })->get();

                    break;

                case '90':
                    $temp = Order::with('orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel')->whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $orderCycleClosed, $value2) {
                        $q->whereIn('transaction_status_id', $statusesPaidId)
                            ->where('order_cycle_id', $orderCycleClosed)
                            ->whereBetween('transaction_date', [$value2["dateValue"], $value2["dateValue2"]]);
                    })->get();

                    break;

                case 'this_year':
                    $temp = Order::with('orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel')->whereHas('transactionLatestRel', function ($q) use ($value2, $statusesPaidId, $orderCycleClosed, $dateSub) {
                        $q->whereIn('transaction_status_id', $statusesPaidId)
                            ->where('order_cycle_id', $orderCycleClosed)
                            ->whereMonth('transaction_date', $value2["dateValue"])->whereYear('transaction_date', $value2["dateYear"]);
                    })->get();
                    break;
            }
            $temp2[] = $temp;
        }
        $temp2 =  collect($temp2)->collapse()->unique()->all();
        foreach ($temp2 as $k => $v) {
            $data[$k]["name"] = $v->orderDetailsRel[0]->departmentRel->description;
            $data[$k]["project"] = $v->orderDetailsRel[0]->projectRel->name_es;
            $data[$k]["tipology"] = $v->orderDetailsRel[0]->departmentRel->tipologyRel->name;
            $data[$k]["tipo"] = $v->orderDetailsRel[0]->departmentRel->tipologyRel->parentTypeDepartmentRel->name;
        }
        return ["rows" => $data];
    }

    public function getTotalOrders($date, $range)
    {
        $columns = [
            'date', 'Valor'
        ];
        $rangeStatisticsTemp = $this->getRangeStatistics($date, $range);
        $rangeStatistics = $rangeStatisticsTemp["rows"];
        $rangeType = $rangeStatisticsTemp["rangeType"];
        $statusesPaidId = MasterTransactionStatus::where('value_status', 'PAID')->get();
        $statusesPaidId = $statusesPaidId->pluck('id');
        $orderCycleClosed = MasterOrderCycle::where('payment_gateway_value', 'CLOSED')->first()->id;
        foreach ($rangeStatistics as $key => $value) {
            switch ($date) {
                case 'today':
                    $temp = Order::whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $value, $orderCycleClosed) {
                        $q->whereIn('transaction_status_id', $statusesPaidId)
                            ->where('order_cycle_id', $orderCycleClosed)
                            ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]]);
                    })->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;
                case 'range':
                    if ($rangeType == "day") {
                        $temp = Order::whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $value, $orderCycleClosed) {
                            $q->whereIn('transaction_status_id', $statusesPaidId)
                                ->where('order_cycle_id', $orderCycleClosed)
                                ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]]);
                        });
                    } else if ($rangeType == "month") {
                        $temp = Order::whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $value, $orderCycleClosed) {
                            $q->whereIn('transaction_status_id', $statusesPaidId)
                                ->where('order_cycle_id', $orderCycleClosed)
                                ->whereMonth('transaction_date', $value["dateValue"])->whereYear('transaction_date', $value["dateYear"]);
                        });
                    }
                    $temp = $temp->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;
                case '7':
                    $temp = Order::whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $value, $orderCycleClosed) {
                        $q->whereIn('transaction_status_id', $statusesPaidId)
                            ->where('order_cycle_id', $orderCycleClosed)
                            ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]]);
                    })->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;
                case '30':

                    $temp = Order::whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $value, $orderCycleClosed) {
                        $q->whereIn('transaction_status_id', $statusesPaidId)
                            ->where('order_cycle_id', $orderCycleClosed)
                            ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]]);
                    })->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;

                case '90':

                    $temp = Order::whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $value, $orderCycleClosed) {
                        $q->whereIn('transaction_status_id', $statusesPaidId)
                            ->where('order_cycle_id', $orderCycleClosed)
                            ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]]);
                    })->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;

                case 'this_year':
                    $temp = Order::whereHas('transactionLatestRel', function ($q) use ($statusesPaidId, $value, $orderCycleClosed) {
                        $q->whereIn('transaction_status_id', $statusesPaidId)
                            ->where('order_cycle_id', $orderCycleClosed)
                            ->whereMonth('transaction_date', $value["dateValue"])->whereYear('transaction_date', $value["dateYear"]);
                    })->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;
            }
        }
        $valueTotal = collect($rangeStatistics)->sum('Valor') ?? 0;
        $chartData = ["columns" => $columns, "rows" => $rangeStatistics, "value" => $valueTotal];
        return $chartData;
    }

    public function getTotalSales($date, $range)
    {
        $columns = [
            'date', 'Valor'
        ];
        $rangeStatisticsTemp = $this->getRangeStatistics($date, $range);
        $rangeStatistics = $rangeStatisticsTemp["rows"];
        $rangeType = $rangeStatisticsTemp["rangeType"];
        $orderCycleClosed = MasterOrderCycle::where('payment_gateway_value', 'CLOSED')->first()->id;
        $statusesPaidId = MasterTransactionStatus::where('value_status', 'PAID')->get();
        $statusesPaidId = $statusesPaidId->pluck('id');
        foreach ($rangeStatistics as $key => $value) {
            switch ($date) {
                case 'today':
                    $temp = Order::selectRaw("SUM(transactions.amount) as sum,transactions.transaction_status_id")
                        ->join('transactions', 'transactions.order_id', '=', 'orders.id')
                        ->where('order_cycle_id', $orderCycleClosed)
                        ->whereIn('transaction_status_id', $statusesPaidId)
                        ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]])
                        ->groupBy('transactions.transaction_status_id')
                        ->first();
                    $rangeStatistics[$key]["Valor"] = $temp["sum"] ?? 0;
                    break;

                case 'range':
                    $temp = Order::selectRaw("SUM(transactions.amount) as sum,transactions.transaction_status_id")
                        ->join('transactions', 'transactions.order_id', '=', 'orders.id')
                        ->where('order_cycle_id', $orderCycleClosed)
                        ->whereIn('transaction_status_id', $statusesPaidId);
                    if ($rangeType == "day") {
                        $temp = $temp->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]]);
                    } else if ($rangeType == "month") {
                        $temp = $temp->whereMonth('transaction_date', $value["dateValue"])->whereYear('transaction_date', $value["dateYear"]);
                    }
                    $temp = $temp->get();
                    $rangeStatistics[$key]["Valor"] = $temp->sum('sum') ?? 0;
                    break;
                case '7':
                    $temp = Order::selectRaw("SUM(transactions.amount) as sum,transactions.transaction_status_id")
                        ->join('transactions', 'transactions.order_id', '=', 'orders.id')
                        ->where('order_cycle_id', $orderCycleClosed)
                        ->whereIn('transaction_status_id', $statusesPaidId)
                        ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]])
                        ->groupBy('transactions.transaction_status_id')
                        ->first();
                    $rangeStatistics[$key]["Valor"] = $temp["sum"] ?? 0;
                    break;
                case '30':
                    $temp = Order::selectRaw("SUM(transactions.amount) as sum,transactions.transaction_status_id")
                        ->join('transactions', 'transactions.order_id', '=', 'orders.id')
                        ->where('order_cycle_id', $orderCycleClosed)
                        ->whereIn('transaction_status_id', $statusesPaidId)
                        ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]])
                        ->groupBy('transactions.transaction_status_id')
                        ->first();
                    $rangeStatistics[$key]["Valor"] = $temp["sum"] ?? 0;
                    break;

                case '90':
                    $temp = Order::selectRaw("SUM(transactions.amount) as sum,transactions.transaction_status_id")
                        ->join('transactions', 'transactions.order_id', '=', 'orders.id')
                        ->where('order_cycle_id', $orderCycleClosed)
                        ->whereIn('transaction_status_id', $statusesPaidId)
                        ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]])
                        ->groupBy('transactions.transaction_status_id')
                        ->first();
                    $rangeStatistics[$key]["Valor"] = $temp["sum"] ?? 0;
                    break;

                case 'this_year':
                    $temp = Order::selectRaw("SUM(transactions.amount) as sum,transactions.transaction_status_id")
                        ->join('transactions', 'transactions.order_id', '=', 'orders.id')
                        ->where('order_cycle_id', $orderCycleClosed)
                        ->whereIn('transaction_status_id', $statusesPaidId)
                        ->whereMonth('transaction_date', $value["dateValue"])->whereYear('transaction_date', $value["dateYear"])
                        ->groupBy('transactions.transaction_status_id')
                        ->first();
                    $rangeStatistics[$key]["Valor"] = $temp["sum"] ?? 0;
                    break;
            }
        }
        $valueTotal = 'S/. ' . number_format(collect($rangeStatistics)->sum('Valor') ?? 0, 2, '.', ',');
        $chartData = ["columns" => $columns, "rows" => $rangeStatistics, "value" => $valueTotal];
        return $chartData;
    }
}
