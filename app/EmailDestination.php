<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class EmailDestination extends Model
{
    protected $table = 'email_destination';
    protected $appends = ['email_destination_leads_formatted','email_destination_job_formatted'];
    protected $guarded = [];

    public function getEmailDestinationLeadsFormattedAttribute(){
        return explode(',', $this->email_destination_leads);
    }

    public function getEmailDestinationJobFormattedAttribute(){
        return explode(',', $this->email_destination_job);
    }

    public function relDepartment()
    {
        return $this->hasOne('App\Department','id','department_id');
    }
}

