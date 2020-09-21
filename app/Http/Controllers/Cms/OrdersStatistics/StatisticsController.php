<?php

namespace App\Http\Controllers\Cms\OrdersStatistics;

use App\Http\Controllers\Controller;
use App\MasterTransactionStatus;
//use App\Http\Traits\CmsTrait;
use App\Order;
use App\Project;
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
        $reservesPerTipology = $this->getReserversPerTipology($request->date, $request->range);
        $response = ["total_sales" => $totalSales, "total_orders" => $totalReserves, "reservers_per_project" => $reservesPerProject, "reservers_per_tipology" => $reservesPerTipology];
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
                $max = $date->diffInDays($date2);
                if ($max > 90) {
                    $rangeType = "month";
                    $max = intdiv($max, 30);
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
                    /*$dateTemp = $date;
                    $rows[] = ["date" => $dateTemp->isoFormat($format), "dateValue" => $dateTemp->copy()->startOfDay()->toDateTimeString(), "dateValue2" => $dateTemp->endOfDay()->toDateTimeString()];
                    $dateTemp = $date->addDay();*/
                    if ($rangeType == 'month') {
                        $dateTemp = $date->addMonth();
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
    //Listo salvo fallo
    public function getReservesPerProject($date, $range)
    {
        $rangeStatistics = $this->getRangeStatistics($date, $range);
        $dateSub = $rangeStatistics["dateSub"];
        $projects = Project::select("id", "name_es")->get();
        $statusPaidId = MasterTransactionStatus::where('name', 'Pagado')->first()->id;
        foreach ($projects as $key => $value) {
            foreach ($rangeStatistics["rows"] as $key2 => $value2) {
                switch ($date) {
                    case 'today':
                        $projects[$key]["value"] = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $value2) {
                            $q->where('transaction_status_id', $statusPaidId)
                                ->whereDate('transaction_date', $value2["dateValue"]);
                        })->get()->count();
                        break;

                    case 'range':
                        $projects[$key]["value"] = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $dateSub) {
                            $q->where('transaction_status_id', $statusPaidId)
                                ->whereDate('transaction_date', '>=', $dateSub);
                        })->get()->count();
                        break;

                    case '7':
                        $projects[$key]["value"] = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $dateSub) {
                            $q->where('transaction_status_id', $statusPaidId)
                                ->whereDate('transaction_date', '>=', $dateSub);
                        })->get()->count();

                        break;
                    case '30':
                        $projects[$key]["value"] = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $dateSub) {
                            $q->where('transaction_status_id', $statusPaidId)
                                ->whereDate('transaction_date', '>=', $dateSub);
                        })->get()->count();

                        break;

                    case '90':
                        $projects[$key]["value"] = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $dateSub) {
                            $q->where('transaction_status_id', $statusPaidId)
                                ->whereDate('transaction_date', '>=', $dateSub);
                        })->get()->count();

                        break;

                    case 'this_year':
                        $projects[$key]["value"] = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $dateSub) {
                            $q->where('transaction_status_id', $statusPaidId)
                                ->whereDate('transaction_date', '>=', $dateSub);
                        })->get()->count();
                        break;
                }
            }
        }
        $columns = [
            'name_es', 'value'
        ];
        return ["rows" => $projects, "columns" => $columns];
    }

    public function getReserversPerTipology($date, $range)
    {
        $rangeStatistics = $this->getRangeStatistics($date, $range);
        $dateSub = $rangeStatistics["dateSub"];
        $tipologies = ProjectTypeDepartment::select("id", "name", "project_id")->with('projectRel:id,name_es')->get();
        $statusPaidId = MasterTransactionStatus::where('name', 'Pagado')->first()->id;
        foreach ($tipologies as $key => $value) {
            foreach ($rangeStatistics["rows"] as $key2 => $value2) {
                switch ($date) {
                    case 'today':
                        $tipologies[$key]["value"] = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $value2) {
                            $q->where('transaction_status_id', $statusPaidId)
                                ->whereDate('transaction_date', $value2["dateValue"]);
                        })->get()->count();
                        break;

                    case 'range':
                        $tipologies[$key]["value"] = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $dateSub) {
                            $q->where('transaction_status_id', $statusPaidId)
                                ->whereDate('transaction_date', '>=', $dateSub);
                        })->get()->count();
                        break;
                    case '7':
                        $tipologies[$key]["value"] = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $dateSub) {
                            $q->where('transaction_status_id', $statusPaidId)
                                ->whereDate('transaction_date', '>=', $dateSub);
                        })->get()->count();
                        break;
                    case '30':
                        $tipologies[$key]["value"] = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $dateSub) {
                            $q->where('transaction_status_id', $statusPaidId)
                                ->whereDate('transaction_date', '>=', $dateSub);
                        })->get()->count();
                        break;

                    case '90':
                        $tipologies[$key]["value"] = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $dateSub) {
                            $q->where('transaction_status_id', $statusPaidId)
                                ->whereDate('transaction_date', '>=', $dateSub);
                        })->get()->count();
                        break;

                    case 'this_year':
                        $tipologies[$key]["value"] = Order::whereHas('orderDetailsRel', function ($q) use ($value) {
                            $q->where('project_id', $value->id);
                        })->whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $dateSub) {
                            $q->where('transaction_status_id', $statusPaidId)
                                ->whereDate('transaction_date', '>=', $dateSub);
                        })->get()->count();
                        break;
                }
            }
            $tipologies[$key]["name_format"] = $value->name . " - " . $value->projectRel["name_es"];
        }
        $columns = [
            'name_format', 'value'
        ];
        return ["rows" => $tipologies, "columns" => $columns];
    }

    public function getTotalOrders($date, $range)
    {
        $columns = [
            'date', 'Valor'
        ];
        $rangeStatisticsTemp = $this->getRangeStatistics($date, $range);
        $rangeStatistics = $rangeStatisticsTemp["rows"];
        $rangeType = $rangeStatisticsTemp["rangeType"];
        $statusPaidId = MasterTransactionStatus::where('name', 'Pagado')->first()->id;
        foreach ($rangeStatistics as $key => $value) {
            switch ($date) {
                case 'today':
                    $temp = Order::whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $value) {
                        $q->where('transaction_status_id', $statusPaidId)
                            ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]]);
                    })->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;
                case 'range':
                    if ($rangeType == "day") {
                        $temp = Order::whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $value) {
                            $q->where('transaction_status_id', $statusPaidId)
                                ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]]);
                        });
                    } else if ($rangeType == "month") {
                        $temp = Order::whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $value) {
                            $q->where('transaction_status_id', $statusPaidId)
                            ->whereMonth('transaction_date', $value["dateValue"])->whereYear('transaction_date', $value["dateYear"]);
                        });
                    }
                    $temp = $temp->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;
                case '7':
                    $temp = Order::whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $value) {
                        $q->where('transaction_status_id', $statusPaidId)
                            ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]]);
                    })->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;
                case '30':

                    $temp = Order::whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $value) {
                        $q->where('transaction_status_id', $statusPaidId)
                            ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]]);
                    })->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;

                case '90':

                    $temp = Order::whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $value) {
                        $q->where('transaction_status_id', $statusPaidId)
                            ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]]);
                    })->get()->count();
                    $rangeStatistics[$key]["Valor"] = $temp ?? 0;
                    break;

                case 'this_year':
                    $temp = Order::whereHas('transactionLatestRel', function ($q) use ($statusPaidId, $value) {
                        $q->where('transaction_status_id', $statusPaidId)
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
        $statusPaidId = MasterTransactionStatus::where('name', 'Pagado')->first()->id;
        foreach ($rangeStatistics as $key => $value) {
            switch ($date) {
                case 'today':
                    $temp = Order::
                        selectRaw("SUM(transactions.amount) as sum,transactions.transaction_status_id")
                        ->join('transactions', 'transactions.order_id', '=', 'orders.id')
                        ->where('transaction_status_id', $statusPaidId)
                        ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]])
                        ->groupBy('transactions.transaction_status_id')
                        ->first();
                    $rangeStatistics[$key]["Valor"] = $temp["sum"] ?? 0;
                    break;

                case 'range':
                    $temp = Order::
                        selectRaw("SUM(transactions.amount) as sum,transactions.transaction_status_id")
                        ->join('transactions', 'transactions.order_id', '=', 'orders.id')
                        ->where('transaction_status_id', $statusPaidId);
                    if ($rangeType == "day") {
                        $temp = $temp->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]]);
                    } else if ($rangeType == "month") {
                        $temp = $temp->whereMonth('transaction_date', $value["dateValue"])->whereYear('transaction_date', $value["dateYear"]);
                    }
                    $temp = $temp->groupBy('transactions.transaction_status_id')->first();
                    $rangeStatistics[$key]["Valor"] = $temp["sum"] ?? 0;
                    break;
                case '7':
                    $temp = Order::
                        selectRaw("SUM(transactions.amount) as sum,transactions.transaction_status_id")
                        ->join('transactions', 'transactions.order_id', '=', 'orders.id')
                        ->where('transaction_status_id', $statusPaidId)
                        ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]])
                        ->groupBy('transactions.transaction_status_id')
                        ->first();
                    $rangeStatistics[$key]["Valor"] = $temp["sum"] ?? 0;
                    break;
                case '30':
                        $temp = Order::
                        selectRaw("SUM(transactions.amount) as sum,transactions.transaction_status_id")
                        ->join('transactions', 'transactions.order_id', '=', 'orders.id')
                        ->where('transaction_status_id', $statusPaidId)
                        ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]])
                        ->groupBy('transactions.transaction_status_id')
                        ->first();
                    $rangeStatistics[$key]["Valor"] = $temp["sum"] ?? 0;
                    break;

                case '90':
                        $temp = Order::
                        selectRaw("SUM(transactions.amount) as sum,transactions.transaction_status_id")
                        ->join('transactions', 'transactions.order_id', '=', 'orders.id')
                        ->where('transaction_status_id', $statusPaidId)
                        ->whereBetween('transaction_date', [$value["dateValue"], $value["dateValue2"]])
                        ->groupBy('transactions.transaction_status_id')
                        ->first();
                    $rangeStatistics[$key]["Valor"] = $temp["sum"] ?? 0;
                    break;

                case 'this_year':
                        $temp = Order::
                        selectRaw("SUM(transactions.amount) as sum,transactions.transaction_status_id")
                        ->join('transactions', 'transactions.order_id', '=', 'orders.id')
                        ->where('transaction_status_id', $statusPaidId)
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
