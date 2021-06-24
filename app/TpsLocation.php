<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class TpsLocation extends Model
{
    protected $table = 'tps_locations';
    protected $guarded = [];

    public function projectRel()
    {
        return $this->belongsTo('App\Project', 'project_id', 'id');
    }
}
