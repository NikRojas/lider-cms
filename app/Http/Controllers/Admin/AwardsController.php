<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Award;

use App\Http\Requests\Admin\AwardRequest;
use App\Http\Traits\AdminTrait;

use Illuminate\Support\Facades\Storage;

class AwardsController extends Controller
{
    use AdminTrait;

    public function index()
    {
        return view ("pages.awards");
    }

    public function create(AwardRequest $request){
        $award = request(["name","category","position"]);
        $image_name = $this->setFileName('a-',$request->file('image'));
        $store_image = Storage::disk('gcs')->putFileAs('img/awards/',$request->file('image'),$image_name);
        if(!$store_image){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
        $award = array_merge($award,["image"=>$image_name]);
        $item_index = $this->getMaxIndex(Award::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        if(count($award) > 0){
            $award = array_merge($award,["index"=>$item_index[0]["index"] + 1]); 
        }
        else{
            $award = array_merge($award,["index"=>1]);    
        }
        try{
            $award = Award::UpdateOrCreate($award); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.award')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.award')]) ],500);    
        }
    }

    public function getAward(Award $award){
        return response()->json($award);        
    }

    public function getAwards(Request $request){
        $awards = Award::orderBy('index')->get();
        return response()->json($awards);
    }

    public function delete(Award $award){
        $image = $award->image;
        try {
            $delete_award = $award->delete();
            if($delete_award){
                Storage::disk('gcs')->delete('img/awards/'.$image);    
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.award')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.award')])],500);
        }
    }

    public function order(Request $request){
        $awards = $request->all();
        try{
            for ($i=0; $i < count($awards); $i++) { 
                $award = Award::UpdateOrCreate(["id"=>$awards[$i]["id"]],["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.award')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.award')])],500);
        }
    }

    public function update(AwardRequest $request,Award $award){
        $request_award = request(["name","category","position"]);
        if($request->hasFile('image')){
            $image_name = $this->setFileName('a-',$request->file('image'));
            $store_image = Storage::disk('gcs')->putFileAs('img/awards/',$request->file('image'),$image_name);
            if(!$store_image){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_award = array_merge($request_award,["image" => $image_name]);   
        }  
        else{
            $request_award = array_merge($request_award,["image" => $award->image]);   
        }
        if($request->hasFile('image') && $award->image){
            Storage::disk('gcs')->delete('img/awards/'.$award->image);
        } 
        try{
            $award = Award::UpdateOrCreate(["id"=>$award->id],$request_award); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.award')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.award')]) ],500);
        }
    }
}