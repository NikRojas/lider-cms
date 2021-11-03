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
            ->with('projectRel')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        foreach ($elements as $element) {
            $data[] = array(
                "id" => $element["slug"],
                "descr" => $element["description"],
                "project" => $element["projectRel"]["name_es"],
                "realStates" => 1,
                "status" => 1,
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