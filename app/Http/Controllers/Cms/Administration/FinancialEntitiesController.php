<?php

namespace App\Http\Controllers\Cms\Administration;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Administration\BankRequest;
use App\Http\Traits\CmsTrait;
use App\Bank;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FinancialEntitiesController extends Controller
{
    use CmsTrait;

    public function index(){
        return view ("pages.administration.financial-entities");    
    }

    public function store(BankRequest $request){
        $element = request(["name"]);
        $imageName = $this->setFileName('b-',$request->file('logo'));
        $storeImage = Storage::disk('public')->putFileAs('img/banks/',$request->file('logo'),$imageName);
        if(!$storeImage){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
        $element = array_merge($element,["logo"=>$imageName]);
        try{
            $element = Bank::UpdateOrCreate($element); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.bank')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.bank')]) ],500);
        }
    }

    public function getAll(){
        $elements = Bank::with('projectsRel')->get();
        return response()->json($elements); 
    }

    public function get(Bank $element){
        return response()->json($element);
    }

    public function update(Bank $element,BankRequest $request){
        $request_element = request(["name"]);;
        if($request->hasFile('logo')){
            $fileName = $this->setFileName('b-',$request->file('logo'));
            Storage::disk('public')->putFileAs('img/banks',$request->file('logo'),$fileName);
            $request_element = array_merge($request_element,["logo" => $fileName]);
        }
        if($request->hasFile('logo') && $element->logo){
            Storage::disk('public')->delete('img/banks/'.$element->logo);
        }
        try{
            $element = Bank::UpdateOrCreate(["id"=>$element->id],$request_element); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.bank')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.bank')]) ],500);
        }
    }

    public function destroy(Bank $element){
        $image = $element->logo;
        try {
            $destroy = $element->delete();
            if($destroy){
                Storage::disk('public')->delete('img/banks/'.$image);   
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.bank')]) ],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.bank')]) ],500);
        }
    }
}