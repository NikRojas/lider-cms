<?php

namespace App\Http\Controllers\Cms\Administration;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Http\Requests\Cms\Administration\TypeRequest;
use App\Http\Requests\Cms\Administration\TypeSeguroRequest;
use App\Repositories\TipoSeguroRepository;
use App\TipoSeguro;

class TipoSegurosController extends Controller
{
    public function index()
    {
        return view('pages.administration.types-seguros');
    }

    public function update(TypeSeguroRequest $request, TipoSeguro $element)
    {
        $request_element = request(['name', 'value']);
        try {
            $element = TipoSeguro::UpdateOrCreate(['id' => $element->id], $request_element);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.type-seguro')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.type-seguro')]) ], 500);
        }
    }

    public function store(TypeSeguroRequest $request)
    {
        $element = request(['name', 'value']);
        try {
            $element = TipoSeguro::UpdateOrCreate($element);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.type-seguro')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.type-seguro')]) ], 500);
        }
    }

    public function destroy(TipoSeguro $element)
    {
        try {
            $element->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.type-seguro')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.type-seguro')]) ], 500);
        }
    }

    public function get(TipoSeguro $element)
    {
        return response()->json($element);
    }

    public function getAll(Request $request, TipoSeguroRepository $repo)
    {
        $q = $request->q;
        $headers = ["Id", "Nombre", "Valor"];
        if ($q) {
            $elements = $repo->datatable($request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatable($request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function order(Request $request){
        $elements = $request->all();
        try{
            for ($i=0; $i < count($elements); $i++) { 
                $element = TipoSeguro::UpdateOrCreate(["id"=>$elements[$i]["id"]],["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.type-seguro')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.type-seguro')])],500);
        }
    }
}
