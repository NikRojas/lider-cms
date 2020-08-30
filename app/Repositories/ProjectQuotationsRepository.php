<?php 
namespace App\Repositories;

use App\ProjectQuotation;
use Carbon\Carbon;

class ProjectQuotationsRepository 
{
    public function datatable($id, $items_per_page,$q = false){
        if($q){
            $leads = ProjectQuotation::select("id","name","email","document_number","project_type_department_id")
            ->where('project_id', $id)
            ->where('name','like','%'.$q.'%')
            ->orWhere('document_number','like','%'.$q.'%')
            ->with('projectTypeDepartmentRel:id,name')
            ->orderBy('created_at','desc')
            ->paginate($items_per_page);
        }
        else{
            $leads = ProjectQuotation::select("id","name","email","document_number","project_type_department_id")
            ->where('project_id', $id)
            ->with('projectTypeDepartmentRel:id,name')
            ->orderBy('created_at','desc')
            ->paginate($items_per_page);
        }   
        foreach($leads as $lead){
            $data[] = array(
                "id" => $lead["id"],
                "name" => $lead["name"],
                "email" => $lead["email"],
                "document_number" => $lead["document_number"],
                "tipology" => $lead["projectTypeDepartmentRel"]["name"]
            );
        }
        $leads = $leads->toArray();
        if(isset($data)){
            $leads["data"] = '';
            $leads["data"] = $data;
        }
        return $leads;
    }
}