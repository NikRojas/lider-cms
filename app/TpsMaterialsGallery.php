<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class TpsMaterialsGallery extends Model
{
    protected $table = 'tps_materials_gallery';
    protected $guarded = [];

    public function projectGalleryRel()
    {
        return $this->belongsTo('App\ProjectGallery', 'project_gallery_id', 'id');
    }
}
