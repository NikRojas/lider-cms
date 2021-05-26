<?php

namespace App\Repositories;

use App\Customer;
use Carbon\Carbon;

class CustomerRepository
{
    public function datatable($date, $range = false, $items_per_page, $q = false)
    {
        if ($q) {
            $elements = Customer::select("id", "name","slug", "lastname",'lastname_2', "email", "document_number",'type_document_id',  'created_at')
            ->where(function($query) use ($q){
                return $query->where('name', 'like', '%' . $q . '%')
                ->orWhere('lastname', 'like', '%' . $q . '%')
                ->orWhere('lastname_2', 'like', '%' . $q . '%')
                ->orWhere('document_number', 'like', '%' . $q . '%');
            });
        } else {
            $elements = Customer::select("id", "name","slug", "lastname",'lastname_2', "email", "document_number",'type_document_id',  'created_at');
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
        $elements = $elements
            ->with('documentTypeRel')
            ->with('ordersRel.transactionsRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        foreach ($elements as $element) {
            $countOrders = 0;
            foreach ($element["ordersRel"] as $key => $value) {
                if(count($value["transactionsRel"])){
                    $countOrders++;
                }
            }
            $data[] = array(
                "id" => $element["slug"],
                "name" => $element["full_name"],
                "document_number" => '<strong>'.$element["documentTypeRel"]["description"].'</strong> <br> '.$element["document_number"],
                "sales" => $countOrders,
                "created_at" => $element["created_at_format"],
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
