<?php

namespace App\Http\Controllers\Cms\OrdersStatistics;

use App\Exports\OrderExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Export\RangeExportExcel;
use App\Http\Traits\CmsTrait;
use App\LogSapConnection;
use App\Order;
use App\MasterTransactionStatus;
use App\Notifications\OrderNotPaid;
use App\Notifications\OrderPaid;
use App\Notifications\OrderReceived;
use App\Project;
use App\Repositories\OrderRepository;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class OrdersController extends Controller
{
    use CmsTrait;

    public function index()
    {
        $projects = Project::select('id','name_es')->orderBy('index')->get();
        $transactions = MasterTransactionStatus::get();
        return view("pages.sales-statistics.orders.index", compact('projects','transactions'));
    }

    public function getAll(Request $request, OrderRepository $repo)
    {
        $q = $request->q;
        $headers = ["Id", "Código", "Fecha", "Cliente", "Reserva Detalle", "Total", "Estado de Pago", "Enviado a SAP"];
        $projects = [];
        $transactions = [];
        if($request->projects){
            $projects = $request->projects;
        }
        if($request->transactions){
            $transactions = $request->transactions;
        }
        if ($q) {
            $elements = $repo->datatable($request->date, $request->range, $request->itemsPerPage, $q, $projects, $transactions);
        } else {
            $elements = $repo->datatable($request->date, $request->range, $request->itemsPerPage, NULL, $projects, $transactions);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function read(Order $element)
    {
        $element = $element->load('advisorRel','customerRel.documentTypeRel', 'orderDetailsRel.projectRel:id,name_es,slug_es,price_separation'
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

    //private $url = 'https://apps.lider.com.pe:8072/api/cliente/inmuebles/reserva';
    public function sendToSap(Order $element){
        $element = $element->load('customerRel.documentTypeRel')->load('advisorRel')->load('orderDetailsRel.departmentRel');
        $type = 'Reservar Inmueble Manual';
        $estate = $element->orderDetailsRel->first();
        $description = 'Reserva ' . $element->id . ' Inmueble '.$estate->description.'(Código SAP: '.$estate->departmentRel->sap_code.')' ;
        if($element->advisor_id){
            if($element->advisorRel->sap_code){
                $slug = Str::random(20);
                try {
                    #Hacer las pruebas con SAP
                    $client = new Client();
                    $responseSap = $client->request('POST', $this->url,  [
                        'form_params' => [
                            'nro_documento' => $element->customerRel->document_number,
                            'tipo_documento' => $element->customerRel->documentTypeRel->sap_code,
                            'nombre' =>  $element->customerRel->name,
                            'apellido_paterno' => $element->customerRel->lastname,
                            'apellido_materno' => $element->customerRel->lastname_2,
                            'telefono' => $element->customerRel->mobile,
                            'correo' => $element->customerRel->email,
                            'inmueble' => $element->orderDetailsRel->first()->departmentRel->sap_code,
                            'vendedor' => $element->advisorRel->sap_code,
                        ]
                    ]);
                    $status = $responseSap->getStatusCode();
                    $responseData = json_decode($responseSap->getBody());
                    /*$status = 200;
                    $responseSap = '{
                        "exito": false,
                        "reserva": "0040000200",
                        "mensaje": ""
                    }';
                    $responseData = json_decode($responseSap);*/
                    if($responseData->exito){
                        $element->sended_to_sap = 1;
                        $element->sended_to_sap_date = Carbon::now();
                        $element->sended_code_sap = $responseData->reserva;
                        $element->save();
                        #LogSapConnection
                        $lsc = new LogSapConnection();
                        $lsc->type = $type;
                        $lsc->status = $status;
                        $lsc->slug = $slug;
                        $lsc->description = $description. ' - Éxito.';
                        $lsc->response =  (string) $responseSap->getBody();
                        #Test
                        //$lsc->response =  (string) $responseSap;
                        $lsc->save();
                        #EndLogSapConnection
                        return response()->json(["success" => true, 'message' => 'La reserva envío con éxito.']);
                    }
                    else{
                        #LogSapConnection
                        $lsc = new LogSapConnection();
                        $lsc->type = $type;
                        $lsc->status = $status;
                        $lsc->slug = $slug;
                        $lsc->description = $description. ' - Error.';
                        $lsc->response =  (string) $responseSap->getBody();
                        #Test
                        //$lsc->response =  (string) $responseSap;
                        $lsc->save();
                        #EndLogSapConnection
                        return response()->json(["success" => false, 'message' => 'Lo sentimos, ocurrió un error en SAP al registrar la reserva.']);
                    }
                    
                }
                catch (\GuzzleHttp\Exception\RequestException $e) {
                    return response()->json(["success" => false, 'message' => 'Lo sentimos, no se pudo enviar la reserva.'], 500);
                }
            }
            else{
                return response()->json(["success" => false,'message' => 'El asesor no tiene código SAP.'], 500); 
            }
        }
        else{
            return response()->json(["success" => false,'message' => 'La reserva no tiene un asesor asignado.'], 500); 
        }
    }
}
