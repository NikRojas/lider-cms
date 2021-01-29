<?php

namespace App\Http\Controllers\Cms\Projects;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\Project;
use App\Http\Requests\Cms\Project\GalleryRequest;
use App\ProjectQuotation;
use App\Repositories\ProjectQuotationsRepository;

class QuotationsController extends Controller
{
  use CmsTrait;

  public function index($element)
  {
    $project = Project::where('slug_es', $element)->firstOrFail();
    return view("pages.projects.quotations.index", compact('project'));
  }

  public function getAll(Request $request,ProjectQuotationsRepository $repo){
    $q = $request->q;
    $headers = ["Id", "Nombre","Teléfono", "Email","DNI","Tipología", "Proyecto", "Asesor", "Registrado el"];
    if($q){
        $elements = $repo->datatable($request->project_id,$request->itemsPerPage,$q);
    }
    else{
        $elements = $repo->datatable($request->project_id,$request->itemsPerPage);
    }
    $elements["headers"] = $headers;
    return response()->json($elements);
  }

  public function get(ProjectQuotation $element){
    return response()->json($element->load('projectTypeDepartmentRel','projectRel','advisorRel'));
  }

  public function destroy(ProjectQuotation $element){
    try {
        $element->delete();
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.lead')]) ],200);
    } 
    catch (\Exception $e){
        return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.lead')]) ],500);
    }
  }
}
