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
            $leads = Lead::select("id", "name", "mobile", "email", "lead_medium_id", "lead_source_id")
            ->where('name', 'like', '%'.$q.'%')
            ->orWhere('mobile', 'like', '%'.$q.'%')
            ->with('mediumRel', 'sourceRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        } else {
            $leads = Lead::select("id", "name", "mobile", "email", "lead_medium_id", "lead_source_id")
            ->with('mediumRel', 'sourceRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        }
        foreach ($leads as $lead) {
            $data[] = array(
                "id" => $lead["id"],
                "name" => $lead['name'],
                "mobile" => $lead["mobile"],
                "email" => $lead["email"],
                "medium" => $lead["mediumRel"]["name"],
                "source" => $lead["sourceRel"]["name"]
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
            $avatar = asset('storage/img/advisors/'.$lead["advisorRel"]["avatar"]);
            $avatarHTML = "<div class='media align-items-center'><span class='avatar avatar-sm mr-3 rounded-circle bg-primary'><img src='".$avatar."' /></span>".$lead['advisorRel']['name']."</div>";

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
                "advisor" => $avatarHTML
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
            $leads = LeadSaleLand::select("id", "name", "mobile", "email", "area")
            ->where('name', 'like', '%'.$q.'%')
            ->orWhere('mobile', 'like', '%'.$q.'%')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        } else {
            $leads = LeadSaleLand::select("id", "name", "mobile", "email", "area")
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        }
        foreach ($leads as $lead) {
            $data[] = array(
                "id" => $lead["id"],
                "name" => $lead['name'],
                "mobile" => $lead["mobile"],
                "email" => $lead["email"],
                "area" => $lead["area"]
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
