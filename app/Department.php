<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $table = 'departments';
    protected $fillable = ['logo','name','logo_white','excerpt','banner','title','image_menu'];
}

