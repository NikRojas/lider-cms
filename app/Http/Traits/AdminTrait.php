<?php

namespace App\Http\Traits;

trait AdminTrait {

    public function setFileName($nombre,$archivo) {
        $nombreArchivo = $nombre.time().uniqid().'.'.$archivo->getClientOriginalExtension();
        return $nombreArchivo;
    }

    public function getMaxIndex($model){
        $element = $model->toArray();
        return $element;
    }

    public function getArrayColumn($value){
        $array = implode(',', $value);
        return $array;
    }

}