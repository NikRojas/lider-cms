<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customers';
    protected $guarded = [];

    protected $appends = ['status_format'];

    public function getStatusFormatAttribute(){
        if($this->status){
            return "<i class='fas fa-xs fa-circle text-success'></i>";
        }
        else{
            return "<i class='fas fa-xs fa-circle text-danger'></i>";
        }
    }

    public function getStatusAttribute( $value ) {
        if($value){
            return true;
        }
        else{
            return false;
        }
    }
}

