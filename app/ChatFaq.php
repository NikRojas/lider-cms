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
    protected $appends = ["created_at_format",'seen','answer_format'];

    public function getCreatedAtFormatAttribute(  ) {
        return (new Carbon($this->created_at))->format('g:iA d-m-Y');
    }

    public function getSeenAttribute() {
        return false;
    }

    public function getAnswerFormatAttribute(){
        $content =  strip_tags($this->answer);
        $content2 = str_replace("&nbsp;", " ", $content);
        $content6 = str_replace(":", " ", $content2);
        $pos = strpos($content6, '.');
        if($pos === false) {
            $da = $content2;
            return mb_substr($da, 0, 90).'...';
        }
        else {
            $da = substr($content2, 0, $pos+1);
            return mb_substr($da, 0, 90).'...';
        }
    }
}