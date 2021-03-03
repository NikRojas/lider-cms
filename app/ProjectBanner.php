<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class ProjectBanner extends Model
{
    protected $table = 'project_banner';
    protected $guarded = [];

    public function projectRel()
    {
        return $this->belongsTo('App\Project', 'project_id', 'id');
    }
}
