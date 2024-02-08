<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MasterField extends Model
{
    protected $table = 'master_fields';
    protected $guarded = [];

    public function section()
    {
        return $this->belongsTo('App\MasterSection');
    }
}
