<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class EtapaProyecto extends Model
{
    protected $table = 'etapas_proyectos';
    protected $guarded = [];
    protected $appends = ['can_delete'];

    public function projectRel()
    {
        return $this->belongsTo('App\Project', 'project_id', 'id');
    }

    public function getCanDeleteAttribute(){
        /*$value = true;
        if(!$this->stock){    
            $value = false;
        }
        return $value;*/
        return true;
    }
}