<?php

namespace App\Console\Commands;

use App\MasterOrderCycle;
use App\MasterTransactionStatus;
use App\Order;
use App\Transaction;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

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
        Log::info("Test Log Permiso");
        //Las ordenes que ya pasaron 24 horas desde su creacion, cuando esten PENDIENTES
        $masterOrderCycleOpen = MasterOrderCycle::where('payment_gateway_value','OPEN')->first();
        $transactionsStatusPending = MasterTransactionStatus::where('name','Pendiente')->first();
        $now = Carbon::now();
        $last48Hours = Carbon::now()->subDay(2);
        
        $ordersExpired = Order::whereHas('transactionLatestRel')->whereBetween("created_at",[ $last48Hours, $now])->get();
        $elements = $ordersExpired->filter(function($order) use ( $masterOrderCycleOpen, $transactionsStatusPending ){
            return $order->transactionLatestRel->order_cycle_id == $masterOrderCycleOpen->id && in_array($order->transactionLatestRel->transaction_status_id, [$transactionsStatusPending->id]);
        });
        $masterOrderCycleClosed = MasterOrderCycle::where('payment_gateway_value','CLOSED')->first();
        $transactionsStatus = MasterTransactionStatus::where('value_detailed_status','EXPIRED')->first();
        foreach ($elements as $key => $ord) {
            $diff = NULL;
            //$diff = $now->diffInHours($ord->transactionLatestRel->created_at);
            $diff = $now->diffInHours($ord->created_at);
            if($diff >= 24){
                $transaction = new Transaction();
                $transaction->order_id = $ord->id;
                $transaction->transaction_date = Carbon::now();
                $transaction->amount = $ord->total_price;
                $transaction->transaction_status_id = $transactionsStatus->id;
                $transaction->order_cycle_id = $masterOrderCycleClosed->id;
                $transaction->save();
            }
        }   
        $transactionsUnpaid = MasterTransactionStatus::where('name','Pendiente')->orWhere('name','Rechazado')
        ->orWhere('name','Error')->get();
        $transactionsUnpaid = $transactionsUnpaid->pluck('id')->toArray();
        #Las ordenes que ya pasaron 24 horas cuando sea cualquier estado UNPAID y sea OPEN pasarlo a ciclo de orden CLOSED
        $elementsClosed = $ordersExpired->filter(function($order) use ( $masterOrderCycleOpen, $transactionsUnpaid ){
            return $order->transactionLatestRel->order_cycle_id == $masterOrderCycleOpen->id && in_array($order->transactionLatestRel->transaction_status_id, $transactionsUnpaid);
        });
        foreach ($elementsClosed as $key => $ord) {
            $diff = $now->diffInHours($ord->transactionLatestRel->transaction_date);
            if($diff >= 24){
                $updated = null;
                $updated = Transaction::UpdateOrCreate(["id" => $ord->transactionLatestRel->id],["order_cycle_id" => $masterOrderCycleClosed->id]);
            }
        }
    }
}
