<?php

namespace App\Repositories;

use App\ChatLead;
use App\ChatQualification;
use Carbon\Carbon;

class ChatbotRepository
{
    public function datatable($items_per_page, $q = false)
    {
        if ($q) {
            $leads = ChatLead::select("*")
                ->where('name', 'like', '%' . $q . '%')
                ->orWhere('mobile', 'like', '%' . $q . '%')
                ->orWhere('email', 'like', '%' . $q . '%')
                ->orWhere('project', 'like', '%' . $q . '%')
                ->orWhere('host', 'like', '%' . $q . '%')
                ->orderBy('created_at', 'desc')
                ->paginate($items_per_page);
        } else {
            $leads = ChatLead::select("*")
                ->orderBy('created_at', 'desc')
                ->paginate($items_per_page);
        }
        foreach ($leads as $lead) {
            $data[] = array(
                "id" => $lead["id"],
                "name" => $lead['name'],
                "mobile" => $lead["mobile_format"],
                "email" => $lead["email"],
                "project" => $lead["project"] ? $lead["project"] : 'No registrado',
                "host" => $lead["host"] ? '<p class="mb-0">'.$lead["host"].'</p>' : 'No registrado',
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

    public function qualifications($date, $range = false)
    {
        $values = ["Muy mala", "Mala", "Regular", "Buena", "Muy buena"];
        foreach ($values as $key => $value) {
            $elements = ChatQualification::select("*");
            $elements->where('value',$value);
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
            $data[] = [
                "name" => $value,
                "count" => $elements->get()->count()
            ];
        }
        return $data;
    }
}
