<?php 
namespace App\Repositories;

use App\Department;
use Carbon\Carbon;

class DepartmentsRepository 
{
    public function datatable($id, $items_per_page,$q = false, $orderBy = false, $orderType = false){
        $orderDefault = 'sap_code';
        $orderTypeDefault = 'asc';
        if($orderBy){
            $orderDefault = $orderBy;
        }
        if($orderType){
            $orderTypeDefault = $orderType;
        }
        if($q){
            $deps = Department::
            where('departments.project_id', $id)
            ->where(function($query) use ($q) {
                $query->where('departments.sap_code','like', '%'.$q.'%')
                  ->orWhere('departments.description','like', '%'.$q.'%');
            })
            ->with('viewRel')->with('etapaRel');
            if($orderDefault == "type_department_id"){
                $deps = $deps->join('project_type_departments', 'departments.type_department_id', '=', 'project_type_departments.id')
                ->orderBy('project_type_departments.name',$orderTypeDefault)
                ->select('departments.*','project_type_departments.name');
            }
            else{
                $deps = $deps->with('tipologyRel.parentTypeDepartmentRel')->orderBy($orderDefault, $orderTypeDefault);
            }
            $deps = $deps->paginate($items_per_page);
        }
        else{
            $deps = Department::
            where('departments.project_id', $id)
            ->with('viewRel')->with('sectorRel')->with('etapaRel');
            if($orderDefault == "type_department_id"){
                $deps = $deps->join('project_type_departments', 'departments.type_department_id', '=', 'project_type_departments.id')
                ->orderBy('project_type_departments.name',$orderTypeDefault)
                ->select('departments.*','project_type_departments.name');
            }
            else{
                $deps = $deps->with('tipologyRel.parentTypeDepartmentRel')->orderBy($orderDefault, $orderTypeDefault);
            }
            $deps = $deps->paginate($items_per_page);
        }   
        foreach($deps as $dep){
            if(is_null($dep->available)){
                $stock = 'No registrado';   
            }
            else{
                if($dep->available){
                    $stock = '<span class="font-weight-bold text-success badge badge-success" style="color: #2ee119 !important; background-color: rgb(204 255 230);">En Stock</span>';
                }
                else{
                    $stock = '<span class="font-weight-bold text-danger badge badge-danger">Sin Stock</span>';
                }
            }
            if($dep["image"]){
                $imageEstate = asset('storage/img/projects/estates/'.$dep["image"]);
                $depHTML = "<div class='d-inline-flex align-items-center mr-2'><div class='text-center'><img height='25' class=' ' src='".$imageEstate."' /><a style='color: #1762e6; text-decoration: underline;' class='d-block mt-1 small' target='_blank' href='".$imageEstate."'>Ver Imagen</a></span></div></div><div class='d-inline-block mt-2'>".$dep['description']."</div>";
            }
            else{
                $depHTML = "<div class='media align-items-center'>".$dep['description']."</div>";
            }
            $data[] = array(
                "id" => $dep["id"],
                "sap_code" => $dep["sap_code"],
                "sector" => $dep["sectorRel"] ? $dep["sectorRel"]["name"] : "No registrado",
                "description" => $depHTML,
                "area" => number_format($dep["area"],2),
                "floor" => $dep["floor"] ? $dep["floor"] : 'No registrado' ,
                "vista" => $dep["viewRel"] ? $dep["viewRel"]["name"] : 'No registrado',
                "tipology" => $dep["tipologyRel"] ? $dep["tipologyRel"]["name"].' ('.$dep["tipologyRel"]["room"].' Dormitorios)' : 'No registrado',
                "type" => $dep["tipologyRel"]["parentTypeDepartmentRel"] ? $dep["tipologyRel"]["parentTypeDepartmentRel"]["name"] : 'No registrado',
                "etapa" => $dep["etapaRel"] ? $dep["etapaRel"]["name"] : 'No registrado',
                "available" => $stock,
                "price" => $dep["price"] ? $dep['price_format'] : 'No registrado',
                "price_foreign" => $dep["price_foreign"] ? $dep['price_foreign_format'] : 'No registrado',
                "update_at" => $dep["updated_at_format"]
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