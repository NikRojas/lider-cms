<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ChatQualification extends Model
{
    protected $table = 'chat_qualification';
    protected $guarded = [];
    protected $casts = [
        'response' => 'object',
    ];
}