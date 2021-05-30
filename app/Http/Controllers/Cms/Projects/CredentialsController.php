<?php

namespace App\Http\Controllers\Cms\Projects;

use App\CredentialPayment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Project\UpdatePaymentCredential;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\Project;
use Illuminate\Support\Str;

class CredentialsController extends Controller
{
    use CmsTrait;

    public function index($element)
    {
        $project = Project::where('slug_es', $element)->firstOrFail();
        $credential = CredentialPayment::where('project_id',$project->id)->first();
        return view("pages.projects.credentials.index", compact('project','credential'));
    }

    public function updateCredential(UpdatePaymentCredential $request){
        $request_element = request(["user","password_test",'password_prod']);
        $project = Project::where('id',$request->project)->first();
        $registered = CredentialPayment::where('project_id',$request->project)->first();
        try{
            if($registered){
                $element = CredentialPayment::UpdateOrCreate(["id"=>$registered->id],$request_element); 
            }
            else{
                $element = CredentialPayment::UpdateOrCreate(array_merge($request_element,["project_id" => $project->id])); 
            }
            $request->session()->flash('success', trans('custom.message.update.success', ['name' => trans('custom.attribute.element')]));
            return response()->json(["route" => route('cms.projects.credentials.index',["element" => $project->slug_es])]);
        }
        catch(\Exception $e){
            $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.element')]));
            return response()->json(["route" => route('cms.projects.credentials.index',["element" => $project->slug_es])],500);
        }
    }

    public function activate(Request $request){
        $request_element = request(["active"]);
        $project = Project::where('id',$request->project_id)->first();
        try{
            $element = CredentialPayment::UpdateOrCreate(["id"=>$request->id],$request_element); 
            $request->session()->flash('success', trans('custom.message.update.success', ['name' => trans('custom.attribute.element')]));
            return response()->json(["route" => route('cms.projects.credentials.index',["element" => $project->slug_es])]);
        }
        catch(\Exception $e){
            $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.element')]));
            return response()->json(["route" => route('cms.projects.credentials.index',["element" => $project->slug_es])],500);
        }
    }

    public function updateTokens(Request $request){
        $request_element = request(["token_test","token_prod",'token_js_test','token_js_prod','token_sha_256_test','token_sha_256_prod']);
        $project = Project::where('id',$request->project_id)->first();
        try{
            $element = CredentialPayment::UpdateOrCreate(["id"=>$request->id],$request_element); 
            $request->session()->flash('success', trans('custom.message.update.success', ['name' => trans('custom.attribute.element')]));
            return response()->json(["route" => route('cms.projects.credentials.index',["element" => $project->slug_es])]);
        }
        catch(\Exception $e){
            $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.element')]));
            return response()->json(["route" => route('cms.projects.credentials.index',["element" => $project->slug_es])],500);
        }
    }
}
