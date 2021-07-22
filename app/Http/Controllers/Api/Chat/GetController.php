<?php

namespace App\Http\Controllers\Api\Chat;

use App\Bond;
use App\ChatContactMedium;
use App\ChatQualification;
use App\ChatSchedules;
use App\Department;
use App\Http\Controllers\Api\BaseController;
use App\Project;
use App\ProjectParentTypeDepartment;
use App\TpsPromotion;
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
        $bonds = $project->load('bondsRel');
        $buttons = $this->getButtonsFlow1($project->id, $bonds, false, false);
        $customPayload['buttons'] = $buttons;
        return $this->sendResponse($customPayload, '');
    }
    
    public function getProjectPromos(Request $request){
        $project = Project::where('name_es',$request->name_project)->first();
        $customPayload = [];
        $customPayload['type'] = "buttons";
        $bonds = $project->load('bondsRel');
        $buttons = $this->getButtonsFlow1($project->id, $bonds, "Quiero saber si hay promociones vigentes?", true);
        $customPayload['buttons'] = $buttons;
        $promos = TpsPromotion::where('project_id', $project->id)->orderBy('index', 'asc')->get();
        $gallery = [];
        foreach ($promos as $key => $value) {
            $gallery[] = ["src" => asset('storage/img/projects/tps-promotion/'.$value["image"])];
        }
        $customPayload['text'] = "El proyecto ".$request->name_project." cuenta con los siguientes promociones:";
        $customPayload['gallery'] = $gallery;
        return $this->sendResponse($customPayload, '');
    }

    public function getProjectBonds(Request $request){
        $project = Project::where('name_es',$request->name_project)->first();
        $customPayload = [];
        $customPayload['type'] = "buttons";
        $bonds = $project->load('bondsRel');
        $buttons = $this->getButtonsFlow1($project->id, $bonds, "Quiero saber qué bonos tiene el proyecto?", true);
        $customPayload['buttons'] = $buttons;
        $texts = [ "El proyecto ".$request->name_project." cuenta con los siguientes bonos:" ];
        foreach ($bonds->bondsRel as $key => $value) {
            $texts[] = $value["name"].": Lorem ipsum dolor";
        }
        $customPayload['texts'] = $texts;
        return $this->sendResponse($customPayload, '');
    }

    public function getProjectQuotation(Request $request){
        $project = Project::where('name_es',$request->name_project)->first();
        $customPayload = [];
        $customPayload['type'] = "buttons";
        $bonds = $project->load('bondsRel');
        $buttons = $this->getButtonsFlow1($project->id, $bonds, "Quiero cotizar un departamento", true);
        $customPayload['buttons'] = $buttons;
        $customPayload['route_section'] = "#cotizar";
        $customPayload['text'] = "En esta sección podrás elegir un departamento, llenar tus datos y te llegará una cotización a tu correo";
        return $this->sendResponse($customPayload, '');
    }

    /*public function getProjectContact(Request $request){
        $project = Project::where('name_es',$request->name_project)->first();
        $customPayload = [];
        $customPayload['type'] = "buttons";
        $bonds = $project->load('bondsRel');
        $buttons = $this->getButtonsFlow1($project->id, $bonds, "Quiero que un asesor me contacte", true);
        $customPayload['buttons'] = $buttons;
        //$customPayload['text'] = "En esta sección podrás elegir un departamento, llenar tus datos y te llegará una cotización a tu correo";
        return $this->sendResponse($customPayload, '');
    }*/

    public function getProjectReserve(Request $request){
        $project = Project::where('name_es',$request->name_project)->first();
        $customPayload = [];
        $customPayload['type'] = "buttons";
        $bonds = $project->load('bondsRel');
        $buttons = $this->getButtonsFlow1($project->id, $bonds, "Quiero separar mi inmueble", true);
        $customPayload['buttons'] = $buttons;
        $customPayload['text_above'] = "Elige dentro de las opciones el inmueble que deseas separar";
        $customPayload['text'] = "En esta sección podrás realizar la separación de tu inmueble en el proyecto ".$request->name_project;
        $customPayload['route'] = [
            "name" => 'reserve'
        ];
        $customPayload['text'] = "En esta sección podrás elegir un departamento, llenar tus datos y te llegará una cotización a tu correo";
        return $this->sendResponse($customPayload, '');
    }

    /*public function getProjectOtherProjects(Request $request){
        $project = Project::where('name_es',$request->name_project)->first();
        $customPayload = [];
        $customPayload['type'] = "buttons";
        $bonds = $project->load('bondsRel');
        $buttons = $this->getButtonsFlow1($project->id, $bonds, "Quiero separar mi inmueble", true);
        $customPayload['buttons'] = $buttons;
        $customPayload['text_above'] = "Elige dentro de las opciones el inmueble que deseas separar";
        $customPayload['text'] = "En esta sección podrás realizar la separación de tu inmueble en el proyecto ".$request->name_project;
        $customPayload['route'] = [
            "name" => 'reserve'
        ];
        $customPayload['text'] = "En esta sección podrás elegir un departamento, llenar tus datos y te llegará una cotización a tu correo";
        return $this->sendResponse($customPayload, '');
    }*/

    public function getButtonsFlow1($id, $bonds, $textButton = false, $additionalQuestions = false){
        $countPromos = $this->getCountPromos($id);
        $countBonds = $bonds->bondsRel->count();
        $buttons = [];
        if($countPromos && $textButton != "Quiero saber si hay promociones vigentes?"){
            $buttons = array_merge($buttons,[["text" => "Quiero saber si hay promociones vigentes?"]]);
        }
        if($countBonds && $textButton != "Quiero saber qué bonos tiene el proyecto?"){
            $buttons = array_merge($buttons,[["text" => "Quiero saber qué bonos tiene el proyecto?"]]);
        }
        if($textButton != "Quiero cotizar un departamento"){
            $buttons = array_merge($buttons,[["text" => "Quiero cotizar un departamento"]]);
        }
        if($textButton != "Quiero que un asesor me contacte"){
            $buttons = array_merge($buttons,[["text" => "Quiero que un asesor me contacte"]]);
        }
        if($textButton != "Quiero separar mi inmueble"){
            $buttons = array_merge($buttons,[["text" => "Quiero separar mi inmueble"]]);
        }
        if($additionalQuestions){
            $buttons = array_merge($buttons,[["text" => "Quiero ver otros proyectos similares"],
            ["text" => "Ya no tengo más dudas"]]);
        }
        return $buttons;
    }

    public function getCountPromos($id){
        $promos = TpsPromotion::where('project_id', $id)->get()->count();
        return $promos;
    }
}
