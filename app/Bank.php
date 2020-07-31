<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{
    protected $guarded = [];
    protected $appends = ['can_delete'];

    public function banksRel()
    {
        return $this->belongsToMany('App\Project','projects_bank', 'bank_id', 'project_id');
    }

    public function getCanDeleteAttribute(){
        $value = true;
        if(count($this->banksRel) > 0){
            $value = false;
        }
        return $value;
    }
}
