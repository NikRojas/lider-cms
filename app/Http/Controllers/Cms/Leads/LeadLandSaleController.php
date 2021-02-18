<?php

namespace App\Http\Controllers\Cms\Leads;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\LeadRepository;
use App\LeadSaleLand;
use App\Http\Requests\Cms\ApplicantDestinationRequest;
use App\EmailDestination;
use App\Exports\LeadSaleLandExport;
use App\Http\Requests\Cms\Export\LeadExportExcel;
use App\Http\Traits\CmsTrait;

class LeadLandSaleController extends Controller
{
    use CmsTrait;
    
    public function index()
    {
        return view("pages.lead.landsale");
    }

    public function getAll(Request $request, LeadRepository $repo)
    {
        $q = $request->q;
        $headers = ["id", "Nombre", "Móvil", "Email",'Área', "Registrado el"];
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

    public function update(ApplicantDestinationRequest $request)
    {
        $email_destination = $this->getArrayColumn($request->email_destination);
        $information = ["leads_sale_land" => $email_destination,"type" => "sale_land"];
        //dd($information);
        $information_registered = EmailDestination::where('type', 'sale_land')->first();
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
        $data = EmailDestination::where('type', 'sale_land')->first();
        return response()->json($data);
    }

    public function allExport()
    {
        $leads = LeadSaleLand::orderBy('created_at', 'asc')->get();
        return new LeadSaleLandExport(null, null, $leads);
    }

    public function filterExport(LeadExportExcel $request)
    {
        $from = date("Y-m-d H:i:s", strtotime($request->from));
        $to = date("Y-m-d H:i:s", strtotime($request->to));
        $leads = LeadSaleLand::whereBetween('created_at', [$from,$to])->orderBy('created_at', 'asc')->get();
        return (new LeadSaleLandExport($from,$to,$leads));
    }
}
