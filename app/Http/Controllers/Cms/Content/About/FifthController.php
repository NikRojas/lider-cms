<?php

namespace App\Http\Controllers\Cms\Content\About;

use App\AboutCustomerSupport;
use App\AboutText;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\About\AboutCustomerSupportRequest;
use App\Http\Requests\Cms\About\AboutCustomerSupportTextRequest;
use App\Http\Traits\CmsTrait;
use Illuminate\Support\Facades\Storage;

class FifthController extends Controller
{
    use CmsTrait;

    public function store(AboutCustomerSupportRequest $request)
    {
        $el = request(["title_es","title_en", "description_es", "description_en"]);
        $elIndex = $this->getMaxIndex(AboutCustomerSupport::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        $el = array_merge($el, ["index" => $elIndex]);
        try {
            $el = AboutCustomerSupport::UpdateOrCreate($el);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function get(AboutCustomerSupport $element)
    {
        return response()->json($element);
    }

    public function getAll(Request $request)
    {
        $elements = AboutCustomerSupport::orderBy('index')->get();
        foreach ($elements as $el) {
            $data[] = array(
                "id" => $el["id"],
                "title_es" => $el["title_es"],
                "title_en" => $el["title_en"],
            );
        }
        if (isset($data)) {
            $elements["data"] = '';
            $elements["data"] = $data;
        }
        $headers = ["Id", "Título ES", "Título EN"];
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function destroy(AboutCustomerSupport $element)
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
                $el = AboutCustomerSupport::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function update(AboutCustomerSupportRequest $request, AboutCustomerSupport $element)
    {
        $request_element = request(["title_es", "title_en", "description_es", "description_en"]);
        try {
            $element = AboutCustomerSupport::UpdateOrCreate(["id" => $element->id], $request_element);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function updateText(AboutCustomerSupportTextRequest $request)
    {
        $request_el = request(["title_es","title_en","description_es","description_en"]);
        $el_registered = AboutText::where('type','customer-support')->first();
        $request_el = array_merge($request_el, ["type" => "customer-support"]);
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
        $el = AboutText::where('type','customer-support')->orderBy('created_at', 'desc')->first();
        return response()->json($el);
    }
}
