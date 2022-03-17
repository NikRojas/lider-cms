<?php

namespace App\Http\Controllers\Api;

use App\Advisor;
use App\CanalCitaOnline;
use App\Department;
use App\FloorSector;
use App\Http\Controllers\Api\BaseController;
use Illuminate\Support\Str;
use App\LogSapConnection;
use App\MasterDocumentType;
use App\Project;
use App\SapCredential;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ConnectionController extends BaseController
{
    public function sapAvailableLead($code){
        $url = config('services.sap_url').'/api/leads?id='.$code;
        return $url;
    }

    public function availableSapOnlineAppointment(Request $request){
        //$estateCurrent = Department::where('slug',$code)->with('projectRel')->first();
        //if (!$estateCurrent) {
            //return $this->sendError("");
        //}
        //Id Deshasheado
        $idLead = urlencode($request->id);
        $type = 'Obtener Lead Cita Online';
        $sapCredentials = SapCredential::first();
        if (!$sapCredentials->token) {
            $lsc = LogSapConnection::UpdateOrCreate(["type" => $type, 'description' =>  trans('custom.message.sap.no_token')]);
        }
        $description = 'Id Lead: '. $idLead;
        $slug = Str::random(20);
        try {
            $client = new Client();
            $responseSap = $client->request('GET', $this->sapAvailableLead($idLead), [
                'headers' => ['Content-Type' => 'application/json', 'Authorization' => $sapCredentials->token]
            ]);
            $status = $responseSap->getStatusCode();
            #LogSapConnection
            
            //$lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $type, 'response' => ["sap_code" => $estateCurrent->sap_code, "project_id" => $estateCurrent->id] , 'status' => $status, 'description' =>  (string) $description.'Éxito.']);
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $type, 'response' => (string) $responseSap->getBody() , 'status' => $status, 'description' =>  (string) $description.' Éxito.']);
            #EndLogSapConnection
            $responseData = json_decode($responseSap->getBody());
            //$checkIfIsInStock = count($responseData->inmuebles);
            $sendToView = [];
            $avaliable = false;
            if ($responseData->exito) {
                $project = Project::where('sap_code', $responseData->lead->grupo)->first();
                $projectCode = NULL;
                $canalCode = NULL;
                $avaliable = true;
                //$canal = CanalCitaOnline::where('sap_id', $responseData->lead->canal)->first();
                $documentCode = NULL;
                $document = MasterDocumentType::where('sap_value', $responseData->lead->tipoDocumento)->first();
                if($project){
                    $projectCode = $project->id;
                }
                /*if($canal){
                    $canalCode = $canal->id;
                }*/
                if($document){
                    $documentCode = $document->id;
                }
                $sendToView = [
                    'document_number' => $responseData->lead->nroDocumento,
                    'name' => $responseData->lead->nombres,
                    'lastname' => $responseData->lead->apellidoPaterno,
                    'email' => $responseData->lead->correo,
                    'mobile' => $responseData->lead->telefono1,
                    'project_id' => $projectCode,
                    'id_lead' => $responseData->lead->idLead,
                    'id_advisor' => $responseData->lead->idUsuarioAsignado,
                    'type_document_id' => $documentCode
                ];
            }
            return $this->sendResponse(['available' => $avaliable, 'lead' => $sendToView], '');
        } 
        catch (\GuzzleHttp\Exception\RequestException $e) {
            #Cuando sea cualquier código de error, se enviara un email al correo indicado.
            $status = $e->getResponse()->getStatusCode();
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $type, 'status' => $status, 'description' =>  (string) $description.' Error.']);
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }
}
