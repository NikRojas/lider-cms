<?php

namespace App\Http\Controllers\Cms\Leads;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\LeadRepository;
use App\LeadVideocall;
use App\Http\Requests\Cms\ApplicantDestinationRequest;
use App\EmailDestination;
use App\Http\Traits\CmsTrait;

class LeadOnlineController extends Controller
{
    use CmsTrait;
    
    public function index()
    {
        return view("pages.lead.online");
    }

    public function getAll(Request $request, LeadRepository $repo)
    {
        $q = $request->q;
        $headers = ["id", "Nombre", "Teléfono", "Email", "DNI", "Horario", "Proyecto", "Asesor"];
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

    public function update(ApplicantDestinationRequest $request)
    {
        $email_destination = $this->getArrayColumn($request->email_destination);
        $information = ["leads_videocall" => $email_destination,"type" => "videocall"];
        //dd($information);
        $information_registered = EmailDestination::where('type', 'videocall')->first();
        try {
            if ($information_registered) {
                $information = EmailDestination::UpdateOrCreate(["id"=>$information_registered->id], $information);
            } else {
                $information = EmailDestination::UpdateOrCreate($information);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.plural.success', ['name' => trans('custom.attribute.emails')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.plural.error', ['name' => trans('custom.attribute.emails')]) ], 500);
        }
    }

    public function getEmailDestination()
    {
        $data = EmailDestination::where('type', 'videocall')->first();
        return response()->json($data);
    }
}
