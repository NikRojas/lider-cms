<?php

namespace App\Console\Commands;

use App\Department;
use App\LogSapConnection;
use App\Project;
use App\SapCredential;
use GuzzleHttp\Client;
use Illuminate\Console\Command;
//use Illuminate\Support\Facades\Log;
//use App\Notifications\LogSapConnectionNotification;
//use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Str;

class SapGetAvailableDepartments extends Command
{
    //private $url = 'https://apps.lider.com.pe:8072/api/cliente/inmueble?codigo=&proyecto=';
    private $lscType = 'Obtener Inmuebles Disponibilidad';
    private $url = 'http://127.0.0.1:9000/api?test=';
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
        #Obtener Proyectos con Codigo SAP
        $projects = Project::whereNotNull('sap_code')->get();
        #Obtener Credenciales
        $sapCredentials = SapCredential::first();
        if (!$sapCredentials->token) {
            $lsc = LogSapConnection::UpdateOrCreate(["type" => $this->lscType, 'description' =>  'Token SAP no obtenido aún. Por favor, inténtelo de nuevo en unos minutos.']);
        }
        #Por cada Proyecto realizar un llamado a SAP
        foreach ($projects as $key => $value) {
            $slug = Str::random(20);
            try {
                $client = new Client();
                $responseSap = $client->request('GET', $this->url . $value->sap_code, [
                    'headers' => ['Content-Type' => 'application/json', 'Authorization' => $sapCredentials->token]
                ]);
                $status = $responseSap->getStatusCode();
                ###Test
                /*$status = 200;
                $responseSap = '{
                    "inmuebles": [
                        {
                            "codigo": "NCA1EB1206",
                            "precio_pen": 323500.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EB1205",
                            "precio_pen": 323500.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EB1204",
                            "precio_pen": 324300.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EB1203",
                            "precio_pen": 324200.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EB1202",
                            "precio_pen": 339200.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EB1102",
                            "precio_pen": 340400.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EB1004",
                            "precio_pen": 328300.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EB1002",
                            "precio_pen": 341700.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EB0902",
                            "precio_pen": 343900.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA1206",
                            "precio_pen": 324800.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA1205",
                            "precio_pen": 324800.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA1204",
                            "precio_pen": 324800.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA1203",
                            "precio_pen": 324000.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA1202",
                            "precio_pen": 333700.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA1106",
                            "precio_pen": 326000.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA1105",
                            "precio_pen": 326000.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA1104",
                            "precio_pen": 326000.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA1103",
                            "precio_pen": 325300.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA1102",
                            "precio_pen": 334900.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA1005",
                            "precio_pen": 327300.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA1004",
                            "precio_pen": 327300.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA1003",
                            "precio_pen": 326500.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA0905",
                            "precio_pen": 328100.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA0904",
                            "precio_pen": 328100.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA0903",
                            "precio_pen": 327300.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA0902",
                            "precio_pen": 338400.0,
                            "precio_usd": 0.0
                        },
                        {
                            "codigo": "NCA1EA0304",
                            "precio_pen": 335100.0,
                            "precio_usd": 0.0
                        }
                    ],
                    "estacionamientos": [
                        {
                            "proyecto": "1212",
                            "precio_pen": 39000.0,
                            "precio_usd": 40.0,
                            "cantidad": 0
                        }
                    ]
                }';*/
                ###Test
                #LogSapConnection
                $description = 'Obtener Inmuebles Disponibilidad Proyecto ' . $value->name_es . ' - Éxito.';
                $lsc = new LogSapConnection();
                $lsc->type = $this->lscType;
                $lsc->status = $status;
                $lsc->slug = $slug;
                $lsc->description = $description;
                $lsc->response = ["sap_code" => $value->sap_code, "project_id" => $value->id];
                $lsc->save();
                #EndLogSapConnection
                $responseData = json_decode($responseSap->getBody());
                $countEstates = count($responseData->inmuebles);
                ###Test
                /*$responseData = json_decode($responseSap);
                $countEstates = count($responseData->inmuebles);*/
                ###Test
                #Array Inmuebles verificar si tiene objetos
                if ($countEstates > 0) {
                    $estates = $responseData->inmuebles;
                    #Si existe el Departmento en el response del SAP, actualizar sus datos, sino existe ponerlo como no disponible
                    $departments = Department::where('project_id',$value->id)->get();
                    foreach ($departments as $key => $dep) {
                        foreach ($estates as $key2 => $value2) {
                            if($dep->sap_code == $value2->codigo ){
                                $price = $price_foreign = null;
                                if($value2->precio_pen){
                                    $price = $value2->precio_pen;
                                } 
                                if($value2->precio_usd > 0){
                                    $price_foreign = $value2->precio_usd;   
                                }
                                $updateDepartment = $dep->update(['price' => $price, 'price_foreign' => $price_foreign,'available' => true]);
                            }
                        }
                    }
                    #Actualizar Departamentos que no hay en el response a no disponible
                    $estatestArray = collect($estates);
                    $estatesCodigoSapPlucked = $estatestArray->pluck('codigo');
                    $estatesCodigoSapPlucked = $estatesCodigoSapPlucked->all();
                    $departmentsNotAvailable = Department::whereNotIn('sap_code',$estatesCodigoSapPlucked)->update(['available' => false]);
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
                $updateProject = $value->update(['stock_parking' => $stock, 'price_parking_sap' => $price_parking, 'price_parking_foreign_sap' => $price_foreign_parking]);
            }
            catch (\GuzzleHttp\Exception\RequestException $e) {
                #Cuando sea cualquier código de error, se enviara un email al correo indicado.
                $status = $e->getResponse()->getStatusCode();
                $description = 'Obtener Inmuebles Disponibilidad Proyecto ' . $value->name_es . ' (Código SAP:'.$value->sap_code.') - Error.';
                $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $this->lscType, 'status' => $status, 'description' =>  (string) $description]);
            }
        }
    }
}
