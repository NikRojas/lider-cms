<?php 
namespace App\Repositories;

use App\LogSapConnection;
use Carbon\Carbon;

class LogSapRepository 
{
    public function datatable($items_per_page,$q = false){
        if($q){
            $els = LogSapConnection::
            where('description','like','%'.$q.'%')
            ->orWhere('type','like','%'.$q.'%')
            ->orderBy('created_at','desc')
            ->paginate($items_per_page);
        }
        else{
            $els = LogSapConnection::orderBy('created_at','desc')
            ->paginate($items_per_page);
        }   
        foreach($els as $el){
            $res = $el["response"];
            if($el["type"] == 'Obtener Inmuebles'){
                $res = 'No response';
            }
            else{
                if(!$res){
                    $res = 'No response';
                }   
            }
            $data[] = array(
                "id" => $el["id"],
                "created_at" => $el["created_at_format"],
                "type" => $el["type"],
                "status" => $el["status"],
                "description" => $el["description"],
                "response" => $res,
            );
        }
        $els = $els->toArray();
        if(isset($data)){
            $els["data"] = '';
            $els["data"] = $data;
        }
        return $els;
    }
}