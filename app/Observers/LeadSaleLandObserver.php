<?php

namespace App\Observers;

use App\EmailDestination;
use App\LeadSaleLand;
use App\Notifications\LeadSaleLandNotification;
use Illuminate\Support\Facades\Notification;

class LeadSaleLandObserver
{
    public function created(LeadSaleLand $lead)
    {
        $email = EmailDestination::where('type','sale_land')->first();
        if($email){
            Notification::route('mail',$email->email_destination_leads_saleland_formatted)->notify(new LeadSaleLandNotification($lead));         
        }
    }
}
