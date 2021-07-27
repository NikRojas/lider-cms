<?php

namespace App\Http\Controllers\Cms;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\ChatLead;
use App\ChatQualification;
use App\Exports\ChatbotLeadExport;
use App\Http\Requests\Cms\Export\LeadExportExcel;
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

    public function leadsGet(ChatLead $element)
    {
        return response()->json($element);
    }

    public function leadsDestroy(ChatLead $element)
    {
        try {
            $element->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function leadsAllExport()
    {
        $leads = ChatLead::orderBy('created_at', 'asc')->get();
        return new ChatbotLeadExport(null, null, $leads);
    }

    public function leadsFilterExport(LeadExportExcel $request)
    {
        $from = date("Y-m-d H:i:s", strtotime($request->from));
        $to = date("Y-m-d H:i:s", strtotime($request->to));
        $leads = ChatLead::whereBetween('created_at', [$from,$to])->orderBy('created_at', 'asc')->get();
        return (new ChatbotLeadExport($from,$to,$leads));
    }

}