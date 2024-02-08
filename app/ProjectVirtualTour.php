<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectVirtualTour extends Model
{
    protected $table = 'project_virtual_tour';
    protected $guarded = [];
    protected $casts = [
        'url_360' => 'boolean',
    ];

    public function projectRel()
    {
        return $this->belongsTo('App\Project','project_id','id');
    }
}
