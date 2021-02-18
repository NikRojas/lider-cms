<?php

namespace App\Http\Controllers\Cms\Content\About;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\AboutText;
use App\Http\Requests\Cms\About\AboutCompromiseRequest;
use App\Http\Traits\CmsTrait;

class SecondController extends Controller
{
    use CmsTrait;

    public function update(AboutCompromiseRequest $request)
    {
        $request_el = request(["title_es","title_en","description_es","description_en"]);
        $el_registered = AboutText::where('type','compromise')->first();
        $request_el = array_merge($request_el, ["type" => "compromise"]);
        try {
            if ($el_registered) {
                $el = AboutText::UpdateOrCreate(["id"=>$el_registered->id], $request_el);
            } else {
                $el = AboutText::UpdateOrCreate($request_el);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.section')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.section')]) ], 500);
        }
    }

    public function get()
    {
        $el = AboutText::where('type','compromise')->orderBy('created_at', 'desc')->first();
        return response()->json($el);
    }
}
