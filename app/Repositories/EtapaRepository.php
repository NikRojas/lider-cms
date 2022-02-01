<?php 
namespace App\Repositories;

use App\EtapaProyecto;
use App\ProjectStatus;
use Carbon\Carbon;

class EtapaRepository 
{
    public function datatable($project_id, $items_per_page,$q = false){
        if ($q) {
            $elements = EtapaProyecto::select('*')
            ->where('project_id',$project_id)
            ->where(function($query) use ($q){
                return $query->where('name', 'like', '%' . $q . '%')->orwhere('sap_code', 'like', '%' . $q . '%');
            });
        } else {
            $elements = EtapaProyecto::select('*')->where('project_id',$project_id);
        }
        $elements = $elements
            ->with('projectRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        foreach ($elements as $element) {
            $status = ProjectStatus::where('id',$element["project_status_id"])->first();
            $data[] = array(
                "id" => $element["id"],
                "descr" => $element["name"],
                "sap" => $element["sap_code"],
                "estatus_id" => $status["name_es"],
                //"can_delete" => $element["can_delete"]
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