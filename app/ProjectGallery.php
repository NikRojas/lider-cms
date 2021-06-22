<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectGallery extends Model
{
    protected $table = 'project_gallery';
    protected $guarded = [];

    public function projectRel()
    {
        return $this->belongsTo('App\Project', 'project_id', 'id');
    }

    public function typeGalleryRel()
    {
        return $this->hasOne('App\MasterTypeGallery', 'id', 'master_type_gallery_id');
    }

    public function materialsGalleryRel()
    {
        return $this->hasMany('App\TpsMaterialsGallery', 'project_gallery_id', 'id');
    }
}
