<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AboutText extends Model
{
    protected $table = 'about_texts';
    protected $guarded = [];
    protected $appends = ['id_video'];

    public function getIdVideoAttribute()
    {
        if ($this->url_video) {
            $id = explode("?v=", $this->url_video);
            return $id[1];
        }
    }
}
