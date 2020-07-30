<?php

namespace App\Http\Traits;

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

}