<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectTypeDepartment extends Model
{
    protected $table = 'project_type_departments';
    protected $guarded = [];
    protected $casts = [
        'url_360' => 'boolean',
    ];
    protected $appends = ['can_delete'];

    public function getCanDeleteAttribute(){
        $value = true;
        if(count($this->projectQuotationsRel) > 0){
            $value = false;
        }
        return $value;
    }

    public function projectQuotationsRel()
    {
        return $this->hasMany('App\ProjectQuotation','project_type_department_id','id');
    }

    public function projectRel()
    {
        return $this->belongsTo('App\Project', 'project_id', 'id');
    }
}
