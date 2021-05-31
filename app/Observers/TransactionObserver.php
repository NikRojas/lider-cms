<?php

namespace App\Observers;

use App\Jobs\SendReserveToSap;
use App\MasterTransactionStatus;
use App\Notifications\OrderNotPaid;
use App\Notifications\OrderPaid;
use App\Notifications\OrderReceived;
use App\Order;
use App\Transaction;

class TransactionObserver
{
    public function created(Transaction $tr)
    {   
        $status = $tr->transaction_status_id;
        $statusTr = MasterTransactionStatus::find($status);
        $order = Order::find($tr->order_id);
        switch ($statusTr->name) {
            case 'Pendiente':
                $order->customerRel->notify(new OrderReceived($order));
                break;
            #Cuando la transaccion sea exitosa 
            #Mandar correo de confirmacion al cliente y al asesor
            #Mandar a SAP los datos de reserva
            #Asignar Asesor con los datos de retorno del SAP
            case 'Pagado':
            case 'Capturado':
                $order->customerRel->notify(new OrderPaid($order));
                //SendReserveToSap::dispatch($order);
                break;
            case 'Rechazado':
            case 'Error':
                $order->customerRel->notify(new OrderNotPaid($order));
                break;
            default:
                # code...
                break;
        }
    }
}
