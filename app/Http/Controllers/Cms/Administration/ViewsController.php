<?php

namespace App\Http\Controllers\Cms\Administration;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Http\Requests\Cms\Administration\ViewRequest;
use App\ProjectView;
use App\Repositories\ProjectViewRepository;

class ViewsController extends Controller
{
    public function index()
    {
        return view('pages.administration.views');
    }

    public function update(ViewRequest $request, ProjectView $element)
    {
        $request_element = request(['name','sap_code']);
        $request_element = array_merge($request_element,["slug" => Str::random(20)]);
        try {
            $element = ProjectView::UpdateOrCreate(['id' => $element->id], $request_element);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.view')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.view')]) ], 500);
        }
    }

    public function store(ViewRequest $request)
    {
        $element = request(['name','sap_code']);
        try {
            $element = ProjectView::UpdateOrCreate($element);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.view')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.view')]) ], 500);
        }
    }

    public function destroy(ProjectView $element)
    {
        try {
            $element->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.view')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.view')]) ], 500);
        }
    }

    public function get(ProjectView $element)
    {
        return response()->json($element);
    }

    public function getAll(Request $request, ProjectViewRepository $repo)
    {
        $q = $request->q;
        $headers = ["Id", "Nombre", "Código SAP"];
        if ($q) {
            $elements = $repo->datatable($request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatable($request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }
}
