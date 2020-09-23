<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ubigeo extends Model
{
    protected $table = 'master_ubigeo';

    public function projectsRel()
    {
        return $this->belongsTo('App\Project', 'code_ubigeo', 'code_ubigeo');
    }
}
