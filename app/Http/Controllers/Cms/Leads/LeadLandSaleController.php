<?php

namespace App\Http\Controllers\Cms\Leads;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\LeadRepository;
use App\LeadSaleLand;

class LeadLandSaleController extends Controller
{
    public function index()
    {
        return view("pages.lead.landsale");
    }

    public function getAll(Request $request, LeadRepository $repo)
    {
        $q = $request->q;
        $headers = ["id", "Nombre", "Telefono", "Correo",'Área'];
        if ($q) {
            $elements = $repo->datatableLandSale($request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatableLandSale($request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);

        return response()->json([]);
    }

    public function get(LeadSaleLand $element)
    {
        return response()->json($element);
    }

    public function destroy(LeadSaleLand $element)
    {
        try {
            $element->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.lead')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.lead')]) ], 500);
        }
    }
}
