<?php 
namespace App\Repositories;

use App\ProjectParentTypeDepartment;
use App\TipoSeguro;

class TipoSeguroRepository 
{
    public function datatable($items_per_page,$q = false){
        if($q){
            $elements = TipoSeguro::where('name','like','%'.$q.'%')
            ->orderBy('index','asc')
            ->get();
        }
        else{
            $elements = TipoSeguro::orderBy('index','asc')
            ->get();
        }   
        foreach($elements as $element){
            $data[] = array(
                "id" => $element["id"],
                "name" => $element["name"],
                "value" => $element["value"],
            );
        }
        $elements = $elements->toArray();
        if(isset($data)){
            $elements["data"] = '';
            $elements["data"] = $data;
        }
        return $elements;
    }
}