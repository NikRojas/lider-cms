<?php

namespace App\Jobs;

use App\Advisor;
use App\Department;
use App\LogSapConnection;
use App\Notifications\AdvisorOrderPaid;
use App\Order;
use App\RealStatePackage;
use App\SapCredential;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Str;

class SendReserveToSap implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $order;
    private $url = "/api/cliente/inmuebles/reserva";
    private $lscType = 'Reservar Inmueble';
    public $tries = 1;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($order)
    {
        $this->order = $order->load('orderDetailsRel.departmentRel','orderDetailsRel.projectRel.advisorsRel','customerRel.documentTypeRel');
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->url = config('services.sap_url').$this->url;
        #Obtener Credenciales
        $sapCredentials = SapCredential::first();
        if (!$sapCredentials->token) {
            $lsc = LogSapConnection::UpdateOrCreate(["type" => $this->lscType, 'description' =>  trans('custom.message.sap.no_token')]);
        }
        $slug = Str::random(20);
        if($this->order->department_id){
            $departmentsId = [$this->order->department_id];
            $sapCode = $this->order->orderDetailsRel[0]->departmentRel->sap_code;
            $description = 'Inmueble '.$this->order->orderDetailsRel[0]->departmentRel->description.' (Código SAP: '.$sapCode.') Proyecto ' . $this->order->orderDetailsRel[0]->projectRel->name_es;
            $sapCodes = [$this->order->orderDetailsRel[0]->departmentRel->sap_code];
        }
        #Es Combo
        else{
            $departmentsId = $this->order->orderDetailsRel->pluck('department_id');
            $descriptions = $this->order->orderDetailsRel->pluck('departmentRel.description')->values()->all();
            $sapCodes = $this->order->orderDetailsRel->pluck('departmentRel.sap_code')->values()->all();
            $description = 'Inmuebles '.implode(", ", $descriptions).' (Códigos SAP: '.implode(", ", $sapCodes).') Proyecto ' . $this->order->orderDetailsRel[0]->projectRel->name_es;
        }
        try {
            if(!$this->order->advisor_id){
                $advisorId = null;
                $advisors = $this->order->orderDetailsRel[0]->projectRel->advisorsRel;
                $ifItsFirstRecord = Order::count();
                //Is First Record
                if($ifItsFirstRecord == 1){
                    $advisorId = $advisors->first()->id;
                }
                else{
                    $advisorsTotal = $advisors->count() - 1;
                    $lastOrders = Order::orderBy('created_at','desc')->skip(1)->take($advisorsTotal)->get();
                    $pluckAdvisors = $advisors->pluck('id');
                    $pluckAdvisorsLastOrders = $lastOrders->pluck('advisor_id');

                    $diff = $pluckAdvisors->diff($pluckAdvisorsLastOrders);
                    $diff = $diff->all();
                    if(!$diff){
                        $advisorId = $advisors->first()->id;
                    }
                    else{
                        $advisorId = array_pop($diff);
                    }
                }
                $advisorId = $advisorId;
                $advisorSend = Advisor::where('id',$advisorId)->first();
                //Log::info("Asesor asignado");
                //Log::info($advisorSend);
            }
            else{
                $advisorSend = Advisor::where('id',$this->order->advisor_id)->first();
                //Log::info("Asesor asignado desde la web");
                //Log::info($advisorSend);
            }
            $headers = [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer '.$sapCredentials->token,
            ];
            $client = new Client([
                'headers' => $headers
            ]);
            $sapCodesApi = [];
            foreach ($sapCodes as $key => $value) {
                $sapCodesApi[] = (object) ["codigo" => $value];
            }
            $responseSap = $client->request('POST', $this->url, ['json' => [
                'nro_documento' => $this->order->customerRel->document_number, 
                'nombre' => $this->order->customerRel->name,
                'apellido_paterno' => $this->order->customerRel->lastname,
                'apellido_materno' => $this->order->customerRel->lastname_2,
                'telefono' => $this->order->customerRel->mobile,
                'correo' => $this->order->customerRel->email,
                'tipo_documento' => $this->order->customerRel->documentTypeRel->sap_value,
                //'inmueble' => $sapCode,
                "inmuebles" => $sapCodesApi,
                "vendedor" => $advisorSend->sap_code
            ]]);
            Log::info([
                'nro_documento' => $this->order->customerRel->document_number, 
                'nombre' => $this->order->customerRel->name,
                'apellido_paterno' => $this->order->customerRel->lastname,
                'apellido_materno' => $this->order->customerRel->lastname_2,
                'telefono' => $this->order->customerRel->mobile,
                'correo' => $this->order->customerRel->email,
                'tipo_documento' => $this->order->customerRel->documentTypeRel->sap_value,
                //'inmueble' => $sapCode,
                "inmuebles" => $sapCodesApi,
                "vendedor" => $advisorSend->sap_code
            ]);
            //Log::info((string) $responseSap->getBody());
            $status = $responseSap->getStatusCode();
            $responseData = json_decode($responseSap->getBody());
            if($responseData->exito){
                #Actualizar Orden con los datos del SAP
                $requestOrder = [ "sended_to_sap" => 1, "sended_to_sap_date" => Carbon::now(), "sended_code_sap" => $responseData->reserva ];
                $orderUpdate = Order::UpdateOrCreate(["id" => $this->order->id], $requestOrder);
                if(isset($responseData->vendedor)){
                    //Log::info("Asesor Retorno desde el SAP");
                    if($advisorSend->sap_code != $responseData->vendedor){
                        #Asignacion de Asesor
                        #Obtener el asesor que devuelve el SAP
                        $advisorReturned = Advisor::where('sap_code',$responseData->vendedor)->first();
                        //Log::info($advisorReturned);
                        if($advisorReturned){
                            $orderUpdateAdvisor = Order::UpdateOrCreate(["id" => $this->order->id], ["advisor_id" => $advisorReturned->id]);
                            //Notification::route('mail',$advisorReturned->email)->notify(new AdvisorOrderPaid($this->order));  
                        }
                    }
                    else{
                        $orderUpdateAdvisor = Order::UpdateOrCreate(["id" => $this->order->id], ["advisor_id" => $advisorSend->id]);
                        //Notification::route('mail',$advisorSend->email)->notify(new AdvisorOrderPaid($this->order));  
                    }
                }
                else{
                    $orderUpdateAdvisor = Order::UpdateOrCreate(["id" => $this->order->id], ["advisor_id" => $advisorSend->id]);
                    //Notification::route('mail',$advisorSend->email)->notify(new AdvisorOrderPaid($this->order));
                }
                $description = $description.' - Éxito.';
            }
            else{
                $status = 500;
                $description = $description.' - Error Retorno SAP.';
                $orderUpdateAdvisor = Order::UpdateOrCreate(["id" => $this->order->id], ["advisor_id" => $advisorSend->id]);
                //Notification::route('mail',$advisorSend->email)->notify(new AdvisorOrderPaid($this->order));
            }
            #Actualizar Stock del Departamento
            /*Comentado por test
            foreach ($departmentsId as $key => $value) {
                $departmentUpdate = Department::UpdateOrCreate(["id" => $value], ["available" => false]);
            }
            if($this->order->real_state_package_id){
                $package = RealStatePackage::find($this->order->real_state_package_id);
                $package->status = 0;
                $package->stock = 0;
                $package->save();
            }*/
            #LogSapConnection
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $this->lscType, 'status' => $status, 'description' => $description, "response" => (string) $responseSap->getBody()]);  
        }
        catch (\GuzzleHttp\Exception\RequestException $e) {
            #Cuando sea cualquier código de error, se enviara un email al correo indicado.
            $status = $e->getResponse()->getStatusCode();
            $description = $description.' - Error.';
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $this->lscType, 'status' => $status, 'description' =>  (string) $description]);
        }
    }
}
