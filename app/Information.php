<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Information extends Model
{
    protected $table = 'information';
    protected $guarded = [];

    protected $appends = ['phone_formatted', 'phone_value'];

    public function getPhoneFormattedAttribute(){
        if($this->phone){
            return '(511) '.substr($this->phone,0,3).'-'.substr($this->phone,3,4);
        }
    }

    public function getPhoneValueAttribute(){
        if($this->phone){
            return '(511)'.$this->phone;
        }
    }
}

