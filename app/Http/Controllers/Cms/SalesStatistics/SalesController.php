<?php

namespace App\Http\Controllers\Cms\SalesStatistics;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\SalesStatistics\OrderExportRequest;
use App\Http\Traits\CmsTrait;
use App\Order;
use App\Http\Requests\Cms\SalesStatistics\SalesExportRequest;
use App\Repositories\OrderRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xls;
use PhpOffice\PhpSpreadsheet\Style\Fill as Fill;
use PhpOffice\PhpSpreadsheet\Cell\DataType as DataType;

class SalesController extends Controller
{
    use CmsTrait;

    public function index(){
        return view ("pages.orders.index");   
    }

    public function getAll(Request $request,OrderRepository $repo){
      $q = $request->q;
      $headers = ["Id", "Código", "Fecha", "Cliente", "Reserva Detalle", "Total", "Estado de Pago"];
      if($q){
          $elements = $repo->datatable($request->date,$request->range,$request->itemsPerPage,$q);
      }
      else{
          $elements = $repo->datatable($request->date,$request->range,$request->itemsPerPage);
      }
      $elements["headers"] = $headers;
      return response()->json($elements);
    }

    public function read(Order $element){
        $element = $element->load('customerRel','orderDetailsRel.projectRel:id,name_es,slug_es,images,price','orderDetailsRel.tipologyRel','transactionsRel.statusRel','transactionLatestRel.statusRel');
        return view ("pages.orders.read", compact('element'));   
    }

    public function export(OrderExportRequest $request){
        $from = date("Y-m-d 23:59:59", strtotime($request->range[0]));
        $to = date("Y-m-d 23:59:59", strtotime($request->range[1]));
        if($from == $to){
            $orders = Order::whereDate('created_at', '=', date("Y-m-d", strtotime($request->range[0])) )->count();
        }
        else{
            $orders = Order::whereBetween('created_at', [$from, $to])->count();
        }
        if(!$orders){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.export.no_data.range')],500);
        }
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.export.success'), 'route'=> route('cms.sales-statistics.orders.export-file', ["from" => $from ,"to" => $to])]);
    }

    public function exportTotal(){
        $orders = Order::first(); 
        if(!$orders){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.export.no_data.total')],500);    
        }
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.export.success'), 'route'=> route('cms.sales-statistics.orders.export-file')]);
    }

    public function exportFile($from = null,$to = null){
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        if($from && $to){
            if($from == $to){
                $orders = Order::whereDate('created_at', '=', date("Y-m-d", strtotime($from)) )
                ->with('customerRel:id,name,lastname')->with('orderDetailsRel.tipologyRel:id,name')->with('orderDetailsRel.projectRel:id,name_es')
                ->with('transactionLatestRel.statusRel')->orderBy('created_at','desc')->get();
            }
            else{
                $orders = Order::whereBetween('created_at', [ date("Y-m-d", strtotime($from)), date("Y-m-d", strtotime($to))])
                ->with('customerRel:id,name,lastname')->with('orderDetailsRel.tipologyRel:id,name')->with('orderDetailsRel.projectRel:id,name_es')
                ->with('transactionLatestRel.statusRel')->orderBy('created_at','desc')->get();
            }
            $sheet->setTitle(''.(new Carbon($from))->format('d-m-Y'). ' hasta '.(new Carbon($to))->format('d-m-Y'));
            $fileName = 'Ventas '.(new Carbon($from))->format('d-m-Y'). ' hasta '.(new Carbon($to))->format('d-m-Y').'.xls';
        }
        else{
            $orders = Order::orderBy('created_at','desc')->get(); 
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
        $sheet->setCellValue('A1','CODIGO');
        $sheet->setCellValue('B1','FECHA');
        $sheet->setCellValue('C1','CLIENTE NOMBRES');
        $sheet->setCellValue('D1','CLIENTE APELLIDOS');
        $sheet->setCellValue('E1','RESERVA PROYECTO');
        $sheet->setCellValue('F1','RESERVA TIPOLOGIA');
        $sheet->setCellValue('G1','TOTAL');
        $sheet->setCellValue('H1','ESTADO DE PAGO');
        $sheet->setAutoFilter('A1:H1');
        foreach($orders as $key => $el){
            $sheet->setCellValue('A'.($key+2), '#'.$el->id);
            $sheet->setCellValue('B'.($key+2), $el->order_date_format_table);
            $sheet->setCellValue('C'.($key+2), $el->customerRel["name"]);
            $sheet->setCellValue('D'.($key+2), $el->customerRel["lastname"]);
            $sheet->setCellValue('E'.($key+2), $el->orderDetailsRel[0]["projectRel"]["name_es"]);
            $sheet->setCellValue('F'.($key+2), $el->orderDetailsRel[0]["tipologyRel"]["name"]);
            $sheet->setCellValue('G'.($key+2), $el->total_format);
            $sheet->setCellValue('H'.($key+2), $el->transactionLatestRel["statusRel"]["name"]);
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
        header('Content-Disposition: attachment; filename="'.$fileName.'"');
        header('Cache-Control: max-age=0');
        return $writer->save("php://output");
    }
}
