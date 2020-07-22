<?php 
namespace App\Repositories;

use App\Lead;
use Carbon\Carbon;

class LeadRepository 
{
    public function datatable($items_per_page,$q = false){
        if($q){
            $leads = Lead::select("id","full_name","phone","email","department_id","lead_source_id")
            ->where('full_name','like','%'.$q.'%')
            ->orWhere('message','like','%'.$q.'%')
            ->with('departmentRel:id,name')
            ->with('leadSourceRel:id,name')
            ->orderBy('created_at','desc')
            ->paginate($items_per_page);
        }
        else{
            $leads = Lead::select("id","full_name","phone","email","department_id","lead_source_id")
            ->with('departmentRel:id,name')
            ->with('leadSourceRel:id,name')
            ->orderBy('created_at','desc')
            ->paginate($items_per_page);
        }   
        foreach($leads as $lead){
            $procedence = NULL;
            $full_name = NULL;
            if($lead["department_id"]){
                $procedence = $lead["departmentRel"]["name"];
            }
            else{
                $procedence = "No registrado";
            }
            if($lead["full_name"]){
                $full_name = $lead["full_name"];
            }
            else{
                $full_name = "No registrado";
            }
            $data[] = array(
                "id" => $lead["id"],
                "full_name" => $full_name,
                "phone" => $lead["phone"],
                "email" => $lead["email"],
                "procedence" => $procedence,
                "source" => $lead["leadSourceRel"]["name"]
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