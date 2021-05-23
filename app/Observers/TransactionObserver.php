<?php

namespace App\Observers;

use App\Transaction;

class TransactionObserver
{
    public function created(Transaction $tr)
    {   
        //Cuando la transaccion sea exitosa 
        //Mandar correo de confirmacion al cliente y al asesor
        //Mandar a SAP los datos de reserva
    }
}
