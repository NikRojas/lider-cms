<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $appends = ['order_date_format','total_format','order_date_format_table'];

    public function getOrderDateFormatAttribute() {
        return (new Carbon($this->order_date))->isoFormat('DD MMMM YYYY [a las] h:mm a');
    }

    public function getOrderDateFormatTableAttribute() {
        return (new Carbon($this->order_date))->isoFormat('DD MMM YYYY [a las] h:mm a');
    }

    public function getTotalFormatAttribute()
    {
        return 'S/. '.number_format($this->total, 2, '.', ',');
    }

    public function orderDetailsRel()
    {
        return $this->hasMany('App\OrderDetail', 'order_id', 'id');
    }

    public function customerRel()
    {
        return $this->hasOne('App\Customer', 'id', 'customer_id');
    }

    public function transactionsRel()
    {
        return $this->hasMany('App\Transaction', 'order_id', 'id');
    }

    public function transactionLatestRel()
    {
        return $this->hasOne('App\Transaction', 'order_id', 'id')->latest();
    }
}
