<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class LogSapConnection extends Model
{
    protected $table = 'log_sap_connection';
    protected $casts = [
        'response' => 'array',
    ];
    protected $guarded = [];
    protected $appends = ['created_at_format'];

    public function getCreatedAtFormatAttribute() {
        return (new Carbon($this->created_at))->format('g:iA d-m-Y');
    }
}