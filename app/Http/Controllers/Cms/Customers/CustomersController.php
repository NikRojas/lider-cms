<?php

namespace App\Http\Controllers\Cms\Customers;

use App\Http\Controllers\Controller;
use App\Http\Traits\CmsTrait;
use App\Customer;
use App\Exports\CustomerExport;
use App\Http\Requests\Cms\Export\RangeExportExcel;
use App\Repositories\CustomerRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;

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
        $element = $element->load('ordersRel')->load('documentTypeRel')->load('ordersRel.orderDetailsRel.projectRel:id,name_es,slug_es','ordersRel.orderDetailsRel.departmentRel.viewRel'
        ,'ordersRel.orderDetailsRel.departmentRel.tipologyRel');
        return view ("pages.customers.read", compact('element'));   
    }

    public function allExport()
    {
        $els = Customer::with('documentTypeRel')->orderBy('created_at', 'asc')->get();
        return new CustomerExport(null, null, $els);
    }

    public function filterExport(RangeExportExcel $request)
    {
        $from = date("Y-m-d H:i:s", strtotime($request->from));
        $to = date("Y-m-d H:i:s", strtotime($request->to));
        $els = Customer::whereBetween('created_at', [$from,$to])->orderBy('created_at', 'asc')->get();
        return (new CustomerExport($from,$to,$els));
    }
}
