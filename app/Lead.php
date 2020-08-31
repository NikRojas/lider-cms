<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $table = 'leads';
    protected $guarded = [];

    public function mediumRel()
    {
        return $this->belongsTo('App\MasterLeadMedium', 'lead_medium_id', 'id');
    }

    public function sourceRel()
    {
        return $this->belongsTo('App\MasterLeadSource', 'lead_source_id', 'id');
    }
}
