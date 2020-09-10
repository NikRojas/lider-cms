<?php

namespace App\Repositories;

use App\ComplaintBook;
use Carbon\Carbon;

class ComplaintBookRepository
{
    public function datatable($date, $range = false, $items_per_page, $q = false)
    {
        if ($q) {
            $elements = ComplaintBook::select("id", "code", "name", "lastname", "email", "document_number", "document_type_id", 'created_at',"claim_type_id")
            ->where(function($query) use ($q){
                return $query->where('name', 'like', '%' . $q . '%')
                ->orWhere('lastname', 'like', '%' . $q . '%')
                ->orWhere('document_number', 'like', '%' . $q . '%')
                ->orWhere('code', 'like', '%' . $q . '%');
            });
        } else {
            $elements = ComplaintBook::select("id", "code", "name", "lastname", "email", "document_number", "document_type_id", 'created_at', "claim_type_id");
        }
        switch ($date) {
            case 'all':
                # code...
                break;
                case 'today':
                    $elements->whereDate('created_at', '=', Carbon::today());
                    break;
                case 'range':
                    $elements->whereBetween('created_at', [$range[0], $range[1]]);
                    break;

                case '7':
                    $elements->whereDate('created_at', '>=',  Carbon::today()->subDay($date));
                    break;
    
                case '30':
                    $elements->whereDate('created_at', '>=',  Carbon::today()->subDay($date));
                    break;
    
                case '90':
                    $elements->whereDate('created_at', '>=',  Carbon::today()->subDay($date));
                    break;

            case 'this_year':
                $elements->whereYear('created_at', '=', date('Y'));
                break;
        }
        $elements = $elements->with('documentTypeRel:id,name')
            ->with('claimTypeRel:id,name')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);

        foreach ($elements as $el) {
            $data[] = array(
                "id" => $el["id"],
                "code" => $el["code"],
                "name" => $el["name"] . " " . $el["lastname"],
                "email" => $el["email"],
                "document_number" => '<div>' . $el["documentTypeRel"]["name"] . '<br>' . $el["document_number"] . '</div>',
                "type" => $el["claimTypeRel"]["name"],
                "created_at" => $el["created_at_format"],
            );
        }
        $elements = $elements->toArray();
        if (isset($data)) {
            $elements["data"] = '';
            $elements["data"] = $data;
        }
        return $elements;
    }
}
