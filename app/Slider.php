<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    protected $table = 'slider';
    protected $guarded = [];

    protected $appends = ["from_format","to_format","active"];

    public function getFromFormatAttribute() {
        if($this->from){
            return (new Carbon($this->from))->format('H:iA d-m-Y');
        }
    }

    public function getToFormatAttribute() {
        if($this->to){
            return (new Carbon($this->to))->format('H:iA d-m-Y');
        }
    }

    public function getActiveAttribute() {
        $value = false;
        if(Carbon::now()->between($this->from,$this->to)){
            $value = true;
        }
        return $value;
    }

    public function getFromAttribute($value) {
        if($value){
            return (new Carbon($value))->format('H:i d-m-Y');
        }
    }

    public function getToAttribute($value) {
        if($value){
            return (new Carbon($value))->format('H:i d-m-Y');
        }
    }
}
