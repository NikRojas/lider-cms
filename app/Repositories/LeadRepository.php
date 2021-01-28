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
            $leads = LeadVideocall::select("id", "name", "mobile", "document_number", "lead_medium_id", "lead_time_day")
            ->where('name', 'like', '%'.$q.'%')
            ->orWhere('mobile', 'like', '%'.$q.'%')
            ->with('mediumRel', 'timeRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        } else {
            $leads = LeadVideocall::select("id", "name", "mobile", "document_number", "lead_medium_id", "lead_time_day")
            ->with('mediumRel', 'timeRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        }
        foreach ($leads as $lead) {
            $data[] = array(
                "id" => $lead["id"],
                "name" => $lead['name'],
                "mobile" => $lead["mobile"],
                "document_number" => $lead["document_number"],
                //"medium" => $lead["mediumRel"]["name"],
                "source" => $lead["timeRel"]["name"]
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
