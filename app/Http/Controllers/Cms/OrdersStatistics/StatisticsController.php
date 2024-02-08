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
                    $max = $date->diffInMonths($date2) + 1;
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
                    $rows[] = ["date" => $dateTemp->isoFormat($format) . ' ' . substr($dateTemp->year, -2), "dateValue" => $dateTemp->month, "dateYear" => $dateTemp->year];
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
        $statusesPaidId = $statusesPaidId->pluck('id')->toArray();
        $orderCycleClosed = MasterOrderCycle::where('payment_gateway_value', 'CLOSED')->first()->id;
        foreach ($parentType as $key => $value) {
            foreach ($rangeStatistics["rows"] as $key2 => $value2) {
                switch ($date) {
                    case 'today':
                    case '7':
                    case '30':
                    case '90':
                        $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->whereHas('departmentRel', function ($q2) use ($value) {
                                $q2->whereHas('tipologyRel', function ($q3) use ($value) {
                                    $q3->where('parent_type_department_id', $value->id);
                                });
                            });
                        })->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                && (new Carbon($order->transactionLatestRel->transaction_date))->between($value2["dateValue"], $value2["dateValue2"]);
                        })->count();
                    break;

                    case 'range':
                        if ($rangeType == "day") {
                            $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                                $q->whereHas('departmentRel', function ($q2) use ($value) {
                                    $q2->whereHas('tipologyRel', function ($q3) use ($value) {
                                        $q3->where('parent_type_department_id', $value->id);
                                    });
                                });
                            })->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value2) {
                                return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                    && (new Carbon($order->transactionLatestRel->transaction_date))->between($value2["dateValue"], $value2["dateValue2"]);
                            })->count();
                        } else if ($rangeType == "month") {
                            $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                                $q->whereHas('departmentRel', function ($q2) use ($value) {
                                    $q2->whereHas('tipologyRel', function ($q3) use ($value) {
                                        $q3->where('parent_type_department_id', $value->id);
                                    });
                                });
                            })->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value2) {
                                return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                    && (new Carbon($order->transactionLatestRel->transaction_date))->month == $value2["dateValue"] && (new Carbon($order->transactionLatestRel->transaction_date))->year == $value2["dateYear"];
                            })->count();
                        }
                        break;
                    break;

                    case 'this_year':
                        $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->whereHas('departmentRel', function ($q2) use ($value) {
                                $q2->whereHas('tipologyRel', function ($q3) use ($value) {
                                    $q3->where('parent_type_department_id', $value->id);
                                });
                            });
                        })->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                && (new Carbon($order->transactionLatestRel->transaction_date))->month == $value2["dateValue"] && (new Carbon($order->transactionLatestRel->transaction_date))->year == $value2["dateYear"];
                        })->count();
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
        $statusesPaidId = $statusesPaidId->pluck('id')->toArray();
        $orderCycleClosed = MasterOrderCycle::where('payment_gateway_value', 'CLOSED')->first()->id;
        foreach ($projects as $key => $value) {
            foreach ($rangeStatistics["rows"] as $key2 => $value2) {
                switch ($date) {
                    case 'range':
                            if ($rangeType == "day") {
                                $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                                    $q->where('project_id', $value->id);
                                })->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value2) {
                                    return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                        && (new Carbon($order->transactionLatestRel->transaction_date))->between($value2["dateValue"], $value2["dateValue2"]);
                                });
                            } else if ($rangeType == "month") {
                                $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                                    $q->where('project_id', $value->id);
                                })->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value2) {
                                    return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                        && (new Carbon($order->transactionLatestRel->transaction_date))->month == $value2["dateValue"] && (new Carbon($order->transactionLatestRel->transaction_date))->year == $value2["dateYear"];
                                });
                            }
                            $temp = $temp->count();
                            break;
                    case 'today':
                    case '7':
                    case '30':
                    case '90':
                        $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                && (new Carbon($order->transactionLatestRel->transaction_date))->between($value2["dateValue"], $value2["dateValue2"]);
                        })->count();
                        break;
                    case 'this_year':
                        $temp = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                && (new Carbon($order->transactionLatestRel->transaction_date))->month == $value2["dateValue"] && (new Carbon($order->transactionLatestRel->transaction_date))->year == $value2["dateYear"];
                        })->count();
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
        $statusesPaidId = $statusesPaidId->pluck('id')->toArray();
        $orderCycleClosed = MasterOrderCycle::where('payment_gateway_value', 'CLOSED')->first()->id;
        $data = [];
        foreach ($rangeStatistics["rows"] as $key2 => $value2) {
            switch ($date) {
                case 'range':
                    if ($rangeType == "day") {
                        $temp = Order::with('packageRel','currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                && (new Carbon($order->transactionLatestRel->transaction_date))->between($value2["dateValue"], $value2["dateValue2"]);
                        });
                    } else if ($rangeType == "month") {
                        $temp = Order::with('packageRel','currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value2) {
                            return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                && (new Carbon($order->transactionLatestRel->transaction_date))->month == $value2["dateValue"] && (new Carbon($order->transactionLatestRel->transaction_date))->year == $value2["dateYear"];
                        });
                    }
                    break;
                case 'today':
                case '7':
                case '30':
                case '90':
                    $temp = Order::with('packageRel','currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value2) {
                        return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                            && (new Carbon($order->transactionLatestRel->transaction_date))->between($value2["dateValue"], $value2["dateValue2"]);
                    });
                    break;
                case 'this_year':
                    $temp = Order::with('packageRel','currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value2) {
                        return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                            && (new Carbon($order->transactionLatestRel->transaction_date))->month == $value2["dateValue"] && (new Carbon($order->transactionLatestRel->transaction_date))->year == $value2["dateYear"];
                    });
                    break;
            }
            $temp2[] = $temp;
        }
        $temp2 =  collect($temp2)->collapse()->unique()->all();
        foreach ($temp2 as $k => $v) {
            $description = NULL;
            if($v->real_state_package_id){
                $description .= '<div><b>'.$v->packageRel->description.'</b></div>';
            }
            foreach ($v->orderDetailsRel as $key21 => $value21) {
                $description .= '<div>'.$value21->departmentRel->description.'</div>';
            }
            $data[$k]["name"] = $description;
            $data[$k]["project"] = $v->orderDetailsRel[0]->projectRel->name_es;
            $data[$k]["tipology"] = $v->orderDetailsRel[0]->departmentRel->tipologyRel->name;
            $data[$k]["tipo"] = $v->orderDetailsRel[0]->departmentRel->tipologyRel->parentTypeDepartmentRel->name;
            $data[$k]["price"] = $v->total_format;
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
        $statusesPaidId = $statusesPaidId->pluck('id')->toArray();
        $orderCycleClosed = MasterOrderCycle::where('payment_gateway_value', 'CLOSED')->first()->id;
        foreach ($rangeStatistics as $key => $value) {
            switch ($date) {
                case 'today':
                case '7':
                case '30':
                case '90':
                    $temp = Order::with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value) {
                        return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                            && (new Carbon($order->transactionLatestRel->transaction_date))->between($value["dateValue"], $value["dateValue2"]);
                    })->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;
                case 'range':
                    if ($rangeType == "day") {
                        $temp = Order::with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value) {
                            return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                && (new Carbon($order->transactionLatestRel->transaction_date))->between($value["dateValue"], $value["dateValue2"]);
                        })->count();
                    } else if ($rangeType == "month") {
                        $temp = Order::with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value) {
                            return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                && (new Carbon($order->transactionLatestRel->transaction_date))->month == $value["dateValue"] && (new Carbon($order->transactionLatestRel->transaction_date))->year == $value["dateYear"];;
                        })->count();
                    }
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;
                case 'this_year':
                    $temp = Order::with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value) {
                        return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                            && (new Carbon($order->transactionLatestRel->transaction_date))->month == $value["dateValue"] && (new Carbon($order->transactionLatestRel->transaction_date))->year == $value["dateYear"];
                    })->count();
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
        $rangeStatisticsForeign = $rangeStatisticsTemp["rows"];
        $rangeType = $rangeStatisticsTemp["rangeType"];
        $orderCycleClosed = MasterOrderCycle::where('payment_gateway_value', 'CLOSED')->first()->id;
        $statusesPaidId = MasterTransactionStatus::where('value_status', 'PAID')->get();
        $statusesPaidId = $statusesPaidId->pluck('id')->toArray();
        foreach ($rangeStatistics as $key => $value) {
            switch ($date) {
                case 'today':
                case '7':
                case '30':
                case '90':
                    $temp = Order::where('master_currency_id', 1)->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value) {
                        return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                            && (new Carbon($order->transactionLatestRel->transaction_date))->between($value["dateValue"], $value["dateValue2"]);
                    })->sum('transactionLatestRel.amount');
                    $temp2 = Order::where('master_currency_id', 2)->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value) {
                            return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                && (new Carbon($order->transactionLatestRel->transaction_date))->between($value["dateValue"], $value["dateValue2"]);
                        })->sum('transactionLatestRel.amount');
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    $rangeStatisticsForeign[$key]["Valor"] = $temp2 ?? 0;
                    break;
                case 'range':
                        if ($rangeType == "day") {
                            $temp = Order::where('master_currency_id', 1)->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value) {
                                return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                    && (new Carbon($order->transactionLatestRel->transaction_date))->between($value["dateValue"], $value["dateValue2"]);
                            })->sum('transactionLatestRel.amount');
                        } else if ($rangeType == "month") {
                            $temp = Order::where('master_currency_id', 1)->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value) {
                                return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                && (new Carbon($order->transactionLatestRel->transaction_date))->month == $value["dateValue"] && (new Carbon($order->transactionLatestRel->transaction_date))->year == $value["dateYear"];
                            })->sum('transactionLatestRel.amount');
                        }
                        $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                        if ($rangeType == "day") {
                            $temp2 = Order::where('master_currency_id', 2)->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value) {
                                return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                    && (new Carbon($order->transactionLatestRel->transaction_date))->between($value["dateValue"], $value["dateValue2"]);
                            })->sum('transactionLatestRel.amount');
                        } else if ($rangeType == "month") {
                            $temp2 = Order::where('master_currency_id', 2)->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value) {
                                return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                && (new Carbon($order->transactionLatestRel->transaction_date))->month == $value["dateValue"] && (new Carbon($order->transactionLatestRel->transaction_date))->year == $value["dateYear"];
                            })->sum('transactionLatestRel.amount');
                        }
                        $rangeStatisticsForeign[$key]["Valor"] = $temp2 ?? 0;
                        break;
                case 'this_year':
                        $temp = Order::where('master_currency_id', 1)->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value) {
                            return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                && (new Carbon($order->transactionLatestRel->transaction_date))->month == $value["dateValue"] && (new Carbon($order->transactionLatestRel->transaction_date))->year == $value["dateYear"];
                        })->sum('transactionLatestRel.amount');
                        $temp2 = Order::where('master_currency_id', 2)->with('currencyRel', 'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel', 'orderDetailsRel.projectRel', 'transactionLatestRel')->get()->filter(function ($order) use ($statusesPaidId, $orderCycleClosed, $value) {
                            return in_array($order->transactionLatestRel->transaction_status_id, $statusesPaidId) && $order->transactionLatestRel->order_cycle_id == $orderCycleClosed
                                && (new Carbon($order->transactionLatestRel->transaction_date))->month == $value["dateValue"] && (new Carbon($order->transactionLatestRel->transaction_date))->year == $value["dateYear"];
                        })->sum('transactionLatestRel.amount');
                        $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                        $rangeStatisticsForeign[$key]["Valor"] = $temp2 ?? 0;
                break;
            }
        }
        $valueTotal = 'S/. ' . number_format(collect($rangeStatistics)->sum('Valor') ?? 0, 2, '.', ',');
        $valueTotalForeign = '$. ' . number_format(collect($rangeStatisticsForeign)->sum('Valor') ?? 0, 2, '.', ',');
        $chartData = ["columns" => $columns, "rows" => $rangeStatistics, "value" => $valueTotal];
        $chartDataForeign = ["columns" => $columns, "rows" => $rangeStatisticsForeign, "value" => $valueTotalForeign];
        return ["chartData" => $chartData, "chartDataForeign" => $chartDataForeign];
    }
}
