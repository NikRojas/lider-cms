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
        return null;
    }
}
