<?php 
namespace App\Repositories;

use App\Department;
use Carbon\Carbon;

class DepartmentsRepository 
{
    public function datatable($id, $items_per_page,$q = false){
        if($q){
            $deps = Department::
            where('sap_code','like','%'.$q.'%')
            ->orWhere('description','like','%'.$q.'%')
            ->whereHas('tipologyRel', function ($query) use ($id) {
                return $query->where('project_id', $id);
            })
            ->with('viewRel')
            ->with('tipologyRel.parentTypeDepartmentRel')
            ->orderBy('created_at','desc')
            ->paginate($items_per_page);
        }
        else{
            $deps = Department::
            whereHas('tipologyRel', function ($query) use ($id) {
                    return $query->where('project_id', $id);
            })
            ->with('viewRel')
            ->with('tipologyRel.parentTypeDepartmentRel')
            ->orderBy('created_at','desc')
            ->paginate($items_per_page);
        }   
        foreach($deps as $dep){
            if(empty($dep->available))
                $stock = 'No registrado';   
            else{
                if($dep->available){
                    $stock = '<span class="font-weight-bold text-success badge badge-success" style="color: #26ff0c; background-color: rgb(204 255 230);">En Stock</span>';
                }
                else{
                    $stock = '<span class="font-weight-bold text-danger badge badge-danger">Sin Stock</span>';
                }
            }
            if($dep["image"]){
                $imageEstate = asset('storage/img/estates/'.$dep["image"]);
                $depHTML = "<div class='media align-items-center'><img src='".$imageEstate."' /></span>".$dep['description']."</div>";
            }
            else{
                $depHTML = "<div class='media align-items-center'>".$dep['description']."</div>";
            }
            $data[] = array(
                "id" => $dep["id"],
                "sap_code" => $dep["sap_code"],
                "description" => $depHTML,
                "area" => $dep["area"],
                "floor" => $dep["floor"],
                "vista" => $dep["viewRel"]["name"],
                "tipology" => $dep["tipologyRel"]["name"],
                "type" => $dep["tipologyRel"]["parentTypeDepartmentRel"] ? $dep["tipologyRel"]["parentTypeDepartmentRel"]["name"] : 'No registrado',
                "available" => $stock,
                "price" => $dep["price"] ? $dep['price_format'] : 'No registrado',
                "price_foreign" => $dep["price_foreign"] ? $dep['price_foreign_format'] : 'No registrado',
            );
        }
        $deps = $deps->toArray();
        if(isset($data)){
            $deps["data"] = '';
            $deps["data"] = $data;
        }
        return $deps;
    }
}