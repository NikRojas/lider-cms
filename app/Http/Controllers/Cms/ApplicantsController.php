<?php

namespace App\Http\Controllers\Cms;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

use App\Applicant;
use App\Repositories\ApplicantRepository;
use App\Http\Requests\Cms\ApplicantDestinationRequest;
use App\EmailDestination;

use App\Http\Traits\CmsTrait;

class ApplicantsController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("pages.applicants");
    }

    public function get(Applicant $applicant)
    {
        return response()->json($applicant);
    }

    public function getAll(Request $request, ApplicantRepository $applicant_repository)
    {
        $search = $request->search;
        if ($search) {
            $applicants = $applicant_repository->datatable($request->desde, $search);
        } else {
            $applicants = $applicant_repository->datatable($request->desde);
        }
        $applicants["headers"] = ["Id","Nombre Completo","Email","Móvil","Puesto","PDF"];
        return response()->json($applicants);
    }
    
    public function destroy(Applicant $applicant)
    {
        $pdf = $applicant->pdf;
        try {
            $applicant_delete = $applicant->delete();
            if ($applicant_delete) {
                Storage::disk('public')->delete('files/applicants-010221/'.$pdf);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.applicant')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.applicant')])], 500);
        }
    }


    public function update(ApplicantDestinationRequest $request)
    {
        $email_destination = $this->getArrayColumn($request->email_destination);
        $information = ["leads_job" => $email_destination,"type" => "applicant"];
        $information_registered = EmailDestination::where('type', 'applicant')->first();
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
        $data = EmailDestination::where('type', 'applicant')->first();
        return response()->json($data);
    }
}
