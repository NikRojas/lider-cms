<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{
    protected $guarded = [];
    protected $appends = ['can_delete'];

    public function projectsRel()
    {
        return $this->belongsToMany('App\Project','projects_banks', 'bank_id', 'project_id');
    }

    public function getCanDeleteAttribute(){
        $value = true;
        if(count($this->projectsRel) > 0){
            $value = false;
        }
        return $value;
    }
}
