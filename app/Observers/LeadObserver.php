<?php

namespace App\Observers;

use App\Lead;

use App\Notifications\LeadNotification;
use App\Notifications\LeadUserNotification;
use Illuminate\Support\Facades\Notification;
use App\EmailDestination;

class LeadObserver
{
    public function created(Lead $lead)
    {
        $email = NULL;
        if($lead->department_id){
            $email =  EmailDestination::where('type','lead')->where('department_id',$lead->department_id)->first();
        }
        else{
            $email =  EmailDestination::where('type','lead')->where('department_id',1)->first();
        }

        if($email){
            Notification::route('mail',$email->email_destination_leads_formatted)->notify(new LeadNotification($lead->load('leadMediumRel')->load('leadSourceRel')->load('departmentRel')));            
        }
        Notification::route('mail',$lead->email)->notify(new LeadUserNotification());            
    }
}
