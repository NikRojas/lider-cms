<?php

namespace App\Observers;

use App\Order;

class OrderObserver
{
    public function created(Order $order)
    {   
        //Verificar con la actulizacion del api reservar inmueble del cliente
        //Si es NULL asesor id asignar a la orden
        if(!$order->advisor_id){
            
        }
    }
}
