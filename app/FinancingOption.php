<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FinancingOption extends Model
{
    protected $table = 'financing_options';
    protected $casts = [
        'active' => 'boolean'
    ];
    protected $guarded = [];
}
