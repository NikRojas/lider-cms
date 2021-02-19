<?php

namespace App\Http\Controllers\Cms\Content\About;

use App\AboutText;
use App\AboutWarrantyElement;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\About\AboutWarrantyElementRequest;
use App\Http\Requests\Cms\About\AboutWarrantyTextRequest;
use App\Http\Traits\CmsTrait;
use Illuminate\Support\Facades\Storage;

class FourthController extends Controller
{
    use CmsTrait;

    public function store(AboutWarrantyElementRequest $request)
    {
        $el = request(["description_es", "description_en"]);
        $elIndex = $this->getMaxIndex(AboutWarrantyElement::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        $el = array_merge($el, ["index" => $elIndex]);
        try {
            $el = AboutWarrantyElement::UpdateOrCreate($el);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function get(AboutWarrantyElement $element)
    {
        return response()->json($element);
    }

    public function getAll(Request $request)
    {
        $elements = AboutWarrantyElement::orderBy('index')->get();
        foreach ($elements as $el) {
            $data[] = array(
                "id" => $el["id"],
                "description_es" => $el["description_es"],
            );
        }
        if (isset($data)) {
            $elements["data"] = '';
            $elements["data"] = $data;
        }
        $headers = ["Id", "Descripción ES"];
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function destroy(AboutWarrantyElement $element)
    {
        try {
            $delete_element = $element->delete();
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function order(Request $request)
    {
        $elements = $request->all();
        try {
            for ($i = 0; $i < count($elements); $i++) {
                $el = AboutWarrantyElement::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function update(AboutWarrantyElementRequest $request, AboutWarrantyElement $element)
    {
        $request_element = request(["description_es", "description_en"]);
        try {
            $element = AboutWarrantyElement::UpdateOrCreate(["id" => $element->id], $request_element);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function updateText(AboutWarrantyTextRequest $request)
    {
        $request_el = request(["title_es","title_en","description_es","description_en"]);
        $el_registered = AboutText::where('type','warranty')->first();
        $request_el = array_merge($request_el, ["type" => "warranty"]);
        if ($request->hasFile('image')) {
            $image_name = $this->setFileName('aw-', $request->file('image'));
            $store_image = Storage::disk('public')->putFileAs('img/about/', $request->file('image'), $image_name);
            if (!$store_image) {
                return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
            }
            $request_el = array_merge($request_el, ["image" => $image_name]);
        } else {
            if($el_registered){
                $request_el = array_merge($request_el, ["image" => $el_registered->image]);
            }
        }
        if ($request->hasFile('image') && $el_registered->image) {
            Storage::disk('public')->delete('img/about/' . $el_registered->image);
        }
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

    public function getText()
    {
        $el = AboutText::where('type','warranty')->orderBy('created_at', 'desc')->first();
        return response()->json($el);
    }
}
