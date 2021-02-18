<?php

namespace App\Http\Controllers\Cms\Content\About;

use App\AboutText;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\About\AboutCompromiseRequest;
use App\Http\Traits\CmsTrait;
use Illuminate\Support\Facades\Storage;

class FirstController extends Controller
{
    use CmsTrait;

    public function update(Request $request)
    {
        //$request_el = request(["title_es","title_en","description_es","description_en"]);
        /*dd(request('first_block_1_title_es'));
        $el_registered = AboutText::where('type','compromise')->first();
        $request_el = array_merge($request_el, ["type" => "compromise"]);*/

        $el1_registered = AboutText::where('type','first-block-1')->first();
        $el2_registered = AboutText::where('type','first-block-2')->first();
        $el3_registered = AboutText::where('type','first-block-3')->first();
        $el4_registered = AboutText::where('type','first-block-4')->first();
        $el5_registered = AboutText::where('type','first-block-5')->first();
        $el6_registered = AboutText::where('type','first-block-6')->first();
        $el7_registered = AboutText::where('type','first-block-7')->first();
        $el8_registered = AboutText::where('type','first-block-8')->first();
        $request_el1 = ["type" => 'first-block-1' ,"title_es" => $request->first_block_1_title_es, "title_en" => $request->first_block_1_title_en,"description_es" => $request->first_block_1_description_es, "description_en" => $request->first_block_1_description_en];
        $request_el2 = ["type" => 'first-block-2', "url_video" => $request->first_block_2_url_video];
        if ($request->hasFile('first_block_2_image')) {
            $image2_name = $this->setFileName('f2-', $request->file('first_block_2_image'));
            $store2_image = Storage::disk('public')->putFileAs('img/about/', $request->file('first_block_2_image'), $image2_name);
            if (!$store2_image) {
                return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
            }
            $request_el2 = array_merge($request_el2, ["image" => $image2_name]);
        } else {
            if($el2_registered){
                $request_el2 = array_merge($request_el2, ["image" => $el2_registered->image]);
            }
        }
        if ($request->hasFile('first_block_2_image') && $el2_registered->image) {
            Storage::disk('public')->delete('img/about/' . $el2_registered->image);
        }
        $request_el3 = ["type" => 'first-block-3' ,"description_es" => $request->first_block_3_description_es, "description_en" => $request->first_block_3_description_en];
        $request_el4 = ["type" => 'first-block-4'];
        if ($request->hasFile('first_block_4_image')) {
            $image4_name = $this->setFileName('f4-', $request->file('first_block_4_image'));
            $store4_image = Storage::disk('public')->putFileAs('img/about/', $request->file('first_block_4_image'), $image4_name);
            if (!$store4_image) {
                return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
            }
            $request_el4 = array_merge($request_el4, ["image" => $image4_name]);
        } else {
            if($el4_registered){
                $request_el4 = array_merge($request_el4, ["image" => $el4_registered->image]);
            }
        }
        if ($request->hasFile('first_block_4_image') && $el4_registered->image) {
            Storage::disk('public')->delete('img/about/' . $el4_registered->image);
        }
        $request_el5 = ["type" => 'first-block-5' ,"description_es" => $request->first_block_5_description_es, "description_en" => $request->first_block_5_description_en];
        $request_el6 = ["type" => 'first-block-6'];
        if ($request->hasFile('first_block_6_image')) {
            $image6_name = $this->setFileName('f6-', $request->file('first_block_6_image'));
            $store6_image = Storage::disk('public')->putFileAs('img/about/', $request->file('first_block_6_image'), $image6_name);
            if (!$store6_image) {
                return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
            }
            $request_el6 = array_merge($request_el6, ["image" => $image6_name]);
        } else {
            if($el6_registered){
                $request_el6 = array_merge($request_el6, ["image" => $el6_registered->image]);
            }
        }
        if ($request->hasFile('first_block_6_image') && $el6_registered->image) {
            Storage::disk('public')->delete('img/about/' . $el6_registered->image);
        }
        $request_el7 = ["type" => 'first-block-7' ,"quantity" => $request->first_block_7_quantity,"description_es" => $request->first_block_7_description_es, "description_en" => $request->first_block_7_description_en];
        $request_el8 = ["type" => 'first-block-8',"quantity" => $request->first_block_8_quantity,"description_es" => $request->first_block_8_description_es, "description_en" => $request->first_block_8_description_en];
        if ($request->hasFile('first_block_8_icon')) {
            $image8_name = $this->setFileName('f8-', $request->file('first_block_8_icon'));
            $store8_image = Storage::disk('public')->putFileAs('img/about/', $request->file('first_block_8_icon'), $image8_name);
            if (!$store8_image) {
                return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
            }
            $request_el8 = array_merge($request_el8, ["icon" => $image8_name]);
        } else {
            if($el8_registered){
                $request_el8 = array_merge($request_el8, ["icon" => $el8_registered->icon]);
            }
        }
        if ($request->hasFile('first_block_8_icon') && $el8_registered->icon) {
            Storage::disk('public')->delete('img/about/' . $el8_registered->icon);
        }
        try {
            if ($el1_registered) {
                $el1 = AboutText::UpdateOrCreate(["id"=>$el1_registered->id], $request_el1);
            } else {
                $el1 = AboutText::UpdateOrCreate($request_el1);
            }
            if ($el2_registered) {
                $el2 = AboutText::UpdateOrCreate(["id"=>$el2_registered->id], $request_el2);
            } else {
                $el2 = AboutText::UpdateOrCreate($request_el2);
            }
            if ($el3_registered) {
                $el3 = AboutText::UpdateOrCreate(["id"=>$el3_registered->id], $request_el3);
            } else {
                $el3 = AboutText::UpdateOrCreate($request_el3);
            }
            if ($el4_registered) {
                $el4 = AboutText::UpdateOrCreate(["id"=>$el4_registered->id], $request_el4);
            } else {
                $el4 = AboutText::UpdateOrCreate($request_el4);
            }
            if ($el5_registered) {
                $el5 = AboutText::UpdateOrCreate(["id"=>$el5_registered->id], $request_el5);
            } else {
                $el5 = AboutText::UpdateOrCreate($request_el5);
            }
            if ($el6_registered) {
                $el6 = AboutText::UpdateOrCreate(["id"=>$el6_registered->id], $request_el6);
            } else {
                $el6 = AboutText::UpdateOrCreate($request_el6);
            }
            if ($el7_registered) {
                $el7 = AboutText::UpdateOrCreate(["id"=>$el7_registered->id], $request_el7);
            } else {
                $el7 = AboutText::UpdateOrCreate($request_el7);
            }
            if ($el8_registered) {
                $el8 = AboutText::UpdateOrCreate(["id"=>$el8_registered->id], $request_el8);
            } else {
                $el8 = AboutText::UpdateOrCreate($request_el8);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.section')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.section')]) ], 500);
        }
    }

    public function get()
    {
        $el1 = AboutText::where('type','first-block-1')->orderBy('created_at', 'desc')->first();
        $el2 = AboutText::where('type','first-block-2')->orderBy('created_at', 'desc')->first();
        $el3 = AboutText::where('type','first-block-3')->orderBy('created_at', 'desc')->first();
        $el4 = AboutText::where('type','first-block-4')->orderBy('created_at', 'desc')->first();
        $el5 = AboutText::where('type','first-block-5')->orderBy('created_at', 'desc')->first();
        $el6 = AboutText::where('type','first-block-6')->orderBy('created_at', 'desc')->first();
        $el7 = AboutText::where('type','first-block-7')->orderBy('created_at', 'desc')->first();
        $el8 = AboutText::where('type','first-block-8')->orderBy('created_at', 'desc')->first();
        $el = ["first_block_1" => $el1,"first_block_2" => $el2,"first_block_3" => $el3,"first_block_3" => $el3,"first_block_4" => $el4,"first_block_5" => $el5,"first_block_6" => $el6
        ,"first_block_7" => $el7,"first_block_8" => $el8];
        return response()->json($el);
    }
}