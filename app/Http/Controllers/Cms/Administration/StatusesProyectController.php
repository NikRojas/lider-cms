<?php

namespace App\Http\Controllers\Cms\Administration;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Http\Requests\Cms\Administration\StatusRequest;
use App\ProjectStatus;
use App\Repositories\StatusProjectRepository;

class StatusesProyectController extends Controller
{
    public function index()
    {
        return view('pages.administration.statuses-project');
    }

    public function update(StatusRequest $request, ProjectStatus $element)
    {
        $request_element = request(['name_es','name_en','slug_en','slug_es']);
        try {
            $element = ProjectStatus::UpdateOrCreate(['id' => $element->id], $request_element);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.status')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.status')]) ], 500);
        }
    }

    public function store(StatusRequest $request)
    {
        $element = request(['name_es','name_en','slug_en','slug_es']);
        try {
            $element = ProjectStatus::UpdateOrCreate($element);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.status')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.status')]) ], 500);
        }
    }

    public function destroy(ProjectStatus $element)
    {
        try {
            $element->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.status')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.status')]) ], 500);
        }
    }

    public function get(ProjectStatus $element)
    {
        return response()->json($element);
    }

    public function getAll(Request $request, StatusProjectRepository $repo)
    {
        $q = $request->q;
        //$headers = ["Id", "Nombre ES", "Etiqueta ES", "Nombre EN", "Etiqueta EN"];
        $headers = ["Id", "Nombre ES", "Nombre EN"];
        if ($q) {
            $elements = $repo->datatable($request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatable($request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }
}
