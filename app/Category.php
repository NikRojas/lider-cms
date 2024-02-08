<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected $guarded = [];
    protected $appends = ['can_delete'];

    public function post()
    {
        //return $this->belongsTo('App\Post');
        return $this->hasMany('App\Post', 'category_id', 'id');
    }

    public function getCanDeleteAttribute(){
        $value = true;
        if($this->post()->exists()){    
            $value = false;
        }
        return $value;
    }
}
