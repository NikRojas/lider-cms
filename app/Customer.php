<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $appends = ['mobile_formatted','created_at_format','avatar_initials'];
    public function getCreatedAtFormatAttribute() {
        return (new Carbon($this->created_at))->format('g:iA d-m-Y');
    }

    public function getMobileFormattedAttribute(){
        if($this->mobile && strlen($this->mobile) == 9){
            return substr($this->mobile,0,3).'-'.substr($this->mobile,3,3).'-'.substr($this->mobile,6,3);
        }
        else{
            return $this->mobile;
        }
    }

    public function getRouteKeyName(){
        return 'slug';
    }

    public function getAvatarInitialsAttribute(){
        return substr($this->name,0,1).substr($this->lastname,0,1);
    }

    public function ordersRel()
    {
        return $this->hasMany('App\Order', 'customer_id', 'id');
    }
}
