<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bond extends Model
{
    protected $guarded = [];
    protected $appends = ['can_delete'];

    public function projectsRel()
    {
        return $this->belongsToMany('App\Project','projects_bonds', 'bond_id', 'project_id');
    }

    public function getCanDeleteAttribute(){
        $value = true;
        if($this->projectsRel()->exists()){    
            $value = false;
        }
        return $value;
    }
}
