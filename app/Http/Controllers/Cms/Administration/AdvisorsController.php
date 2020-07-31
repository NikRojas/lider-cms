<?php

namespace App\Http\Controllers\Cms\Administration;

use App\Advisor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Administration\AdvisorRequest;
use App\Http\Traits\CmsTrait;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AdvisorsController extends Controller
{
    use CmsTrait;

    public function index(){
        return view ("pages.administration.advisors");    
    }

    public function store(AdvisorRequest $request){
        $element = request(["name","email","mobile"]);
        if($request->hasFile('avatar')){
            $imageName = $this->setFileName('a-',$request->file('avatar'));
            $storeImage = Storage::disk('public')->putFileAs('img/advisors/',$request->file('avatar'),$imageName);
            if(!$storeImage){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $element = array_merge($element,["avatar"=>$imageName]);
        }
        try{
            $element = Advisor::UpdateOrCreate($element); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.advisor')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.advisor')]) ],500);
        }
    }

    public function getAll(){
        $elements = Advisor::with('projectsRel')->get();
        return response()->json($elements); 
    }

    public function get(Advisor $element){
        return response()->json($element);
    }

    public function update(Advisor $element,AdvisorRequest $request){
        $request_element = request(["name","email","mobile"]);;
        if($request->hasFile('avatar')){
            $fileName = $this->setFileName('a-',$request->file('avatar'));
            Storage::disk('public')->putFileAs('img/advisors',$request->file('avatar'),$fileName);
            $request_element = array_merge($request_element,["avatar" => $fileName]);
        }
        if($request->hasFile('avatar') && $element->avatar){
            Storage::disk('public')->delete('img/advisors/'.$element->avatar);
        }
        try{
            $element = Advisor::UpdateOrCreate(["id"=>$element->id],$request_element); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.advisor')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.advisor')]) ],500);
        }
    }

    public function destroy(Advisor $element){
        $image = $element->avatar;
        try {
            $destroy = $element->delete();
            if($destroy){
                Storage::disk('public')->delete('img/advisors/'.$image);   
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.advisor')]) ],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.advisor')]) ],500);
        }
    }
}