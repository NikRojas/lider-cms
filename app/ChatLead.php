<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ChatLead extends Model
{
    protected $table = 'chat_leads';
    protected $guarded = [];
    protected $casts = [
        //'response' => 'array',
    ];
}