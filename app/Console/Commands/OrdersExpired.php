<?php

namespace App\Console\Commands;

use App\MasterOrderCycle;
use App\MasterTransactionStatus;
use App\Order;
use App\Transaction;
use Carbon\Carbon;
use Illuminate\Console\Command;

class OrdersExpired extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'orders:expired';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check orders expired after 24 hours';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //Las ordenes que ya pasaron 24 horas desde su creacion, cuando su estado es PENDIENTE y que esten en ciclo de orden OPEN
        $masterOrderCycleOpen = MasterOrderCycle::where('payment_gateway_value','OPEN')->first();
        $transactionsStatusPending = MasterTransactionStatus::where('name','Pendiente')->first();
        $now = Carbon::now();
        $last24Hours = Carbon::now()->subDay();
        $ordersExpired = Order::whereHas('transactionLatestRel', function( $query ) use ( $masterOrderCycleOpen, $transactionsStatusPending, $now, $last24Hours ){
            $query->where('order_cycle_id', $masterOrderCycleOpen->id)->where('transaction_status_id',$transactionsStatusPending->id)
            ->whereBetween("created_at",[ $last24Hours, $now]);
        })->get();
        $masterOrderCycleClosed = MasterOrderCycle::where('payment_gateway_value','CLOSED')->first();
        $transactionsStatus = MasterTransactionStatus::where('value_detailed_status','EXPIRED')->first();
        foreach ($ordersExpired as $key => $ord) {
            $diff = NULL;
            $diff = $now->diffInHours($ord->transactionLatestRel->created_at);
            if($diff >= 12){
                $transaction = new Transaction();
                $transaction->order_id = $ord->id;
                $transaction->transaction_date = Carbon::now();
                $transaction->amount = $ord->total_price;
                $transaction->transaction_status_id = $transactionsStatus->id;
                $transaction->order_cycle_id = $masterOrderCycleClosed->id;
                $transaction->save();
            }
        }    
        #Las ordenes cuando su estado es refused OPEN pasarlo a ciclo de orden CLOSED
        $ordersClosed = Order::whereHas('transactionLatestRel', function( $query ) use ( $masterOrderCycleOpen, $now, $last24Hours ){
            $query->where('order_cycle_id', $masterOrderCycleOpen->id)
            ->whereBetween("created_at",[ $last24Hours, $now]);
        })->get();
        foreach ($ordersClosed as $key => $ord) {
            $updated = null;
            $updated = Transaction::UpdateOrCreate(["id" => $ord->transactionLatestRel->id],["order_cycle_id" => $masterOrderCycleClosed->id]);
        }
    }
}
