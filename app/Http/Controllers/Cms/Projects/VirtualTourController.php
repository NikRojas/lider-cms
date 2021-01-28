<?php

namespace App\Http\Controllers\Cms\Projects;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\Project;
use App\MasterTypeGallery;
use App\Http\Requests\Cms\Project\VirtualTourRequest;
use App\ProjectVirtualTour;

class VirtualTourController extends Controller
{
  use CmsTrait;

  public function index($element)
  {
    $element = Project::where('slug_es', $element)->firstOrFail();
    return view("pages.projects.virtual.index", compact('element'));
  }

  public function getAll(Request $request){
    $elements = ProjectVirtualTour::where('project_id', $request->project_id)->orderBy('index','asc')->get();
    return response()->json($elements);
  }

  public function get(ProjectVirtualTour $element){
    return response()->json($element);
  }

  public function destroy(ProjectVirtualTour $element){
    $image = $element->image;
    try {
        $destroy = $element->delete();
        if($destroy){
            Storage::disk('public')->delete('img/projects/virtual-tour/'.$image);   
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
            $element = ProjectVirtualTour::UpdateOrCreate(["id"=>$elements[$i]["id"]],["index"=>$i + 1]);
        }
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])],200);
    } 
    catch (\Exception $e){
        return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])],500);
    }
  }

  public function store(VirtualTourRequest $request)
  {
    $element = request(["name","url","url_360", "project_id"]);
    if ($request->hasFile('image')) {
      $imageName = $this->setFileName('vt-', $request->file('image'));
      $storeImage = Storage::disk('public')->putFileAs('img/projects/virtual-tour', $request->file('image'), $imageName);
      if (!$storeImage) {
        return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
      }
      $element = array_merge($element, ["image" => $imageName]);
    }
    $index = $this->getMaxIndex(ProjectVirtualTour::selectRaw('MAX(id),MAX(`index`) as "index"')->where('project_id', $request->project_id)->get());
    $element = array_merge($element, ["index" => $index]);
    try {
      $element = ProjectVirtualTour::UpdateOrCreate($element);
      return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])], 200);
    } catch (\Exception $e) {
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
    }
  }

  public function update(ProjectVirtualTour $element,VirtualTourRequest $request){
    $request_element = request(["name","url","url_360", "project_id"]);;
    if($request->hasFile('image')){
        $fileName = $this->setFileName('vt-',$request->file('image'));
        Storage::disk('public')->putFileAs('img/projects/virtual-tour',$request->file('image'),$fileName);
        $request_element = array_merge($request_element,["image" => $fileName]);
    }
    if($request->hasFile('image') && $element->image){
        Storage::disk('public')->delete('img/projects/virtual-tour'.$element->image);
    }
    try{
        $element = ProjectVirtualTour::UpdateOrCreate(["id"=>$element->id],$request_element); 
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')]) ],200);
    }
    catch(\Exception $e){
        return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')]) ],500);
    }
  }
}
