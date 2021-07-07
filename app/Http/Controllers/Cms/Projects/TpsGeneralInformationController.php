<?php

namespace App\Http\Controllers\Cms\Projects;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Project;
use App\Http\Requests\Cms\Project\TpsGeneralInformationRequest;
use App\Http\Traits\CmsTrait;

class TpsGeneralInformationController extends Controller
{
  use CmsTrait;

  public function index($element)
  {
    $element = Project::where('slug_es', $element)->firstOrFail();
    return view("pages.projects.platform-general-information.index", compact('element'));
  }

  public function store(TpsGeneralInformationRequest $request)
  {
    $request_information = request(["tps_principal_title", "tps_latitude", "tps_longitude", "tps_location_description",'tps_base_dsct_ci']);
    try {
      $information = Project::UpdateOrCreate(["id" => $request->id], $request_information);

      return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.information')])], 200);
    } catch (\Exception $e) {
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.information')])], 500);
    }
  }

  public function get(Request $request)
  {
    $informacion = Project::select("id", "tps_principal_title", "tps_latitude", "tps_longitude", "tps_location_description",'tps_base_dsct_ci')->where('id', $request->project_id)->orderBy('created_at', 'desc')->first();
    return response()->json($informacion);
  }
}
