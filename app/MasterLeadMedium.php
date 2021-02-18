<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MasterLeadMedium extends Model
{
    protected $table = 'master_leads_medium';
    protected $guarded = [];
    public $incrementing = false;
    protected $keyType = 'string';
}
