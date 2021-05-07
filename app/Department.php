<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Department extends Model
{
    protected $guarded = [];

    public function viewRel()
    {
        return $this->belongsTo('App\ProjectView', 'view_id', 'id');
    }
}