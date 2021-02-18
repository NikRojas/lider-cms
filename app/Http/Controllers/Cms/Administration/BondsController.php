<?php

namespace App\Http\Controllers\Cms\Administration;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Administration\BondRequest;
use App\Http\Traits\CmsTrait;
use App\Bond;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BondsController extends Controller
{
    use CmsTrait;

    public function index(){
        return view ("pages.administration.bonds");    
    }

    public function store(BondRequest $request){
        $element = request(["name","cci","number_account"]);
        $imageName = $this->setFileName('b-',$request->file('logo'));
        $storeImage = Storage::disk('public')->putFileAs('img/bonds/',$request->file('logo'),$imageName);
        if(!$storeImage){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
        $element = array_merge($element,["logo"=>$imageName]);
        try{
            $element = Bond::UpdateOrCreate($element); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.bond')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.bond')]) ],500);
        }
    }

    public function getAll(){
        $elements = Bond::with('projectsRel')->get();
        return response()->json($elements); 
    }

    public function get(Bond $element){
        return response()->json($element);
    }

    public function update(Bond $element,BondRequest $request){
        $request_element = request(["name","cci","number_account"]);;
        if($request->hasFile('logo')){
            $fileName = $this->setFileName('b-',$request->file('logo'));
            Storage::disk('public')->putFileAs('img/bonds',$request->file('logo'),$fileName);
            $request_element = array_merge($request_element,["logo" => $fileName]);
        }
        if($request->hasFile('logo') && $element->logo){
            Storage::disk('public')->delete('img/bonds/'.$element->logo);
        }
        try{
            $element = Bond::UpdateOrCreate(["id"=>$element->id],$request_element); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.bond')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.bond')]) ],500);
        }
    }

    public function destroy(Bond $element){
        $image = $element->logo;
        try {
            $destroy = $element->delete();
            if($destroy){
                Storage::disk('public')->delete('img/bonds/'.$image);   
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.bond')]) ],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.bond')]) ],500);
        }
    }
}