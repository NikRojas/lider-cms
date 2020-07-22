<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Information extends Model
{
    protected $table = 'information';
    protected $guarded = [];

    protected $appends = ['cellphone_formatted','phone_formatted'];

    public function getCellphoneFormattedAttribute(){
        if($this->cellphone){
            return trim(str_replace('-','',$this->cellphone));
        }
    }

    public function getPhoneFormattedAttribute(){
        if($this->phone){
            return '01'.trim(str_replace('-','',$this->phone));
        }
    }
}

