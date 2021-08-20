<?php

namespace App\Console\Commands;

use App\Department;
use App\LogSapConnection;
use App\Project;
use App\ProjectTypeDepartment;
use App\SapCredential;
use GuzzleHttp\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
//use Illuminate\Support\Facades\Log;
//use App\Notifications\LogSapConnectionNotification;
//use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Str;

class SapGetAvailableDepartments extends Command
{
    private $url = '/api/cliente/inmuebles?codigo=&proyecto=';
    private $lscType = 'Obtener Inmuebles Disponibilidad';
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sap:get-available-departments';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Login Get Available Departments';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //Log::info("Test Log Permiso");
        $this->url = config('services.sap_url').$this->url;
        #Obtener Proyectos con Codigo SAP
        $projects = Project::whereNotNull('sap_code')->get();
        #Obtener Credenciales
        $sapCredentials = SapCredential::first();
        if (!$sapCredentials->token) {
            $lsc = LogSapConnection::UpdateOrCreate(["type" => $this->lscType, 'description' =>  trans('custom.message.sap.no_token')]);
        }
        #Por cada Proyecto realizar un llamado a SAP
        foreach ($projects as $key => $value) {
            $slug = Str::random(20);
            try {
                $client = $responseSap = NULL;
                $client = new Client();
                $responseSap = $client->request('GET', $this->url . $value->sap_code, [
                    'headers' => ['Content-Type' => 'application/json', 'Authorization' => $sapCredentials->token]
                ]);
                $status = $responseSap->getStatusCode();
                #LogSapConnection
                $description = 'Proyecto ' . $value->name_es . ' - Éxito.';
                $lsc = new LogSapConnection();
                $lsc->type = $this->lscType;
                $lsc->status = $status;
                $lsc->slug = $slug;
                $lsc->description = $description;
                $lsc->response = ["sap_code" => $value->sap_code, "project_id" => $value->id];
                $lsc->save();
                #EndLogSapConnection
                $responseData = $countEstates = NULL;
                $responseData = json_decode($responseSap->getBody());
                $countEstates = count($responseData->inmuebles);
                //$estates = $departments = $updateDepartment = NULL;
                #Array Inmuebles verificar si tiene objetos
                if ($countEstates > 0) {
                    $estates = $responseData->inmuebles;
                    #Si existe el Departmento en el response del SAP, actualizar sus datos, sino existe ponerlo como no disponible
                    $departments = Department::where('project_id',$value->id)->get();
                    $estatesExist = [];
                    foreach ($departments as $key => $dep) {
                        foreach ($estates as $key2 => $value2) {
                            if($dep->sap_code == $value2->codigo ){
                                array_push($estatesExist,  $dep->id);
                                $price = $price_foreign = null;
                                if($value2->precio_pen){
                                    $price = $value2->precio_pen;
                                } 
                                if($value2->precio_usd > 0){
                                    $price_foreign = $value2->precio_usd;   
                                }
                                $updateDepartment = Department::UpdateOrCreate(["id" => $dep->id ], ['price' => $price, 'price_foreign' => $price_foreign,'available' => true]);
                            }
                        }
                    }
                    if(count($estatesExist) > 0){
                        #Tipologias Registradas
                        $typeDepartments = ProjectTypeDepartment::where('project_id',$value->id)->get();
                        #Obtener Departamento Actualizado por ID
                        $estates_temp = [];
                        foreach ($estatesExist as $keyEstatesExist => $valueEstatesExist) {
                            $estates_temp[] = Department::where('id',$valueEstatesExist)->first();
                        }
                        #Agrupar por Departamentos por Tipologia
                        $estatesByTypeDepartment = collect($estates_temp)->groupBy('type_department_id');
                        $typeDepartmentIdsAvailable = [];
                        #keyEstatesByTypeDepartment es el Id de la Tipologia y valueEstatesByTypeDepartment los Departamentos que se recibieron
                        foreach ($estatesByTypeDepartment as $keyEstatesByTypeDepartment => $valueEstatesByTypeDepartment) {
                            //Log::info("Id Tipologia". $keyEstatesByTypeDepartment);
                            //Log::info($valueEstatesByTypeDepartment);
                            $typeDepartmentIdsAvailable[] = $keyEstatesByTypeDepartment;
                            $minArea = $valueEstatesByTypeDepartment->min('area');
                            $minPrice = $valueEstatesByTypeDepartment->min('price');
                            $minPriceForeign = $valueEstatesByTypeDepartment->min('price_foreign');
                            $updateTypeDepartmentTemp = [];
                            if($minArea){
                                $updateTypeDepartmentTemp = array_merge($updateTypeDepartmentTemp, ["area" => $minArea]);
                            }
                            #Si esta lleno Precio Soles y Vacio Precio Dolares
                            if($minPrice && !$minPriceForeign){
                                $updateTypeDepartmentTemp = array_merge($updateTypeDepartmentTemp, ["price" => $minPrice, "type_currency" => 1]);
                            }
                            #Si esta lleno Precio Dolares y Vacio Precio Soles
                            if(!$minPrice && $minPriceForeign){
                                $updateTypeDepartmentTemp = array_merge($updateTypeDepartmentTemp, ["price" => $minPriceForeign, "type_currency" => 0]);
                            }
                            $updateTypeDepartment = ProjectTypeDepartment::UpdateOrCreate(["id" => $keyEstatesByTypeDepartment ], $updateTypeDepartmentTemp);
                        }
                        $typeDepartmentsIds = $typeDepartments->pluck('id')->toArray();
                        foreach ($typeDepartmentIdsAvailable as $keyEstateAvailable => $valueEstateAvailable) {
                            ProjectTypeDepartment::UpdateOrCreate(["id" => $valueEstateAvailable ], ["available" => true]);
                        }
                        $typeDepartmentsUnavailable = array_diff($typeDepartmentsIds, $typeDepartmentIdsAvailable);
                        foreach ($typeDepartmentsUnavailable as $keyEstateUnavailable => $valueEstateUnavailable) {
                            ProjectTypeDepartment::UpdateOrCreate(["id" => $valueEstateUnavailable ], ["available" => false]);
                        }
                    }
                    
                    #Actualizar Departamentos que no hay en el response a no disponible
                    $estatestArray = collect($estates);
                    $estatesCodigoSapPlucked = $estatestArray->pluck('codigo');
                    $estatesCodigoSapPlucked = $estatesCodigoSapPlucked->all();
                    $departmentsNotAvailable = Department::whereNotIn('sap_code',$estatesCodigoSapPlucked)->where('project_id',$value->id)->update(['available' => false]);
                }
                #Si no tiene todos pasan a No Disponibles
                else{
                    $departments = Department::where('project_id',$value->id)->update([
                        'available' => 0
                    ]);
                }
                #Obtener Stock y Precio de Estacionamientos en Soles y Dolares
                $stock = $price_parking = $price_foreign_parking = null;
                $parking = $responseData->estacionamientos;
                if(!is_null($parking[0]->cantidad)){
                    $stock = $parking[0]->cantidad;
                }
                if($parking[0]->precio_pen > 0){
                    $price_parking = $parking[0]->precio_pen;
                }   
                if($parking[0]->precio_usd > 0){
                    $price_foreign_parking = $parking[0]->precio_usd;
                }
                #Obtener Stock y Precio de Depositos en Soles y Dolares
                $stockWarehouse = $price_warehouse = $price_foreign_warehouse = null;
                $warehouse = $responseData->depositos;
                if(!is_null($warehouse[0]->cantidad)){
                    $stockWarehouse = $warehouse[0]->cantidad;
                }
                if($warehouse[0]->precio_pen > 0){
                    $price_warehouse = $warehouse[0]->precio_pen;
                }   
                if($warehouse[0]->precio_usd > 0){
                    $price_foreign_warehouse = $warehouse[0]->precio_usd;
                }
                $updateProject = $value->update(['stock_parking' => $stock, 'price_parking_sap' => $price_parking, 'price_parking_foreign_sap' => $price_foreign_parking,
                'stock_warehouse' => $stockWarehouse, 'price_warehouse_sap' => $price_warehouse, 'price_warehouse_foreign_sap' => $price_foreign_warehouse]);
            }
            catch (\GuzzleHttp\Exception\RequestException $e) {
                #Cuando sea cualquier código de error, se enviara un email al correo indicado.
                $status = $e->getResponse()->getStatusCode();
                $description = 'Proyecto ' . $value->name_es . ' (Código SAP:'.$value->sap_code.') - Error.';
                $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $this->lscType, 'status' => $status, 'description' =>  (string) $description]);
            }
        }
    }
}
