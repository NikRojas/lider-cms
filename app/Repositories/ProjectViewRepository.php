<?php 
namespace App\Repositories;

use App\ProjectView;

class ProjectViewRepository 
{
    public function datatable($items_per_page,$q = false){
        if($q){
            $elements = ProjectView::where('name','like','%'.$q.'%')
            ->OrWhere('sap_code','like','%'.$q.'%')
            ->orderBy('created_at','asc')
            ->with('departmentsRel')
            ->paginate($items_per_page);
        }
        else{
            $elements = ProjectView::with('departmentsRel')->orderBy('created_at','asc')
            ->paginate($items_per_page);
        }   
        foreach($elements as $element){
            $data[] = array(
                "id" => $element["id"],
                "name" => $element["name"],
                "sap_code" => $element["sap_code"],
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