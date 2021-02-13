<?php

namespace App\Http\Controllers\Api;

use App\Applicant;
use App\Http\Requests\Api\Post\SuscribeRequest;
use App\Suscriber;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\Api\Post\ApplicantRequest;
use App\Http\Requests\Api\Post\Lead\OnlineAppointmentRequest;
use App\Http\Requests\Api\Post\Lead\SellLandRequest;
use App\Http\Requests\Api\Post\Lead\TraditionalRequest;
use App\Http\Requests\Api\Post\QuotationRequest;
use App\Lead;
use App\LeadSaleLand;
use App\LeadVideocall;
use App\Project;
use App\ProjectQuotation;
use Illuminate\Support\Facades\Storage;

class PostController extends BaseController
{
    public function suscribe(SuscribeRequest $request)
    {
        $el = request(['name','email']);
		try {
            $el = Suscriber::UpdateOrCreate($el);
            return $this->sendResponse([], trans('custom.title.success'), 200);;
        } catch (\Exception $e) {
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }

    public function onlineAppointment(OnlineAppointmentRequest $request){
        $el = request(['name','email','mobile','document_number','project_id','schedule']);
		try {
            $el = LeadVideocall::UpdateOrCreate($el);
            return $this->sendResponse([], trans('custom.title.success'), 200);;
        } catch (\Exception $e) {
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }

    public function traditional(TraditionalRequest $request){
        $el = request(['name','email','mobile']);
		try {
            $el = Lead::UpdateOrCreate(array_merge($el,["lead_source_id" => 1]));
            return $this->sendResponse([], trans('custom.title.success'), 200);;
        } catch (\Exception $e) {
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }

    public function sellLand(SellLandRequest $request){
        $el = request(['name','email','mobile','message','area','message']);
		try {
            $el = LeadSaleLand::UpdateOrCreate($el);
            return $this->sendResponse([], trans('custom.title.success'), 200);;
        } catch (\Exception $e) {
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }

    public function quotation(QuotationRequest $request){
        $project = Project::where('id', $request->project_id)->first();
        if(!$project){
            return $this->sendError("Not found");
        }
        $el = request(['name','email','mobile','project_type_department_id','document_number','message']);
		try {
            $el = ProjectQuotation::UpdateOrCreate(array_merge($el,["project_id" => $project->id]));
            return $this->sendResponse([], trans('custom.title.success'), 200);;
        } catch (\Exception $e) {
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
    }

    public function applicant(ApplicantRequest $request)
    {
        $applicant = request(['name','mobile', 'email', 'job','url']);
        $name = $this->setFileName('a-',$request->file('pdf'));
        $store = Storage::disk('public')->putFileAs('files/applicants-010221/',$request->file('pdf'),$name);
        if(!$store){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> "Ocurrió un error al subir el archivo. Por favor inténtelo en unos minutos." ],500);    
        }
        $applicant = array_merge($applicant,["pdf"=>$name]);
        //$applicant = array_merge($applicant,["pdf"=> "PDF"]);
		    try {
            $applicant = Applicant::UpdateOrCreate($applicant);
            return response()->json(['title'=> trans('custom.title.success')],200); 
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error')],500); 
        }
    }
}
