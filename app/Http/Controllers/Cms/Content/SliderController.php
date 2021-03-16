<?php

namespace App\Http\Controllers\Cms\Content;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\SliderRequest;
use App\Http\Traits\CmsTrait;
use App\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SliderController extends Controller
{
    use CmsTrait;

    public function index(){
        return view ("pages.slider.index");   
    }

    public function create(){
        return view("pages.slider.create"); 
    }

    public function store(SliderRequest $request){
        //$slider = request(["link","posicion"]);
        $imageNameEs = $this->setFileName('se-',$request->file('image_es'));
        $storeImageEs = Storage::disk('public')->putFileAs('img/slider/',$request->file('image_es'),$imageNameEs);
        $imageNameResponsiveEs = $this->setFileName('sre-',$request->file('image_responsive_es'));
        $storeImageResponsiveEs = Storage::disk('public')->putFileAs('img/slider/',$request->file('image_responsive_es'),$imageNameResponsiveEs);

        $imageNameEn = $this->setFileName('sen-',$request->file('image_en'));
        $storeImageEn = Storage::disk('public')->putFileAs('img/slider/',$request->file('image_en'),$imageNameEn);
        $imageNameResponsiveEn = $this->setFileName('sren-',$request->file('image_responsive_en'));
        $storeImageResponsiveEn = Storage::disk('public')->putFileAs('img/slider/',$request->file('image_responsive_en'),$imageNameResponsiveEn);

        if(!$storeImageEn || !$storeImageResponsiveEn || !$storeImageResponsiveEs || !$storeImageEs){
            $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.slide')]));
            return response()->json(["route" => route('cms.content.slider.index')],500);
        }
        $index = $this->getMaxIndex(Slider::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        $slider = ["image_es"=>$imageNameEs,"image_en"=>$imageNameEn,"image_responsive_es"=>$imageNameResponsiveEs,"image_responsive_en"=>$imageNameResponsiveEn,"index" => $index, "link" => $request->link];
        if($request->from){
            $slider = array_merge($slider,["from" => date("Y-m-d H:i:s", strtotime($request->from))]);
        }
        if($request->to){
            $slider = array_merge($slider,["to" => date("Y-m-d H:i:s", strtotime($request->to))]);
        }
        try{
            $slider = Slider::UpdateOrCreate($slider); 
            $request->session()->flash('success', trans('custom.message.create.success', ['name' => trans('custom.attribute.slide')]));
            return response()->json(["route" => route('cms.content.slider.index')]);
        }
        catch(\Exception $e){
            $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.slide')]));
            return response()->json(["route" => route('cms.content.slider.index')],500);
        }
    }

    public function getAll(){
        $elements = Slider::orderBy('index','asc')->get();
        return response()->json($elements); 
    }

    public function get(Slider $element){
        return response()->json($element);
    }

    public function destroy(Slider $element){
        $imageEs = $element->image_es;
        $imageResponsiveEs = $element->image_responsive_es;
        $imageEn = $element->image_en;
        $imageResponsiveEn = $element->image_responsive_en;
        try {
            $destroy = $element->delete();
            if($destroy){
                Storage::disk('public')->delete('img/slider/'.$imageEs);   
                Storage::disk('public')->delete('img/slider/'.$imageResponsiveEs);   
                Storage::disk('public')->delete('img/slider/'.$imageEn);   
                Storage::disk('public')->delete('img/slider/'.$imageResponsiveEn);   
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.slide')]) ],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.slide')]) ],500);
        }
    }

    public function order(Request $request){
        $elements = $request->all();
        try{
            for ($i=0; $i < count($elements); $i++) { 
                $slide = Slider::UpdateOrCreate(["id"=>$elements[$i]["id"]],["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.slide')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.slide')])],500);
        }
    }

    public function edit(Slider $element){
        return view("pages.slider.edit", compact('element')); 
    }

    public function update(SliderRequest $request,Slider $element){
        //$request_element = request(["url","posicion"]);
        $request_element = [];
        if($request->hasFile('image_es')){
            $imageNameEs = $this->setFileName('se-',$request->file('image_es'));
            $storeImageEs = Storage::disk('public')->putFileAs('img/slider/',$request->file('image_es'),$imageNameEs);
            if(!$storeImageEs){
                $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.slide')]));
                return response()->json(["route" => route('cms.content.slider.index')],500);    
            }
            $request_element = array_merge($request_element,["image_es" => $imageNameEs]);   
        }  
        else{
            $request_element = array_merge($request_element,["image_es" => $element->image_es]);   
        }
        if($request->hasFile('image_responsive_es')){
            $imageResponsiveEs = $this->setFileName('sre-',$request->file('image_responsive_es'));
            $storeImageResponsiveEs = Storage::disk('public')->putFileAs('img/slider/',$request->file('image_responsive_es'),$imageResponsiveEs);
            if(!$storeImageResponsiveEs){
                $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.slide')]));
                return response()->json(["route" => route('cms.content.slider.index')],500);   
            }
            $request_element = array_merge($request_element,["image_responsive_es" => $imageResponsiveEs]);   
        }  
        else{
            $request_element = array_merge($request_element,["image_responsive_es" => $element->image_responsive_es]);   
        }


        if($request->hasFile('image_en')){
            $imageNameEn = $this->setFileName('sen-',$request->file('image_en'));
            $storeImageEn = Storage::disk('public')->putFileAs('img/slider/',$request->file('image_en'),$imageNameEn);
            if(!$storeImageEn){
                $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.slide')]));
                return response()->json(["route" => route('cms.content.slider.index')],500);    
            }
            $request_element = array_merge($request_element,["image_en" => $imageNameEn]);   
        }  
        else{
            $request_element = array_merge($request_element,["image_en" => $element->image_en]);   
        }
        if($request->hasFile('image_responsive_en')){
            $imageResponsiveEn = $this->setFileName('sren-',$request->file('image_responsive_en'));
            $storeImageResponsiveEn = Storage::disk('public')->putFileAs('img/slider/',$request->file('image_responsive_en'),$imageResponsiveEn);
            if(!$storeImageResponsiveEn){
                $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.slide')]));
                return response()->json(["route" => route('cms.content.slider.index')],500);   
            }
            $request_element = array_merge($request_element,["image_responsive_en" => $imageResponsiveEn]);   
        }  
        else{
            $request_element = array_merge($request_element,["image_responsive_en" => $element->image_responsive_en]);   
        }

        if($request->hasFile('image_es') && $element->image_es){
            Storage::disk('public')->delete('img/slider/'.$element->image_es);
        } 
        if($request->hasFile('image_responsive_es') && $element->image_responsive_es){
            Storage::disk('public')->delete('img/slider/'.$element->image_responsive_es);
        } 
        if($request->hasFile('image_en') && $element->image_en){
            Storage::disk('public')->delete('img/slider/'.$element->image_en);
        } 
        if($request->hasFile('image_responsive_en') && $element->image_responsive_en){
            Storage::disk('public')->delete('img/slider/'.$element->image_responsive_en);
        } 
        if($request->from){
            $request_element = array_merge($request_element,["from" => date("Y-m-d H:i:s", strtotime($request->from))]);
        }
        if($request->to){
            $request_element = array_merge($request_element,["to" => date("Y-m-d H:i:s", strtotime($request->to))]);
        }
        try{
            $element = Slider::UpdateOrCreate(["id"=>$element->id],array_merge($request_element,["link" => $request->link])); 
            $request->session()->flash('success', trans('custom.message.update.success', ['name' => trans('custom.attribute.slide')]));
            return response()->json(["route" => route('cms.content.slider.index')]);
        }
        catch(\Exception $e){
            $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.slide')]));
            return response()->json(["route" => route('cms.content.slider.index')],500);
        }
    }

}
