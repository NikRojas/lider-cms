<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CredentialPayment extends Model
{
    protected $table = 'credentials_payment_gateway';
    protected $guarded = [];
    protected $casts = [
        'active' => 'boolean',
        'type_currency' => 'boolean'
    ];
}
