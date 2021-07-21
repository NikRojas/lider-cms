<?php

namespace App\Http\Controllers\Api\Chat;

use App\ChatQualification;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class PostController extends BaseController
{
    public function qualification(Request $request)
    {
        $el = request(['value']);
        if($request->response){
            $el = array_merge($el, ['response' => json_encode($request->response)]);
        }
		try {
            $el = ChatQualification::UpdateOrCreate(array_merge($el, ["slug" => Str::random(10)]));
            return $this->sendResponse([], trans('custom.title.success'), 200);;
        } catch (\Exception $e) {
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }

    public function advisoryContact(Request $request)
    {
        $el = request(['name','email','project','medium','schedules','host']);
        //Log::info($el);
        /*try {
            $el = ChatQualification::UpdateOrCreate(array_merge($el, ["slug" => Str::random(10)]));
            return $this->sendResponse([], trans('custom.title.success'), 200);;
        } catch (\Exception $e) {
            return $this->sendError(trans('custom.title.error'), [], 500);
        }*/
    }
    
}
