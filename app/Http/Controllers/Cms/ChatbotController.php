<?php

namespace App\Http\Controllers\Cms;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\ChatLead;
use App\ChatQualification;
use App\Repositories\ChatbotRepository;

class ChatbotController extends Controller
{
    public function index()
    {
        return view("pages.chatbot");
    }

    public function leadsGetAll(Request $request, ChatbotRepository $repo)
    {
        $q = $request->q;
        $headers = ["id", "Nombre", "Móvil", "Email", "Proyecto", "Host", "Registrado el"];
        if ($q) {
            $elements = $repo->datatable($request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatable($request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function qualificationGet(Request $request, ChatbotRepository $repo)
    {
        $elements = $repo->qualifications($request->date,$request->range);
        return response()->json($elements);
    }

}