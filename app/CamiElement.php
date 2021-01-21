<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CamiElement extends Model
{
    protected $table = 'cami_elements';
    protected $guarded = [];

    protected $appends = ['elements_es_format','elements_en_format', 'files','images_format','icons_format','id_video'];

    public function getIdVideoAttribute()
    {
        if ($this->url_video) {
            $id = explode("?v=", $this->url_video);
            return $id[1];
        }
    }

    public function getElementsEsFormatAttribute()
    {
        return json_decode($this->elements_es);
    }

    public function getElementsEnFormatAttribute()
    {
        return json_decode($this->elements_en);
    }

    public function getFilesAttribute()
    {
        $array = array();
        if($this->elements_en){
            foreach ($this->elements_en_format as $key => $value) {
                foreach ($this->elements_es_format as $key_2 => $value_2) {
                    if ($key==$key_2) {
                        $data = [
                            'title_es' => $value_2->title_es,
                            'title_en' => $value->title_en,
                            'description_es' => $value_2->description_es,
                            'description_en' => $value->description_en,
                            'file' => $value->file,
                            'icon' => $value->icon
                        ];
                        array_push($array, $data);
                    }
                }
            }
        }
        
        return $array;
    }

    public function getImagesFormatAttribute()
    {
        $array = array();
        if($this->elements_en){
            foreach ($this->elements_en_format as $key => $value) {
                array_push($array, $value->file);
            }
        } 
        return  $array;
    }

    public function getIconsFormatAttribute()
    {
        $array = array();
        if($this->elements_en){
            foreach ($this->elements_en_format as $key => $value) {
                array_push($array, $value->icon);
            }
        } 
        return  $array;
    }
}
