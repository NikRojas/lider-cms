<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MasterCurrency extends Model
{
    protected $table = 'master_currencies';
    protected $fillable = ['value'];
}
