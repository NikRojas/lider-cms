<?php

namespace App\Http\Controllers\Cms\Content;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Cami;
use App\CamiElement;
use App\Http\Requests\Cms\CamiRequest;
use App\Http\Requests\Cms\CamiElementRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Traits\CmsTrait;

class CamiController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("pages.cami");
    }

    public function store(CamiRequest $request)
    {
        $request_cami = request(["title_es","title_en","description_es","description_en","url_video","title_projects_es","title_projects_en"]);
        $cami_registered = Cami::first();

        if ($request->hasFile('logo')) {
            $logo_name = $this->setFileName('c-', $request->file('logo'));
            $store_logo = Storage::disk('public')->putFileAs('img/cami/', $request->file('logo'), $logo_name);
            if (!$store_logo) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.cami')]) ], 500);
            }
            $request_cami = array_merge($request_cami, ["logo" => $logo_name]);
        } else {
            if ($cami_registered) {
                $request_cami = array_merge($request_cami, ["logo" => $cami_registered->logo]);
            } else {
                //$request_cami = array_merge($request_cami, ["logo" => ""]);
            }
        }
        if ($cami_registered) {
            if ($request->hasFile('logo') && $cami_registered->logo) {
                Storage::disk('public')->delete('img/cami/'.$cami_registered->logo);
            }
        }

        if($cami_registered){
            $images = [];
            $imagesToRemove = [];
            $imagesNotUpdated = [];
            for ($i=0; $i < $request->images_count; $i++) { 
                $name = 'images'.$i;
                $imagesNotUpdated[] = $request->$name; 
            }
            $imagesToRemove = array_diff($cami_registered->images_format,$imagesNotUpdated);
            foreach ($imagesToRemove as $key => $value) {
                Storage::disk('public')->delete('img/projects/'.$value);
            }
            for ($i=0; $i < $request->images_count; $i++) { 
                $correlative = $i + 1;
                $name = 'images'.$i;
                if($request->hasFile('images'.$i)){
                    ${$correlative.'Name'} = $this->setFileName('is-'.$correlative,$request->file('images'.$i));
                    $storeLogo = Storage::disk('public')->putFileAs('img/cami/',$request->file('images'.$i),${$correlative.'Name'});
                    if(!${$correlative.'Name'}){
                        $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.cami')]));
                        Storage::disk('public')->delete('img/cami/'.${$correlative.'Name'});
                        return response()->json(["route" => route('cms.cami.index')],500);
                    }
                    $images[] = ${$correlative.'Name'};
                }
                else{
                    $images[] = $request->$name;
                }
            }
            $request_cami = array_merge($request_cami, ["images" => json_encode($images)]);
        }
        else{
            $images = [];
            for ($i=0; $i < $request->images_count; $i++) { 
                $correlative = $i + 1;
                ${$correlative.'Name'} = $this->setFileName('cd-'.$correlative,$request->file('images'.$i));
                $storeLogo = Storage::disk('public')->putFileAs('img/cami/',$request->file('images'.$i),${$correlative.'Name'});
                if(!${$correlative.'Name'}){
                    $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.cami')]));
                    Storage::disk('public')->delete('img/cami/'.${$correlative.'Name'});
                    return response()->json(["route" => route('cms.cami.index')],500);
                }
                $images[] = ${$correlative.'Name'};
            }
            $request_cami = array_merge($request_cami, ["images" => json_encode($images)]);
        }

        

        try {
            if ($cami_registered) {
                $cami = Cami::UpdateOrCreate(["id"=>$cami_registered->id], $request_cami);
            } else {
                $cami = Cami::UpdateOrCreate($request_cami);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.cami')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.cami')]) ], 500);
        }
    }

    public function get()
    {
        $cami = Cami::orderBy('created_at', 'desc')->first();
        return response()->json($cami);
    }


    public function elementsGet(CamiElement $element)
    {
        return response()->json($element);
    }

    public function elementsGetAll(Request $request)
    {
        $elements = CamiElement::orderBy('index', 'asc')->get();
        return response()->json($elements);
    }
   
    public function elementsStore(CamiElementRequest $request)
    {
        $element = request(["name_es","name_en","description_es","description_en","url_video",'description_video_en','description_video_es','title_elements_en','title_elements_es']);
       
        for ($i=0; $i < $request->elements_count; $i++) {
            $correlative = $i + 1;
            ${$correlative.'Name'} = $this->setFileName('is-'.$correlative, $request->file('images'.$i));
            $storeLogo = Storage::disk('public')->putFileAs('img/cami-elements/', $request->file('images'.$i), ${$correlative.'Name'});

            ${$correlative.'IconName'} = $this->setFileName('isc-'.$correlative, $request->file('icons'.$i));
            $storeIcon = Storage::disk('public')->putFileAs('img/cami-elements/', $request->file('icons'.$i), ${$correlative.'IconName'});

            if (!${$correlative.'Name'}) {
                Storage::disk('public')->delete('img/cami-elements/'.${$correlative.'Name'});
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }

            if (!${$correlative.'IconName'}) {
                Storage::disk('public')->delete('img/cami-elements/'.${$correlative.'IconName'});
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }

            $element_es[] = ['file'=>${$correlative.'Name'},'icon'=>${$correlative.'IconName'},'title_es'=> $request['title_es'.$i],'description_es' => $request['description_es'.$i]];
            $element_en[] = ['file'=>${$correlative.'Name'},'icon'=>${$correlative.'IconName'},'title_en'=> $request['title_en'.$i],'description_en' => $request['description_en'.$i]];
        }
        $element = array_merge($element, ["elements_es"=>json_encode($element_es),"elements_en" => json_encode($element_en)]);

        $index = $this->getMaxIndex(CamiElement::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        $imageName = $this->setFileName('p-', $request->file('image'));
        $storeImage = Storage::disk('public')->putFileAs('img/cami-elements/', $request->file('image'), $imageName);
        if (!$storeImage) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
        }
        $element = array_merge($element, ["image"=>$imageName,"index" => $index]);
        try {
            $element = CamiElement::UpdateOrCreate($element);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function elementsDestroy(CamiElement $element)
    {
        $image = $element->image;
        $images = $element->images_format;
        $icons = $element->icons_format;
        try {
            $destroy = $element->delete();
            if ($destroy) {
                Storage::disk('public')->delete('img/cami-elements/'.$image);
            }
            foreach ($images as $key => $value) {
                Storage::disk('public')->delete('img/cami-elements/'.$value);
            }
            foreach ($icons as $key => $value) {
                Storage::disk('public')->delete('img/cami-elements/'.$value);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function elementsOrder(Request $request)
    {
        $elements = $request->all();
        try {
            for ($i=0; $i < count($elements); $i++) {
                $element = CamiElement::UpdateOrCreate(["id"=>$elements[$i]["id"]], ["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function elementsUpdate(CamiElementRequest $request, CamiElement $element)
    {
        $request_element = request(["name_es","name_en","description_es","description_en","url_video",'description_video_en','description_video_es','title_elements_en','title_elements_es']);
       
        $imagesToRemove = [];
        $imagesNotUpdated = [];

        $iconsToRemove = [];
        $iconsNotUpdated = [];
        for ($i=0; $i < $request->elements_count; $i++) {
            $name = 'images'.$i;
            $nameIcon = 'icons'.$i;
            $imagesNotUpdated[] = $request->$name;
            $iconsNotUpdated[] = $request->$nameIcon;
        }
        $imagesToRemove = array_diff($element->images_format, $imagesNotUpdated);
        $iconsToRemove = array_diff($element->icons_format, $iconsNotUpdated);
        
        foreach ($imagesToRemove as $key => $value) {
            Storage::disk('public')->delete('img/cami-elements/'.$value);
        }

        foreach ($iconsToRemove as $key => $value) {
            Storage::disk('public')->delete('img/cami-elements/'.$value);
        }

        for ($i=0; $i < $request->elements_count; $i++) {
            $correlative = $i + 1;
            if ($request->hasFile('images'.$i)) {
                ${$correlative.'Name'} = $this->setFileName('is-'.$correlative, $request->file('images'.$i));
                $storeLogo = Storage::disk('public')->putFileAs('img/cami-elements/', $request->file('images'.$i), ${$correlative.'Name'});
                if (!${$correlative.'Name'}) {
                    Storage::disk('public')->delete('img/cami-elements/'.${$correlative.'Name'});
                    return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
                }
                $element_es[] = ['file'=>${$correlative.'Name'},'title_es'=> $request['title_es'.$i],'description_es' => $request['description_es'.$i]];
                $element_en[] = ['file'=>${$correlative.'Name'},'title_en'=> $request['title_en'.$i],'description_en' => $request['description_en'.$i]];
            } else {
                $element_es[] = ['file'=>$request['images'.$i],'title_es'=> $request['title_es'.$i],'description_es' => $request['description_es'.$i]];
                $element_en[] = ['file'=>$request['images'.$i],'title_en'=> $request['title_en'.$i],'description_en' => $request['description_en'.$i]];
            }

            if ($request->hasFile('icons'.$i)) {
                ${$correlative.'IconName'} = $this->setFileName('isc-'.$correlative, $request->file('icons'.$i));
                $iconLogo = Storage::disk('public')->putFileAs('img/cami-elements/', $request->file('icons'.$i), ${$correlative.'IconName'});
                if (!${$correlative.'IconName'}) {
                    Storage::disk('public')->delete('img/cami-elements/'.${$correlative.'IconName'});
                    return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
                }
                /*$element_es[] = ['file'=>${$correlative.'IconName'},'title_es'=> $request['title_es'.$i],'description_es' => $request['description_es'.$i]];
                $element_en[] = ['file'=>${$correlative.'IconName'},'title_en'=> $request['title_en'.$i],'description_en' => $request['description_en'.$i]];*/
                $element_es[$i]["icon"] = ${$correlative.'IconName'};
                $element_en[$i]["icon"] = ${$correlative.'IconName'};
            } else {
                /*$element_es[] = ['file'=>$request['icons'.$i],'title_es'=> $request['title_es'.$i],'description_es' => $request['description_es'.$i]];
                $element_en[] = ['file'=>$request['icons'.$i],'title_en'=> $request['title_en'.$i],'description_en' => $request['description_en'.$i]];*/
                $element_es[$i]["icon"] = $request['icons'.$i];
                $element_en[$i]["icon"] = $request['icons'.$i];
            }
        }
        $request_element = array_merge($request_element, ["elements_es"=>json_encode($element_es),"elements_en" => json_encode($element_en)]);

        if ($request->hasFile('image')) {
            $imageName = $this->setFileName('p-', $request->file('image'));
            $storeImage = Storage::disk('public')->putFileAs('img/cami-elements/', $request->file('image'), $imageName);
            if (!$storeImage) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
            $request_element = array_merge($request_element, ["image" => $imageName]);
        } else {
            $request_element = array_merge($request_element, ["image" => $element->image]);
        }
        if ($request->hasFile('image') && $element->image) {
            Storage::disk('public')->delete('img/cami-elements/'.$element->image);
        }

        try {
            $element = CamiElement::UpdateOrCreate(["id"=>$element->id], $request_element);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            dd($e);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }
}
