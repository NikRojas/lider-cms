<?php

namespace App\Http\Controllers\Cms\Content;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Testimonial;
use App\Http\Requests\Cms\TestimonialRequest;
use App\Http\Traits\CmsTrait;
use Illuminate\Support\Facades\Storage;

class TestimonialsController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("pages.testimonials");
    }

    public function store(TestimonialRequest $request)
    {
        $testimonial = request(["title_es","title_en","description_es","description_en","type_video","url_video","project"]);
        if($request->type_video){
            $image_name = $this->setFileName('t-', $request->file('image'));
            $store_image = Storage::disk('public')->putFileAs('img/testimonials/', $request->file('image'), $image_name);
            if (!$store_image) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
            $testimonial = array_merge($testimonial, ["image"=>$image_name]);
        }
        $testimonialIndex = $this->getMaxIndex(Testimonial::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        
        $testimonial = array_merge($testimonial, ["index"=>$testimonialIndex]);
        try {
            $testimonial = Testimonial::UpdateOrCreate($testimonial);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.testimonial')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.testimonial')]) ], 500);
        }
    }

    public function get(Testimonial $element)
    {
        return response()->json($element);
    }

    public function getAll(Request $request)
    {
        $testimonials = Testimonial::orderBy('index')->get();
        return response()->json($testimonials);
    }

    public function destroy(Testimonial $element)
    {
        $image = $element->image;
        try {
            $delete_element = $element->delete();
            if ($delete_element) {
                if($image){
                    Storage::disk('public')->delete('img/testimonials/'.$image);
                }
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.testimonial')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.testimonial')])], 500);
        }
    }

    public function order(Request $request)
    {
        $elements = $request->all();
        try {
            for ($i=0; $i < count($elements); $i++) {
                $cliente = Testimonial::UpdateOrCreate(["id"=>$elements[$i]["id"]], ["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.testimonial')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.testimonial')])], 500);
        }
    }

    public function update(TestimonialRequest $request, Testimonial $element)
    {
        $request_testimonial = request(["title_es","title_en","description_es","description_en","type_video","url_video","project"]);
        if($request->type_video){
            if ($request->hasFile('image')) {
                $image_name = $this->setFileName('t-', $request->file('image'));
                $store_image = Storage::disk('public')->putFileAs('img/testimonials/', $request->file('image'), $image_name);
                if (!$store_image) {
                    return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
                }
                $request_testimonial = array_merge($request_testimonial, ["image" => $image_name]);
            } else {
                $request_testimonial = array_merge($request_testimonial, ["image" => $element->image]);
            }
            if ($request->hasFile('image') && $element->image) {
                Storage::disk('public')->delete('img/testimonials/'.$element->image);
            }
        }
        try {
            $element = Testimonial::UpdateOrCreate(["id"=>$element->id], $request_testimonial);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.testimonial')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.testimonial')]) ], 500);
        }
    }
}
