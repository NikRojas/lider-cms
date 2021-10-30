<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class FloorSector extends Model
{
    protected $table = 'floors_sector';
    protected $guarded = [];

    public function departmentsRel()
    {
        return $this->belongsToMany('App\Department', 'floors_sector_departments', 'floor_id', 'department_id');
    }
}