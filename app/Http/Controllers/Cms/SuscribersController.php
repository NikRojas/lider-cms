<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\SuscriberRequest;
use App\Http\Traits\CmsTrait;
use App\Suscriber;
use App\Repositories\SuscriberRepository;
use Illuminate\Http\Request;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xls;
use PhpOffice\PhpSpreadsheet\Style\Fill as Fill;
use PhpOffice\PhpSpreadsheet\Cell\DataType as DataType;
use Carbon\Carbon;

class SuscribersController extends Controller
{
    use CmsTrait;

    public function index(){
        return view ("pages.suscribers");   
    }

    public function getAll(Request $request,SuscriberRepository $repo){
      $q = $request->q;
      $headers = ["Id", "Nombre", "Email","Registrado el"];
      if($q){
          $elements = $repo->datatable($request->date,$request->range,$request->itemsPerPage,$q);
      }
      else{
          $elements = $repo->datatable($request->date,$request->range,$request->itemsPerPage);
      }
      $elements["headers"] = $headers;
      return response()->json($elements);
    }

    public function get(Suscriber $element){
        return response()->json($element);
    }

    public function destroy(Suscriber $element){
        try {
            $destroy = $element->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.suscriber')]) ],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.suscriber')]) ],500);
        }
    }

    public function export(SuscriberRequest $request){
        $from = date("Y-m-d 23:59:59", strtotime($request->range[0]));
        $to = date("Y-m-d 23:59:59", strtotime($request->range[1]));
        //dd($from.$to);
        if($from == $to){
            $suscribers = Suscriber::whereDate('created_at', '=', date("Y-m-d", strtotime($request->range[0])) )->count();
        }
        else{
            $suscribers = Suscriber::whereBetween('created_at', [$from, $to])->count();
        }
        if(!$suscribers){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.export.no_data.range')],500);
        }
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.export.success'), 'route'=> route('cms.suscribers.export-file', ["from" => $from ,"to" => $to])]);
    }

    public function exportTotal(){
        $suscribers = Suscriber::first(); 
        if(!$suscribers){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.export.no_data.total')],500);    
        }
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.export.success'), 'route'=> route('cms.suscribers.export-file')]);
    }

    public function exportFile($from = null,$to = null){
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        if($from && $to){
            if($from == $to){
                $suscribers = Suscriber::whereDate('created_at', '=', date("Y-m-d", strtotime($from)) )->orderBy('created_at','desc')->get();
            }
            else{
                $suscribers = Suscriber::whereBetween('created_at', [ date("Y-m-d", strtotime($from)), date("Y-m-d", strtotime($to))])->orderBy('created_at','desc')->get();
            }
            $sheet->setTitle(''.(new Carbon($from))->format('d-m-Y'). ' desde '.(new Carbon($to))->format('d-m-Y'));
            $fileName = 'Suscriptores '.(new Carbon($from))->format('d-m-Y'). ' hasta '.(new Carbon($to))->format('d-m-Y').'.xls';
        }
        else{
            $suscribers = Suscriber::orderBy('created_at','desc')->get(); 
            $sheet->setTitle('Total');
            $fileName = 'Suscriptores Totales.xls';
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
        $sheet->getStyle('A1:C1')->applyFromArray($style);
        $sheet->setCellValue('A1','NOMBRE');
        $sheet->setCellValue('B1','EMAIL');
        $sheet->setCellValue('C1','REGISTRADO EL');
        $sheet->setAutoFilter('A1:C1');
        foreach($suscribers as $key => $el){
            $sheet->setCellValue('A'.($key+2), $el->name);
            $sheet->setCellValue('B'.($key+2), $el->email);
            $sheet->setCellValue('C'.($key+2), $el->created_at_format);
        }
        $sheet->getStyle('A1:C1')->applyFromArray($style);
        $sheet->getColumnDimension('A')->setAutoSize(true);
        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $writer = new Xls($spreadsheet);
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment; filename="'.$fileName.'"');
        header('Cache-Control: max-age=0');
        return $writer->save("php://output");
    }

}
