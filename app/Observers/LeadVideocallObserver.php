<?php

namespace App\Observers;

use App\Advisor;
use App\ConfigLead;
use App\Jobs\Webhook;
use App\LeadVideocall;
use App\Notifications\LeadVideocallNotification;
use App\Notifications\UserLeadVideocallNotification;
use Illuminate\Support\Facades\Notification;

class LeadVideocallObserver
{
    public function created(LeadVideocall $lead)
    {
        $advisorId = null;
        $advisors = $lead->projectRel->advisorsRel;
        $ifItsFirstRecord = LeadVideocall::count();
        //Is First Record
        if($ifItsFirstRecord == 1){
            $advisorId = $advisors->first()->id;
        }
        else{
            $advisorsTotal = $advisors->count() - 1;
            $lastLeads = LeadVideocall::orderBy('created_at','desc')->skip(1)->take($advisorsTotal)->get();
            $pluckAdvisors = $advisors->pluck('id');
            $pluckAdvisorsLastLeads = $lastLeads->pluck('advisor_id');

            $diff = $pluckAdvisors->diff($pluckAdvisorsLastLeads);
            $diff = $diff->all();
            if(!$diff){
                $advisorId = $advisors->first()->id;
            }
            else{
                $advisorId = array_pop($diff);
            }
        }
        $lead->advisor_id = $advisorId;
        $lead->save();
        $advisor = Advisor::find($advisorId);
        Notification::route('mail',$advisor->email)->notify(new LeadVideocallNotification($lead));  
        Notification::route('mail',$lead->email)->notify(new UserLeadVideocallNotification($lead));  

        $config = ConfigLead::where('project_id',$lead->project_id)->first();
        if($config && $config->webhook_url_active){
            Webhook::dispatch($lead,$config->webhook_url,$advisor->name,0);
        } 
    }
}
