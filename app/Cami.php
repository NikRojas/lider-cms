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
            /*$id = explode("?v=", $this->url_video);
            return $id[1];*/
            if(strpos($this->url_video, "?v=") !== false){
                $id = explode("?v=", $this->url_video);
                return $id[1];
            } else{
                $parsed = parse_url($this->url_video);
                $path = $parsed['path'];
                $path_parts = explode('/', $path);
                $desired_output = $path_parts[1];
                return $desired_output;
            }
        }
    }

    public function getImagesFormatAttribute()
    {
        return json_decode($this->images);
    }
}
