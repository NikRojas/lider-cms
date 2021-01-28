<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LeadVideocall extends Model
{
    protected $table = 'leads_videocall';
    protected $guarded = [];

    public function projectRel()
    {
        return $this->belongsTo('App\Project', 'project_id', 'id');
    }

    public function timeRel()
    {
        return $this->belongsTo('App\MasterLeadTimeDay', 'lead_time_day', 'id');
    }
}
