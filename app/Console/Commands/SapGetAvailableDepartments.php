<?php

namespace App\Console\Commands;

use App\Department;
use App\LogSapConnection;
use App\Project;
use App\ProjectTypeDepartment;
use App\RealStatePackage;
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
                            //$estates_temp[] = Department::where('id',$valueEstatesExist)->first();
                            #Obtener Solo Departamentos y Casas
                            $tempDepartment = Department::where('id',$valueEstatesExist)->whereNotNull('sector_id')->where(function ($q) {
                                $q->where('sector_id', 1)->orWhere('sector_id', 4);
                            })->first();
                            if($tempDepartment){
                                $estates_temp[] = $tempDepartment;
                            }
                        }
                        #Agrupar por Departamentos por Tipologia
                        if(count($estates_temp) > 0){
                            $estatesByTypeDepartment = collect($estates_temp)->groupBy('type_department_id');
                            $typeDepartmentIdsAvailable = [];
                                //Log::info($value->name_es);
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
                                    #No actualizar precio en tipologias de Namua e Infinitum
                                    if($value->id != '4' && $value->id != '5'){
                                        //Log::info("Proyecto: ".$value->id);
                                        //$updateTypeDepartment = ProjectTypeDepartment::UpdateOrCreate(["id" => $keyEstatesByTypeDepartment ], array_merge($updateTypeDepartmentTemp, ["project_id" => $value->id]));
                                        $checkIfTipologyExist = ProjectTypeDepartment::where('id',$keyEstatesByTypeDepartment)->first();
                                        if($checkIfTipologyExist){
                                            $updateTypeDepartment = ProjectTypeDepartment::UpdateOrCreate(["id" => $keyEstatesByTypeDepartment ], array_merge($updateTypeDepartmentTemp, ["project_id" => $value->id]));
                                        }
                                    }
                                }
                            $typeDepartmentsIds = $typeDepartments->pluck('id')->toArray();
                            foreach ($typeDepartmentIdsAvailable as $keyEstateAvailable => $valueEstateAvailable) {
                                //ProjectTypeDepartment::UpdateOrCreate(["id" => $valueEstateAvailable ], ["available" => true, "project_id" => $value->id]);
                                $checkIfTipologyExist = ProjectTypeDepartment::where('id',$valueEstateAvailable)->first();
                                if($checkIfTipologyExist){
                                    ProjectTypeDepartment::UpdateOrCreate(["id" => $valueEstateAvailable ], ["available" => true, "project_id" => $value->id]);
                                }
                            }
                            $typeDepartmentsUnavailable = array_diff($typeDepartmentsIds, $typeDepartmentIdsAvailable);
                            foreach ($typeDepartmentsUnavailable as $keyEstateUnavailable => $valueEstateUnavailable) {
                                //ProjectTypeDepartment::UpdateOrCreate(["id" => $valueEstateUnavailable ], ["available" => false, "project_id" => $value->id]);
                                $checkIfTipologyExist = ProjectTypeDepartment::where('id',$valueEstateUnavailable)->first();
                                if($checkIfTipologyExist){
                                    ProjectTypeDepartment::UpdateOrCreate(["id" => $valueEstateUnavailable ], ["available" => false, "project_id" => $value->id]);
                                }
                            }
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
                $priceProject = $priceForeignProject = NULL;
                #Actualizar Precio Desde Soles y Dolares
                if($value->master_currency_id == 1){
                    $checkIfAtLeast1Dep = Department::where('project_id',$value->id)->where('available',1)->whereIn('sector_id', [1,4])->first();
                    if($checkIfAtLeast1Dep){
                        $priceProjectTemp = Department::where('project_id',$value->id)->where('available',1)->whereIn('sector_id', [1,4])->min('price');
                        if($priceProjectTemp){
                            $priceProject = $priceProjectTemp;
                        }
                        else{
                            $priceProject = $value->price_total;
                        }
                    }
                    else{
                        $priceForeignProject = $value->price_total;
                    }
                }   
                else if($value->master_currency_id == 2){
                    $checkIfAtLeast1Dep = Department::where('project_id',$value->id)->where('available',1)->whereIn('sector_id', [1,4])->first();
                    if($checkIfAtLeast1Dep){
                        $priceForeignProjectTemp = Department::where('project_id',$value->id)->where('available',1)->whereIn('sector_id', [1,4])->min('price_foreign');
                        if($priceForeignProjectTemp){
                            $priceForeignProject = $priceForeignProjectTemp;
                        }
                        else{
                            $priceForeignProject = $value->price_total_foreign;
                        }
                    }
                    else{
                        $priceForeignProject = $value->price_total_foreign;
                    }
                }

                $combos = RealStatePackage::select('*')->where('project_id',$value->id)->with('projectRel.currencyRel')->get();
                $combosFinal = [];
                $combosFiltered = [];
                if(count($combos) > 0){
                    $combosFiltered = $combos->filter(function($combo){
                        return $combo->status_calculate == true;
                    });
                }
                if(count($combosFiltered) > 0){
                    foreach ($combosFiltered as $comboElement) {
                        if($comboElement->projectRel->master_currency_id == 1){
                            $priceCombos = $comboElement->departmentsRel->pluck('price');
                        }
                        else{
                            $priceCombos = $comboElement->departmentsRel->pluck('price_foreign');
                        }
                        $combosFinal[] = [
                            'id' => $comboElement->id,
                            'description' => $comboElement->description,
                            'price' => $priceCombos->sum()
                        ];
                    }
                    $combosCollect = collect($combosFinal);
                    $minPriceCombo = $combosCollect->min('price');
                    if($value->master_currency_id == 1){
                        if($minPriceCombo < $priceProject){
                            $priceProject = $minPriceCombo;
                        }
                        Log::info($value->name_es);
                        Log::info('Combo Soles Min '.$priceProject);
                    }
                    else if($value->master_currency_id == 2){
                        if($minPriceCombo < $priceForeignProject){
                            $priceForeignProject = $minPriceCombo;
                        }
                        Log::info($value->name_es);
                        Log::info('Combo Dolares Min '.$priceForeignProject);
                    }
                }
                
                #No actualizar precio desde en Namua ni Inifinitum
                if($value->id != '4' && $value->id != '5'){
                    $updateProject = $value->update(['stock_parking' => $stock, 'price_parking_sap' => $price_parking, 'price_parking_foreign_sap' => $price_foreign_parking,
                    'stock_warehouse' => $stockWarehouse, 'price_warehouse_sap' => $price_warehouse, 'price_warehouse_foreign_sap' => $price_foreign_warehouse, "price_total" => $priceProject,
                    "price_total_foreign" => $priceForeignProject]);
                }
                else{
                    $updateProject = $value->update(['stock_parking' => $stock, 'price_parking_sap' => $price_parking, 'price_parking_foreign_sap' => $price_foreign_parking,
                    'stock_warehouse' => $stockWarehouse, 'price_warehouse_sap' => $price_warehouse, 'price_warehouse_foreign_sap' => $price_foreign_warehouse]);
                }
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
