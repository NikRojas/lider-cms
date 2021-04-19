<?php
namespace App\Repositories;

use App\Lead;
use App\LeadVideocall;
use App\LeadSaleLand;
use Carbon\Carbon;

class LeadRepository
{
    public function datatable($items_per_page, $q = false)
    {
        if ($q) {
            $leads = Lead::select("*")
            ->where('name', 'like', '%'.$q.'%')
            ->orWhere('mobile', 'like', '%'.$q.'%')
            ->orWhere('document_number', 'like', '%'.$q.'%')
            //->with('mediumRel', 'sourceRel')
            ->with('sourceRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        } else {
            $leads = Lead::select("*")
            //->with('mediumRel', 'sourceRel')
            ->with('sourceRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        }
        foreach ($leads as $lead) {
            $department = "No registrado";
            if($lead["department"]){
                $department = $lead["department"];
            }
            $data[] = array(
                "id" => $lead["id"],
                "name" => $lead['name'],
                "mobile" => $lead["mobile_format"],
                "dni" => $lead["document_number"],
                "email" => $lead["email"],
                "department" => $department,
                "source" => $lead["sourceRel"]["name"],
                "created_at" => $lead["created_at_format"],
            );
        }
        $leads = $leads->toArray();
        if (isset($data)) {
            $leads["data"] = '';
            $leads["data"] = $data;
        }
        return $leads;
    }

    public function datatableOnline($items_per_page, $q = false)
    {
        if ($q) {
            $leads = LeadVideocall::
            where('name', 'like', '%'.$q.'%')
            ->orWhere('lastname', 'like', '%'.$q.'%')
            ->orWhere('mobile', 'like', '%'.$q.'%')
            ->orWhere('document_number', 'like', '%'.$q.'%')
            //->with('mediumRel', 'timeRel')
            ->with('advisorRel','projectRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        } else {
            $leads = LeadVideocall::
            //->with('mediumRel', 'timeRel')
            with('advisorRel','projectRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        }
        foreach ($leads as $lead) {
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
                "name" => $lead['fullname'],
                "mobile" => $lead["mobile_format"],
                "email" => $lead["email"],
                "document_number" => $lead["document_number"],
                "schedule" => $lead["schedule"],
                "project" => $projectHTML,
                "advisor" => $avatarHTML,
                "created" => $lead["created_at_format"],
                'utm_source' => $lead["utm_source"] ? $lead["utm_source"] : 'No registrado',
                'utm_medium' => $lead["utm_medium"] ? $lead["utm_medium"] : 'No registrado',
                'utm_campaign' => $lead["utm_campaign"] ? $lead["utm_campaign"] : 'No registrado',
                'utm_term' => $lead["utm_term"] ? $lead["utm_term"] : 'No registrado',
                'utm_content' => $lead["utm_content"] ? $lead["utm_content"] : 'No registrado',
                "webhook" => $lead["sended_to_webhook"] ? 'Enviado': 'No enviado'
            );
        }
        $leads = $leads->toArray();
        if (isset($data)) {
            $leads["data"] = '';
            $leads["data"] = $data;
        }
        return $leads;
    }

    public function datatableLandSale($items_per_page, $q = false)
    {
        if ($q) {
            $leads = LeadSaleLand::select("id", "name", "mobile", "email", "area", "created_at")
            ->where('name', 'like', '%'.$q.'%')
            ->orWhere('mobile', 'like', '%'.$q.'%')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        } else {
            $leads = LeadSaleLand::select("id", "name", "mobile", "email", "area", "created_at")
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        }
        foreach ($leads as $lead) {
            $data[] = array(
                "id" => $lead["id"],
                "name" => $lead['name'],
                "mobile" => $lead["mobile_format"],
                "email" => $lead["email"],
                "area" => $lead["area"]."m2",
                "created_at" => $lead["created_at_format"],
            );
        }
        $leads = $leads->toArray();
        if (isset($data)) {
            $leads["data"] = '';
            $leads["data"] = $data;
        }
        return $leads;
    }
}
