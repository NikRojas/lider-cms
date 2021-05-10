<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class SapCredential extends Model
{
    protected $table = 'sap_credentials';
    protected $fillable = ['token'];
}