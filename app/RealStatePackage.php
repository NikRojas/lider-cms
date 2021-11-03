<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class RealStatePackage extends Model
{
    protected $table = 'real_state_packages';
    protected $guarded = [];

    public function projectRel()
    {
        return $this->belongsTo('App\Project', 'project_id', 'id');
    }
}