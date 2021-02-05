<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class LeadSaleLand extends Model
{
    protected $table = 'leads_sale_land';
    protected $guarded = [];
    protected $appends = ["created_at_format","mobile_format"];

    public function getCreatedAtFormatAttribute(  ) {
        return (new Carbon($this->created_at))->format('g:iA d-m-Y');
    }

    public function getMobileFormatAttribute(){
        $data = null;
        if($this->mobile && strlen($this->mobile) == 9){
            $data = substr($this->mobile,0,3).'-'.substr($this->mobile,3,3).'-'.substr($this->mobile,6,3);
        }
        else if($this->mobile && strlen($this->mobile) == 7){
            $data = substr($this->mobile,0,3).'-'.substr($this->mobile,3,4);
        }
        else{
            $data = $this->mobile;
        }
        return $data;
    }
}
