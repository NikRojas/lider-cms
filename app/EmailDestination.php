<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class EmailDestination extends Model
{
    protected $table = 'email_destination';
    protected $appends = [
        'email_destination_leads_traditional_formatted',
        'email_destination_leads_videocall_formatted',
        'email_destination_leads_saleland_formatted',
        'email_destination_job_formatted'
    ];
    protected $guarded = [];

    public function getEmailDestinationLeadsTraditionalFormattedAttribute()
    {
        return explode(',', $this->leads_traditional);
    }
    
    public function getEmailDestinationLeadsVideocallFormattedAttribute()
    {
        return explode(',', $this->leads_videocall);
    }

    public function getEmailDestinationLeadsSalelandFormattedAttribute()
    {
        return explode(',', $this->leads_sale_land);
    }

    public function getEmailDestinationJobFormattedAttribute()
    {
        return explode(',', $this->leads_job);
    }
}
