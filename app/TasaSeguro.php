<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class TasaSeguro extends Model
{
    protected $table = 'tasa_seguro_bien';
    protected $guarded = [];

    public function sectorRel()
    {
        return $this->belongsTo('App\ProjectSector', 'sector_id', 'id');
    }
}