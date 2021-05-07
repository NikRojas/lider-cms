<?php

namespace App\Http\Controllers\Cms\Projects;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\Project;
use App\Http\Requests\Cms\Project\BannerRequest;
use App\ProjectBanner;

class BannerController extends Controller
{
    use CmsTrait;

    public function index($element)
    {
        $element = Project::where('slug_es', $element)->firstOrFail();
        return view("pages.projects.banner.index", compact('element'));
    }

    public function getAll(Request $request)
    {
        $elements = ProjectBanner::where('project_id', $request->project_id)->orderBy('index', 'asc')->get();
        return response()->json($elements);
    }

    public function get(ProjectBanner $element)
    {
        return response()->json($element);
    }

    public function destroy(ProjectBanner $element)
    {
        $imageEs = $element->image_es;
        $imageResponsiveEs = $element->image_responsive_es;
        $imageEn = $element->image_en;
        $imageResponsiveEn = $element->image_responsive_en;
        try {
            $destroy = $element->delete();
            if ($destroy) {
                Storage::disk('public')->delete('img/projects/banner/'.$imageEs);
                Storage::disk('public')->delete('img/projects/banner/'.$imageResponsiveEs);
                Storage::disk('public')->delete('img/projects/banner/'.$imageEn);
                Storage::disk('public')->delete('img/projects/banner/'.$imageResponsiveEn);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')]) ], 500);
        }
    }

    public function order(Request $request)
    {
        $elements = $request->all();
        try {
            for ($i=0; $i < count($elements); $i++) {
                $element = ProjectBanner::UpdateOrCreate(["id"=>$elements[$i]["id"]], ["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function store(BannerRequest $request)
    {
        $imageNameEs = $this->setFileName('se-', $request->file('image_es'));
        $storeImageEs = Storage::disk('public')->putFileAs('img/projects/banner/', $request->file('image_es'), $imageNameEs);
        $imageNameResponsiveEs = $this->setFileName('sre-', $request->file('image_responsive_es'));
        $storeImageResponsiveEs = Storage::disk('public')->putFileAs('img/projects/banner/', $request->file('image_responsive_es'), $imageNameResponsiveEs);

        $imageNameEn = $this->setFileName('sen-', $request->file('image_en'));
        $storeImageEn = Storage::disk('public')->putFileAs('img/projects/banner/', $request->file('image_en'), $imageNameEn);
        $imageNameResponsiveEn = $this->setFileName('sren-', $request->file('image_responsive_en'));
        $storeImageResponsiveEn = Storage::disk('public')->putFileAs('img/projects/banner/', $request->file('image_responsive_en'), $imageNameResponsiveEn);

        if (!$storeImageEn || !$storeImageResponsiveEn || !$storeImageResponsiveEs || !$storeImageEs) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.errors.image')], 500);
        }
        $index = $this->getMaxIndex(ProjectBanner::selectRaw('MAX(id),MAX(`index`) as "index"')->where('project_id', $request->project_id)->get());
        $element = ["project_id"=>$request->project_id,"image_es"=>$imageNameEs,"image_en"=>$imageNameEn,"image_responsive_es"=>$imageNameResponsiveEs,"image_responsive_en"=>$imageNameResponsiveEn,"index" => $index];

        try {
            $element = ProjectBanner::UpdateOrCreate($element);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function update(ProjectBanner $element, BannerRequest $request)
    {
        $request_element = [];
        if ($request->hasFile('image_es')) {
            $imageNameEs = $this->setFileName('se-', $request->file('image_es'));
            Storage::disk('public')->putFileAs('img/projects/banner/', $request->file('image_es'), $imageNameEs);
            $request_element = array_merge($request_element, ["image_es" => $imageNameEs]);
        }
        if ($request->hasFile('image_responsive_es')) {
            $imageResponsiveEs = $this->setFileName('sre-', $request->file('image_responsive_es'));
            Storage::disk('public')->putFileAs('img/projects/banner/', $request->file('image_responsive_es'), $imageResponsiveEs);
            $request_element = array_merge($request_element, ["image_responsive_es" => $imageResponsiveEs]);
        }
        if ($request->hasFile('image_en')) {
            $imageNameEn = $this->setFileName('sen-', $request->file('image_en'));
            Storage::disk('public')->putFileAs('img/projects/banner/', $request->file('image_en'), $imageNameEn);
            $request_element = array_merge($request_element, ["image_en" => $imageNameEn]);
        }
        if ($request->hasFile('image_responsive_en')) {
            $imageResponsiveEn = $this->setFileName('sren-', $request->file('image_responsive_en'));
            Storage::disk('public')->putFileAs('img/projects/banner/', $request->file('image_responsive_en'), $imageResponsiveEn);
            $request_element = array_merge($request_element, ["image_responsive_en" => $imageResponsiveEn]);
        }

        if ($request->hasFile('image_es') && $element->image_es) {
            Storage::disk('public')->delete('img/projects/banner/'.$element->image_es);
        }
        if ($request->hasFile('image_responsive_es') && $element->image_responsive_es) {
            Storage::disk('public')->delete('img/projects/banner/'.$element->image_responsive_es);
        }
        if ($request->hasFile('image_en') && $element->image_en) {
            Storage::disk('public')->delete('img/projects/banner/'.$element->image_en);
        }
        if ($request->hasFile('image_responsive_en') && $element->image_responsive_en) {
            Storage::disk('public')->delete('img/projects/banner/'.$element->image_responsive_en);
        }
 
        try {
            $element = ProjectBanner::UpdateOrCreate(["id"=>$element->id], $request_element);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')]) ], 500);
        }
    }
}
