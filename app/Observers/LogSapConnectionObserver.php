<?php

namespace App\Observers;

use App\LogSapConnection;
use App\Notifications\LogSapConnectionNotification;
use Illuminate\Support\Facades\Notification;

class LogSapConnectionObserver
{
    public function created(LogSapConnection $lsc)
    {
        if($lsc->status != 200 && ($lsc->type == 'Obtener Inmuebles Disponibilidad' || $lsc->type == 'Login')){
            $emails = ['anthony@playgroup.pe','at@playgroup.pe'];
            Notification::route('mail',$emails)->notify(new LogSapConnectionNotification($lsc));  
        }
    }
}
