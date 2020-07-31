<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectStatus extends Model
{
    protected $table = 'project_statuses';
    protected $guarded = [];
    protected $appends = ['can_delete'];

    public function projectsRel()
    {
        return $this->hasMany('App\Project', 'project_status_id', 'id');
    }

    public function getCanDeleteAttribute(){
        $value = true;
        if(count($this->projectsRel)){
            $value = false;
        }
        return $value;
    }
}
