<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ComplaintBook extends Model
{
    protected $table = 'complaints_book';
    protected $guarded = [];

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
}

