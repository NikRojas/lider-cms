<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AboutProjectFinished extends Model
{
    protected $table = 'about_projects_finished';
    protected $casts = [
        'active' => 'boolean'
    ];
    protected $guarded = [];
}
