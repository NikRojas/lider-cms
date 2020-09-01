<?php

namespace App\Http\Controllers\Cms\Leads;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\LeadRepository;
use App\LeadVideocall;

class LeadOnlineController extends Controller
{
    public function index()
    {
        return view("pages.lead.online");
    }

    public function getAll(Request $request, LeadRepository $repo)
    {
        $q = $request->q;
        $headers = ["id", "Nombre", "Telefono", "Correo", "Medio", "Turno del día"];
        if ($q) {
            $elements = $repo->datatableOnline($request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatableOnline($request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);

        return response()->json([]);
    }

    public function get(LeadVideocall $element)
    {
        return response()->json($element);
    }
    
    public function destroy(LeadVideocall $element)
    {
        try {
            $element->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.lead')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.lead')]) ], 500);
        }
    }
}
