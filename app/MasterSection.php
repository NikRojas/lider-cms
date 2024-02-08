<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MasterSection extends Model
{
    protected $table = 'master_sections';
    protected $guarded = [];
    protected $appends = ['content_formatted'];

    public function page()
    {
        return $this->belongsTo('App\MasterPage','master_page_id');
    }

    public function fields()
    {
        return $this->hasMany('App\MasterField','master_section_id','id');
    }

    public function content()
    {
        return $this->hasMany('App\Content','master_section_id','id');
    }

    public function getContentFormattedAttribute(){
        return $this->content->pluck('field');
    }

}
