<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Post extends Model
{
    protected $guarded = [];
    protected $appends = ['published_format','date_format','created_at_format'];

    public function category()
    {
        return $this->hasOne('App\Category','id','category_id');
    }

    public function tags()
    {
        return $this->hasMany('App\Tag', 'post_id');
    }

    public function getCreatedAtAttribute( $value ) {
        return (new Carbon($value))->format('g:iA d-m-Y');
    }

    public function getPublishedAttribute( $value ) {
        if($value){
            return true;
        }
        else{
            return false;
        }
    }

    public function getDateFormatAttribute(){
        $date = Carbon::parse($this->created_at);
        return $date->isoFormat('DD MMM YYYY');
    }

    public function getPublishedFormatAttribute(){
        if($this->published == 1){
            return "<i class='fas fa-circle text-success'></i>";
        }
        else{
            return "<i class='fas fa-circle text-danger'></i>";
        }
    }

    public function getCreatedAtFormatAttribute( ) {
        return (new Carbon($this->created_at))->format('d-m-Y');
    }
}
