<?php

namespace App\Http\Controllers\Api\Chat;

use App\ChatContactMedium;
use App\ChatQualification;
use App\ChatSchedules;
use App\Department;
use App\Http\Controllers\Api\BaseController;
use App\Project;
use App\ProjectParentTypeDepartment;
use App\Ubigeo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GetController extends BaseController
{
    public function departments(Request $request)
    {
        $data = Ubigeo::select('code_ubigeo', 'code_department', 'department', 'code_district')->distinct('code_department')
            ->whereHas('projectsRel', function ($query) {
                $query->where('active', 1);
                $query->whereHas('departmentsRel', function ($query2) {
                    $query2->where('available', 1);
                });
            })
            ->orderBy('department', 'ASC')->groupBy('code_department')->get();
        $customPayload = [];
        $deparmentsPluck = $data->pluck('department');
        $lengthdeparmentsPluck = count($deparmentsPluck);
        $departmentsText = null;
        foreach($deparmentsPluck as $key => $a){ 
            if($lengthdeparmentsPluck == 1){
                $departmentsText .= $a;
            }
            else if($lengthdeparmentsPluck == 2){
                if($key + 1 === $lengthdeparmentsPluck) {
                    $departmentsText .= " o ".$a;
                }
                else{
                    $departmentsText .= $a;
                }
            }
            else{
                if($key + 1 === $lengthdeparmentsPluck) {
                    $departmentsText .= " o ".$a;
                }
                else{
                    if($key + 1 == $lengthdeparmentsPluck - 1){
                        $departmentsText .= $a."";
                    }
                    else{
                        $departmentsText .= $a.", ";
                    }
                }
            }
        }
        if($request->name){
            $customPayload['text'] = $request->name." estás interesado en ".$departmentsText;
        }
        else{
            $customPayload['text'] = "Estás interesado en ".$departmentsText;
        }
        $customPayload['type'] = "buttons";
        foreach ($data as $key => $value) {
            $buttons[] = ["text" => $value->department];
        }
        $customPayload['buttons'] = $buttons;
        return $this->sendResponse($customPayload, '');
    }

    public function districts(Request $request)
    {
        $department = Ubigeo::where('department',$request->department)->first();
        $data = Ubigeo::select('code_district', 'district', 'code_ubigeo', 'code_department')->distinct()->where('code_department', $department->code_department)
            ->whereHas('projectsRel', function ($query) {
                $query->where('active', 1);
                $query->whereHas('departmentsRel', function ($query2) {
                    $query2->where('available', 1);
                });
            })
            ->where('code_district', '!=', '00')->orderBy('district')->get();
        $data->push(["district" => 'Todos']);
        $customPayload = [];
        $customPayload['text'] = "¿En qué distrito te gustaría vivir?";
        $customPayload['type'] = "buttons";
        $buttons = [];
        foreach ($data as $key => $value) {
            $buttons[] = ["text" => $value['district']];
        }
        $customPayload['buttons'] = $buttons;
        return $this->sendResponse($customPayload, '');
    }

    public function projects(Request $request){
        $department = $request->department;
        $district = $request->district;
        $data = Project::select('id', 'images','name_es', 'name_en', 'slug_es', 'slug_en')
        ->whereHas('departmentsRel', function ($query){
            $query->where('available', 1);
        })->where('active', 1)->orderBy('name_es');
        if($district == 'Todos'){
            $codeDepartment = Ubigeo::where('department',$department)->first();
            $data = $data->whereHas('ubigeoRel', function ($query2) use ($codeDepartment) {
                return $query2->whereIn('code_department', $codeDepartment);
            });
        }
        else{
            $ubigeo = Ubigeo::where('department',$department)->where('district',$district)->first();
            $data = $data->whereHas('ubigeoRel', function ($query2) use ($ubigeo) {
                return $query2->where('code_ubigeo', $ubigeo->code_ubigeo);
            });
        }
        $data = $data->get();
        $customPayload = [];
        $customPayload['text'] = "Tenemos disponibles estos proyectos.";
        $customPayload['type'] = "carousel";
        $carousel = [];
        foreach ($data as $key => $value) {
            $carousel[] = [
                "title" => $value['name_es'],
                "button" => $value['name_es'],
                "image" => asset('storage/img/projects/'.$value["images_format"][0])
            ];
        }
        $customPayload['carousel'] = $carousel;
        return $this->sendResponse($customPayload, '');
    }

    public function contactMedium(Request $request)
    {
        $name = $request->name;
        $data = ChatContactMedium::orderBy('index','asc')->get();
        $customPayload = [];
        $customPayload['text'] = "Gracias". ($name ? " ".$name : "" ).", por qué medio te gustaría que te contactemos?";
        $customPayload['type'] = "buttons";
        foreach ($data as $key => $value) {
            $buttons[] = ["text" => $value->description];
        }
        $customPayload['buttons'] = $buttons;
        return $this->sendResponse($customPayload, '');
    }

    public function contactSchedules(Request $request)
    {
        $data = ChatSchedules::orderBy('index','asc')->get();
        $customPayload = [];
        $customPayload['text'] = "Por último, en qué horario te gustaría que te contactemos?";
        $customPayload['type'] = "buttons";
        foreach ($data as $key => $value) {
            $buttons[] = ["text" => $value->description];
        }
        $customPayload['buttons'] = $buttons;
        return $this->sendResponse($customPayload, '');
    }

    public function getProject(Request $request){
        $name = $request->name;
        $name_es = $request->name_project;
        $project = Project::where('name_es',$name_es)->first();
        $countDeps = Department::where('project_id',$project->id)->where('available',true)->count();
        $customPayload = [];
        $firstText = "Buena elección ".$name.", en el proyecto ".$name_es." tenemos ".$countDeps." inmuebles en stock";
        if($project->stock_parking){
            $firstText .= " y ".$project->stock_parking." cocheras.";
        }
        else{
            $firstText .= ".";
        }
        $currency = $project->master_currency_id;
        if($currency == 1){
            //Sol
            $column_name = 'price';
            $symbol = 'S/ ';
        }
        else if($currency == 2){
            $column_name = 'price_foreign';
            $symbol = '$ ';
        }
        $min = Department::where('project_id',$project->id)->where('available',true)->min($column_name);
        $max = Department::where('project_id',$project->id)->where('available',true)->max($column_name);
        $secondText = "Los precios de los inmuebles van desde ".$symbol.number_format($min, 0, '.', ',')." hasta ".$symbol.number_format($max, 0, '.', ',');
        $customPayload['route'] = [
            "name" => 'project',
            "params" => [
                "project" => $project->slug_es
            ]
        ];
        $customPayload['type'] = "buttons";
        $customPayload['text'] = $firstText.'<br>'.$secondText;
        $customPayload['text_above'] = "¿Cómo puedo ayudarte con el proyecto ".$name_es."?";
        $customPayload['buttons'] = [
            ["text" => "Quiero saber qué bonos tiene el proyecto?"],
            ["text" => "Quiero saber si hay promociones vigentes?"],
            ["text" => "Quiero cotizar un departamento"],
            ["text" => "Quiero que un asesor me contacte"],
            ["text" => "Quiero separar mi inmueble"]
        ];
        return $this->sendResponse($customPayload, '');
    }

    public function getProjectBonds(Request $request){
        $project = Project::where('name_es',$request->name_project)->first();
        $bonds = $project->load('bondsRel');
        $customPayload = [];
        $customPayload['type'] = "buttons";
        $customPayload["buttons"] = [
            ["text" => "Quiero saber qué bonos tiene el proyecto?"],
            ["text" => "Quiero saber si hay promociones vigentes?"]
        ];
        $texts = [ "El proyecto ".$request->name_project." cuenta con los siguientes bonos:" ];
        foreach ($bonds->bondsRel as $key => $value) {
            $texts[] = $value["name"].": Lorem ipsum dolor";
        }
        $customPayload['texts'] = $texts;
        return $this->sendResponse($customPayload, '');
    }
}
