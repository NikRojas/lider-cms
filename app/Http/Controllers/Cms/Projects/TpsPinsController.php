<?php

namespace App\Http\Controllers\Cms\Projects;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\Project;
use App\Http\Requests\Cms\Project\TpsPinRequest;
use App\TpsPin;

class TpsPinsController extends Controller
{
  use CmsTrait;

  public function index($element)
  {
    //
  }

  public function getAll(Request $request)
  {
    if($request->q){
      $elements = TpsPin::where('title','like','%'.$request->q.'%')->where('project_id', $request->project_id)->paginate($request->itemsPerPage);
    }
    else{
      $elements = TpsPin::where('project_id', $request->project_id)->paginate($request->itemsPerPage);
    }
    foreach ($elements as $el) {
      $image = config('services.images_url') . "/projects/tps-pins/" . $el["image"];
      $data[] = array(
        "id" => $el["id"],
        "title" => $el["title"],
        "latlong" => $el['tps_latitude'].', '.$el['tps_longitude'],
        "image" => "<img src=" . $image . " class='mr-3 p-2' height='50' width='auto' alt='Pin " . $el["index"] . "'/><a class='btn btn-outline-info btn-sm' href=" . $image . " target='_blank'>Ver Imagen</a>",
      );
    }
    $elements = $elements->toArray();
    if (isset($data)) {
      $elements["data"] = '';
      $elements["data"] = $data;
    }
    $headers = ["Id", "Nombre", "Latitud/Longitud", "Imagen"];
    $elements["headers"] = $headers;
    return response()->json($elements);
  }

  public function get(TpsPin $element)
  {
    return response()->json($element);
  }

  public function destroy(TpsPin $element)
  {
    $image = $element->image;
    try {
      $destroy = $element->delete();
      if ($destroy) {
        Storage::disk('public')->delete('img/projects/tps-pins/' . $image);
      }
      return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')])], 200);
    } catch (\Exception $e) {
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')])], 500);
    }
  }

  public function store(TpsPinRequest $request)
  {
    $element = request(["project_id","tps_latitude","tps_longitude","title"]);
    if ($request->hasFile('image')) {
      $imageName = $this->setFileName('i-', $request->file('image'));
      $storeImage = Storage::disk('public')->putFileAs('img/projects/tps-pins', $request->file('image'), $imageName);
      if (!$storeImage) {
        return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
      }
      $element = array_merge($element, ["image" => $imageName]);
    }
    try {
      $element = TpsPin::UpdateOrCreate($element);
      return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])], 200);
    } catch (\Exception $e) {
      dd($e);
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
    }
  }

  public function update(TpsPin $element, TpsPinRequest $request)
  {
    $request_element = request(["project_id","tps_latitude","tps_longitude","title"]);
    if ($request->hasFile('image')) {
      $fileName = $this->setFileName('i-', $request->file('image'));
      Storage::disk('public')->putFileAs('img/projects/tps-pins', $request->file('image'), $fileName);
      $request_element = array_merge($request_element, ["image" => $fileName]);
    }
    if ($request->hasFile('image') && $element->image) {
      Storage::disk('public')->delete('img/projects/tps-pins' . $element->image);
    }
    try {
      $element = TpsPin::UpdateOrCreate(["id" => $element->id], $request_element);
      return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
    } catch (\Exception $e) {
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
    }
  }
}
