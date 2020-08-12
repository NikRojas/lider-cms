<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MasterPage extends Model
{
    protected $table = 'master_pages';
    protected $guarded = [];

    public function sections()
    {
        return $this->hasMany('App\MasterSection','master_page_id','id');
    }

    public function relDepartment()
    {
        return $this->hasOne('App\Department','id','department_id');
    }
}
