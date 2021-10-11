<?php

namespace App\Http\Controllers\Api\Chat;

use App\Bond;
use App\ChatContactMedium;
use App\ChatFaq;
use App\ChatQualification;
use App\ChatSchedules;
use App\Department;
use App\Http\Controllers\Api\BaseController;
use App\Information;
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
            ->orderBy('department', 'desc')->groupBy('code_department')->get();
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
            $customPayload['text'] = $request->name.", contamos con proyectos en ".$departmentsText." <strong>¿En qué ciudad estás interesado?</strong>";
        }
        else{
            $customPayload['text'] = "Estás interesado en ".$departmentsText;
        }
        $customPayload['type'] = "buttons";
        foreach ($data as $key => $value) {
            $buttons[] = ["text" => $value->department,"classes" => "chat_link_button_departamente_distrito"];
        }
        $buttons[] = ["text" => 'Ambas',"classes" => "chat_link_button_departamente_distrito"];
        $customPayload['buttons'] = $buttons;
        return $this->sendResponse($customPayload, '');
    }

    public function districts(Request $request)
    {
        if($request->department != 'Ambas'){
            $department = Ubigeo::where('department',$request->department)->first();
        }
        //$data = Ubigeo::select('code_district', 'district', 'code_ubigeo', 'code_department')->distinct()->where('code_department', $department->code_department)
        $data = Ubigeo::select('code_district', 'district', 'code_ubigeo', 'code_department')->distinct();
        if($request->department != 'Ambas'){
            $data = $data->where('code_department', $department->code_department);
        }
        $data = $data->whereHas('projectsRel', function ($query) {
                $query->where('active', 1);
                $query->whereHas('departmentsRel', function ($query2) {
                    $query2->where('available', 1);
                });
            })
            ->where('code_district', '!=', '00')->orderBy('district')->get();
        $data->push(["district" => 'Todos']);
        $customPayload = [];
        $customPayload['text'] = "¿En qué distrito te <strong>gustaría</strong> vivir? 😁";
        $customPayload['type'] = "buttons";
        $buttons = [];
        foreach ($data as $key => $value) {
            $buttons[] = ["text" => $value['district'], "classes" => "chat_link_button_departamente_distrito"];
        }
        $customPayload['buttons'] = $buttons;
        return $this->sendResponse($customPayload, '');
    }

    public function projects(Request $request){
        $department = $request->department;
        $district = $request->district;
        $data = Project::select('id', 'images','name_es', 'name_en', 'slug_es', 'slug_en','rooms_es','footage_es','logo','code_ubigeo')
        ->whereHas('departmentsRel', function ($query){
            $query->where('available', 1);
        })->where('active', 1);
        if($district == 'Todos'){
            if($department != "Ambas"){
                $codeDepartment = Ubigeo::where('department',$department)->first();
                $data = $data->whereHas('ubigeoRel', function ($query2) use ($codeDepartment) {
                    return $query2->whereIn('code_department', $codeDepartment);
                })->orderBy('id','asc');
            }
            else{
                $codeDepartments = Ubigeo::whereHas('projectsRel', function ($query) {
                    $query->where('active', 1);
                    $query->whereHas('departmentsRel', function ($query2) {
                        $query2->where('available', 1);
                    });
                })
                ->where('code_district', '!=', '00')->get();
                $data = $data->whereHas('ubigeoRel', function ($query2) use ($codeDepartments) {
                    return $query2->whereIn('code_ubigeo', $codeDepartments->pluck('code_ubigeo'));
                })->orderBy('index');
            }
        }
        else{
            $ubigeo = Ubigeo::whereHas('projectsRel')->where('district',$district)->first();
            $data = $data->whereHas('ubigeoRel', function ($query2) use ($ubigeo) {
                return $query2->where('code_ubigeo', $ubigeo->code_ubigeo);
            })->orderBy('id','asc');
        }
        $data = $data->with('ubigeoRel')->get();
        $customPayload = [];
        $customPayload['text'] = "Tenemos estos proyectos disponibles 👇";
        $customPayload['type'] = "carousel";
        $carousel = [];
        foreach ($data as $key => $value) {
            $desc = NULL;
            if($request->district == "Todos"){
                $desc = '<div>'.$value['ubigeoRel']['district'].'</div><br><div>'.$value['rooms_es'].'<br>'.$value['footage_es'].'</div>';
            }
            else{
                $desc = '<div>'.$value['rooms_es'].'<br>'.$value['footage_es'].'</div>';
            }
            $carousel[] = [
                "title" => $value['name_es'],
                "button" => $value['name_es'],
                "logo" => asset('storage/img/projects/'.$value['logo']),
                "description" => $desc,
                "image" => asset('storage/img/projects/'.$value["images_format"][0])
            ];
        }
        $customPayload['carousel'] = $carousel;
        return $this->sendResponse($customPayload, '');
    }

    /*public function contactMedium(Request $request)
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
    }*/

    public function getProject(Request $request){
        $name = $request->name;
        $name_es = $request->name_project;
        $project = Project::where('name_es',$name_es)->first();
        $countDeps = Department::where('project_id',$project->id)->where('available',true)->count();
        $customPayload = [];
        $prependText = "Buena elección <strong>".$name."</strong> 👌. Te redirecciono al proyecto.";
        $customPayload['notification'] = "Buena elección <strong>".$name."</strong> 👌. Te redirecciono al proyecto.";
        $firstText = "En el proyecto <strong>".$name_es."</strong> tenemos 🏢 <strong>".$countDeps." inmuebles en stock </strong>";
        if($project->stock_parking){
            $firstText .= " y <strong>".$project->stock_parking." estacionamientos</strong>.";
        }
        else{
            $firstText .= ".";
        }
        $currency = $project->master_currency_id;
        
        if($currency == 1){
            //Sol
            $column_name = 'price';
            $symbol = 'S/ ';
            $min = Department::where('project_id',$project->id)->where('available',true)->min($column_name);
            $max = Department::where('project_id',$project->id)->where('available',true)->max($column_name);
            $secondText = "Los precios de los inmuebles van desde <strong>".number_format($min, 0, '.', ',')." nuevos soles</strong> hasta <strong>".number_format($max, 0, '.', ',')." nuevos soles</strong>";
        }
        else if($currency == 2){
            $column_name = 'price_foreign';
            $symbol = '$ ';
            $min = Department::where('project_id',$project->id)->where('available',true)->min($column_name);
            $max = Department::where('project_id',$project->id)->where('available',true)->max($column_name);
            $secondText = "Los precios de los inmuebles van desde <strong>".$symbol.number_format($min, 0, '.', ',')."</strong> hasta <strong>".$symbol.number_format($max, 0, '.', ',')."</strong>";
        }
        $customPayload['route'] = [
            "name" => 'project',
            "params" => [
                "project" => $project->slug_es
            ]
        ];
        $customPayload['type'] = "buttons";
        $customPayload['texts'] = [$prependText, $firstText,$secondText];
        $customPayload['text_above'] = "¿Cómo puedo ayudarte con el proyecto <strong>".$name_es."</strong>? 😊";
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
        $buttons = $this->getButtonsFlow1($project->id, $bonds, "Quiero saber si hay promociones vigentes", true);
        $customPayload['buttons'] = $buttons;
        $promos = TpsPromotion::where('project_id', $project->id)->orderBy('index', 'asc')->get();
        $gallery = [];
        foreach ($promos as $key => $value) {
            $gallery[] = ["src" => asset('storage/img/projects/tps-promotion/'.$value["image"])];
        }
        $customPayload['text'] = "El proyecto <strong>".$request->name_project."</strong> cuenta con los siguientes promociones 👇";
        $customPayload['gallery'] = $gallery;
        return $this->sendResponse($customPayload, '');
    }

    public function getProjectBonds(Request $request){
        $project = Project::where('name_es',$request->name_project)->first();
        $customPayload = [];
        $customPayload['type'] = "buttons";
        $bonds = $project->load('bondsRel');
        $buttons = $this->getButtonsFlow1($project->id, $bonds, "Quiero saber qué bonos tiene el proyecto", true);
        $customPayload['buttons'] = $buttons;
        $texts = [ "El proyecto <strong>".$request->name_project."</strong> cuenta con los siguientes bonos 👇" ];
        foreach ($bonds->bondsRel as $key => $value) {
            $tempValue = "<strong>".$value["name"]."</strong>";
            if($value["description"]){
                $tempValue = $tempValue.': '.$value["description"];
            }
            $texts[] = $tempValue;
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
        $customPayload['notification'] = "👈 En esta sección podrás elegir un departamento, llenar tus datos y te llegará una cotización a tu correo";
        $customPayload['text'] = "👈 En esta sección podrás elegir un departamento, llenar tus datos y te llegará una cotización a tu correo";
        return $this->sendResponse($customPayload, '');
    }

    public function getContactLink(Request $request){
        $customPayload = [];
        $customPayload['type'] = "buttons";
        $customPayload['text'] = "En esta sección podrás agendar una cita en el horario de tu preferencia 👈";
        $customPayload['notification'] = "En esta sección podrás agendar una cita en el horario de tu preferencia 👈";
        $customPayload['text_above'] = "Tienes alguna duda adicional?";
        $buttons = [
            ["text" => "Quiero conocer los proyectos en venta"],
            ["text" => "Quiero separar un inmueble"],
            ["text" => "Quiero contactarme con Servicio al Cliente"],
            ["text" => "No tengo más dudas"]
        ];
        if($request->name_project){
            $project = Project::where('name_es',$request->name_project)->first();
            $customPayload['route'] = [
                "name" => 'online-appointment',
                "query" => [
                    "project" => $project->slug_es
                ]
            ];
        }
        else{
            $customPayload['route'] = [
                "name" => 'online-appointment'
            ];
        }
        $customPayload['buttons'] = $buttons;
        return $this->sendResponse($customPayload, '');
    }

    public function getProjectReserve(Request $request){
        $project = Project::where('name_es',$request->name_project)->first();
        $customPayload = [];
        $customPayload['type'] = "buttons";
        $bonds = $project->load('bondsRel');
        $buttons = $this->getButtonsFlow1($project->id, $bonds, "Quiero separar un inmueble", true);
        $customPayload['buttons'] = $buttons;
        //$customPayload['text_above'] = "Elige dentro de las opciones el inmueble que deseas separar";
        $customPayload['text'] = "En esta sección podrás realizar la separación de tu inmueble en el proyecto <strong>".$request->name_project."</strong>. 😄";
        $customPayload['notification'] = "En esta sección podrás realizar la separación de tu inmueble en el proyecto <strong>".$request->name_project."</strong>. 😄";
        $customPayload['route'] = [
            "name" => 'reserve'
        ];
        return $this->sendResponse($customPayload, '');
    }

    public function getProjectOtherProjects(Request $request){
        $project = Project::where('name_es',$request->name_project)->first();
        $customPayload = [];
        $customPayload['type'] = "carousel";
        $projects_related = [];
        if ($project->projects_related) {
            foreach (json_decode($project->projects_related) as $key => $value) {
                $projectTemp = Project::select('id', 'images', 'name_es','slug_es', 'rooms_es', 'footage_es','logo')->where('id', $value)->first();
                $projects_related[] = [
                    "title" => $projectTemp['name_es'],
                    "button" => $projectTemp['name_es'],
                    "logo" => asset('storage/img/projects/'.$projectTemp['logo']),
                    "description" => '<div>'.$projectTemp['rooms_es'].'<br>'.$projectTemp['footage_es'].'</div>',
                    "image" => asset('storage/img/projects/'.$projectTemp["images_format"][0])
                ];
            }
        }
        else{
            $projects_related_temp = Project::select('id', 'project_status_id', 'logo','logo_colour', 'slug_es', 'images', 'code_ubigeo', 'name_es', 'rooms_es', 'footage_es', 'price_total', 'price_total_foreign')
            ->where('id','!=',$project->id)->with('statusRel', 'ubigeoRel')->where('active', 1)->inRandomOrder()->limit(4)->get();
            foreach ($projects_related_temp as $key => $value) {
                $projects_related[] = [
                    "title" => $value->name_es,
                    "button" => $value->name_es,
                    "logo" => asset('storage/img/projects/'.$value->logo),
                    "description" => '<div>'.$value->rooms_es.'<br>'.$value->footage_es.'</div>',
                    "image" => asset('storage/img/projects/'.$value["images_format"][0])
                ];
            }
        }
        $customPayload['carousel'] = $projects_related;
        $customPayload['text'] = "Tenemos disponibles los siguientes proyectos similares";
        return $this->sendResponse($customPayload, '');
    }

    public function getButtonsFlow1($id, $bonds, $textButton = false, $additionalQuestions = false){
        $countPromos = $this->getCountPromos($id);
        $countBonds = $bonds->bondsRel->count();
        $buttons = [];
        if($countPromos && $textButton != "Quiero saber si hay promociones vigentes"){
            $buttons = array_merge($buttons,[["text" => "Quiero saber si hay promociones vigentes"]]);
        }
        if($countBonds && $textButton != "Quiero saber qué bonos tiene el proyecto"){
            $buttons = array_merge($buttons,[["text" => "Quiero saber qué bonos tiene el proyecto"]]);
        }
        if($textButton != "Quiero cotizar un departamento"){
            $buttons = array_merge($buttons,[["text" => "Quiero cotizar un departamento"]]);
        }
        if($textButton != "Quiero que un asesor me contacte"){
            $buttons = array_merge($buttons,[["text" => "Quiero que un asesor me contacte"]]);
        }
        if($textButton != "Quiero separar un inmueble"){
            $buttons = array_merge($buttons,[["text" => "Quiero separar un inmueble"]]);
        }
        if($additionalQuestions){
            if($textButton != "Quiero ver otros proyectos similares"){
                $buttons = array_merge($buttons,[["text" => "Quiero ver otros proyectos similares"]]);
            }
            $buttons = array_merge($buttons,[["text" => "Ya no tengo más dudas"]]);
        }
        return $buttons;
    }

    public function getCountPromos($id){
        $promos = TpsPromotion::where('project_id', $id)->get()->count();
        return $promos;
    }

    public function getFaq(){
        $elements = ChatFaq::orderBy('index', 'asc')->get();
        return response()->json($elements);
    }

    public function getNoDoubts(Request $request){
        $information = Information::first();
        $customPayload = [];
        $firstText = "Gracias por calificar mi atención ".$request->name."!";
        $customPayload['texts'] = [$firstText, 
        "<strong>¿Tienes una duda adicional?</strong> También contamos con la sección de <strong>Preguntas Frecuentes</strong> 👆"];
        $customPayload['texts'] = array_merge($customPayload['texts'], [
            "Si no llegamos a resolverlas aquí te dejamos nuestros números de contacto: 
            <br> <strong>📞 Central de ventas: </strong><a href='tel:01'".$information->central_phone.">".$information->central_phone_formatted."</a>"]);
        /*if($information->central_phone){
        }
        if($information->main_office){
            $customPayload['texts'] = array_merge($customPayload['texts'], ["<br><strong>📞 Oficina principal: </strong><a href='tel:01'".$information->main_office.">".$information->main_office_formatted."</a>"]);
        }*/
        $customPayload['texts'] = array_merge($customPayload['texts'], ["No olvides que estaré aquí para ayudarte 🤖"]);
        $customPayload['type'] = "buttons";
        $customPayload['buttons'] = [
            ["text" => "Quiero conocer los proyectos en venta"],
            ["text" => "Quiero que un asesor me contacte"],
            ["text" => "Quiero separar un inmueble"],
            ["text" => "Quiero contactarme con Servicio al Cliente"],
            ["text" => "Cerrar Chat"],
        ];
        return $this->sendResponse($customPayload, '');
    }

    public function getProjectContact(Request $request){
        $project = Project::where('name_es',$request->name_project)->first();
        $customPayload = [];
        $customPayload['type'] = "buttons";
        $customPayload['text'] = "En esta sección podrás agendar una cita en el horario de tu preferencia 👈";
        $customPayload['notification'] = "En esta sección podrás agendar una cita en el horario de tu preferencia 👈";
        $customPayload['text_above'] = "Tienes alguna duda adicional?";
        $buttons = [
            ["text" => "Quiero ver otros proyectos similares"],
            ["text" => "Ya no tengo más dudas"],
        ];
        $customPayload['route'] = [
            "name" => 'online-appointment',
            "query" => [
                "project" => $project->slug_es,
                //"email"   => $request->email,
                //"mobile"  => $request->mobile
            ]
        ];
        $customPayload['buttons'] = $buttons;
        return $this->sendResponse($customPayload, '');
    }
}
