<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectParentTypeDepartment extends Model
{
    protected $table = 'projects_parent_type_departments';
    protected $guarded = [];
    protected $appends = ['can_delete'];

    public function tipologyRel()
    {
        return $this->hasMany('App\ProjectTypeDepartment', 'parent_type_department_id', 'id');
    }

    public function getCanDeleteAttribute(){
        $value = true;
        if($this->tipologyRel()->exists()){
            $value = false;
        }
        return $value;
    }
}
