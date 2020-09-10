<?php

namespace App\Repositories;

use App\Order;
use Carbon\Carbon;

class OrderRepository
{
    public function datatable($date, $range = false, $items_per_page, $q = false)
    {
        if ($q) {
            $elements = Order::select("*")
            ->where(function($query) use ($q){
                return $query->where('id', 'like', '%' . $q . '%');
            });
        } else {
            $elements = Order::select("*");
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
        $elements = $elements->with('customerRel:id,name,lastname')->with('orderDetailsRel.tipologyRel:id,name')->with('orderDetailsRel.projectRel:id,name_es')
        ->with('transactionLatestRel.statusRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        foreach ($elements as $el) {
            $reserve = null;
            foreach ($el["orderDetailsRel"] as $key => $el2) {
                $reserve.= '<div class="mb-1">Proyecto '.$el2["projectRel"]["name_es"].' - Tipología '.$el2["tipologyRel"]["name"].'</div>';
            }
            $data[] = array(
                "id" => $el["id"],
                "code" => '#'.$el["id"],
                "date" => $el["order_date_format_table"],
                "customer" => $el["customerRel"]["name"].' '.$el["customerRel"]["lastname"],
                "reserve" => $reserve,
                "total" => $el["total_format"],
                "status" => $el["transactionLatestRel"]["statusRel"]["name_format"]
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
