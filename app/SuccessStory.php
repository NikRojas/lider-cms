<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SuccessStory extends Model
{
    protected $table = 'success_stories';
    protected $guarded = [];

    public function relDepartment()
    {
        return $this->hasOne('App\Department','id','department_id');
    }
}
