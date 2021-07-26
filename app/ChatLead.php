<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ChatLead extends Model
{
    protected $table = 'chat_leads';
    protected $guarded = [];
    protected $casts = [
        //'response' => 'array',
    ];
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