<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectFile extends Model
{
    protected $table = 'project_files';
    protected $guarded = [];

    public function projectRel()
    {
        return $this->belongsTo('App\Project','project_id','id');
    }

}
