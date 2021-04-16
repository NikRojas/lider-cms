<?php 
namespace App\Repositories;

use App\ProjectQuotation;
use Carbon\Carbon;

class ProjectQuotationsRepository 
{
    public function datatable($id, $items_per_page,$q = false){
        if($q){
            $leads = ProjectQuotation::
            where('project_id', $id)
            ->where('name','like','%'.$q.'%')
            ->orWhere('lastname','like','%'.$q.'%')
            ->orWhere('document_number','like','%'.$q.'%')
            ->with('advisorRel','projectRel')
            ->with('projectTypeDepartmentRel:id,name')
            ->orderBy('created_at','desc')
            ->paginate($items_per_page);
        }
        else{
            $leads = ProjectQuotation::
            where('project_id', $id)
            ->with('advisorRel','projectRel')
            ->with('projectTypeDepartmentRel:id,name')
            ->orderBy('created_at','desc')
            ->paginate($items_per_page);
        }   
        foreach($leads as $lead){
            $avatarHTML = "No asignado aún";
            if($lead["advisorRel"]){
                if($lead["advisorRel"]["avatar"]){
                    $avatar = asset('storage/img/advisors/'.$lead["advisorRel"]["avatar"]);
                    $avatarHTML = "<div class='media align-items-center'><span class='avatar avatar-sm mr-2 rounded-circle bg-primary'><img src='".$avatar."' /></span>".$lead['advisorRel']['name']."</div>";
                }
                else{
                    $avatarHTML = "<div class='media align-items-center'><span class='avatar avatar-sm mr-2 rounded-circle bg-primary'><span style='font-size:16px!important;'>".$lead["advisorRel"]["avatar_initials"]."</span></span>".$lead['advisorRel']['name']."</div>";
                }
            }
            $image = asset('storage/img/projects/'.$lead["projectRel"]["images_format"][0]);
            $projectHTML = "<div class='media align-items-center'><span class='mr-3'><img height='55' width='auto' src='".$image."' /></span>".$lead["projectRel"]["name_es"]."</div>";
            $data[] = array(
                "id" => $lead["id"],
                "name" => $lead["fullname"],
                "mobile" => $lead["mobile_formatted"],
                "email" => $lead["email"],
                "document_number" => $lead["document_number"],
                "tipology" => $lead["projectTypeDepartmentRel"]["name"],
                "project" => $projectHTML,
                "advisor" => $avatarHTML,
                "created" => $lead["created_at_format"],
                "source" => $lead["utm_source"] ? $lead["utm_source"] : 'No registrado'
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