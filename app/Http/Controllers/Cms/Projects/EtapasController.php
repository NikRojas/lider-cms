<?php

namespace App\Http\Controllers\Cms\Projects;

use App\Department;
use App\EtapaProyecto;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Project\EtapaRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Repositories\EtapaRepository;
use App\Http\Traits\CmsTrait;
use App\Project;
use App\ProjectStatus;
use App\RealStatePackage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class EtapasController extends Controller
{
    use CmsTrait;

    public function index($project)
    {
        $element = Project::where('slug_es', $project)->firstOrFail();
        $statuses = ProjectStatus::get();
        return view('pages.projects.etapas.index', compact('element','statuses'));
    }

    public function getAll($project_id, Request $request, EtapaRepository $repo){
        $q = $request->q;
        $headers = ["Id", "Nombre", "Código SAP", "Estado"];
        if($q){
            $elements = $repo->datatable($project_id, $request->itemsPerPage,$q);
        }
        else{
            $elements = $repo->datatable($project_id, $request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function store(EtapaRequest $request)
    {
        $element = request(['name','sap_code','project_status_id']);
        try {
            $element = EtapaProyecto::UpdateOrCreate(array_merge($element,["project_id" => $request->project_id]));
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.etapa')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.etapa')]) ], 500);
        }
    }

    public function get($project, EtapaProyecto $element)
    {
        return response()->json($element);
    }

    public function update($project,EtapaProyecto $element, EtapaRequest $request){
        //$elementR = EtapaProyecto::where('id', $element-)->firstOrFail();
        $p_request = request(['name','sap_code','project_status_id']);
        try {
            $element = EtapaProyecto::UpdateOrCreate(["id" => $element->id], $p_request);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.etapa')])]);
        } catch (\Exception $e) {
            dd($e);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.etapa')]) ], 500);
        }
    }

    public function destroy($project, EtapaProyecto $element)
    {
        try {
            $element->delete();
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.etapa')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.etapa')])], 500);
        }
    }
}