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
                    $query->where('name', 'like', '%'.$q.'%')->orWhere('document_number', 'like', '%'.$q.'%')->orWhere('lastname', 'like', '%'.$q.'%')->orWhere('lastname_2', 'like', '%'.$q.'%');
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
        $elements = $elements->with('customerRel:id,name,lastname,lastname_2,document_number,type_document_id','customerRel.documentTypeRel')->with('orderDetailsRel.departmentRel')->with('orderDetailsRel.projectRel:id,name_es')
            ->with('transactionLatestRel.statusRel','transactionLatestRel.orderCycleRel')
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
                $sap = '<span class="font-weight-bold text-danger text-uppercase" style="font-size: .6rem !important;">No Enviado</span>';
            }
            $reserve .= '<div class="mb-1"><b>Proyecto '. $el["orderDetailsRel"][0]["projectRel"]["name_es"] .'</b>';
            foreach ( $el["orderDetailsRel"] as $key => $value) {
                $reserve .= '<div>'.$value["departmentRel"]["description"] .'</div>';
            }
            $reserve .= '</div>';

            if($el["transactionLatestRel"]["orderCycleRel"]["name"] == 'Cerrado'){
                $style = "style='background:#1762e6;color:white;font-size: .6rem !important;'";
            }
            else{
                $style = "style='background-color: rgba(23,98,230,.2);color:#1762e6;font-size: .6rem !important;'";
            }
            $data[] = array(
                "id" => $el["id"],
                "code" => '#' . $el["id"],
                "date" => $el["order_date_format_table"],
                "customer" => '<b>'.$el["customerRel"]["full_name"].'</b><br>'.$el["customerRel"]["documentTypeRel"]["description"].': '.$el["customerRel"]["document_number"],
                "reserve" => $reserve,
                "total" => $el["total_format"],
                "status" => $el["transactionLatestRel"]["statusRel"]["name_format"],
                //"send" => $sap,
                "oc" => "<div ".$style." class='text-center d-inline-block font-weight-bold text-uppercase rounded-0 py-1 px-2' >".$el["transactionLatestRel"]["orderCycleRel"]["name"]."</div>"
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
