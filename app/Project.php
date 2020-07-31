<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public function featuresRel()
    {
        return $this->belongsToMany('App\ProjectFeature','projects_project_features', 'project_id', 'feature_id');
    }

    public function banksRel()
    {
        return $this->belongsToMany('App\Bank','projects_banks', 'project_id', 'bank_id');
    }

    public function advisorsRel()
    {
        return $this->belongsToMany('App\Bank','projects_advisors', 'project_id', 'advisor_id');
    }
}
