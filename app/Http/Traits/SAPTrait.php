<?php

namespace App\Http\Traits;

use App\Ubigeo;
use Carbon\Carbon;

trait SAPTrait {
    private $urlReserve = config('services.sap_url').'/api/cliente/inmuebles/reserva';
}