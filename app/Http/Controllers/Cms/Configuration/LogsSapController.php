<?php

namespace App\Http\Controllers\Cms\Configuration;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Repositories\LogSapRepository;
use App\Http\Traits\CmsTrait;

class LogsSapController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view('pages.configuration.logs-sap');
    }

    public function getAll(Request $request, LogSapRepository $repo)
    {
        $q = $request->q;
        $headers = ["Id", "Registrado el", "Tipo", "Status" , "Descripción","Response"];
        if ($q) {
            $elements = $repo->datatable($request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatable($request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }
}