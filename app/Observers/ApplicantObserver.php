<?php

namespace App\Observers;

use App\Applicant;

use App\Notifications\ApplicantNotification;
use Illuminate\Support\Facades\Notification;
use App\EmailDestination;

class ApplicantObserver
{
    public function created(Applicant $applicant)
    {
        $email = EmailDestination::where('type','applicant')->first();
        if($email){
            Notification::route('mail',$email->email_destination_job_formatted)->notify(new ApplicantNotification($applicant));         
        }
    }
}
