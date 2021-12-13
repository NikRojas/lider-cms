<?php

namespace App\Observers;

use App\Advisor;
use App\Jobs\Webhook;
use App\Notifications\ProjectQuotationNotification;
use App\Notifications\UserProjectQuotationNotification;
use App\ProjectQuotation;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;

class ProjectQuotationObserver
{
    public function created(ProjectQuotation $lead)
    {
        $advisorId = null;
        $project = $lead->projectRel;
        $advisors = $project->advisorsRel;
        $typeDepartment = $lead->projectTypeDepartmentRel;
        $ifItsFirstRecord = ProjectQuotation::count();
        //Is First Record
        if($ifItsFirstRecord == 1){
            $advisorId = $advisors->first()->id;
        }
        else{
            $advisorsTotal = $advisors->count() - 1;
            $lastLeads = ProjectQuotation::orderBy('created_at','desc')->skip(1)->take($advisorsTotal)->get();
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

        $lead = $lead->load('projectRel.statusRel','projectRel.ubigeoRel','advisorRel','projectTypeDepartmentRel','projectRel.financingOptionsRel');
        if($lead->projectRel["send_to_email"]){
            Notification::route('mail',$advisor->email)->notify(new ProjectQuotationNotification($lead));  
        }
        //Log::info($advisor);
        Notification::route('mail',$lead->email)->notify(new UserProjectQuotationNotification($lead));  
        if($lead->projectRel["webhook_url_active"]){
            Webhook::dispatch($lead,$lead->projectRel["webhook_url"],$advisor->name,1);
        }
    }
}
