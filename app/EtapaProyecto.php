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

    public function departmentsRel()
    {
        return $this->hasMany('App\Department', 'etapa_id', 'id');
    }

    public function statusRel()
    {
        return $this->hasOne('App\ProjectStatus', 'id', 'project_status_id');
    }

    public function getCanDeleteAttribute(){
        $value = true;
        if($this->departmentsRel()->exists()){    
            $value = false;
        }
        return $value;
    }
}