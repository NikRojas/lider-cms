<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\Post\SuscribeRequest;
use App\Suscriber;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\Api\Post\Lead\OnlineAppointmentRequest;
use App\Http\Requests\Api\Post\Lead\SellLandRequest;
use App\Http\Requests\Api\Post\Lead\TraditionalRequest;
use App\Lead;
use App\LeadSaleLand;
use App\LeadVideocall;

class PostController extends BaseController
{
    public function suscribe(SuscribeRequest $request)
    {
        $el = request(['name','email']);
		try {
            $el = Suscriber::UpdateOrCreate($el);
            return $this->sendResponse([], trans('custom.title.success'), 200);;
        } catch (\Exception $e) {
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }

    public function onlineAppointment(OnlineAppointmentRequest $request){
        $el = request(['name','email','mobile','document_number','lead_medium_id','lead_time_day']);
		try {
            $el = LeadVideocall::UpdateOrCreate($el);
            return $this->sendResponse([], trans('custom.title.success'), 200);;
        } catch (\Exception $e) {
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }

    public function traditional(TraditionalRequest $request){
        $el = request(['name','email','mobile','lead_medium_id']);
		try {
            $el = Lead::UpdateOrCreate(array_merge($el,["lead_source_id" => 1]));
            return $this->sendResponse([], trans('custom.title.success'), 200);;
        } catch (\Exception $e) {
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }

    public function sellLand(SellLandRequest $request){
        $el = request(['name','email','mobile','message','area','message']);
		try {
            $el = LeadSaleLand::UpdateOrCreate($el);
            return $this->sendResponse([], trans('custom.title.success'), 200);;
        } catch (\Exception $e) {
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }
}
