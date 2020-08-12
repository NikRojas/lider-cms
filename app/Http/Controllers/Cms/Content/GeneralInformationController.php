<?php

namespace App\Http\Controllers\Cms\Content;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Information;
use App\element;

use App\Http\Requests\Cms\Content\GeneralInformationRequest;
use App\Http\Requests\Cms\Content\MemberRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Traits\CmsTrait;
use App\Member;

class GeneralInformationController extends Controller
{
    use CmsTrait;

    public function index()
    {
        $departments = $this->getDepartments();
        return view ("pages.content.general-information",compact('departments'));
    }

    public function store(GeneralInformationRequest $request){
        $request_information = request(["location","phone","email","billing_url","whatsapp_numbers","phone_numbers"]);
        $information_registered = Information::first();
        try{
            if($information_registered){
                $information = Information::UpdateOrCreate(["id"=>$information_registered->id],$request_information);
            }
            else{
                $information = Information::UpdateOrCreate($request_information);
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


    public function membersGet(Member $element){
        return response()->json($element);        
    }

    public function membersGetAll(Request $request){
        $elements = Member::orderBy('index','asc')->get();
        foreach($elements as $element){
            $image = config('services.images_url')."/members/".$element["image"];
            $data[] = array(
                "id" => $element["id"],
                "name" => $element["name"],
                "image" => "<img src=".$image." class='mr-3' height='50' width='auto' alt='Partnter ".$element["index"]."'/><a class='btn btn-outline-info btn-sm' href=".$image." target='_blank'>Ver Imagen</a>",
            );
        }
        if(isset($data)){
            $elements["data"] = '';
            $elements["data"] = $data;
        }
        $elements["headers"] = ["Id","Nombre","Imagen"];
        return response()->json($elements);
    }
   
    public function membersStore(MemberRequest $request){
        $element = request(["name"]);
        $index = $this->getMaxIndex(Member::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        $imageName = $this->setFileName('p-',$request->file('image'));
        $storeImage = Storage::disk('public')->putFileAs('img/members/',$request->file('image'),$imageName);
        if(!$storeImage){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
        $element = array_merge($element,["image"=>$imageName,"index" => $index]);
        try{
            $element = Member::UpdateOrCreate($element); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])],200);
        }
        catch(\Exception $e){
            dd($e);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])],500);    
        }
    }

    public function membersDestroy(Member $element){
        $image = $element->image;
        try {
            $destroy = $element->delete();
            if($destroy){
                Storage::disk('public')->delete('img/members/'.$image);    
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')])],500);
        }
    }

    public function membersOrder(Request $request){
        $elements = $request->all();
        try{
            for ($i=0; $i < count($elements); $i++) { 
                $element = Member::UpdateOrCreate(["id"=>$elements[$i]["id"]],["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])],500);
        }
    }

    public function membersUpdate(MemberRequest $request,Member $element){
        $request_element = request(["name"]);
        if($request->hasFile('image')){
            $imageName = $this->setFileName('p-',$request->file('image'));
            $storeImage = Storage::disk('public')->putFileAs('img/members/',$request->file('image'),$imageName);
            if(!$storeImage){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_element = array_merge($request_element,["image" => $imageName]);   
        }  
        else{
            $request_element = array_merge($request_element,["image" => $element->image]);   
        }
        if($request->hasFile('image') && $element->image){
            Storage::disk('public')->delete('img/members/'.$element->image);
        } 
        try{
            $element = Member::UpdateOrCreate(["id"=>$element->id],$request_element); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])],500);
        }
    }
}