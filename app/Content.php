<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    protected $table = 'content';
    protected $guarded = [];

    public function section()
    {
        return $this->belongsTo('App\MasterSection','master_section_id');
    }
}
