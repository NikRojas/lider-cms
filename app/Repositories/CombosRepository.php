<?php 
namespace App\Repositories;

use App\RealStatePackage;
use Carbon\Carbon;

class CombosRepository 
{
    public function datatable($items_per_page,$q = false){
        if ($q) {
            $elements = RealStatePackage::select('*')
            ->where(function($query) use ($q){
                return $query->where('description', 'like', '%' . $q . '%');
            });
        } else {
            $elements = RealStatePackage::select('*');
        }
        $elements = $elements
            ->with('projectRel.currencyRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        foreach ($elements as $element) {
            if($element->stock){
                $stock = '<span class="font-weight-bold text-success badge badge-success" style="color: #2ee119 !important; background-color: rgb(204 255 230);">Disponible</span>';
            }
            else{
                $stock = '<span class="font-weight-bold text-danger badge badge-danger">No Disponible</span>';
            }
            if($element->projectRel->master_currency_id == 1){
                $price = $element->departmentsRel->pluck('price');
            }
            else{
                $price = $element->departmentsRel->pluck('price_foreign');
            }
            $detailedRS = $element->departmentsRel->pluck('description');
            $de = "";
            foreach ($detailedRS as $key => $value) {
                $de .= "<div>".$value."</div>"; 
            }
            $data[] = array(
                "id" => $element["slug"],
                "project" => $element["projectRel"]["name_es"],
                "descr" => $element["description"],
                "realStates" => $de,
                "status" => $element->status ? 'Sí' : 'No',
                "stock" => $stock,
                "precio_sep" => $element["projectRel"]["price_separation_format"],
                "precio" => $element->projectRel->currencyRel->symbol.' '.number_format($price->sum(), 0, '.', ',')
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