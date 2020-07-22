<?php 
namespace App\Repositories;

use App\Applicant;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class ApplicantRepository 
{
    public function datatable($items_per_page,$q = false){
        if($q){
            $applicants = Applicant::select('id','full_name','email','job','pdf')->where('full_name','like',$search.'%')
            ->OrWhere('job','like',$search.'%')
            ->orderBy('created_at','desc')
            ->paginate($items_per_page);
        }
        else{
            $applicants = Applicant::select('id','full_name','email','job','pdf')
            ->orderBy('created_at','desc')
            ->paginate($items_per_page);
        }   
        foreach($applicants as $applicant){
            $pdf = NULL;
            //$pdf = route('admin.get-file',["folder"=>'files','subfolder'=>'applicants','file'=>$applicant["pdf"]]);
            $pdf = Storage::disk('gcs')->url('files/applicants-16720/'.$applicant["pdf"]);
            $data[] = array(
                "id" => $applicant["id"],
                "full_name" => $applicant["full_name"],
                "email" => $applicant["email"],
                "job" => $applicant["job"],
                "pdf" => "<a target='_blank' href=".$pdf.">Ver PDF</a>"
            );
        }
        $applicants = $applicants->toArray();
        if(isset($data)){
            $applicants["data"] = '';
            $applicants["data"] = $data;
        }
        return $applicants;
    }
}