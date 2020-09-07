<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $appends = ['order_date_format','total_format'];

    public function getOrderDateFormatAttribute() {
        return (new Carbon($this->order_date))->isoFormat('DD MMMM YYYY [a las] h:mm a');
    }

    public function getTotalFormatAttribute()
    {
        return number_format($this->total, 2, '.', ',');
    }

    public function orderDetailsRel()
    {
        return $this->hasMany('App\OrderDetail', 'order_id', 'id');
    }
}
