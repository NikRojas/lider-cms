<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cami extends Model
{
    protected $table = 'cami';
    protected $guarded = []; 
    protected $casts = [
        'images' => 'array',
    ];
    protected $appends = ['images_format','id_video'];

    public function getIdVideoAttribute()
    {
        if ($this->url_video) {
            $id = explode("?v=", $this->url_video);
            return $id[1];
        }
    }

    public function getImagesFormatAttribute()
    {
        return json_decode($this->images);
    }
}
