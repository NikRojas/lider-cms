<?php

namespace App\Observers;

use App\Advisor;
use App\Notifications\ProjectQuotationNotification;
use App\Notifications\UserProjectQuotationNotification;
use App\ProjectQuotation;
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
        Notification::route('mail',$advisor->email)->notify(new ProjectQuotationNotification($lead,$project,$typeDepartment,$advisor));  
        Notification::route('mail',$lead->email)->notify(new UserProjectQuotationNotification($lead,$project,$typeDepartment,$advisor));  
    }
}
