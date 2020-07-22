<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';
    //public $timestamps = false;
    protected $guarded = [];

    public function relModules()
    {
        return $this->belongsToMany('App\Module', 'master_permissions')->orderBy('module_id');
    }
}
