<?php

namespace App\Http\Controllers\Cms\Administration;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Administration\ProjectFeatureRequest;
use App\Http\Traits\CmsTrait;
use App\ProjectFeature;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

//use App\Http\Requests\Admin\Blog\CategoryRequest;

//use App\Category;

class FeaturesProyectController extends Controller
{
    use CmsTrait;

    public function index(){
        return view ("pages.administration.features-project");    
    }

    public function store(ProjectFeatureRequest $request){
        $element = request(["name_en","name_es"]);
        $imageName = $this->setFileName('f-',$request->file('image'));
        $storeImage = Storage::disk('public')->putFileAs('img/features/',$request->file('image'),$imageName);
        if(!$storeImage){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
        $element = array_merge($element,["image"=>$imageName]);
        try{
            $element = ProjectFeature::UpdateOrCreate($element); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.features')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.features')]) ],500);
        }
    }

    public function getAll(){
        $elements = ProjectFeature::with('projectsRel')->get();
        return response()->json($elements); 
    }

    public function get(ProjectFeature $element){
        return response()->json($element);
    }

    public function update(ProjectFeature $element,ProjectFeatureRequest $request){
        $request_element = request(["name_en","name_es"]);;
        if($request->hasFile('image')){
            $fileName = $this->setFileName('u-'.time(),$request->file('image'));
            Storage::disk('public')->putFileAs('img/features',$request->file('image'),$fileName);
            $request_element = array_merge($request_element,["image" => $fileName]);
        }
        if($request->hasFile('image') && $element->image){
            Storage::disk('public')->delete('img/features/'.$element->image);
        }
        try{
            $element = ProjectFeature::UpdateOrCreate(["id"=>$element->id],$request_element); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.features')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.features')]) ],500);
        }
    }

    public function destroy(ProjectFeature $element){
        $image = $element->image;
        try {
            $destroy = $element->delete();
            if($destroy){
                Storage::disk('public')->delete('img/features/'.$image);   
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.features')]) ],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.features')]) ],500);
        }
    }
}