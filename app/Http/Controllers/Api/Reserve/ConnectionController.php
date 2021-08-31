<?php

namespace App\Http\Controllers\Api\Reserve;

use App\Department;
use App\Http\Controllers\Api\BaseController;
use Illuminate\Support\Str;
use App\LogSapConnection;
use App\SapCredential;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class ConnectionController extends BaseController
{
    public function sapAvailableEstateUrl($code){
        $url = config('services.sap_url').'/api/cliente/inmuebles?codigo='.$code.'&proyecto=';
        return $url;
    }

    public function availableSap($code){
        $estateCurrent = Department::where('slug',$code)->with('projectRel')->first();
        if (!$estateCurrent) {
            return $this->sendError("");
        }
        $type = 'Obtener Inmueble Disponibilidad';
        $sapCredentials = SapCredential::first();
        if (!$sapCredentials->token) {
            $lsc = LogSapConnection::UpdateOrCreate(["type" => $type, 'description' =>  trans('custom.message.sap.no_token')]);
        }
        $description = $estateCurrent->description.' (Código SAP:'.$estateCurrent->sap_code.')'.' Proyecto ' . $estateCurrent->projectRel->name_es . ' (Código SAP:'.$estateCurrent->projectRel->sap_code.') - ';
        $slug = Str::random(20);
        try {
            $client = new Client();
            $responseSap = $client->request('GET', $this->sapAvailableEstateUrl($estateCurrent->sap_code), [
                'headers' => ['Content-Type' => 'application/json', 'Authorization' => $sapCredentials->token]
            ]);
            $status = $responseSap->getStatusCode();
            #LogSapConnection
            
            //$lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $type, 'response' => ["sap_code" => $estateCurrent->sap_code, "project_id" => $estateCurrent->id] , 'status' => $status, 'description' =>  (string) $description.'Éxito.']);
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $type, 'response' => (string) $responseSap->getBody() , 'status' => $status, 'description' =>  (string) $description.'Éxito.']);
            #EndLogSapConnection
            $responseData = json_decode($responseSap->getBody());
            $checkIfIsInStock = count($responseData->inmuebles);
            if ($checkIfIsInStock > 0) {
                $price = $price_foreign = null;
                if($responseData->inmuebles[0]->precio_pen){
                    $price = $responseData->inmuebles[0]->precio_pen;
                } 
                if($responseData->inmuebles[0]->precio_usd > 0){
                    $price_foreign = $responseData->inmuebles[0]->precio_usd;   
                }
                $update = Department::find($estateCurrent->id);
                $update->price = $price;
                $update->price_foreign = $price_foreign;
                $update->available = true;
                $update->save();
                //Log::info("En stock");
            }
            else{
                $update = Department::find($estateCurrent->id);
                $update->available = 0;
                $update->save();
                //Log::info("Sin stock");
            }
            return $this->sendResponse([$update->with('projectRel:id,logo_colour,price_separation,name_es,name_en,code_ubigeo,project_status_id,master_currency_id,reservation_in_package,package_description')], '');
        } 
        catch (\GuzzleHttp\Exception\RequestException $e) {
            #Cuando sea cualquier código de error, se enviara un email al correo indicado.
            $status = $e->getResponse()->getStatusCode();
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $type, 'status' => $status, 'description' =>  (string) $description.'Error.']);
            Log::info("Error obteniendo stock");
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }
}
