<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    public function projectRel()
    {
        return $this->hasOne('App\Project', 'id', 'project_id');
    }

    public function tipologyRel()
    {
        return $this->hasOne('App\ProjectTypeDepartment', 'id', 'project_type_department_id');
    }
}
