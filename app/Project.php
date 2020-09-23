<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $guarded = ['id'];
    protected $casts = [
        'images' => 'array',
        'active' => 'boolean'
    ];
    protected $appends = ['images_format','price_total_format','price_total_foreign_format','price_format','id_video'];

    public function galleryRel()
    {
        return $this->hasMany('App\ProjectGallery', 'project_id', 'id');
    }

    public function filesRel()
    {
        return $this->hasMany('App\ProjectFile', 'project_id', 'id');
    }

    public function tipologiesRel()
    {
        return $this->hasMany('App\ProjectTypeDepartment', 'project_id', 'id');
    }

    public function getIdVideoAttribute()
    {
        if ($this->url_video) {
            $id = explode("?v=", $this->url_video);
            return $id[1];
        }
    }

    public function getImagesFormatAttribute()
    {
        return json_decode($this->images);
    }

    public function getPriceTotalFormatAttribute()
    {
        return 'S/ '.number_format($this->price_total, 2, '.', ',');
    }

    public function getPriceFormatAttribute()
    {
        return 'S/ '.number_format($this->price, 2, '.', ',');
    }

    public function getPriceTotalForeignFormatAttribute()
    {
        return '$ '.number_format($this->price_total_foreign, 2, '.', ',');
    }

    public function featuresRel()
    {
        return $this->belongsToMany('App\ProjectFeature', 'projects_project_features', 'project_id', 'feature_id');
    }

    public function banksRel()
    {
        return $this->belongsToMany('App\Bank', 'projects_banks', 'project_id', 'bank_id');
    }

    public function advisorsRel()
    {
        return $this->belongsToMany('App\Advisor', 'projects_advisors', 'project_id', 'advisor_id');
    }

    public function statusRel()
    {
        return $this->belongsTo('App\ProjectStatus', 'project_status_id', 'id');
    }

    public function ubigeoRel()
    {
        return $this->hasOne('App\Ubigeo', 'code_ubigeo', 'code_ubigeo');
    }
}
