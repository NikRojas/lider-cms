<?php

namespace App\Http\Controllers\Cms\Projects;

use App\Department;
use App\FloorSector;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Project\ProjectFloorRequest;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\Project;
use App\Http\Requests\Cms\Project\VirtualTourRequest;

class ParkingWarehouseController extends Controller
{
  use CmsTrait;

  public function index($element)
  {
    $element = Project::where('slug_es', $element)->firstOrFail();
    $parkings = Department::where('project_id', $element->id)->whereNotNull('sector_id')->where(function ($q) {
      $q->where('sector_id', 2);
    })->get();
    $warehouses = Department::where('project_id', $element->id)->whereNotNull('sector_id')->where(function ($q) {
      $q->where('sector_id', 3);
    })->get();
    $estates = [
      "parking" => $parkings,
      "warehouse" => $warehouses,
    ];
    return view("pages.projects.floors.index", compact('element','estates'));
  }

  public function getAll(Request $request){
    if($request->type == "parking"){
      $type = 2;
      $headers = ["Id","Nombre","Imagen", "# Estacionamientos"];
    }
    else{
      $type = 3;
      $headers = ["Id","Nombre","Imagen", "# Depósitos"];
    }
    $elements = FloorSector::where('project_id', $request->project_id)->where('sector_id',$type)->with('departmentsRel')->orderBy('index','asc')->get();
    foreach($elements as $el){
      $image = asset('storage/img/projects/floors/'.$el["image"]); 
      $data[] = array(
          "id" => $el["id"],
          "name" => $el["name"],
          "image" => "<img src=".$image." height='50px' width='auto'/><a class='d-block mt-1' style='text-decoration: underline;' href=".$image." target='_blank'>Ver Imagen</a>",
          "estates" => $el->departmentsRel->count()
      );
    }
    if(isset($data)){
        $elements["data"] = '';
        $elements["data"] = $data;
    }
    $elements["headers"] = $headers;
    return response()->json($elements);
  }

  public function get(FloorSector $element){
    $element["estates"] = $element->departmentsRel()->pluck('department_id');
    return response()->json($element);
  }

  public function destroy(FloorSector $element){
    $image = $element->image;
    try {
        $destroy = $element->delete();
        if($destroy){
            Storage::disk('public')->delete('img/projects/floors/'.$image);   
        }
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')]) ],200);
    } 
    catch (\Exception $e){
        return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')]) ],500);
    }
  }

  public function order(Request $request){
    $elements = $request->all();
    /*if($type == "parking"){
      $type = 2;
    }
    else{
      $type = 3;
    }*/
    try{
        for ($i=0; $i < count($elements); $i++) { 
            $element = FloorSector::UpdateOrCreate(["id"=>$elements[$i]["id"]],["index"=>$i + 1]);
        }
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])],200);
    } 
    catch (\Exception $e){
        return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])],500);
    }
  }

  public function store(ProjectFloorRequest $request)
  {
    $element = request(["name",'project_id']);
    if($request->type == "parking"){
      $type = 2;
    }
    else{
      $type = 3;
    }
    if ($request->hasFile('image')) {
      $imageName = $this->setFileName('pf-', $request->file('image'));
      $storeImage = Storage::disk('public')->putFileAs('img/projects/floors', $request->file('image'), $imageName);
      if (!$storeImage) {
        return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
      }
      $element = array_merge($element, ["image" => $imageName]);
    }
    $index = $this->getMaxIndex(FloorSector::selectRaw('MAX(id),MAX(`index`) as "index"')->where('project_id', $request->project_id)->where('sector_id',$type)->get());
    $element = array_merge($element, ["index" => $index, "sector_id" => $type]);
    try {
      $element = FloorSector::UpdateOrCreate($element);
    } catch (\Exception $e) {
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
    }
    $estates = json_decode($request->estates);
    try{
      foreach ($estates as $key => $value) {
        $element->departmentsRel()->attach($value);
      }
      return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])], 200);
    }catch (\Exception $e) {
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
    }
  }

  public function update(FloorSector $element,ProjectFloorRequest $request){
    $request_element = request(["name",'project_id']);;
    if($request->hasFile('image')){
        $fileName = $this->setFileName('pf-',$request->file('image'));
        Storage::disk('public')->putFileAs('img/projects/floors',$request->file('image'),$fileName);
        $request_element = array_merge($request_element,["image" => $fileName]);
    }
    if($request->hasFile('image') && $element->image){
        Storage::disk('public')->delete('img/projects/floors'.$element->image);
    }
    if($request->type == "parking"){
      $type = 2;
    }
    else{
      $type = 3;
    }
    try{
        $element = FloorSector::UpdateOrCreate(["id"=>$element->id],array_merge($request_element,["sector_id" => $type])); 
    }
    catch(\Exception $e){
        return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')]) ],500);
    }
    $estates = json_decode($request->estates);
    try {
      $element->departmentsRel()->sync([]);
      foreach ($estates as $key => $value) {
          $element->departmentsRel()->attach($value);
      }
      return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')]) ],200);
    }
    catch(\Exception $e){
      return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')]) ],500);
    }
  }
}
