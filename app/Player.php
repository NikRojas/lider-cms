<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $table = 'players';
    //public $timestamps = false;
    protected $guarded = [];
    protected $appends = ['first_letter'];

    public function relDepartment()
    {
        return $this->hasOne('App\Department','id','department_id');
    }

    public function getFirstLetterAttribute(){
        return substr($this->full_name,0,1);
    }
}
