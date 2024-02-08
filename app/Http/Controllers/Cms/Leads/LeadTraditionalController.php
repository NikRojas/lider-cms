<?php

namespace App\Http\Controllers\Cms\Leads;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\LeadRepository;
use App\Lead;
use App\Http\Requests\Cms\ApplicantDestinationRequest;
use App\EmailDestination;
use App\Exports\LeadTraditionalExport;
use App\Http\Requests\Cms\Export\LeadExportExcel;
use App\Http\Traits\CmsTrait;

class LeadTraditionalController extends Controller
{
    use CmsTrait;
    
    public function index()
    {
        return view("pages.lead.traditional");
    }

    public function getAll(Request $request, LeadRepository $repo)
    {
        $q = $request->q;
        $headers = ["id", "Nombre", "Móvil", "DNI", "Email", "Departamento", "Fuente", "Registrado El"];
        if ($q) {
            $elements = $repo->datatable($request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatable($request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);

        return response()->json([]);
    }

    public function get(Lead $element)
    {
        return response()->json($element);
    }
    
    public function destroy(Lead $element)
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
        $information = ["leads_traditional" => $email_destination,"type" => "traditional"];
        //dd($information);
        $information_registered = EmailDestination::where('type', 'traditional')->first();
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
        $data = EmailDestination::where('type', 'traditional')->first();
        return response()->json($data);
    }

    public function allExport()
    {
        $leads = Lead::with("sourceRel")->orderBy('created_at', 'asc')->get();
        return new LeadTraditionalExport(null, null, $leads);
    }

    public function filterExport(LeadExportExcel $request)
    {
        $from = date("Y-m-d H:i:s", strtotime($request->from));
        $to = date("Y-m-d H:i:s", strtotime($request->to));
        $leads = Lead::with('sourceRel')->whereBetween('created_at', [$from,$to])->orderBy('created_at', 'asc')->get();
        return (new LeadTraditionalExport($from,$to,$leads));
    }
}
