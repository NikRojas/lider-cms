<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ChatFaq extends Model
{
    protected $table = 'chat_faq';
    protected $guarded = [];
    protected $casts = [
        //'response' => 'array',
    ];
    protected $appends = ["created_at_format",'seen'];

    public function getCreatedAtFormatAttribute(  ) {
        return (new Carbon($this->created_at))->format('g:iA d-m-Y');
    }

    public function getSeenAttribute() {
        return false;
    }
}