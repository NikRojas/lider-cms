<?php

namespace App\Jobs;

use App\Advisor;
use App\Department;
use App\LogSapConnection;
use App\Notifications\AdvisorOrderPaid;
use App\Order;
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
        $sapCode = $this->order->orderDetailsRel[0]->departmentRel->sap_code;
        $description = 'Inmueble '.$this->order->orderDetailsRel[0]->departmentRel->description.' (Código SAP: '.$sapCode.') Proyecto ' . $this->order->orderDetailsRel[0]->projectRel->name_es;
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
            $responseSap = $client->request('POST', $this->url, ['json' => [
                'nro_documento' => $this->order->customerRel->document_number, 
                'nombre' => $this->order->customerRel->name,
                'apellido_paterno' => $this->order->customerRel->lastname,
                'apellido_materno' => $this->order->customerRel->lastname_2,
                'telefono' => $this->order->customerRel->mobile,
                'correo' => $this->order->customerRel->email,
                'tipo_documento' => $this->order->customerRel->documentTypeRel->sap_value,
                'inmueble' => $sapCode,
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
                'inmueble' => $sapCode,
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
                            Notification::route('mail',$advisorReturned->email)->notify(new AdvisorOrderPaid($this->order));  
                        }
                    }
                    else{
                        $orderUpdateAdvisor = Order::UpdateOrCreate(["id" => $this->order->id], ["advisor_id" => $advisorSend->id]);
                        Notification::route('mail',$advisorSend->email)->notify(new AdvisorOrderPaid($this->order));  
                    }
                }
                else{
                    $orderUpdateAdvisor = Order::UpdateOrCreate(["id" => $this->order->id], ["advisor_id" => $advisorSend->id]);
                    Notification::route('mail',$advisorSend->email)->notify(new AdvisorOrderPaid($this->order));
                }
                #Actualizar Stock del Departamento
                $departmentUpdate = Department::UpdateOrCreate(["id" => $this->order->orderDetailsRel[0]->departmentRel->id], ["available" => false]);
                $description = $description.' - Éxito.';
            }
            else{
                $status = 500;
                $description = $description.' - Error Retorno SAP.';
            }
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
