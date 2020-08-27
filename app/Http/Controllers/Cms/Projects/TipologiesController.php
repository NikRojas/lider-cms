<?php

namespace App\Http\Controllers\Cms\Projects;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\Project;
use App\ProjectTypeDepartment;
use Illuminate\Support\Str;
use App\Http\Requests\Cms\Project\TipologyRequest;

class TipologiesController extends Controller
{
  use CmsTrait;

  public function index($element)
  {
    $element = Project::where('slug_es', $element)->firstOrFail();
    return view("pages.projects.tipologies.index", compact('element'));
  }

  public function getAll(Request $request){
    $elements = ProjectTypeDepartment::where('project_id', $request->project_id)->orderBy('index','asc')->get();
    return response()->json($elements);
  }

  public function get(ProjectTypeDepartment $element){
    return response()->json($element);
  }

  public function destroy(ProjectTypeDepartment $element){
    $image = $element->image;
    try {
        $destroy = $element->delete();
        if($destroy){
            Storage::disk('public')->delete('img/projects/tipologies/'.$image);   
        }
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.tipology')]) ],200);
    } 
    catch (\Exception $e){
        return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.tipology')]) ],500);
    }
  }

  public function order(Request $request){
    $elements = $request->all();
    try{
        for ($i=0; $i < count($elements); $i++) { 
            $element = ProjectTypeDepartment::UpdateOrCreate(["id"=>$elements[$i]["id"]],["index"=>$i + 1]);
        }
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.tipology')])],200);
    } 
    catch (\Exception $e){
        return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.tipology')])],500);
    }
  }

  public function store(TipologyRequest $request)
  {
    $element = request(["name", "description", "project_id","url","url_360"]);
    if ($request->hasFile('image')) {
      $imageName = $this->setFileName('i-', $request->file('image'));
      $storeImage = Storage::disk('public')->putFileAs('img/projects/tipologies', $request->file('image'), $imageName);
      if (!$storeImage) {
        return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
      }
      $element = array_merge($element, ["image" => $imageName]);
    }
    $index = $this->getMaxIndex(ProjectTypeDepartment::selectRaw('MAX(id),MAX(`index`) as "index"')->where('project_id', $request->project_id)->get());
    $element = array_merge($element, ["index" => $index, "slug" => Str::slug($request->name, '-')]);
    try {
      $element = ProjectTypeDepartment::UpdateOrCreate($element);
      return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.tipology')])], 200);
    } catch (\Exception $e) {
      dd($e);
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.tipology')])], 500);
    }
  }

  /*public function update(ProjectGallery $element,GalleryRequest $request){
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
  }*/
}
