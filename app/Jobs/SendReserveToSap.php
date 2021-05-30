<?php

namespace App\Jobs;

use App\Department;
use App\LogSapConnection;
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
use Illuminate\Support\Str;

class SendReserveToSap implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $order;
    private $url = "https://apps.lider.com.pe:8072/api/cliente/inmuebles/reserva";
    private $lscType = 'Reservar Inmueble';

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($order)
    {
        $this->order = $order;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        #Obtener Credenciales
        $sapCredentials = SapCredential::first();
        if (!$sapCredentials->token) {
            $lsc = LogSapConnection::UpdateOrCreate(["type" => $this->lscType, 'description' =>  trans('custom.message.sap.no_token')]);
        }
        $slug = Str::random(20);
        $sapCode = $this->order->orderDetailsRel[0]->departmentRel->sap_code;
        $description = 'Inmueble '.$this->order->orderDetailsRel[0]->departmentRel->description.' (Código SAP: '.$sapCode.') Proyecto ' . $this->order->orderDetailsRel[0]->projectRel->name_es;
        try {
            $client = new Client();
            $responseSap = $client->request('POST', $this->url, ['json' => [
                'nro_documento' => $this->order->customerRel->document_number, 
                'nombre' => $this->order->customerRel->name,
                'apellido_paterno' => $this->order->customerRel->lastname,
                'apellido_materno' => $this->order->customerRel->lastname_2,
                'telefono' => $this->order->customerRel->mobile,
                'correo' => $this->order->customerRel->email,
                'tipo_documento' => $this->order->customerRel->documentTypeRel->sap_value,
                'inmueble' => $sapCode
                //Esperar ultima actualizacion de reserva de inmueble
                //"vendedor": "01000015"
            ]]);
            $status = $responseSap->getStatusCode();
            $responseData = json_decode($responseSap->getBody());
            #Test {
                /*$status = 200;
                Log::info([
                    'nro_documento' => $this->order->customerRel->document_number, 
                    'nombre' => $this->order->customerRel->name,
                    'apellido_paterno' => $this->order->customerRel->lastname,
                    'apellido_materno' => $this->order->customerRel->lastname_2,
                    'telefono' => $this->order->customerRel->mobile,
                    'correo' => $this->order->customerRel->email,
                    'tipo_documento' => $this->order->customerRel->documentTypeRel->sap_value,
                    'inmueble' => $sapCode
                ]);
                $responseSap = '{
                    "exito": true,
                    "reserva": "0040000200",
                    "mensaje": ""
                }';
                $responseData = json_decode($responseSap);*/
            #EndTest }
            if($responseData->exito){
                #Actualizar Orden con los datos del SAP
                $orderUpdate = Order::UpdateOrCreate(["id" => $this->order->id], [ "sended_to_sap" => 1, "sended_to_sap_date" => Carbon::now(), "sended_code_sap" => $responseData->reserva ]);
                //Ver sobre el asignamiento de la orden al asesor
                #Actualizar Stock del Departamento
                $departmentUpdate = Department::UpdateOrCreate(["id" => $this->order->orderDetailsRel[0]->departmentRel->id], ["available" => false]);
                $description = $description.' - Éxito.';
            }
            else{
                $description = $description.' - Error Retorno SAP.';
            }
            #LogSapConnection
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $this->lscType, 'status' => $status, 'description' => $description, "response" => (string) $responseData]);  
        }
        catch (\GuzzleHttp\Exception\RequestException $e) {
            #Cuando sea cualquier código de error, se enviara un email al correo indicado.
            $status = $e->getResponse()->getStatusCode();
            $description = $description.' - Error.';
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $this->lscType, 'status' => $status, 'description' =>  (string) $description]);
        }
    }
}
