<?php

namespace App\Http\Controllers\Cms;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

use App\Applicant;
use App\Repositories\ApplicantRepository;
use App\Http\Requests\Admin\ApplicantDestinationRequest;
use App\EmailDestination;

use App\Http\Traits\CmsTrait;

class ApplicantsController extends Controller
{
    use CmsTrait;

    public function index(){
        return view ("pages.applicants");    
    }

    public function getApplicant(Applicant $applicant){
        return response()->json($applicant);
    }

    public function getApplicants(Request $request,ApplicantRepository $applicant_repository){
        $search = $request->search;
        if($search){
            $applicants = $applicant_repository->datatable($request->desde,$search);
        }
        else{
            $applicants = $applicant_repository->datatable($request->desde);
        }   
        $applicants["headers"] = ["Id","Nombre Completo","Email","Puesto","PDF"];
        return response()->json($applicants); 
    }
    
    public function delete(Applicant $applicant){
        $pdf = $applicant->pdf;
        try {
            $applicant_delete = $applicant->delete();
            if($applicant_delete){
                Storage::disk('gcs')->delete('files/applicants-16720/'.$pdf);    
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.applicant')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.applicant')])],500);
        }
    }


    public function update(ApplicantDestinationRequest $request){
        $email_destination = $this->getArrayColumn($request->email_destination_job);
        //$information = array_merge($information,["email_destination" => $email_destination]);
        $information = ["email_destination_job" => $email_destination,"type" => "applicant"];
        //dd($information);
        $information_registered = EmailDestination::where('type','applicant')->first();
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
        $data = EmailDestination::where('type','applicant')->first();
        return response()->json($data);
    }
}