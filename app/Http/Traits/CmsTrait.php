<?php

namespace App\Http\Traits;

use App\Ubigeo;

trait CmsTrait {

    public function setFileName($nombre,$archivo) {
        $nombreArchivo = $nombre.time().uniqid().'.'.$archivo->getClientOriginalExtension();
        return $nombreArchivo;
    }

    public function getMaxIndex($model){
        $element = $model->toArray();
        $index = 1;
        if(count($element) > 0){
            $index = $element[0]["index"] + 1; 
        }
        return $index;
    }

    public function getArrayColumn($value){
        $array = implode(',', $value);
        return $array;
    }

    public function getDepartments()
    {
        $data = Ubigeo::select('code_department','department')->distinct()->orderBy('department')->get();
        return $data;
    }

    public function getProvinces($department)
    {
        $data = Ubigeo::select('code_province','province')->distinct()->where('code_department',$department)
        ->where('code_province','!=','00')->orderBy('province')->get();
        return $data;
    }

    public function getDistricts($department,$province)
    {
        $data = Ubigeo::select('code_district','district')->distinct()->where('code_department',$department)
        ->where('code_province',$province)
        ->where('code_district','!=','00')->orderBy('district')->get();
        return $data;
    }

}