<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ConfigLead extends Model
{
    protected $table = 'config_leads';
    protected $casts = [
        'webhook_url_active' => 'boolean',
    ];
    protected $guarded = [];
}