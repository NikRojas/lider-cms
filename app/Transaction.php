<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $appends = ['transaction_date_format','amount_format'];
    protected $fillable = ['order_cycle_id'];

    public function statusRel()
    {
        return $this->hasOne('App\MasterTransactionStatus', 'id', 'transaction_status_id');
    }

    public function getTransactionDateFormatAttribute() {
        return (new Carbon($this->transaction_date))->isoFormat('DD [de] MMMM YYYY [a las] h:mm a');
    }

    public function getAmountFormatAttribute()
    {
        return 'S/. '.number_format($this->amount, 2, '.', ',');
    }

    public function orderCycleRel()
    {
        return $this->hasOne('App\MasterOrderCycle', 'id', 'order_cycle_id');
    }

    /*public function ordersRel()
    {
        return $this->belongsTo('App\Order', 'id', 'order_id');
    }*/
}
