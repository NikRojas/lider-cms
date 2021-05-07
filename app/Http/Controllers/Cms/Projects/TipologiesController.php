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
use App\ProjectParentTypeDepartment;

class TipologiesController extends Controller
{
  use CmsTrait;

  public function index($element)
  {
    $element = Project::where('slug_es', $element)->firstOrFail();
    $projectParentTypeDepartments = ProjectParentTypeDepartment::get();
    return view("pages.projects.tipologies.index", compact('element','projectParentTypeDepartments'));
  }

  public function getAll(Request $request){
    $elements = ProjectTypeDepartment::with('parentTypeDepartmentRel')->where('project_id', $request->project_id)->orderBy('index','asc')->get();
    return response()->json($elements);
  }

  public function get(ProjectTypeDepartment $element){
    return response()->json($element->load('parentTypeDepartmentRel'));
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
    $element = request(["name", "project_id",'price','available','area','room','type_currency','sap_code','parent_type_department_id']);    
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
      $request->session()->flash('success', trans('custom.message.create.success', ['name' => trans('custom.attribute.tipology')]));
      return response()->json(["route" => route('cms.projects.tipologies.index',["element" => $request->slug_es])]);
    } catch (\Exception $e) {
      $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.tipology')]));
      return response()->json(["route" => route('cms.projects.tipologies.index',["element" => $request->slug_es])],500);
    }
  }

  public function update(ProjectTypeDepartment $element,TipologyRequest $request){
    $request_element = request(["name", "project_id",'price','available','area','room','type_currency','sap_code','parent_type_department_id']);
    if($request->hasFile('image')){
        $fileName = $this->setFileName('i-',$request->file('image'));
        Storage::disk('public')->putFileAs('img/projects/tipologies',$request->file('image'),$fileName);
        $request_element = array_merge($request_element,["image" => $fileName]);
    }
    if($request->hasFile('image') && $element->image){
        Storage::disk('public')->delete('img/projects/tipologies'.$element->image);
    }
    try{
        $element = ProjectTypeDepartment::UpdateOrCreate(["id"=>$element->id],$request_element); 
       /* return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.tipology')]) ],200);
    }
    catch(\Exception $e){
        return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.tipology')]) ],500);
    }*/
      $request->session()->flash('success', trans('custom.message.update.success', ['name' => trans('custom.attribute.tipology')]));
      return response()->json(["route" => route('cms.projects.tipologies.index',["element" => $request->slug_es])]);
    } catch (\Exception $e) {
      $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.tipology')]));
      return response()->json(["route" => route('cms.projects.tipologies.index',["element" => $request->slug_es])],500);
    }
  }
}
