<?php

namespace App\Http\Controllers\Cms\Projects;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\Project;
use App\Http\Requests\Cms\Project\FileRequest;
use App\ProjectFile;

class FilesController extends Controller
{
  use CmsTrait;

  public function index($element)
  {
    $element = Project::where('slug_es', $element)->firstOrFail();
    return view("pages.projects.files.index", compact('element'));
  }

  public function getAll(Request $request){
    $elements = ProjectFile::where('project_id', $request->project_id)->orderBy('index','asc')->get();
    return response()->json($elements);
  }

  public function get(ProjectFile $element){
    return response()->json($element);
  }

  public function destroy(ProjectFile $element){
    $file = $element->file;
    try {
        $destroy = $element->delete();
        if($destroy){
            Storage::disk('public')->delete('files/projects/documents/'.$file);   
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
            $element = ProjectFile::UpdateOrCreate(["id"=>$elements[$i]["id"]],["index"=>$i + 1]);
        }
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])],200);
    } 
    catch (\Exception $e){
        return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])],500);
    }
  }

  public function store(FileRequest $request)
  {
    $element = request(["name_es", "name_en", "project_id"]);
    if ($request->hasFile('file')) {
      $fileName = $this->setFileName('p-', $request->file('file'));
      $storeFile = Storage::disk('public')->putFileAs('files/projects/documents', $request->file('file'), $fileName);
      if (!$storeFile) {
        return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.file')], 500);
      }
      $element = array_merge($element, ["file" => $fileName]);
    }
    $index = $this->getMaxIndex(ProjectFile::selectRaw('MAX(id),MAX(`index`) as "index"')->where('project_id', $request->project_id)->get());
    $element = array_merge($element, ["index" => $index]);
    try {
      $element = ProjectFile::UpdateOrCreate($element);
      return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])], 200);
    } catch (\Exception $e) {
      return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
    }
  }

  public function update(ProjectFile $element,FileRequest $request){
    $request_element = request(["name_es", "name_en", "project_id"]);;
    if($request->hasFile('file')){
        $fileName = $this->setFileName('p-',$request->file('file'));
        Storage::disk('public')->putFileAs('files/projects/documents',$request->file('file'),$fileName);
        $request_element = array_merge($request_element,["file" => $fileName]);
    }
    if($request->hasFile('file') && $element->file){
        Storage::disk('public')->delete('files/projects/documents'.$element->file);
    }
    try{
        $element = ProjectFile::UpdateOrCreate(["id"=>$element->id],$request_element); 
        return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')]) ],200);
    }
    catch(\Exception $e){
        return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')]) ],500);
    }
  }
}
