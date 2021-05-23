<?php

namespace App\Http\Controllers\Cms\OrdersStatistics;

use App\Exports\OrderExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Export\RangeExportExcel;
use App\Http\Requests\Cms\SalesStatistics\OrderExportRequest;
use App\Http\Traits\CmsTrait;
use App\Order;
use App\Http\Requests\Cms\SalesStatistics\SalesExportRequest;
use App\Notifications\OrderNotPaid;
use App\Notifications\OrderPaid;
use App\Notifications\OrderReceived;
use App\Repositories\OrderRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xls;
use PhpOffice\PhpSpreadsheet\Style\Fill as Fill;
use PhpOffice\PhpSpreadsheet\Cell\DataType as DataType;

class OrdersController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("pages.sales-statistics.orders.index");
    }

    public function getAll(Request $request, OrderRepository $repo)
    {
        $q = $request->q;
        $headers = ["Id", "Código", "Fecha", "Cliente", "Reserva Detalle", "Total", "Estado de Pago"];
        if ($q) {
            $elements = $repo->datatable($request->date, $request->range, $request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatable($request->date, $request->range, $request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function read(Order $element)
    {
        $element = $element->load('customerRel', 'orderDetailsRel.projectRel:id,name_es,slug_es,price_separation'
        , 'orderDetailsRel.departmentRel.viewRel', 'orderDetailsRel.departmentRel.tipologyRel', 'transactionsRel.statusRel', 'transactionLatestRel.statusRel');
        $element["type"] = "Reserve Created";
        $timelineTemp = [];
        $timelineTempGroup = [];
        $timeline = [];
        $timelineTemp[] = $element->toArray();
        $timelineTemp = array_merge($timelineTemp, $element->customerRel->notifications->where('data.order_id', $element->id)->sortByDesc('created_at')->toArray());
        for ($i = 0; $i < count($timelineTemp); $i++) {
            switch ($timelineTemp[$i]["type"]) {
                case 'Reserve Created':
                    $timelineTemp[$i]["message"] = trans('custom.order.timeline.reserve');
                    break;
                case 'App\Notifications\OrderReceived':
                    if($timelineTemp[$i]["data"]["resend"]){
                        $timelineTemp[$i]["message"] = trans('custom.order.timeline.resend_order_received', ["name" => $element->customerRel["name"], "email" => $timelineTemp[$i]["data"]["email"]]);
                    }
                    else{
                        $timelineTemp[$i]["message"] = trans('custom.order.timeline.order_received', ["name" => $element->customerRel["name"], "email" => $timelineTemp[$i]["data"]["email"]]);
                    }
                    break;
                case 'App\Notifications\OrderPaid':
                    if($timelineTemp[$i]["data"]["resend"]){
                        $timelineTemp[$i]["message"] = trans('custom.order.timeline.resend_order_paid', ["name" => $element->customerRel["name"], "email" => $timelineTemp[$i]["data"]["email"]]);
                    }
                    else{
                        $timelineTemp[$i]["message"] = trans('custom.order.timeline.order_paid', ["name" => $element->customerRel["name"], "email" => $timelineTemp[$i]["data"]["email"]]);
                    }
                    break;
                case 'App\Notifications\OrderNotPaid':
                    if($timelineTemp[$i]["data"]["resend"]){
                        $timelineTemp[$i]["message"] = trans('custom.order.timeline.resend_order_not_paid', ["name" => $element->customerRel["name"], "email" => $timelineTemp[$i]["data"]["email"]]);
                    }
                    else{
                        $timelineTemp[$i]["message"] = trans('custom.order.timeline.order_not_paid', ["name" => $element->customerRel["name"], "email" => $timelineTemp[$i]["data"]["email"]]);
                    }
                    break;
            }
            $timelineTemp[$i]["time_format"] = Carbon::parse($timelineTemp[$i]['created_at'])->format('h:i A');
        }
        $timelineTempGroup = collect($timelineTemp);
        $timelineTempGroup = $timelineTempGroup->sortByDesc('created_at')->groupBy(function ($el, $key) {
            return Carbon::parse($el['created_at'])->format('Y');
        });
        foreach ($timelineTempGroup as $key => $value) {
            $timeline[$key . " "] = $value->groupBy(function ($el, $key) {
                return Carbon::parse($el['created_at'])->isoFormat('D [de] MMMM');
            });
        }
        return view("pages.sales-statistics.orders.read", compact('element'))->with('timeline', $timeline);
    }
    
    public function allExport()
    {
        $els = Order::has('orderDetailsRel')->has('transactionLatestRel')->with('customerRel:id,name,lastname,document_number,lastname_2,type_document_id','customerRel.documentTypeRel')->with('orderDetailsRel.departmentRel:id,description')->with('orderDetailsRel.projectRel:id,name_es')
        ->with('transactionLatestRel.statusRel')->orderBy('created_at', 'asc')->get();
        return new OrderExport(null, null, $els);
    }

    public function filterExport(RangeExportExcel $request)
    {
        $from = date("Y-m-d H:i:s", strtotime($request->from));
        $to = date("Y-m-d H:i:s", strtotime($request->to));
        $els = Order::has('orderDetailsRel')->has('transactionLatestRel')->with('customerRel:id,name,lastname,document_number,lastname_2,type_document_id','customerRel.documentTypeRel')->with('orderDetailsRel.departmentRel:id,description')->with('orderDetailsRel.projectRel:id,name_es')
        ->with('transactionLatestRel.statusRel')->whereBetween('created_at', [$from,$to])->orderBy('created_at', 'asc')->get();
        return (new OrderExport($from,$to,$els));
    }

    public function resendEmail(Order $element, Request $request)
    {
        try {
            $element = $element->load('customerRel');
            switch ($request->type) {
                case 'App\Notifications\OrderNotPaid':
                    $element->customerRel->notify(new OrderNotPaid($element,true));
                    break;
                case 'App\Notifications\OrderReceived':
                    $element->customerRel->notify(new OrderReceived($element,true));
                    break;
                case 'App\Notifications\OrderPaid':
                    $element->customerRel->notify(new OrderPaid($element,true));
                    break;
            }
            $request->session()->flash('success', trans('custom.message.resend.success'));
            return response()->json(["route" => route('cms.sales-statistics.orders.read',["element" => $element->id])]);
        } catch (\Exception $e) {
            $request->session()->flash('error', trans('custom.message.resend.error'));
            return response()->json(["route" => route('cms.sales-statistics.orders.read',["element" => $element->id])], 500);
        }
    }
}
