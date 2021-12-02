<?php

namespace App\Http\Controllers\Cms\Projects;

use App\Department;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\LogSapConnection;
use App\Project;
use App\ProjectTypeDepartment;
use App\ProjectView;
use App\Repositories\DepartmentsRepository;
use App\SapCredential;
use Illuminate\Support\Str;
use GuzzleHttp\Client;
use App\ProjectSector;
use Illuminate\Support\Facades\Log;

class DepartmentsController extends Controller
{
    private $url = '/api/cliente/inmuebles/proyecto?codigo=';
    use CmsTrait;

    public function index($element)
    {
        $project = Project::where('slug_es', $element)->firstOrFail();
        return view("pages.projects.departments.index", compact('project'));
    }

    public function getAll(Request $request, DepartmentsRepository $repo)
    {
        $q = $request->q;
        $orderBy = null;
        if($request->order_by){
            switch ($request->order_by) {
                case 'Código SAP':
                    $orderBy = 'sap_code';
                    break;
                    case 'Descripción':
                        $orderBy = 'description';
                        break;
                        case 'Tipología':
                            $orderBy = 'type_department_id';
                        break;
            }
        }
        $orderType = $request->order_type;
        $headers = ["Id", "Código SAP", "Tipo Inmueble", "Descripción", "Área (m2)", "Piso", "Vista", "Tipología", "Tipo", "Stock", "Precio S/", "Precio $",'Actualizado el'];
        if ($q) {
            $elements = $repo->datatable($request->project_id, $request->itemsPerPage, $q, $orderBy, $orderType);
        } else {
            $elements = $repo->datatable($request->project_id, $request->itemsPerPage, null, $orderBy, $orderType);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function getSap($element)
    {
        $this->url = config('services.sap_url').$this->url;
        $element = Project::where('slug_es', $element)->firstOrFail();
        $sapCredentials = SapCredential::first();
        if (!$sapCredentials->token) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.sap.no_token')], 500);
        }
        if (!$element->sap_code) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.sap.get_departments.no_code_sap', ['name' => $element->name_es])], 500);
        }
        $slug = Str::random(20);
        try {
            $client = new Client();
            $responseSap = $client->request('GET', $this->url . $element->sap_code, [
                'headers' => ['Content-Type' => 'application/json', 'Authorization' => 'Bearer ' . $sapCredentials->token]
            ]);
            $status = $responseSap->getStatusCode();
            #LogSapConnection
            $description = 'Obtener Inmuebles Proyecto ' . $element->name_es . ' - Éxito.';
            $lsc = new LogSapConnection();
            $lsc->type = 'Obtener Inmuebles';
            $lsc->status = $status;
            $lsc->slug = $slug;
            $lsc->description = $description;
            $lsc->response = ["project_id" => $element->id];
            $lsc->save();
            #EndLogSapConnection
            $responseData = json_decode($responseSap->getBody());
            $notValidatedTipologiesCount = 0;
            $notValidatedTipologies = null;
            $notValidatedViewsCount = 0;
            $notValidatedViews = null;
            $registeredCount = 0;
            $countEstates = count($responseData->inmuebles);
            $hasWarehouse = $hasParking = false;
            if(isset($responseData->depositos)){
                if($responseData->depositos){
                    $hasWarehouse = true;
                }
            }
            if(isset($responseData->estacionamientos)){
                if($responseData->estacionamientos){
                    $hasParking = true;
                }
            }
            #Array Inmuebles verificar si tiene objetos
            if ($countEstates > 0) {
                try {
                    foreach ($responseData->inmuebles as $key => $value) {
                        $sector = NULL;
                        $sector = ProjectSector::where('sap_code',$value->sector)->first();
                        if($sector->name == "Departamento" && $sector->name == "Casa"){
                            $checkTipology = ProjectTypeDepartment::where('sap_code', $value->tipologia)->where('project_id', $element->id)->first();
                            #Verificar que Tipologia este registrado en la BD y sea el mismo proyecto
                            if (!$checkTipology) {
                                $notValidatedTipologiesCount++;
                                $notValidatedTipologies[] = $value->codigo;
                            }
                            #Verificar que Vista esta registrado en la BD
                            $checkView = ProjectView::where('sap_code', $value->vista)->first();
                            if (!$checkView) {
                                $notValidatedViewsCount++;
                                $notValidatedViews[] = $value->codigo;
                            }
                            #Solo si la tipologia y la vista existe en la BD
                            if ($checkTipology && $checkView) {
                                $findDepartment = Department::where("sap_code", $value->codigo)->first();
                                Log::info($sector->id);
                                #Verificar si existe ya el Inmueble en la BD
                                if ($findDepartment) {
                                    $updateDeparment = Department::UpdateOrCreate(["id" => $findDepartment->id], ["description" => $value->descripcion, "area" => $value->area, "floor" => $value->piso, "view_id" => $checkView->id, "type_department_id" => $checkTipology->id, "sector_id" => $sector->id]);
                                    if ($updateDeparment) {
                                        $registeredCount++;
                                    }
                                } else {
                                    $createDeparment = Department::UpdateOrCreate(["slug" => Str::random(20), "sap_code" => $value->codigo, "description" => $value->descripcion, "area" => $value->area, "floor" => $value->piso, "view_id" => $checkView->id, "type_department_id" => $checkTipology->id, "project_id" => $element->id, "sector_id" => $sector->id]);
                                    if ($createDeparment) {
                                        $registeredCount++;
                                    }
                                }
                            }
                        }
                        #Estacionamiento o Deposito
                        else{
                            $findDepartment = Department::where("sap_code", $value->codigo)->first();
                                #Verificar si existe ya el Inmueble en la BD
                                if ($findDepartment) {
                                    $updateDeparment = Department::UpdateOrCreate(["id" => $findDepartment->id], ["description" => $value->descripcion, "area" => $value->area, "sector_id" => $sector->id]);
                                    if ($updateDeparment) {
                                        $registeredCount++;
                                    }
                                } else {
                                    $createDeparment = Department::UpdateOrCreate(["slug" => Str::random(20), "sap_code" => $value->codigo, "description" => $value->descripcion, "area" => $value->area, "project_id" => $element->id, "sector_id" => $sector->id]);
                                    if ($createDeparment) {
                                        $registeredCount++;
                                    }
                                }  
                        }
                    }
                    $message = trans('custom.message.sap.get_departments.success', ['total' => $countEstates]);
                    if ($registeredCount) {
                        $message = $message . '<br> <b class="text-success">Inmuebles Registrados/Actualizados:</b> Se registraron/actualizaron ' . $registeredCount . ' inmueble(s)';
                    }
                    if ($notValidatedViewsCount > 0) {
                        $str = implode(", ", $notValidatedViews);
                        $message = $message . '<br> <b class="text-danger">Error Vista:</b> No se pudieron registrar/actualizar ' . $notValidatedViewsCount . ' inmueble(s) debido a que el Código de Vista de SAP no esta registrado en el mantenimiento de Vistas de este Administrador (' . $str . ').';
                    }
                    if ($notValidatedTipologiesCount > 0) {
                        $str = implode(", ", $notValidatedTipologies);
                        $message = $message . '<br> <b class="text-danger">Error Tipología:</b> No se pudieron registrar/actualizar ' . $notValidatedTipologiesCount . ' inmueble(s) debido a que el Código de Tipología de SAP no esta registrado en el mantenimiento de Tipologías de este Proyecto (' . $str . ').';
                    }
                    $projectUpdated = Project::UpdateOrCreate(["id" => $element->id],["has_warehouse" => $hasWarehouse, "has_parking" => $hasParking] );
                    return response()->json(['title' => trans('custom.title.success'), 'message' => $message], 200);
                } catch (\Exception $e) {
                    //dd($e);
                    return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.sap.get_departments.error')], 500);
                }
            } else {
                return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.sap.get_departments.no_departments', ['name' =>  $element->name_es])], 500);
            }
        } catch (\GuzzleHttp\Exception\RequestException $e) {
            $status = $e->getResponse()->getStatusCode();
            $description = 'Obtener Inmuebles Proyecto ' . $element->name_es . ' - Error.';
            $lsc = LogSapConnection::UpdateOrCreate(["type" => 'Obtener Inmuebles', 'status' => $status, 'description' =>  (string) $description]);
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.sap.get_departments.error_connection')], 500);
        }
    }

    public function destroy(Department $element){
        $image = $element->image;
        try {
            $destroy = $element->delete();
            if($image){
                Storage::disk('public')->delete('img/projects/estates/'.$image);   
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')]) ],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')]) ],500);
        }
    }
}
