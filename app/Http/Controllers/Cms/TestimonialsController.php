<?php

namespace App\Http\Controllers\Cms;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Testimonial;

use App\Http\Requests\Admin\TestimonialRequest;
use App\Http\Traits\AdminTrait;

use Illuminate\Support\Facades\Storage;

class TestimonialsController extends Controller
{
    use AdminTrait;

    public function index()
    {
        return view ("pages.testimonials");
    }

    public function create(TestimonialRequest $request){
        $testimonial = request(["company","message","full_name","job"]);
        $image_name = $this->setFileName('t-',$request->file('image'));
        $store_image = Storage::disk('gcs')->putFileAs('img/testimonials/',$request->file('image'),$image_name);
        if(!$store_image){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
        $testimonial = array_merge($testimonial,["image"=>$image_name]);
        $cliente = $this->getMaxIndex(Testimonial::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        if(count($cliente) > 0){
            $testimonial = array_merge($testimonial,["index"=>$cliente[0]["index"] + 1]); 
        }
        else{
            $testimonial = array_merge($testimonial,["index"=>1]);    
        }
        try{
            $testimonial = Testimonial::UpdateOrCreate($testimonial); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.testimonial')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.testimonial')]) ],500);    
        }
    }

    public function getTestimonial(Testimonial $testimonial){
        return response()->json($testimonial);        
    }

    public function getTestimonials(Request $request){
        $testimonials = Testimonial::orderBy('index')->get();
        return response()->json($testimonials);
    }

    public function delete(Testimonial $testimonial){
        $image = $testimonial->image;
        try {
            $delete_testimonial = $testimonial->delete();
            if($delete_testimonial){
                Storage::disk('gcs')->delete('img/testimonials/'.$image);    
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.testimonial')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.testimonial')])],500);
        }
    }

    public function order(Request $request){
        $testimonials = $request->all();
        try{
            for ($i=0; $i < count($testimonials); $i++) { 
                $cliente = Testimonial::UpdateOrCreate(["id"=>$testimonials[$i]["id"]],["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.testimonial')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.testimonial')])],500);
        }
    }

    public function update(TestimonialRequest $request,Testimonial $testimonial){
        $request_testimonial = request(["company","message","full_name","job"]);
        if($request->hasFile('image')){
            $image_name = $this->setFileName('t-',$request->file('image'));
            $store_image = Storage::disk('gcs')->putFileAs('img/testimonials/',$request->file('image'),$image_name);
            if(!$store_image){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_testimonial = array_merge($request_testimonial,["image" => $image_name]);   
        }  
        else{
            $request_testimonial = array_merge($request_testimonial,["image" => $testimonial->image]);   
        }
        if($request->hasFile('image') && $testimonial->image){
            Storage::disk('gcs')->delete('img/testimonials/'.$testimonial->image);
        } 
        try{
            $testimonial = Testimonial::UpdateOrCreate(["id"=>$testimonial->id],$request_testimonial); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.testimonial')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.testimonial')]) ],500);
        }
    }
}