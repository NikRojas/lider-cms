<?php

namespace App\Http\Controllers\Cms\Administration;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Http\Requests\Cms\Administration\TypeRequest;
use App\ProjectParentTypeDepartment;
use App\Repositories\ProjectParentTypeParentRepository;

class TypesController extends Controller
{
    public function index()
    {
        return view('pages.administration.types');
    }

    public function update(TypeRequest $request, ProjectParentTypeDepartment $element)
    {
        $request_element = request(['name','room']);
        $request_element = array_merge($request_element,["slug" => Str::random(20)]);
        try {
            $element = ProjectParentTypeDepartment::UpdateOrCreate(['id' => $element->id], $request_element);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.type')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.type')]) ], 500);
        }
    }

    public function store(TypeRequest $request)
    {
        $element = request(['name','room']);
        try {
            $element = ProjectParentTypeDepartment::UpdateOrCreate($element);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.type')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.type')]) ], 500);
        }
    }

    public function destroy(ProjectParentTypeDepartment $element)
    {
        try {
            $element->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.type')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.type')]) ], 500);
        }
    }

    public function get(ProjectParentTypeDepartment $element)
    {
        return response()->json($element);
    }

    public function getAll(Request $request, ProjectParentTypeParentRepository $repo)
    {
        $q = $request->q;
        $headers = ["Id", "Nombre", "Número de Dormitorios"];
        if ($q) {
            $elements = $repo->datatable($request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatable($request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }
}
