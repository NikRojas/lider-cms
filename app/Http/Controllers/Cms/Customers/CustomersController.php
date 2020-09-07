<?php

namespace App\Http\Controllers\Cms\Customers;

use App\Http\Controllers\Controller;
use App\Http\Traits\CmsTrait;
use App\Customer;
use App\Http\Requests\Cms\Customers\CustomerExportRequest;
use App\Repositories\CustomerRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xls;
use PhpOffice\PhpSpreadsheet\Style\Fill as Fill;
use PhpOffice\PhpSpreadsheet\Cell\DataType as DataType;

class CustomersController extends Controller
{
    use CmsTrait;

    public function index(){
        return view ("pages.customers.index");   
    }

    public function getAll(Request $request,CustomerRepository $repo){
      $q = $request->q;
      $headers = ["Id", "Nombre Completo", "Número Documento","Reservas", "Registrado el"];
      if($q){
          $elements = $repo->datatable($request->date,$request->range,$request->itemsPerPage,$q);
      }
      else{
          $elements = $repo->datatable($request->date,$request->range,$request->itemsPerPage);
      }
      $elements["headers"] = $headers;
      return response()->json($elements);
    }

    public function read(Customer $element){
        $element = $element->load('ordersRel')->load('ordersRel.orderDetailsRel.projectRel:id,name_es,slug_es,images','ordersRel.orderDetailsRel.tipologyRel');
        return view ("pages.customers.read", compact('element'));   
    }


    public function export(CustomerExportRequest $request){
        $from = date("Y-m-d 23:59:59", strtotime($request->range[0]));
        $to = date("Y-m-d 23:59:59", strtotime($request->range[1]));
        //dd($from.$to);
        if($from == $to){
            $customers = Customer::whereDate('created_at', '=', date("Y-m-d", strtotime($request->range[0])) )->count();
        }
        else{
            $customers = Customer::whereBetween('created_at', [$from, $to])->count();
        }
        if(!$customers){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.export.no_data.range')],500);
        }
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.export.success'), 'route'=> route('cms.customers.export-file', ["from" => $from ,"to" => $to])]);
    }

    public function exportTotal(){
        $customers = Customer::first(); 
        if(!$customers){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.export.no_data.total')],500);    
        }
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.export.success'), 'route'=> route('cms.customers.export-file')]);
    }

    public function exportFile($from = null,$to = null){
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        if($from && $to){
            if($from == $to){
                $customers = Customer::whereDate('created_at', '=', date("Y-m-d", strtotime($from)) )->orderBy('created_at','desc')->get();
            }
            else{
                $customers = Customer::whereBetween('created_at', [ date("Y-m-d", strtotime($from)), date("Y-m-d", strtotime($to))])->orderBy('created_at','desc')->get();
            }
            $sheet->setTitle(''.(new Carbon($from))->format('d-m-Y'). ' desde '.(new Carbon($to))->format('d-m-Y'));
            $fileName = 'Clientes '.(new Carbon($from))->format('d-m-Y'). ' hasta '.(new Carbon($to))->format('d-m-Y').'.xls';
        }
        else{
            $customers = Customer::orderBy('created_at','desc')->get(); 
            $sheet->setTitle('Total');
            $fileName = 'Clientes Totales.xls';
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
        $sheet->setCellValue('A1','NOMBRES');
        $sheet->setCellValue('B1','APELLIDOS');
        $sheet->setCellValue('C1','DNI');
        $sheet->setCellValue('D1','MOVIL');
        $sheet->setCellValue('E1','EMAIL');
        $sheet->setCellValue('F1','REGISTRADO EL');
        $sheet->setAutoFilter('A1:F1');
        foreach($customers as $key => $el){
            $sheet->setCellValue('A'.($key+2), $el->name);
            $sheet->setCellValue('B'.($key+2), $el->lastname);
            $sheet->setCellValue('C'.($key+2), $el->document_number);
            if($el->mobile){
                $mobile = $el->mobile_formatted;
            }
            else{
                $mobile = "No Registrado";
            }
            $sheet->setCellValue('D'.($key+2), $mobile);
            if($el->email){
                $email = $el->email;
            }
            else{
                $email = "No Registrado";
            }
            $sheet->setCellValue('E'.($key+2), $email);
            $sheet->setCellValue('F'.($key+2), $el->created_at_format);
        }
        $sheet->getStyle('A1:F1')->applyFromArray($style);
        $sheet->getColumnDimension('A')->setAutoSize(true);
        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $sheet->getColumnDimension('D')->setAutoSize(true);
        $sheet->getColumnDimension('E')->setAutoSize(true);
        $sheet->getColumnDimension('F')->setAutoSize(true);
        $writer = new Xls($spreadsheet);
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment; filename="'.$fileName.'"');
        header('Cache-Control: max-age=0');
        return $writer->save("php://output");
    }

}
