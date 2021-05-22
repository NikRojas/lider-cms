<?php

namespace App\Http\Controllers\Api\Reserve;

use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\Api\Reservation\CustomerRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PostController extends BaseController
{
    public function customer(CustomerRequest $request){
        return $this->sendResponse([], trans('custom.title.success'), 200);
    }
}
