<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ComplaintBook extends Model
{
    protected $table = 'complaints_book';
    protected $guarded = [];
    protected $appends = ['mobile_formatted','created_at_format'];

    public function documentTypeRel()
    {
        return $this->hasOne('App\MasterDocumentType','id','document_type_id');
    }

    public function claimTypeRel()
    {
        return $this->hasOne('App\MasterClaimType','id','claim_type_id');
    }

    public function goodContractedRel()
    {
        return $this->hasOne('App\MasterGoodContractedType','id','good_contracted_id');
    }

    public function ubigeoRel()
    {
        return $this->hasOne('App\Ubigeo', 'code_ubigeo', 'code_ubigeo');
    }

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
}

