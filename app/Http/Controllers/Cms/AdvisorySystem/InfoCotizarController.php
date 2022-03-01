<?php

namespace App\Http\Controllers\Cms\AdvisorySystem;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests\Cms\AdvisorySystem\TpsNavRequest;
use App\Http\Requests\Cms\AdvisorySystem\TpsNavStepRequest;
use App\Http\Traits\CmsTrait;
use App\TpsNavs;
use App\TpsNavStep;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class InfoCotizarController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("pages.advisory-system.info-cotizar");
    }

    public function getAllNavs()
    {
        $elements = TpsNavs::orderBy('index', 'asc')->get();
        $data = [];
        foreach ($elements as $el) {
            $data[] = array(
                "id" => $el["id"],
                "name" => $el["name"],
            );
        }
        if (isset($data)) {
            $elements["data"] = '';
            $elements["data"] = $data;
        }
        $headers = ["Id", "Nombre"];
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function storeNavs(TpsNavRequest $request)
    {
        $element = request(["name"]);
        $index = $this->getMaxIndex(TpsNavs::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        $element = array_merge($element, ["index" => $index]);
        try {
            $element = TpsNavs::UpdateOrCreate($element);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function getNav(TpsNavs $nav)
    {
        return response()->json($nav);
    }

    public function updateNav(TpsNavs $nav, TpsNavRequest $request)
    {
        $request_el = request(["name"]);
        try {
            $element = TpsNavs::UpdateOrCreate(["id" => $nav->id], $request_el);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function orderNavs(Request $request)
    {
        $elements = $request->all();
        try {
            for ($i = 0; $i < count($elements); $i++) {
                $element = TpsNavs::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function destroyNav(TpsNavs $nav)
    {
        try {
            DB::transaction(function () use ($nav) {
                $id = $nav->id;
                $getSteps = TpsNavStep::where('nav_id',$id)->get();
                if(count($getSteps) > 0){
                    foreach ($getSteps as $key => $value) {
                        $image = $value->image;
                        $destroy = $value->delete();
                        if($destroy){
                            Storage::disk('public')->delete('img/tps/info/'.$image);   
                        }
                    }
                }
                $element = $nav->delete();
            });
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            dd($e);
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function getAllSteps($id)
    {
        $elements = TpsNavStep::where('nav_id', $id)->orderBy('index', 'asc')->get();
        foreach ($elements as $el) {
            $image = asset('storage/img/tps/info/' . $el["image"]);
            $data[] = array(
                "id" => $el["id"],
                "name" =>
                '<div class="mb-1" style="font-size: 16px;font-weight: bold;">' . $el["title"] . '</div><div class="content-editor-step">' . $el->description . '</div>',
                "image" => "<img src=" . $image . " height='50px' width='auto'/><a class='d-block mt-1' style='text-decoration: underline;' href=" . $image . " target='_blank'>Ver Imagen</a>",
            );
        }
        if (isset($data)) {
            $elements["data"] = '';
            $elements["data"] = $data;
        }
        $headers = ["Id", "Info", "Imagen"];
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function storeSteps(TpsNavStepRequest $request)
    {
        $element = request(["title", 'description', 'nav_id']);
        $index = $this->getMaxIndex(TpsNavStep::selectRaw('MAX(id),MAX(`index`) as "index"')->where('nav_id', $request->nav_id)->get());
        $element = array_merge($element, ["index" => $index]);
        if ($request->hasFile('image')) {
            $imageName = $this->setFileName('in-', $request->file('image'));
            $storeImage = Storage::disk('public')->putFileAs('img/tps/info', $request->file('image'), $imageName);
            if (!$storeImage) {
                return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
            }
            $element = array_merge($element, ["image" => $imageName]);
        }
        try {
            $element = TpsNavStep::UpdateOrCreate($element);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function getStep(TpsNavStep $step)
    {
        return response()->json($step);
    }

    public function updateStep(TpsNavStep $step, TpsNavStepRequest $request)
    {
        $request_element = request(["title", 'description']);
        if ($request->hasFile('image')) {
            $fileName = $this->setFileName('in-', $request->file('image'));
            Storage::disk('public')->putFileAs('img/tps/info', $request->file('image'), $fileName);
            $request_element = array_merge($request_element, ["image" => $fileName]);
        }
        if ($request->hasFile('image') && $step->image) {
            Storage::disk('public')->delete('img/tps/info' . $step->image);
        }
        try {
            $element = TpsNavStep::UpdateOrCreate(["id" => $step->id], $request_element);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function destroyStep(TpsNavStep $step)
    {
        $image = $step->image;
        try {
            $destroy = $step->delete();
            if($destroy){
                Storage::disk('public')->delete('img/tps/info/'.$image);   
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function orderSteps(Request $request)
    {
        $elements = $request->all();
        try {
            for ($i = 0; $i < count($elements); $i++) {
                $element = TpsNavStep::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }
}
