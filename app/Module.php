<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    protected $table = 'master_modules';
    
    public function roles()
    {
        return $this->belongsToMany('App\Rol');
    }
}

