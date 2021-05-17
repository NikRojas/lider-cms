<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Department extends Model
{
    protected $guarded = [];
    protected $appends = ['price_foreign_format','price_format','update_at_format'];

    public function viewRel()
    {
        return $this->belongsTo('App\ProjectView', 'view_id', 'id');
    }

    public function tipologyRel()
    {
        return $this->belongsTo('App\ProjectTypeDepartment','type_department_id','id');
    }

    public function getPriceFormatAttribute()
    {
        return 'S/ '.number_format($this->price, 0, '.', ',');
    }

    public function getPriceForeignFormatAttribute()
    {
        return '$/ '.number_format($this->price_foreign, 0, '.', ',');
    }

    public function getUpdateAtFormatAttribute() {
        return (new Carbon($this->update_at))->format('g:iA d-m-Y');
    }
}