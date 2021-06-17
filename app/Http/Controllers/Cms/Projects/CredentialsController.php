<?php

namespace App\Http\Controllers\Cms\Projects;

use App\CredentialPayment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Project\SendPaymentRequest;
use App\Http\Requests\Cms\Project\UpdatePaymentCredential;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\Project;
use App\TestValuesPayment;
use Illuminate\Support\Str;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class CredentialsController extends Controller
{
    use CmsTrait;

    public function index($element)
    {
        $project = Project::where('slug_es', $element)->firstOrFail();
        $credential = CredentialPayment::where('project_id',$project->id)->first();
        $values = TestValuesPayment::get();
        return view("pages.projects.credentials.index", compact('project','credential','values'));
    }

    public function updateCredential(UpdatePaymentCredential $request){
        $request_element = request(["user","password_test",'password_prod','type_currency']);
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

    private $urlCreatePayment = 'https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment';

    public function test(Request $request){
        $credentialPayment = CredentialPayment::where('project_id',$request->project_id)->first();
        if(!$credentialPayment->password_test || !$credentialPayment->user || !$credentialPayment->token_js_test){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> 'Ingrese los datos de Test de la Tienda.'], 500);
        }
        if($credentialPayment->type_currency){
            $currency = "PEN";
        }
        else{
            $currency = "USD";
        }
        $body = [
            "amount" => 100,
            "currency" => $currency,
            #URL Notificación
            "ipnTargetUrl" => "",
            //Order
            "orderId" => "ADMIN".Str::random(4),
            "customer" => [
                "email" => "test".Str::random(8)."@test.com",
            ],
        ];
        Log::info($body);
        $authToken = $credentialPayment->user.':'.$credentialPayment->password_test;
        $codeAuthToken = base64_encode($authToken);
        try {
            $client = new Client();
            $response = $client->post($this->urlCreatePayment, [
                'headers' => ['Content-Type' => 'application/json', 'Authorization' => "Basic ".$codeAuthToken],
                'body'    => json_encode($body)
            ]); 
            $responseData = json_decode($response->getBody()->getContents());
            Log::info($response->getBody());
            if($responseData->status == "ERROR"){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> 'Lo sentimos. Ocurrió un error enviando la prueba de venta. Revise las credenciales respectivas.'], 500);
            }
            else if($responseData->status == "SUCCESS"){
                return response()->json(['title' => trans('custom.title.success'), "token" => $responseData->answer->formToken, 'tokenJs' => $credentialPayment->token_js_test], 200);
            }
        }
        catch (\GuzzleHttp\Exception\RequestException $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> 'Lo sentimos. Ocurrió un error enviando la prueba de venta.'], 500);
        }
    }

    public function prod(Request $request){
        $credentialPayment = CredentialPayment::where('project_id',$request->project_id)->first();
        if(!$credentialPayment->password_prod || !$credentialPayment->user || !$credentialPayment->token_js_prod){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> 'Ingrese los datos de Producción de la Tienda.'], 500);
        }
        if($credentialPayment->type_currency){
            $currency = "PEN";
        }
        else{
            $currency = "USD";
        }
        $body = [
            "amount" => 100,
            "currency" => $currency,
            #URL Notificación
            "ipnTargetUrl" => "",
            //Order
            "orderId" => "ADMIN".Str::random(4),
            "customer" => [
                "email" => "test".Str::random(8)."@test.com",
            ],
        ];
        $authToken = $credentialPayment->user.':'.$credentialPayment->password_prod;
        $codeAuthToken = base64_encode($authToken);
        try {
            $client = new Client();
            $response = $client->post($this->urlCreatePayment, [
                'headers' => ['Content-Type' => 'application/json', 'Authorization' => "Basic ".$codeAuthToken],
                'body'    => json_encode($body)
            ]); 
            $responseData = json_decode($response->getBody()->getContents());
            if($responseData->status == "ERROR"){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> 'Lo sentimos. Ocurrió un error enviando la prueba de venta. Revise las credenciales respectivas.'], 500);
            }
            else if($responseData->status == "SUCCESS"){
                return response()->json(['title' => trans('custom.title.success'), "token" => $responseData->answer->formToken, 'tokenJs' => $credentialPayment->token_js_prod], 200);
            }
        }
        catch (\GuzzleHttp\Exception\RequestException $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> 'Lo sentimos. Ocurrió un error enviando la prueba de venta.'], 500);
        }
    }
}
