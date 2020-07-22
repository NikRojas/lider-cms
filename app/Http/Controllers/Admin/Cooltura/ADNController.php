<?php

namespace App\Http\Controllers\Admin\Cooltura;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\CoolturaADN;

use App\Http\Traits\AdminTrait;
use App\Http\Requests\Admin\Cooltura\ADNRequest;

class ADNController extends Controller
{

    use AdminTrait;


    public function index()
    {
        return view ("pages.cooltura.adn");
    }

    public function create(ADNRequest $request){
      $item = request(["name","description"]);
      $item_index = $this->getMaxIndex(CoolturaADN::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
      if(count($item_index) > 0){
          $item = array_merge($item,["index"=>$item_index[0]["index"] + 1]); 
      }
      else{
          $item = array_merge($item,["index"=>1]);    
      }
      try{
          $item = CoolturaADN::UpdateOrCreate($item); 
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])],200);
      }
      catch(\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.element')]) ],500);    
      }
    }

    public function getItems(Request $request){
      $items = CoolturaADN::orderBy('index')->get();
      return response()->json($items);
    }

    public function getItem(CoolturaADN $item){
      return response()->json($item);
    }

    public function delete(CoolturaADN $item){
      try {
          $cooltura_delete = $item->delete();
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
              $story = CoolturaADN::UpdateOrCreate(["id"=>$items[$i]["id"]],["index"=>$i + 1]);
          }
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])],200);
      } 
      catch (\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])],500);
      }
    }

    public function update(ADNRequest $request,CoolturaADN $item){
      $request_item = request(["name","description"]);
      try{
          $item = CoolturaADN::UpdateOrCreate(["id"=>$item->id],$request_item); 
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])],200);
      }
      catch(\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')]) ],500);
      }
  }
}