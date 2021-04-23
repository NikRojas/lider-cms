<?php

namespace App\Http\Controllers\Cms\Leads;

use App\ConfigLead;
use App\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\LeadRepository;
use App\LeadVideocall;
use App\Http\Requests\Cms\ApplicantDestinationRequest;
use App\EmailDestination;
use App\Exports\LeadVideocallExport;
use App\Http\Requests\Cms\Export\LeadExportExcel;
use App\Http\Requests\Cms\WebhookRequest;
use App\Http\Traits\CmsTrait;

class LeadOnlineController extends Controller
{
    use CmsTrait;
    
    public function index()
    {
        //$config = ;
        $projects = Project::where('form_videocall',1)->orderBy('index','asc')->get();
        foreach ($projects as $key => $value) {
            $r = ConfigLead::where('project_id',$value->id)->first();
            if($r){
                $config[] = $r;
            }
            else{
                $config[] = ["webhook_url" => null , "webhook_url_active" => false, "project_id" => $value->id]; 
            }
        }
        return view("pages.lead.online",compact('projects','config'));
        //return view("pages.lead.online",compact('config','projects'));
    }

    public function getWebhook()
    {
        $projects = Project::where('form_videocall',1)->orderBy('index','asc')->get();
        foreach ($projects as $key => $value) {
            $r = ConfigLead::where('project_id',$value->id)->first();
            if($r){
                $config[] = $r;
            }
            else{
                $config[] = ["webhook_url" => null , "webhook_url_active" => false, "project_id" => $value->id]; 
            }
        }
        return response()->json($config);
    }

    public function updateWebhook(WebhookRequest $request)
    {
        //$configFirst = ConfigLead::where('type','online')->first();
        $configFirst = ConfigLead::where('project_id',$request->project_id)->first();
        $el = request(["webhook_url","webhook_url_active",'project_id']);
        try{
            if($configFirst){
                $config = ConfigLead::UpdateOrCreate(["id"=>$configFirst->id], $el);          
            }
            else{
                $config = ConfigLead::UpdateOrCreate(array_merge($el, ["project_id" => $request->project_id]));
            }
            return response()->json(["config" => $config, 'title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.element')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.element')]) ], 500);
        }
    }

    public function getAll(Request $request, LeadRepository $repo)
    {
        $q = $request->q;
        $headers = ["id", "Nombre", "Teléfono", "Email", "DNI", "Horario", "Proyecto", "Asesor", "Registrado el","UTM Source","UTM Medium","UTM Campaign","UTM Term","UTM Content","Enviado a Webhook"];
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

    public function allExport()
    {
        $leads = LeadVideocall::with('advisorRel','projectRel')->orderBy('created_at', 'asc')->get();
        return new LeadVideocallExport(null, null, $leads);
    }

    public function filterExport(LeadExportExcel $request)
    {
        $from = date("Y-m-d H:i:s", strtotime($request->from));
        $to = date("Y-m-d H:i:s", strtotime($request->to));
        $leads = LeadVideocall::with('advisorRel','projectRel')->whereBetween('created_at', [$from,$to])->orderBy('created_at', 'asc')->get();
        return (new LeadVideocallExport($from,$to,$leads));
    }
}
