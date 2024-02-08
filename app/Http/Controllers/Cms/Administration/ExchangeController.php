<?php

namespace App\Http\Controllers\Cms\Administration;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Administration\MasterCurrencyRequest;
use App\Http\Traits\CmsTrait;
use App\MasterCurrency;
use Illuminate\Support\Facades\Storage;

class ExchangeController extends Controller
{
    use CmsTrait;

    public function index(){
        return view ("pages.administration.exchange");    
    }

    public function getAll(){
        $elements = MasterCurrency::get();
        return response()->json($elements); 
    }

    public function get(MasterCurrency $element){
        return response()->json($element);
    }

    public function update(MasterCurrency $element,MasterCurrencyRequest $request){
        $request_element = request(["value"]);;
        try{
            $element = MasterCurrency::UpdateOrCreate(["id"=>$element->id],$request_element); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.currency')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.currency')]) ],500);
        }
    }

}