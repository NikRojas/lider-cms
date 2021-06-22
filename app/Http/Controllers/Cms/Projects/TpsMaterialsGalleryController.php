<?php

namespace App\Http\Controllers\Cms\Projects;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\Http\Requests\Cms\Project\TpsMaterialsGalleryRequest;
use App\TpsMaterialsGallery;

class TpsMaterialsGalleryController extends Controller
{
  use CmsTrait;

  public function index($element)
  {
    //
  }

  public function getAll(Request $request)
  {
    $elements = TpsMaterialsGallery::where('project_gallery_id', $request->project_gallery_id)->orderBy('index', 'asc')->get();
    foreach ($elements as $el) {
      $image = config('services.images_url') . "/projects/tps-materials-gallery/" . $el["image"];
      $data[] = array(
        "id" => $el["id"],
        "image" => "<img src=" . $image . " class='mr-3 p-2' height='50' width='auto' alt='About Third " . $el["index"] . "'/><a class='btn btn-outline-info btn-sm' href=" . $image . " target='_blank'>Ver Imagen</a>",
      );
    }
    if (isset($data)) {
      $elements["data"] = '';
      $elements["data"] = $data;
    }
    $headers = ["Id", "Imagen"];
    $elements["headers"] = $headers;
    return response()->json($elements);
  }

  public function get(TpsMaterialsGallery $element)
  {
    return response()->json($element);
  }

  public function destroy(TpsMaterialsGallery $element)
  {
    $image = $element->image;
    try {
      $destroy = $element->delete();
      if ($destroy) {
        Storage::disk('public')->delete('img/projects/tps-materials-gallery/' . $image);
      }
      return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')])], 200);
    } catch (\Exception $e) {
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')])], 500);
    }
  }

  public function order(Request $request)
  {
    $elements = $request->all();
    try {
      for ($i = 0; $i < count($elements); $i++) {
        $element = TpsMaterialsGallery::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
      }
      return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
    } catch (\Exception $e) {
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
    }
  }

  public function store(TpsMaterialsGalleryRequest $request)
  {
    $element = request(["project_gallery_id"]);
    if ($request->hasFile('image')) {
      $imageName = $this->setFileName('i-', $request->file('image'));
      $storeImage = Storage::disk('public')->putFileAs('img/projects/tps-materials-gallery', $request->file('image'), $imageName);
      if (!$storeImage) {
        return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
      }
      $element = array_merge($element, ["image" => $imageName]);
    }
    $index = $this->getMaxIndex(TpsMaterialsGallery::selectRaw('MAX(id),MAX(`index`) as "index"')->where('project_gallery_id', $request->project_gallery_id)->get());
    $element = array_merge($element, ["index" => $index]);
    try {
      $element = TpsMaterialsGallery::UpdateOrCreate($element);
      return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])], 200);
    } catch (\Exception $e) {
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
    }
  }

  public function update(TpsMaterialsGallery $element, TpsMaterialsGalleryRequest $request)
  {
    $request_element = request(["project_gallery_id"]);;
    if ($request->hasFile('image')) {
      $fileName = $this->setFileName('i-', $request->file('image'));
      Storage::disk('public')->putFileAs('img/projects/tps-materials-gallery', $request->file('image'), $fileName);
      $request_element = array_merge($request_element, ["image" => $fileName]);
    }
    if ($request->hasFile('image') && $element->image) {
      Storage::disk('public')->delete('img/projects/tps-materials-gallery' . $element->image);
    }
    try {
      $element = TpsMaterialsGallery::UpdateOrCreate(["id" => $element->id], $request_element);
      return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
    } catch (\Exception $e) {
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
    }
  }
}
