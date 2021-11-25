<?php

namespace App\Observers;

use App\Jobs\SendPayConfirmationToAdvisor;
use App\Jobs\SendReserveToSap;
use App\MasterOrderCycle;
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
        $closedCycle = MasterOrderCycle::where('payment_gateway_value','CLOSED')->first();
        $delayNotification = now()->addMinutes(1);
        switch ($statusTr->name) {
            case 'Pendiente':
                //$order->customerRel->notify(new OrderReceived($order));
                break;
            #Cuando la transaccion sea exitosa 
            #Mandar correo de confirmacion al cliente y al asesor
            #Mandar a SAP los datos de reserva
            #Asignar Asesor con los datos de retorno del SAP
            //case 'Pagado':
            //case 'Capturado':
            case 'Autorizado':
                if($tr->order_cycle_id == $closedCycle->id){
                    $order->customerRel->notify((new OrderPaid($order))->delay($delayNotification));
                    #Reserva que vino desde la plataforma de Asesores
                    if($order->real_state_package_id == NULL && $order->department_id == NULL){
                        SendPayConfirmationToAdvisor::dispatch($order);
                    }
                    if($order->real_state_package_id || $order->department_id){
                        SendReserveToSap::dispatch($order);
                    }
                }
                break;
            case 'Rechazado':
            //case 'Error':
                /*$order->customerRel->notify(new OrderReceived($order));
                if($tr->order_cycle_id == $closedCycle->id){
                    $order->customerRel->notify((new OrderNotPaid($order))->delay($delayNotification));
                }*/
                break;
            default:
                # code...
                break;
        }
    }
}
