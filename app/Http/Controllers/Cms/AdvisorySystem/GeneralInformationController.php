<?php

namespace App\Http\Controllers\Cms\AdvisorySystem;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\TpsInformation;
use App\Http\Requests\Cms\AdvisorySystem\GeneralInformationRequest;
use App\Http\Traits\CmsTrait;

class GeneralInformationController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("pages.advisory-system.general-information");
    }

    public function store(GeneralInformationRequest $request)
    {
        $request_information = request(["title", "description"]);
        $information_registered = TpsInformation::first();
        try {
            if ($information_registered) {
                $information = TpsInformation::UpdateOrCreate(["id" => $information_registered->id], $request_information);
            } else {
                $information = TpsInformation::UpdateOrCreate($request_information);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.information')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.information')])], 500);
        }
    }

    public function get()
    {
        $informacion = TpsInformation::orderBy('created_at', 'desc')->first();
        return response()->json($informacion);
    }
}
