<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Department extends Model
{
    protected $guarded = [];
    protected $appends = ['price_foreign_format','price_format','updated_at_format','area_format'];

    public function viewRel()
    {
        return $this->belongsTo('App\ProjectView', 'view_id', 'id');
    }

    public function projectRel()
    {
        return $this->belongsTo('App\Project', 'project_id', 'id');
    }

    public function sectorRel()
    {
        return $this->belongsTo('App\ProjectSector', 'sector_id', 'id');
    }

    public function tipologyRel()
    {
        return $this->belongsTo('App\ProjectTypeDepartment','type_department_id','id');
    }

    public function getPriceFormatAttribute()
    {
        return 'S/ '.number_format($this->price, 0, '.', ',');
    }

    public function getPriceForeignFormatAttribute()
    {
        return '$ '.number_format($this->price_foreign, 0, '.', ',');
    }

    public function getUpdatedAtFormatAttribute() {
        return (new Carbon($this->updated_at))->format('g:iA d-m-Y');
    }

    public function getAreaFormatAttribute()
    {
        return number_format($this->area, 2);
    }

    public function packageRel()
    {
        return $this->belongsToMany('App\RealStatePackage', 'real_state_package_departments', 'department_id', 'real_state_package_id');
    }
}