<?php

namespace App\Http\Controllers\Cms\Content;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Content\SocialNetworkRequest;
use App\SocialNetwork;
use App\MasterSocialNetwork;

use App\Http\Traits\CmsTrait;

class SocialController extends Controller
{
    use CmsTrait;

    public function index()
    {
        $elements = MasterSocialNetwork::all();
        return view ("pages.content.social-networks",compact('elements'));
    }

    public function getAll(){
        $elements = SocialNetwork::with('master_social_networks')->orderBy('index','asc')->get();
        foreach($elements as $el){
            $data[] = array(
                "id" => $el["id"],
                "name" => $el["master_social_networks"]["name"],
                "url" => "<a href=".$el["url"]." target='_blank'>".$el["url"]."</a>",
            );
        }
        if(isset($data)){
            $elements["data"] = '';
            $elements["data"] = $data;
        }
        $headers = ["Id","Red Social","URL"];
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function store(SocialNetworkRequest $request){
        $element = request(["url","master_social_network_id"]);
        $index = $this->getMaxIndex(SocialNetwork::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        $element = array_merge($element,["index"=>$index]);
        try{
            $element = SocialNetwork::UpdateOrCreate($element); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.network')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.network')]) ],500);    
        }
    }

    public function order(Request $request){
        $elements = $request->all();
        try{
            for ($i=0; $i < count($elements); $i++) { 
                $element = SocialNetwork::UpdateOrCreate(["id"=>$elements[$i]["id"]],["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.network')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.network')])],500);
        }
    }

    public function destroy(SocialNetwork $element){
        try {
            $element = $element->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.network')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.network')])],500);
        }
    }

    public function get(SocialNetwork $element){
        return response()->json($element);        
    }

    public function update(SocialNetwork $element,SocialNetworkRequest $request){
        $request_social = request(["url","master_social_network_id"]);
        try{
            $element = SocialNetwork::UpdateOrCreate(["id"=>$element->id],$request_social); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.network')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.network')]) ],500);
        }
    }
}
