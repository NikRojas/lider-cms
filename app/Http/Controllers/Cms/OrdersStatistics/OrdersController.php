<?php

namespace App\Http\Controllers\Cms\OrdersStatistics;

use App\Http\Controllers\Controller;
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
        $element = $element->load('customerRel', 'orderDetailsRel.projectRel:id,name_es,slug_es,images,price', 'orderDetailsRel.tipologyRel', 'transactionsRel.statusRel', 'transactionLatestRel.statusRel');
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

    public function export(OrderExportRequest $request)
    {
        $from = date("Y-m-d 23:59:59", strtotime($request->range[0]));
        $to = date("Y-m-d 23:59:59", strtotime($request->range[1]));
        if ($from == $to) {
            $orders = Order::has('orderDetailsRel')->has('transactionLatestRel')->whereDate('created_at', '=', date("Y-m-d", strtotime($request->range[0])))->count();
        } else {
            $orders = Order::has('orderDetailsRel')->has('transactionLatestRel')->whereBetween('created_at', [$from, $to])->count();
        }
        if (!$orders) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.export.no_data.range')], 500);
        }
        return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.export.success'), 'route' => route('cms.sales-statistics.orders.export-file', ["from" => $from, "to" => $to])]);
    }

    public function exportTotal()
    {
        $orders = Order::first();
        if (!$orders) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.export.no_data.total')], 500);
        }
        return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.export.success'), 'route' => route('cms.sales-statistics.orders.export-file')]);
    }

    public function exportFile($from = null, $to = null)
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        if ($from && $to) {
            if ($from == $to) {
                $orders = Order::has('orderDetailsRel')->has('transactionLatestRel')->whereDate('created_at', '=', date("Y-m-d", strtotime($from)))
                    ->with('customerRel:id,name,lastname')->with('orderDetailsRel.tipologyRel:id,name')->with('orderDetailsRel.projectRel:id,name_es')
                    ->with('transactionLatestRel.statusRel')->orderBy('created_at', 'desc')->get();
            } else {
                $orders = Order::has('orderDetailsRel')->has('transactionLatestRel')->whereBetween('created_at', [date("Y-m-d", strtotime($from)), date("Y-m-d", strtotime($to))])
                    ->with('customerRel:id,name,lastname')->with('orderDetailsRel.tipologyRel:id,name')->with('orderDetailsRel.projectRel:id,name_es')
                    ->with('transactionLatestRel.statusRel')->orderBy('created_at', 'desc')->get();
            }
            $sheet->setTitle('' . (new Carbon($from))->format('d-m-Y') . ' hasta ' . (new Carbon($to))->format('d-m-Y'));
            $fileName = 'Ventas ' . (new Carbon($from))->format('d-m-Y') . ' hasta ' . (new Carbon($to))->format('d-m-Y') . '.xls';
        } else {
            $orders = Order::has('orderDetailsRel')->has('transactionLatestRel')->orderBy('created_at', 'desc')->get();
            $sheet->setTitle('Total');
            $fileName = 'Ventas Totales.xls';
        }
        $style = [
            'font' => [
                'bold' => true,
                'color' => ['rgb' => 'FFFFFF'],
                'size'  => 12,
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'color' => ['rgb' => '1762e6']
            ]
        ];
        $sheet->getStyle('A1:F1')->applyFromArray($style);
        $sheet->setCellValue('A1', 'CODIGO');
        $sheet->setCellValue('B1', 'FECHA');
        $sheet->setCellValue('C1', 'CLIENTE NOMBRES');
        $sheet->setCellValue('D1', 'CLIENTE APELLIDOS');
        $sheet->setCellValue('E1', 'RESERVA PROYECTO');
        $sheet->setCellValue('F1', 'RESERVA TIPOLOGIA');
        $sheet->setCellValue('G1', 'TOTAL');
        $sheet->setCellValue('H1', 'ESTADO DE PAGO');
        $sheet->setAutoFilter('A1:H1');
        foreach ($orders as $key => $el) {
            $sheet->setCellValue('A' . ($key + 2), '#' . $el->id);
            $sheet->setCellValue('B' . ($key + 2), $el->order_date_format_table);
            $sheet->setCellValue('C' . ($key + 2), $el->customerRel["name"]);
            $sheet->setCellValue('D' . ($key + 2), $el->customerRel["lastname"]);
            $sheet->setCellValue('E' . ($key + 2), $el->orderDetailsRel["projectRel"]["name_es"]);
            $sheet->setCellValue('F' . ($key + 2), $el->orderDetailsRel["tipologyRel"]["name"]);
            $sheet->setCellValue('G' . ($key + 2), $el->total_format);
            $sheet->setCellValue('H' . ($key + 2), $el->transactionLatestRel["statusRel"]["name"]);
        }
        $sheet->getStyle('A1:H1')->applyFromArray($style);
        $sheet->getColumnDimension('A')->setAutoSize(true);
        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $sheet->getColumnDimension('D')->setAutoSize(true);
        $sheet->getColumnDimension('E')->setAutoSize(true);
        $sheet->getColumnDimension('F')->setAutoSize(true);
        $sheet->getColumnDimension('G')->setAutoSize(true);
        $writer = new Xls($spreadsheet);
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment; filename="' . $fileName . '"');
        header('Cache-Control: max-age=0');
        return $writer->save("php://output");
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
            dd($e);
            $request->session()->flash('error', trans('custom.message.resend.error'));
            return response()->json(["route" => route('cms.sales-statistics.orders.read',["element" => $element->id])], 500);
        }
    }
}
