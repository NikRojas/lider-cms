<?php

namespace App\Repositories;

use App\Suscriber;
use Carbon\Carbon;

class SuscriberRepository
{
    public function datatable($date, $range = false, $items_per_page, $q = false)
    {
        if ($q) {
            $elements = Suscriber::select("id", "name", "email", 'created_at')
                ->where(function ($query) use ($q) {
                    return $query->where('name', 'like', '%' . $q . '%')
                        ->orWhere('email', 'like', '%' . $q . '%');
                });
        } else {
            $elements = Suscriber::select("id", "name", "email", 'created_at');
        }
        switch ($date) {
            case 'range':
                $elements->whereBetween('created_at', [$range[0], $range[1]]);
                break;
            case 'all':
                # code...
                break;
            case 'today':
                $elements->whereDate('created_at', '=', Carbon::today());
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
        $elements = $elements
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);

        foreach ($elements as $lead) {
            $data[] = array(
                "id" => $lead["id"],
                "name" => $lead["name"],
                "email" => $lead["email"],
                "created_at" => $lead["created_at_format"],
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
