<?php

namespace App\Observers;

use App\EmailDestination;
use App\Lead;
use App\Notifications\LeadNotification;
use App\Notifications\UserLeadNotification;
use Illuminate\Support\Facades\Notification;
class LeadObserver
{
    public function created(Lead $lead)
    {
        $email = EmailDestination::where('type','traditional')->first();
        if($email){
            Notification::route('mail',$email->email_destination_leads_traditional_formatted)->notify(new LeadNotification($lead));         
        }
        Notification::route('mail',$lead->email)->notify(new UserLeadNotification($lead));    
    }
}
