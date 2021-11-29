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

class SendPayConfirmationToAdvisor implements ShouldQueue
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
        #Departamentos desde OrderDetails
        /*$departmentsId = $this->order->orderDetailsRel->pluck('department_id');
        $descriptions = $this->order->orderDetailsRel->pluck('departmentRel.description')->values()->all();
        $sapCodes = $this->order->orderDetailsRel->pluck('departmentRel.sap_code')->values()->all();
        $description = 'Inmuebles '.implode(", ", $descriptions).' (Códigos SAP: '.implode(", ", $sapCodes).') Proyecto ' . $this->order->orderDetailsRel[0]->projectRel->name_es;*/
        //try {
            /*$headers = [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer '.$sapCredentials->token,
            ];
            $client = new Client([
                'headers' => $headers
            ]);*/
            /*$responseSap = $client->request('POST', $this->url, ['json' => [
                'CODIGO DE RESERVA' => $this->order->sended_code_sap, 
            ]]);*/
            Log::info("SendPayConfirmationToAdvisorFromCommercial ".$this->order->sended_code_sap);
            //Log::info((string) $responseSap->getBody());
            /*$status = $responseSap->getStatusCode();
            $responseData = json_decode($responseSap->getBody());
            if($responseData->exito){
                $description = $description.' - Éxito.';
            }
            else{
                $status = 500;
                $description = $description.' - Error Retorno SAP.';
            }*/
            #Si hay en la order Asesor traer su data;
            $advisorSend = NULL;
            if($this->order->advisor_id){
                $advisorSend = Advisor::where('id',$this->order->advisor_id)->first();
                //EMAIL QUE SEA PLANTILLA QUE TIENE VARIOS DEPARTAMENTOS
                Notification::route('mail',$advisorSend->email)->notify(new AdvisorOrderPaid($this->order));
            }
            #LogSapConnection
            //$lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $this->lscType, 'status' => $status, 'description' => $description, "response" => (string) $responseSap->getBody()]);  
        //}
        //catch (\GuzzleHttp\Exception\RequestException $e) {
            #Cuando sea cualquier código de error, se enviara un email al correo indicado.
            /*$status = $e->getResponse()->getStatusCode();
            $description = $description.' - Error.';
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $this->lscType, 'status' => $status, 'description' =>  (string) $description]);*/
        //}
    }
}
