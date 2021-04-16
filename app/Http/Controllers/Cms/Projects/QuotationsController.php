<?php

namespace App\Http\Controllers\Cms\Projects;

use App\Exports\LeadQuotationExport;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Export\LeadExportExcel;
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
    $headers = ["Id", "Nombre","Teléfono", "Email","DNI","Tipología", "Proyecto", "Asesor", "Registrado el", "UTM Source"];
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

  public function allExport($element)
    {
      $project = Project::where('id', $element)->firstOrFail();
        $leads = ProjectQuotation::where('project_id', $project->id)->with("projectRel",'advisorRel','projectTypeDepartmentRel')->orderBy('created_at', 'asc')->get();
        return new LeadQuotationExport(null, null, $leads,$project->name_es);
    }

    public function filterExport($element,LeadExportExcel $request)
    {
      $project = Project::where('id', $element)->firstOrFail();
        $from = date("Y-m-d H:i:s", strtotime($request->from));
        $to = date("Y-m-d H:i:s", strtotime($request->to));
        $leads = ProjectQuotation::where('project_id', $project->id)->with('projectRel','advisorRel','projectTypeDepartmentRel')->whereBetween('created_at', [$from,$to])->orderBy('created_at', 'asc')->get();
        return (new LeadQuotationExport($from,$to,$leads, $project->name_es));
    }
}
