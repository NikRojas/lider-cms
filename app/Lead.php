<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Lead extends Model
{
    protected $table = 'leads';
    protected $guarded = [];

    public function departmentRel()
    {
        return $this->hasOne('App\Department','id','department_id');
    }

    public function leadMediumRel()
    {
        return $this->hasOne('App\LeadMedium','id','lead_medium_id');
    }

    public function leadSourceRel()
    {
        return $this->hasOne('App\LeadSource','id','lead_source_id');
    }

    public function getCreatedAtAttribute( $value ) {
        return (new Carbon($value))->format('g:iA d-m-Y');
    }
}

