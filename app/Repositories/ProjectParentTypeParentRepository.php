<?php 
namespace App\Repositories;

use App\ProjectParentTypeDepartment;

class ProjectParentTypeParentRepository 
{
    public function datatable($items_per_page,$q = false){
        if($q){
            $elements = ProjectParentTypeDepartment::where('name','like','%'.$q.'%')
            ->orderBy('created_at','asc')
            ->with('tipologyRel')
            ->paginate($items_per_page);
        }
        else{
            $elements = ProjectParentTypeDepartment::with('tipologyRel')->orderBy('created_at','asc')
            ->paginate($items_per_page);
        }   
        foreach($elements as $element){
            $data[] = array(
                "id" => $element["id"],
                "name" => $element["name"],
                "room" => $element["room"],
                "can_delete" => $element["can_delete"]
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