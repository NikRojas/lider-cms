<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Repositories\LeadRepository;
use App\Http\Requests\Admin\LeadDestinationRequest;
use App\Lead;
use App\Department;
use App\LeadSource;
use App\EmailDestination;

use App\Http\Traits\AdminTrait;

class LeadsController extends Controller
{
    use AdminTrait;
    
    public function index()
    {
        $departments = Department::all();
        $leads_by_department = NULL;
        foreach ($departments as $key => $value) {
            $leads_by_department[] = array(
                "name" => $value->name,
                "count" =>  Lead::where('department_id',$value->id)->count(),
                "logo" => $value->logo,
            );
        } 

        $sources = LeadSource::all();
        $leads_by_source = NULL;
        foreach ($sources as $key => $value) {
            $leads_by_source[] = array(
                "name" => $value->name,
                "count" =>  Lead::where('lead_source_id',$value->id)->count(),
            );
        } 
        return view ("pages.contacts",compact('leads_by_department','leads_by_source'));
    }

    public function getContacts(Request $request,LeadRepository $repo){
        $q = $request->buscar;
        if($q){
            $contacts = $repo->datatable($request->desde,$q);
        }
        else{
            $contacts = $repo->datatable($request->desde);
        }
        $headers = ["Id","Nombre","Teléfono","Email","Procede de","Fuente"];
        $contacts["headers"] = $headers;
        return response()->json($contacts); 
    }

    public function getContact(Lead $lead){
        return response()->json($lead->load('departmentRel:id,name,title','leadSourceRel:id,name','leadMediumRel:id,name'));
    }

    public function delete(Lead $lead){
        try{
            $lead = $lead->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.lead')])]);
        }   
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.lead')]) ],500);    
        } 
    }

    public function update(LeadDestinationRequest $request){
        $email_destination = $this->getArrayColumn($request->email_destination_leads);
        //$information = array_merge($information,["email_destination" => $email_destination]);
        $information = ["email_destination_leads" => $email_destination, "department_id" => $request->department_id, "type" => 'lead' ];
        //dd($information);
        $information_registered = EmailDestination::where("department_id",$request->department_id)->first();
        try{
            if($information_registered){
                $information = EmailDestination::UpdateOrCreate(["id"=>$information_registered->id],$information);
            }
            else{
                $information = EmailDestination::UpdateOrCreate($information);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.plural.success', ['name' => trans('custom.attribute.emails')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.plural.error', ['name' => trans('custom.attribute.emails')]) ],500);
        }
    }

    public function getEmailDestination(){
        $data = EmailDestination::where('department_id','!=',NULL)->with('relDepartment:id,name,title,logo')->orderBy('department_id')->get();
        return response()->json($data);
    }
}