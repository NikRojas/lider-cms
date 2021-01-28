<?php

namespace App\Observers;

use App\LeadVideocall;

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
            //dd("test");
            $advisorLast = LeadVideocall::orderBy('created_at','desc')->skip(1)->take(1)->get();
            dd($advisorLast);
        }
        $lead->advisor_id = $advisorId;
        $lead->save();
        //dd($advisor);
        /*$email = EmailDestination::where('type','applicant')->first();
        if($email){
            Notification::route('mail',$email->email_destination_job_formatted)->notify(new ApplicantNotification($applicant));         
        }*/
    }
}
