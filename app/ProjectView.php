<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectView extends Model
{
    protected $table = 'projects_views';
    protected $guarded = [];
    protected $appends = ['can_delete'];

    public function departmentsRel()
    {
        return $this->hasMany('App\Department', 'view_id', 'id');
    }

    public function getCanDeleteAttribute(){
        $value = true;
        if(count($this->departmentsRel)){
            $value = false;
        }
        return $value;
    }
}
