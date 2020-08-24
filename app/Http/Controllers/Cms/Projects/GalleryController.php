<?php

namespace App\Http\Controllers\Cms\Projects;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\Project;
use App\MasterTypeGallery;
use App\Http\Requests\Cms\Project\GalleryRequest;
use App\ProjectGallery;

class GalleryController extends Controller
{
  use CmsTrait;

  public function index($element)
  {
    $element = Project::where('slug_es', $element)->firstOrFail();
    $types = MasterTypeGallery::get();
    return view("pages.projects.gallery.index", compact('element', 'types'));
  }

  public function getAll(){
    $elements = ProjectGallery::orderBy('index','asc')->get();
    return response()->json($elements);
  }

  public function store(GalleryRequest $request)
  {
    $element = request(["title_es", "title_en", "master_type_gallery_id", "project_id"]);
    //$project = Project::where('slug_es',$request->project_slug)->first();
    if ($request->hasFile('image')) {
      $imageName = $this->setFileName('i-', $request->file('image'));
      $storeImage = Storage::disk('public')->putFileAs('img/projects/gallery/', $request->file('image'), $imageName);
      if (!$storeImage) {
        return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
      }
      $element = array_merge($element, ["image" => $imageName]);
    }
    $index = $this->getMaxIndex(ProjectGallery::selectRaw('MAX(id),MAX(`index`) as "index"')->where('project_id', $request->project_id)->get());
    $element = array_merge($element, ["index" => $index]);
    try {
      $element = ProjectGallery::UpdateOrCreate($element);
      return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])], 200);
    } catch (\Exception $e) {
      dd($e);
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
    }
  }
}
