<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class LeadVideocall extends Model
{
    protected $table = 'leads_videocall';
    protected $guarded = [];
    protected $appends = ["created_at_format","mobile_format","created_at_format_email",'fullname'];

    public function projectRel()
    {
        return $this->belongsTo('App\Project', 'project_id', 'id');
    }

    public function advisorRel()
    {
        return $this->belongsTo('App\Advisor', 'advisor_id', 'id');
    }

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

    public function getCreatedAtFormatEmailAttribute() {
        $date = new Carbon($this->created_at);
        return $date->day.' de '.ucfirst($date->monthName).' '.$date->year;;
    }

    public function getFullnameAttribute() {
        return $this->name.' '.$this->lastname;
    }

    public function canalRel()
    {
        return $this->hasOne('App\CanalCitaOnline','id','id_canal');
    }

    public function documentTypeRel()
    {
        return $this->hasOne('App\MasterDocumentType','id','type_document_id');
    }
}
