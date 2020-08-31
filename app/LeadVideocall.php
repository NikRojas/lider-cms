<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LeadVideocall extends Model
{
    protected $table = 'leads_videocall';
    protected $guarded = [];

    public function mediumRel()
    {
        return $this->belongsTo('App\MasterLeadMedium', 'lead_medium_id', 'id');
    }

    public function timeRel()
    {
        return $this->belongsTo('App\MasterLeadTimeDay', 'lead_time_day', 'id');
    }
}
