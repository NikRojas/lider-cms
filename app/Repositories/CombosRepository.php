<?php 
namespace App\Repositories;

use App\RealStatePackage;
use Carbon\Carbon;

class CombosRepository 
{
    public function datatable($project_id, $items_per_page,$q = false){
        if ($q) {
            $elements = RealStatePackage::select('*')
            ->where('project_id',$project_id)
            ->where(function($query) use ($q){
                return $query->where('description', 'like', '%' . $q . '%');
            });
        } else {
            $elements = RealStatePackage::select('*')->where('project_id',$project_id);
        }
        $elements = $elements
            ->with('projectRel.currencyRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        foreach ($elements as $element) {
            if($element->status_calculate){
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
            //$detailedRS = $element->departmentsRel->pluck('description');
            $detailedRS = $element->departmentsRel;
            $de = "";
            foreach ($detailedRS as $key => $value) {
                if($value["available"]){
                    $stockSt = '<span class="ml-2 font-weight-bold text-success badge badge-success" style="color: #2ee119 !important; background-color: rgb(204 255 230);">Disponible</span>';
                }
                else{
                    $stockSt = '<span class="ml-2 font-weight-bold text-danger badge badge-danger">No Disponible</span>';
                }
                $de .= "<div class='mb-1'>".$value->description." ".$stockSt."</div>"; 
            }
            if($element->image){
                $img = '<a class="d-block" style="text-decoration: underline;" href="'.asset('storage/img/projects/combos/'.$element["image"]).'" target="_blank">Ver imagen</a><img class="d-block mb-1" height="auto" width="40" src='.asset('storage/img/projects/combos/'.$element["image"]).'>'.'<div>'.$element["description"].'</div>';
            }
            else{
                $img = $element["description"];
            }
            $data[] = array(
                "id" => $element["slug"],
                //"project" => $element["projectRel"]["name_es"],
                "descr" => $img,
                "realStates" => $de,
                "stock" => $stock,
                "precio_sep" => $element["projectRel"]["price_separation_format"],
                "precio" => $element->projectRel->currencyRel->symbol.' '.number_format($price->sum(), 0, '.', ','),
                "can_delete" => $element["can_delete"]
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