<?php

namespace App\Repositories;

use App\Helpers\CollectionHelper;
use App\Order;
use Carbon\Carbon;

class OrderRepository
{
    public function datatable($date, $range = false, $items_per_page, $q = false, $projects, $transactions)
    {
        if ($q) {
            $elements = Order::select("*")->has('orderDetailsRel')->has('transactionLatestRel')
            /*->whereHas('customerRel', function( $query ) use ( $q ){
                $query->where('name', 'like', '%'.$q.'%')->orWhere('lastname', 'like', '%'.$q.'%')->orWhere('lastname_2', 'like', '%'.$q.'%');
            });*/
            ->where(function($query) use ($q){
                return $query->where('id', 'like', $q . '%')
                ->orWhereHas('customerRel', function( $query ) use ( $q ){
                    $query->where('name', 'like', '%'.$q.'%')->orWhere('lastname', 'like', '%'.$q.'%')->orWhere('lastname_2', 'like', '%'.$q.'%');
                });;
            });
        } else {
            $elements = Order::select("*")->has('orderDetailsRel')->has('transactionLatestRel');
        }
        if(count($projects) > 0){
            $elements = $elements->whereHas('orderDetailsRel.projectRel', function( $query ) use ( $projects ){
                $query->whereIn('project_id', $projects);
            });
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
        $elements = $elements->with('customerRel:id,name,lastname,lastname_2')->with('orderDetailsRel.departmentRel')->with('orderDetailsRel.projectRel:id,name_es')
            ->with('transactionLatestRel.statusRel')
            ->orderBy('orders.created_at', 'desc');
        if(count($transactions) > 0){
                $elements = $elements->get()->filter(function($order) use ( $transactions ){

                    return in_array($order->transactionLatestRel->transaction_status_id, $transactions);
            
                });
                $elements = CollectionHelper::paginate($elements, $items_per_page);
        }
        else{
            $elements = $elements->paginate($items_per_page);
        }
        foreach ($elements as $el) {
            $reserve = null;
            if($el->sended_to_sap){
                $sap = '<span>'.$el->sended_code_sap.'</span>';
            }
            else{
                $sap = '<span class="font-weight-bold text-danger text-uppercase" style="font-size: .65rem !important;">No Enviado</span>';
            }
            $reserve .= '<div class="mb-1">Proyecto ' . $el["orderDetailsRel"][0]["projectRel"]["name_es"] . ' <br> Inmueble ' . $el["orderDetailsRel"][0]["departmentRel"]["description"] . '</div>';
            $data[] = array(
                "id" => $el["id"],
                "code" => '#' . $el["id"],
                "date" => $el["order_date_format_table"],
                "customer" => $el["customerRel"]["full_name"],
                "reserve" => $reserve,
                "total" => $el["total_format"],
                "status" => $el["transactionLatestRel"]["statusRel"]["name_format"],
                "send" => $sap,
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
