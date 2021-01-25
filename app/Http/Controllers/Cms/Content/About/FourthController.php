<?php

namespace App\Http\Controllers\Cms\Content\About;

use App\AboutWarrantyElement;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\About\AboutWarrantyElementRequest;
use App\Http\Traits\CmsTrait;

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
                "description_es" => substr($el["description_es"], 0, 45),
                "description_en" => substr($el["description_en"], 0, 45),
            );
        }
        if (isset($data)) {
            $elements["data"] = '';
            $elements["data"] = $data;
        }
        $headers = ["Id", "Descripción ES", "Descripción EN"];
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
}
