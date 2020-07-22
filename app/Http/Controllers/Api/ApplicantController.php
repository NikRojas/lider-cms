<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Applicant;
use App\Http\Requests\Api\ApplicantRequest;
use App\Http\Traits\AdminTrait;
use Illuminate\Support\Facades\Storage;

class ApplicantController extends Controller
{
  use AdminTrait;

    public function save(ApplicantRequest $request)
    {
        $applicant = request(['full_name','phone', 'email', 'job','url']);
        $name = $this->setFileName('a-',$request->file('pdf'));
        $store = Storage::disk('gcs')->putFileAs('files/applicants-16720/',$request->file('pdf'),$name);
        if(!$store){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> "Ocurrió un error al subir el archivo. Por favor inténtelo en unos minutos." ],500);    
        }
        $applicant = array_merge($applicant,["pdf"=>$name]);
		    try {
            $applicant = Applicant::UpdateOrCreate($applicant);
            return response()->json(['title'=> trans('custom.title.success')],200); 
        } catch (\Exception $e) {
            //dd($e);
            return response()->json(['title'=> trans('custom.title.error')],500); 
        }
    }

    
}
