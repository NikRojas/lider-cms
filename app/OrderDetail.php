<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $guarded = [];
    protected $appends = ['price_element_format','total_price_format','discount_format'];
    
    public function getTotalPriceFormatAttribute()
    {
        return 'S/. '.number_format($this->total_price, 2, '.', ',');
    }

    public function getPriceElementFormatAttribute()
    {
        return 'S/. '.number_format($this->price_element, 2, '.', ',');
    }

    public function getDiscountFormatAttribute()
    {
        return 'S/. '.number_format($this->discount_price, 2, '.', ',');
    }

    public function projectRel()
    {
        return $this->hasOne('App\Project', 'id', 'project_id');
    }

    /*public function tipologyRel()
    {
        return $this->hasOne('App\ProjectTypeDepartment', 'id', 'project_type_department_id');
    }*/
    public function departmentRel()
    {
        return $this->hasOne('App\Department', 'id', 'department_id');
    }
}
