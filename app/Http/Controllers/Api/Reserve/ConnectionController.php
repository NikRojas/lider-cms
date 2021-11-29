<?php

namespace App\Http\Controllers\Api\Reserve;

use App\Advisor;
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
            $sendToView = Department::where('id',$update->id)->with('projectRel:id,logo_colour,price_separation,name_es,name_en,code_ubigeo,project_status_id,master_currency_id,reservation_in_package,package_description')->first();
            return $this->sendResponse([$sendToView], '');
        } 
        catch (\GuzzleHttp\Exception\RequestException $e) {
            #Cuando sea cualquier código de error, se enviara un email al correo indicado.
            $status = $e->getResponse()->getStatusCode();
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $type, 'status' => $status, 'description' =>  (string) $description.'Error.']);
            Log::info("Error obteniendo stock");
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }

    public function sapAvailableReserve($code){
        $url = config('services.sap_url').'/api/cliente/inmuebles/reserva/'.$code;
        return $url;
    }

    public function getReserveDepartments(Request $request, $code){
        $type = 'Obtener Reserva Disponibilidad';
        $sapCredentials = SapCredential::first();
        if (!$sapCredentials->token) {
            $lsc = LogSapConnection::UpdateOrCreate(["type" => $type, 'description' =>  trans('custom.message.sap.no_token')]);
        }
        $codeReserveTemp = $code;
        //DECODIFICAR CODE RESERVE
        $passDecrypt = "LiderAsesores2021";
        $encrypted_string = $codeReserveTemp;
        $codeReserve=openssl_decrypt($encrypted_string,"AES-128-ECB",$passDecrypt);
        $description = 'Código de Reserva '.$codeReserve.' - ';
        $slug = Str::random(20);
        try {
            $client = new Client();
            $responseSap = $client->request('GET', $this->sapAvailableReserve($codeReserve), [
                'headers' => ['Content-Type' => 'application/json', 'Authorization' => $sapCredentials->token]
            ]);
            $responseData = json_decode($responseSap->getBody());
            $status = $responseSap->getStatusCode();
            #LogSapConnection
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $type, 'response' => (string) $responseSap->getBody() , 'status' => $status, 'description' =>  (string) $description.'Éxito.']);
            $checkIfHasAtleast1 = count($responseData->cliente->inmuebles);
            #Test
            /*$testInmuebles = [
                (object) ["codigo" => "NAM1E40501"],
                (object) ["codigo" => "NAM1C081"],
                (object) ["codigo" => "NAM1D023"],
            ];
            $checkIfHasAtleast1  = count($testInmuebles);
            $advisor = Advisor::where('sap_code','01000101')->first();
            $dt = MasterDocumentType::where('sap_value',"D")->first();
            $customer = [
                "type_document_id" => $dt->description,
                "document_number" => "77665544",
                "name" => "CLIENTE",
                "lastname" => "APELLIDO",
                "lastname_2" => "2DO APELLIDO",
                "mobile" => "776666666",
                "email" => "abazo@lider.com.pe",
            ];
            #Test
            */
            $advisor = Advisor::where('sap_code',$responseData->cliente->vendedor)->first();
            $dt = MasterDocumentType::where('sap_value',$responseData->cliente->tipo_documento)->first();
            $customer = [
                "type_document_id" => $dt->description,
                "document_number" => $responseData->cliente->nro_documento,
                "name" => $responseData->cliente->nombre,
                "lastname" => $responseData->cliente->apellido_paterno,
                "lastname_2" => $responseData->cliente->apellido_materno,
                "mobile" => $responseData->cliente->telefono,
                "email" => $responseData->cliente->correo,
            ];
            if($checkIfHasAtleast1){
                $estates = $responseData->cliente->inmuebles;
                #Test;
                //$testInmuebles = $testInmuebles;
                #Test
                $estatesToView = NULL;
                $parkingsToView = [];
                $warehousesToView = [];
                $allEstates = [];
                foreach ($estates as $key => $value) {
                #Test
                //foreach ($testInmuebles as $key => $value) {
                #Test
                    $depTemp = Department::where('sap_code',$value->codigo)->first();
                    if($depTemp){
                        if($depTemp->sector_id == 1 || $depTemp->sector_id == 4){
                            $estatesToView = $depTemp->load('projectRel.ubigeoRel','projectRel.statusRel','viewRel','tipologyRel.parentTypeDepartmentRel');
                        }
                        else if($depTemp->sector_id == 2){
                            $parkingsToView[] = $depTemp;
                        }
                        else if($depTemp->sector_id == 3){
                            $warehousesToView[] = $depTemp;
                        }  
                        $allEstates[] = $depTemp;
                    }
                }
                //if(count($estatesToView) > 0){
                if($estatesToView){
                    //$projectId = $estatesToView[0]->project_id;
                    if(count($parkingsToView)){
                        foreach ($parkingsToView as $keyDep => $valueDep) {
                            $parkingOnFloor = DB::table('floors_sector_departments')->where('department_id',$valueDep->id)->first();
                            if($parkingOnFloor){
                                $valueDep["floorView"] = FloorSector::find($parkingOnFloor->floor_id);
                            }
                            else{
                                $valueDep["floorView"] = NULL;
                            }
                        }
                    }
                    if(count($warehousesToView)){
                        foreach ($warehousesToView as $keyDep => $valueDep) {
                            $warehouseOnFloor = DB::table('floors_sector_departments')->where('department_id',$valueDep->id)->first();
                            if($warehouseOnFloor){
                                $valueDep["floorView"] = FloorSector::find($warehouseOnFloor->floor_id);
                            }
                            else{
                                $valueDep["floorView"] = NULL;
                            }
                        }
                    }

                    if($estatesToView->projectRel->master_currency_id == 1){
                        $priceFormat = collect($allEstates)->pluck('price');
                        $sumPrice = $priceFormat->sum();
                        $priceFormat = $estatesToView->projectRel->currencyRel->symbol.' '.number_format($sumPrice, 0, '.', ',');
                        $estatesToView["price"] = $sumPrice;
                        $estatesToView["price_format"] = $priceFormat;
                    }
                    else{
                        $priceFormatForeign = collect($allEstates)->pluck('price_foreign');
                        $sumPrice = $priceFormatForeign->sum();
                        $priceFormatForeign = $estatesToView->projectRel->currencyRel->symbol.' '.number_format($sumPrice, 0, '.', ',');
                        $estatesToView["price_foreign"] = $sumPrice;
                        $estatesToView["price_foreign_format"] = $priceFormatForeign;
                    }


                    $toView = [
                        "available" => true,
                        "deps" => $estatesToView,
                        "parkings" => $parkingsToView,
                        "warehouses" => $warehousesToView,
                        "allEstates" => $allEstates,
                        "advisor" => $advisor, 
                        "customer" => $customer
                    ];
                    return $this->sendResponse($toView, 'Reserva disponible');
                }
                else{
                    return $this->sendResponse(["available" => false, "advisor" => $advisor, "customer" => $customer], 'Departamento no disponible');   
                }
            }
            else{
                return $this->sendResponse(["available" => false, "advisor" => $advisor, "customer" => $customer], 'Ext. Reserva no disponible');
            }
        }
        catch (\GuzzleHttp\Exception\RequestException $e) {
            $status = $e->getResponse()->getStatusCode();
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $type, 'status' => $status, 'description' =>  (string) $description.'Error.']);
            Log::info("Error obteniendo stock reserva plataforma comercial");
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }
}
