<?php

namespace App\Http\Controllers\Admin\Cooltura;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Cooltura;

use App\Http\Traits\AdminTrait;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Admin\Cooltura\GalleryRequest;

class GalleryController extends Controller
{
    use AdminTrait;

    public function index()
    {
        return view ("pages.cooltura.gallery");
    }

    public function create(GalleryRequest $request){
      $item = request(["title","description"]);
      $image_name = $this->setFileName('c-',$request->file('image'));
      $store_image = Storage::disk('gcs')->putFileAs('img/cooltura/',$request->file('image'),$image_name);
      if(!$store_image){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
      }
      $item = array_merge($item,["image"=>$image_name]);

      $item_index = $this->getMaxIndex(Cooltura::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
      if(count($item_index) > 0){
          $item = array_merge($item,["index"=>$item_index[0]["index"] + 1]); 
      }
      else{
          $item = array_merge($item,["index"=>1]);    
      }
      try{
          $item = Cooltura::UpdateOrCreate($item); 
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])],200);
      }
      catch(\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.element')]) ],500);    
      }
    }

    public function getItems(Request $request){
      $items = Cooltura::orderBy('index')->get();
      return response()->json($items);
    }

    public function getItem(Cooltura $item){
      return response()->json($item);
    }

    public function delete(Cooltura $item){
      $image = $item->image;
      try {
          $cooltura_delete = $item->delete();
          if($cooltura_delete){
              Storage::disk('gcs')->delete('img/cooltura/'.$image);    
          }
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')])],200);
      } 
      catch (\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')])],500);
      }
    }

    public function order(Request $request){
      $items = $request->all();
      try{
          for ($i=0; $i < count($items); $i++) { 
              $story = Cooltura::UpdateOrCreate(["id"=>$items[$i]["id"]],["index"=>$i + 1]);
          }
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])],200);
      } 
      catch (\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])],500);
      }
    }

    public function update(GalleryRequest $request,Cooltura $item){
      $request_story = request(["title","description"]);
      if($request->hasFile('image')){
          $image_name = $this->setFileName('c-',$request->file('image'));
          $store_image = Storage::disk('gcs')->putFileAs('img/cooltura/',$request->file('image'),$image_name);
          if(!$store_image){
              return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
          }
          $request_story = array_merge($request_story,["image" => $image_name]);   
      }  
      else{
          $request_story = array_merge($request_story,["image" => $item->image]);   
      }
      
      if($request->hasFile('image') && $item->image){
          Storage::disk('gcs')->delete('img/cooltura/'.$item->image);
      } 
      
      try{
          $item = Cooltura::UpdateOrCreate(["id"=>$item->id],$request_story); 
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])],200);
      }
      catch(\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')]) ],500);
      }
  }
}