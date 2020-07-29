<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public function featuresRel()
    {
        return $this->belongsToMany('App\ProjectFeature','projects_project_features', 'project_id', 'features_id');
    }
}
