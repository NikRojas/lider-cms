<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $appends = ['order_date_format','total_format','order_date_format_table'];
    protected $guarded = [];
    
    public function getOrderDateFormatAttribute() {
        return (new Carbon($this->order_date))->isoFormat('DD MMMM YYYY [a las] h:mm a');
    }

    public function getOrderDateFormatTableAttribute() {
        return (new Carbon($this->order_date))->isoFormat('DD MMM YYYY [a las] h:mm a');
    }

    public function getTotalFormatAttribute()
    {
        return 'S/. '.number_format($this->total_price, 2, '.', ',');
    }

    public function orderDetailsRel()
    {
        return $this->hasMany('App\OrderDetail', 'order_id', 'id');
        //return $this->hasOne('App\OrderDetail', 'order_id', 'id');
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
