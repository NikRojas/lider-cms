<?php

namespace App\Http\Controllers\Cms\Information;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\SocialNetwork;
use App\MasterSocialNetwork;
use App\Http\Requests\Admin\Information\SocialNetworkRequest;

use App\Http\Traits\AdminTrait;

class SocialController extends Controller
{
    use AdminTrait;

    public function index()
    {
        $networks = MasterSocialNetwork::all()->toArray();
        return view ("pages.info.social",compact('networks'));
    }

    public function getNetworks(Request $request){
        $networks = SocialNetwork::with('master_social_networks')->orderBy('index','asc')->get();
        foreach($networks as $network){
            $data[] = array(
                "id" => $network["id"],
                "name" => $network["master_social_networks"]["name"],
                "url" => "<a href=".$network["url"]." target='_blank'>".$network["url"]."</a>",
            );
        }
        if(isset($data)){
            $networks["data"] = '';
            $networks["data"] = $data;
        }
        $headers = ["Id","Red Social","URL"];
        $networks["headers"] = $headers;
        return response()->json($networks);
    }

    public function create(SocialNetworkRequest $request){
        $network = request(["url","master_social_network_id"]);
        $network_index = $this->getMaxIndex(SocialNetwork::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        if(count($network_index) > 0){
            $network = array_merge($network,["index"=>$network_index[0]["index"] + 1]); 
        }
        else{
            $network = array_merge($network,["index"=>1]);    
        }
        try{
            $network = SocialNetwork::UpdateOrCreate($network); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.network')])],200);
        }
        catch(\Exception $e){
          dd($e);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.network')]) ],500);    
        }
    }

    public function order(Request $request){
        $networks = $request->all();
        try{
            for ($i=0; $i < count($networks); $i++) { 
                $network = SocialNetwork::UpdateOrCreate(["id"=>$networks[$i]["id"]],["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.network')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.network')])],500);
        }
    }

    public function delete(SocialNetwork $social){
        try {
            $social = $social->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.network')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.network')])],500);
        }
    }

    public function getNetwork(SocialNetwork $social){
        return response()->json($social);        
    }

    public function update(SocialNetwork $social,SocialNetworkRequest $request){
        $request_social = request(["url","master_social_network_id"]);
        try{
            $social = SocialNetwork::UpdateOrCreate(["id"=>$social->id],$request_social); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.network')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.network')]) ],500);
        }
    }
}
