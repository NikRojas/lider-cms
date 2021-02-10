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
            $data[] = array(
                "id" => $lead["id"],
                "name" => $lead['name'],
                "mobile" => $lead["mobile_format"],
                "dni" => $lead["document_number"],
                "email" => $lead["email"],
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
            $leads = LeadVideocall::select("id", "name","email",'project_id', "mobile", "document_number", "schedule", "advisor_id")
            ->where('name', 'like', '%'.$q.'%')
            ->orWhere('mobile', 'like', '%'.$q.'%')
            ->orWhere('document_number', 'like', '%'.$q.'%')
            //->with('mediumRel', 'timeRel')
            ->with('advisorRel','projectRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        } else {
            $leads = LeadVideocall::select("id", "name","email",'project_id', "mobile", "document_number", "schedule", "advisor_id")
            //->with('mediumRel', 'timeRel')
            ->with('advisorRel','projectRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        }
        foreach ($leads as $lead) {
            $avatarHTML = "No asignado aún";
            if($lead["advisorRel"]){
                $avatar = asset('storage/img/advisors/'.$lead["advisorRel"]["avatar"]);
                $avatarHTML = "<div class='media align-items-center'><span class='avatar avatar-sm mr-2 rounded-circle bg-primary'><img src='".$avatar."' /></span>".$lead['advisorRel']['name']."</div>";
            }

            $image = asset('storage/img/projects/'.$lead["projectRel"]["images_format"][0]);
            $projectHTML = "<div class='media align-items-center'><span class='mr-3'><img height='55' width='auto' src='".$image."' /></span>".$lead["projectRel"]["name_es"]."</div>";
            $data[] = array(
                "id" => $lead["id"],
                "name" => $lead['name'],
                "mobile" => $lead["mobile_format"],
                "email" => $lead["email"],
                "document_number" => $lead["document_number"],
                "schedule" => $lead["schedule"],
                "project" => $projectHTML,
                "advisor" => $avatarHTML,
                "created" => $lead["created_at_format"]
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
