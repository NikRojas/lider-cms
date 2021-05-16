<?php

namespace App\Observers;

use App\LogSapConnection;
use App\Notifications\LogSapConnectionNotification;
use Illuminate\Support\Facades\Notification;

class LogSapConnectionObserver
{
    public function created(LogSapConnection $lsc)
    {
        if($lsc->status != 200 && $lsc->type == 'Obtener Inmuebles Disponibilidad'){
            Notification::route('mail','at@playgroup.pe')->notify(new LogSapConnectionNotification($lsc));  
        }
    }
}
