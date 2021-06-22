<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class TpsPromotion extends Model
{
    protected $table = 'tps_promotions';
    protected $guarded = [];

    public function projectRel()
    {
        return $this->belongsTo('App\Project', 'project_id', 'id');
    }
}
