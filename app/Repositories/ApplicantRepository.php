<?php
namespace App\Repositories;

use App\Applicant;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class ApplicantRepository
{
    public function datatable($items_per_page, $q = false)
    {
        if ($q) {
            $applicants = Applicant::select('id', 'name', 'email', 'mobile', 'job', 'pdf')
            ->where('name', 'like', $search.'%')
            ->OrWhere('job', 'like', $search.'%')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        } else {
            $applicants = Applicant::select('id', 'name', 'email', 'mobile', 'job', 'pdf')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        }
        foreach ($applicants as $applicant) {
            $pdf = null;
            //$pdf = route('cms.get-file',["folder"=>'files','subfolder'=>'applicants','file'=>$applicant["pdf"]]);
            //$pdf = Storage::disk('public')->url('files/applicants-12920/'.$applicant["pdf"]);
            $pdf = config('services.files_url').'/applicants-010221/'.$applicant["pdf"];
            $data[] = array(
                "id" => $applicant["id"],
                "name" => $applicant["name"],
                "email" => $applicant["email"],
                "mobile" => $applicant["mobile"],
                "job" => $applicant["job"],
                "pdf" => "<a style='text-decoration:underline;' target='_blank' href=".$pdf.">Ver PDF</a>"
            );
        }
        $applicants = $applicants->toArray();
        if (isset($data)) {
            $applicants["data"] = '';
            $applicants["data"] = $data;
        }
        return $applicants;
    }
}
