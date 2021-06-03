<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $appends = ['order_date_format','total_format','order_date_format_table','sended_sap_date_format'];
    protected $guarded = [];
    
    public function getOrderDateFormatAttribute() {
        return (new Carbon($this->order_date))->isoFormat('DD MMMM YYYY [a las] h:mm a');
    }

    public function getOrderDateFormatTableAttribute() {
        $date = (new Carbon($this->order_date));
        return  $date->isoFormat('DD MMM YYYY').'<br><span style="opacity: .6;">'.$date->isoFormat('h:mm a').'</span>';
        //return (new Carbon($this->order_date))->isoFormat('DD MMM YYYY [a las] h:mm a');
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
        //return $this->hasOne('App\Transaction', 'order_id', 'id')->latest();
        return $this->hasOne('App\Transaction', 'order_id', 'id')->orderBy('id', 'desc');
        
    }

    public function advisorRel()
    {
        return $this->hasOne('App\Advisor', 'id', 'advisor_id');
    }

    public function getSendedSapDateFormatAttribute() {
        if($this->sended_to_sap_date){
            return (new Carbon($this->sended_to_sap_date))->isoFormat('DD MMMM YYYY [a las] h:mm a');
        }
    }
}
