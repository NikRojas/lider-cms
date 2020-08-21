<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $guarded = ['id'];
    protected $casts = [
        'images' => 'array',
    ];
    protected $appends = ['images_format'];

    public function getImagesFormatAttribute(){
        return json_decode($this->images);
    }

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
        return $this->belongsToMany('App\Advisor','projects_advisors', 'project_id', 'advisor_id');
    }

    public function statusRel()
    {
        return $this->belongsTo('App\ProjectStatus','project_status_id', 'id');
    }
}
