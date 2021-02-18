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

  public function getAll(Request $request){
    $elements = ProjectGallery::where('project_id', $request->project_id)->with('typeGalleryRel')->orderBy('master_type_gallery_id','asc')->orderBy('index','asc')->get()->groupBy('typeGalleryRel.name');
    return response()->json($elements);
  }

  public function get(ProjectGallery $element){
    return response()->json($element);
  }

  public function destroy(ProjectGallery $element){
    $image = $element->image;
    try {
        $destroy = $element->delete();
        if($destroy){
            Storage::disk('public')->delete('img/projects/gallery/'.$image);   
        }
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')]) ],200);
    } 
    catch (\Exception $e){
        return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')]) ],500);
    }
  }

  public function order(Request $request){
    $elements = $request->all();
    try{
        for ($i=0; $i < count($elements); $i++) { 
            $element = ProjectGallery::UpdateOrCreate(["id"=>$elements[$i]["id"]],["index"=>$i + 1]);
        }
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])],200);
    } 
    catch (\Exception $e){
        return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])],500);
    }
  }

  public function store(GalleryRequest $request)
  {
    $element = request(["title_es", "title_en", "master_type_gallery_id", "project_id"]);
    if ($request->hasFile('image')) {
      $imageName = $this->setFileName('i-', $request->file('image'));
      $storeImage = Storage::disk('public')->putFileAs('img/projects/gallery', $request->file('image'), $imageName);
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
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
    }
  }

  public function update(ProjectGallery $element,GalleryRequest $request){
    $request_element = request(["title_es", "title_en", "master_type_gallery_id", "project_id"]);;
    if($request->hasFile('image')){
        $fileName = $this->setFileName('i-',$request->file('image'));
        Storage::disk('public')->putFileAs('img/projects/gallery',$request->file('image'),$fileName);
        $request_element = array_merge($request_element,["image" => $fileName]);
    }
    if($request->hasFile('image') && $element->image){
        Storage::disk('public')->delete('img/projects/gallery'.$element->image);
    }
    try{
        $element = ProjectGallery::UpdateOrCreate(["id"=>$element->id],$request_element); 
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')]) ],200);
    }
    catch(\Exception $e){
        return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')]) ],500);
    }
  }
}
