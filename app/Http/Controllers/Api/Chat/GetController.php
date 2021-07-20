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
        $customPayload['text'] = "Elige el departamento";
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
}
