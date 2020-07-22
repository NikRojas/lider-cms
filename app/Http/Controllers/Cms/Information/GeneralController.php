<?php

namespace App\Http\Controllers\Cms\Information;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Information;
use App\Partner;

use App\Http\Requests\Admin\Information\GeneralRequest;
use App\Http\Requests\Admin\Information\PartnerRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Traits\AdminTrait;

class GeneralController extends Controller
{
    use AdminTrait;

    public function index()
    {
        return view ("pages.info.general");
    }

    public function registrar(GeneralRequest $request){
        $informacion = request(["phone","description","cellphone",'district',"email","address_line_1","address_line_2"]);
        $informacion_registrada = Information::first();
        try{
            if($informacion_registrada){
                $informacion = Information::UpdateOrCreate(["id"=>$informacion_registrada->id],$informacion);
            }
            else{
                $informacion = Information::UpdateOrCreate($informacion);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.information')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.information')]) ],500);
        }
    }

    public function get(){
        $informacion = Information::orderBy('created_at', 'desc')->first();
        return response()->json($informacion);    
    }


    public function getPartner(Partner $partner){
        return response()->json($partner);        
    }

    public function getPartners(Request $request){
        $partners = Partner::orderBy('index','asc')->get();
        foreach($partners as $partner){
            $image = Storage::disk('gcs')->url('img/partners/'.$partner["image"]);
            $data[] = array(
                "id" => $partner["id"],
                "name" => $partner["name"],
                "image" => "<img src=".$image." class='mr-3' height='40' width='auto' alt='Partnter ".$partner["index"]."'/><a href=".$image." target='_blank'>Ver Imagen</a>",
            );
        }
        if(isset($data)){
            $partners["data"] = '';
            $partners["data"] = $data;
        }
        $partners["headers"] = ["Id","Nombre","Imagen"];
        return response()->json($partners);
    }
   
    public function createPartner(PartnerRequest $request){
        $partner = request(["name"]);
        $partner_index = $this->getMaxIndex(Partner::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        if(count($partner_index) > 0){
            $partner = array_merge($partner,["index"=>$partner_index[0]["index"] + 1]); 
        }
        else{
            $partner = array_merge($partner,["index"=>1]);    
        }
        $image_name = $this->setFileName('p-',$request->file('image'));
        $store_image = Storage::disk('gcs')->putFileAs('img/partners/',$request->file('image'),$image_name);
        if(!$store_image){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
        $partner = array_merge($partner,["image"=>$image_name]);
        try{
            $partner = Partner::UpdateOrCreate($partner); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.partner')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.partner')])],500);    
        }
    }

    public function deletePartner(Partner $partner){
        $image = $partner->image;
        try {
            $delete_partner = $partner->delete();
            if($delete_partner){
                Storage::disk('gcs')->delete('img/partners/'.$image);    
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.partner')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.partner')])],500);
        }
    }

    public function orderPartners(Request $request){
        $partners = $request->all();
        try{
            for ($i=0; $i < count($partners); $i++) { 
                $partner = Partner::UpdateOrCreate(["id"=>$partners[$i]["id"]],["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.partner')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.partner')])],500);
        }
    }

    public function updatePartner(PartnerRequest $request,Partner $partner){
        $request_partner = request(["name"]);

        if($request->hasFile('image')){
            $image_name = $this->setFileName('p-',$request->file('image'));
            $store_image = Storage::disk('gcs')->putFileAs('img/partners/',$request->file('image'),$image_name);
            if(!$store_image){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_partner = array_merge($request_partner,["image" => $image_name]);   
        }  
        else{
            $request_partner = array_merge($request_partner,["image" => $partner->image]);   
        }
        if($request->hasFile('image') && $partner->image){
            Storage::disk('gcs')->delete('img/partners/'.$partner->image);
        } 
        try{
            $partner = Partner::UpdateOrCreate(["id"=>$partner->id],$request_partner); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.partner')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.partner')])],500);
        }
    }
}