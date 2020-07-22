<?php

namespace App\Http\Controllers\Admin\Information;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

use App\Player;
use App\Http\Requests\Admin\Information\PlayerRequest;

use App\Http\Traits\AdminTrait;

class PlayersController extends Controller
{
    use AdminTrait;

    public function index()
    {
        return view ("pages.info.players");
    }

    public function create(PlayerRequest $request){
        $player = request(["full_name","job","department_id"]);
        $image_1_name = $this->setFileName('p1-',$request->file('image'));
        $store_image_1 = Storage::disk('gcs')->putFileAs('img/players/',$request->file('image'),$image_1_name);
        if(!$store_image_1){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
        $player = array_merge($player,["image_1"=>$image_1_name]);
        $image_2_name = $this->setFileName('p2-',$request->file('image_hover'));
        $store_image_2 = Storage::disk('gcs')->putFileAs('img/players/',$request->file('image_hover'),$image_2_name);
        if(!$store_image_2){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
        $player = array_merge($player,["image_2"=>$image_2_name]);
        $player_index = $this->getMaxIndex(Player::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        if(count($player_index) > 0){
            $player = array_merge($player,["index"=>$player_index[0]["index"] + 1]); 
        }
        else{
            $player = array_merge($player,["index"=>1]);    
        }
        try{
            $player = Player::UpdateOrCreate($player); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.player')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.player')]) ],500);    
        }
    }

    public function getPlayers(Request $request){
        $players = Player::select('id','job','full_name','index','image_1','image_2','department_id')->with('relDepartment')->orderBy('index','asc')->get();
        $data = [];
        foreach($players as $player){
            $data[] = array(
                "id" => $player["id"],
                "index" => $player["index"],
                "job" => $player["job"],
                "full_name" => $player["full_name"],
                "image_1" => $player["image_1"],
                "image_2" => $player["image_2"],
                "department" => $player["relDepartment"]["title"],
            );
        }
        return response()->json($data);
    }

    public function order(Request $request){
        $players = $request->all();
        try{
            for ($i=0; $i < count($players); $i++) { 
                $slide = Player::UpdateOrCreate(["id"=>$players[$i]["id"]],["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.player')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.player')])],500);
        }
    }

    public function getPlayer(Player $player){
        return response()->json($player);        
    }

    public function delete(Player $player){
        $image = $player->image_1;
        $image_hover = $player->image_2;
        try {
            $delete_player = $player->delete();
            if($delete_player){
                Storage::disk('gcs')->delete('img/players/'.$image);    
                Storage::disk('gcs')->delete('img/players/'.$image_hover);    
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.player')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.player')])],500);
        }
    }

    public function update(PlayerRequest $request,Player $player){
        $request_player = request(["full_name","job","department_id"]);
        if($request->hasFile('image')){
            $image_1_name = $this->setFileName('p1-',$request->file('image'));
            $store_image_1 = Storage::disk('gcs')->putFileAs('img/players/',$request->file('image'),$image_1_name);
            if(!$store_image_1){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_player = array_merge($request_player,["image_1" => $image_1_name]);   
        }  
        else{
            $request_player = array_merge($request_player,["image_1" => $player->image_1]);   
        }
        if($request->hasFile('image_hover')){
            $image_2_name = $this->setFileName('p2-',$request->file('image_hover'));
            $store_image_2 = Storage::disk('gcs')->putFileAs('img/players/',$request->file('image_hover'),$image_2_name);
            if(!$store_image_2){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_player = array_merge($request_player,["image_2" => $image_2_name]);   
        }  
        else{
            $request_player = array_merge($request_player,["image_2" => $player->image_2]);   
        }
        if($request->hasFile('image') && $player->image_1){
            Storage::disk('gcs')->delete('img/players/'.$player->image_1);
        } 
        if($request->hasFile('image_hover') && $player->image_2){
            Storage::disk('gcs')->delete('img/players/'.$player->image_2);
        } 
        try{
            $player = Player::UpdateOrCreate(["id"=>$player->id],$request_player); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.player')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.player')]) ],500);
        }
    }
    
}
