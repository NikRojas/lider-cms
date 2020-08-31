<?php

namespace App\Repositories;

use App\ComplaintBook;
use Carbon\Carbon;

class ComplaintBookRepository
{
    public function datatable($date, $items_per_page, $q = false)
    {
        if ($q) {
            $leads = ComplaintBook::select("id", "code", "name", "lastname", "email", "document_number", "document_type_id", 'created_at',"claim_type_id")
            ->where(function($query) use ($q){
                return $query->where('name', 'like', '%' . $q . '%')
                ->orWhere('lastname', 'like', '%' . $q . '%')
                ->orWhere('document_number', 'like', '%' . $q . '%')
                ->orWhere('code', 'like', '%' . $q . '%');
            });
        } else {
            $leads = ComplaintBook::select("id", "code", "name", "lastname", "email", "document_number", "document_type_id", 'created_at', "claim_type_id");
        }
        switch ($date) {
            case 'all':
                # code...
                break;
            case 'today':
                $leads->whereDay('created_at', '=', date('d'));
                break;
            case 'yesterday':
                $leads->whereDay('created_at', '=',  Carbon::now()->subDay());
                break;

            case 'this_month':
                $leads->whereMonth('created_at', date('m'))
                    ->whereYear('created_at', date('Y'));
                break;
            case 'past_month':
                $leads->whereMonth('created_at', Carbon::now()->subMonth()->month);
                break;

            case 'this_year':
                $leads->whereYear('created_at', '=', date('Y'));
                break;
        }
        $leads = $leads->with('documentTypeRel:id,name')
            ->with('claimTypeRel:id,name')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);

        foreach ($leads as $lead) {
            $data[] = array(
                "id" => $lead["id"],
                "code" => $lead["code"],
                "name" => $lead["name"] . " " . $lead["lastname"],
                "email" => $lead["email"],
                "document_number" => '<div>' . $lead["documentTypeRel"]["name"] . '<br>' . $lead["document_number"] . '</div>',
                "type" => $lead["claimTypeRel"]["name"],
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
