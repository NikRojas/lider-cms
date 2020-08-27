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
}
