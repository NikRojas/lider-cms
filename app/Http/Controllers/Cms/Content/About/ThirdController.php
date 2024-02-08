<?php

namespace App\Http\Controllers\Cms\Content\About;

use App\AboutProjectFinished;
use App\AboutText;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\About\AboutProjectFinishRequest;
use App\Http\Requests\Cms\About\AboutProjectFinishTextRequest;
use App\Http\Traits\CmsTrait;
use Illuminate\Support\Facades\Storage;

class ThirdController extends Controller
{
    use CmsTrait;

    public function store(AboutProjectFinishRequest $request)
    {
        $el = request(["name", "description_es", "description_en", "active"]);
        $image_name = $this->setFileName('pf-', $request->file('image'));
        $store_image = Storage::disk('public')->putFileAs('img/about/', $request->file('image'), $image_name);
        if (!$store_image) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
        }
        $el = array_merge($el, ["image" => $image_name]);
        $elIndex = $this->getMaxIndex(AboutProjectFinished::selectRaw('MAX(id),MAX(`index`) as "index"')->get());

        $el = array_merge($el, ["index" => $elIndex]);
        try {
            $el = AboutProjectFinished::UpdateOrCreate($el);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.project_finished')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.project_finished')])], 500);
        }
    }

    public function get(AboutProjectFinished $element)
    {
        return response()->json($element);
    }

    public function getAll(Request $request)
    {
        $elements = AboutProjectFinished::orderBy('index')->get();
        foreach ($elements as $el) {
            $image = config('services.images_url')."/about/".$el["image"];
            $data[] = array(
                "id" => $el["id"],
                "name" => $el["name"],
                "status" => $el["active"] ? "<span class='badge badge-pill badge-info badge-lg'>Habilitado</span>" : "<span class='badge badge-pill badge-danger badge-lg'>Deshabilitado</span>",
                "image" => "<img src=".$image." class='mr-3 p-2' height='50' width='auto' alt='About Third ".$el["index"]."'/><a class='btn btn-outline-info btn-sm' href=".$image." target='_blank'>Ver Imagen</a>",
            );
        }
        if (isset($data)) {
            $elements["data"] = '';
            $elements["data"] = $data;
        }
        $headers = ["Id", "Nombre", "Estado", "Imagen"];
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function destroy(AboutProjectFinished $element)
    {
        $image = $element->image;
        try {
            $delete_element = $element->delete();
            if ($delete_element) {
                if ($image) {
                    Storage::disk('public')->delete('img/about/' . $image);
                }
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.project_finished')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.project_finished')])], 500);
        }
    }

    public function order(Request $request)
    {
        $elements = $request->all();
        try {
            for ($i = 0; $i < count($elements); $i++) {
                $el = AboutProjectFinished::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.project_finished')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.project_finished')])], 500);
        }
    }

    public function update(AboutProjectFinishRequest $request, AboutProjectFinished $element)
    {
        $request_element = request(["name", "description_es", "description_en", "active"]);
            if ($request->hasFile('image')) {
                $image_name = $this->setFileName('pf-', $request->file('image'));
                $store_image = Storage::disk('public')->putFileAs('img/about/', $request->file('image'), $image_name);
                if (!$store_image) {
                    return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
                }
                $request_element = array_merge($request_element, ["image" => $image_name]);
            } else {
                $request_element = array_merge($request_element, ["image" => $element->image]);
            }
            if ($request->hasFile('image') && $element->image) {
                Storage::disk('public')->delete('img/about/' . $element->image);
            }
        try {
            $element = AboutProjectFinished::UpdateOrCreate(["id" => $element->id], $request_element);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.project_finished')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.project_finished')])], 500);
        }
    }

    public function updateText(AboutProjectFinishTextRequest $request)
    {
        $request_el = request(["title_es","title_en"]);
        $el_registered = AboutText::where('type','project-finished')->first();
        $request_el = array_merge($request_el, ["type" => "project-finished"]);
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
        $el = AboutText::where('type','project-finished')->orderBy('created_at', 'desc')->first();
        return response()->json($el);
    }
}
