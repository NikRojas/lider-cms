<?php

namespace App\Http\Controllers\Api\Reserve;

use App\Advisor;
use App\CredentialPayment;
use App\Customer;
use App\Department;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\Api\Reservation\CustomerRequest;
use App\MasterDocumentType;
use App\Order;
use App\OrderDetail;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use GuzzleHttp\Client;

class PostController extends BaseController
{
    private $urlCreatePayment = 'https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment';
    //private $tokenPayment = 'ODkyODk3NTg6dGVzdHBhc3N3b3JkXzd2QXR2TjQ5RThBZDZlNmloTXFJT3ZPSEM2UVY1WUttSVhneGlzTW0wVjdFcQ==';

    public function paymentInit(Request $request){
        //$orderId = $request->order;
        $department = Department::where('slug',$request->slug)->with('projectRel')->first();
        if (!$department) {
            return $this->sendError("");
        }
        $price_deparment_separation = $department->projectRel->price_separation;
        $price_deparment_separation = intval(str_replace(".", "", $price_deparment_separation));
        $body = [
            "amount" => $price_deparment_separation,
            "currency" => "PEN",
            //Order
            "orderId" => "myOrderId-999999",
            "customer" => ["email" => "test@example.com"]
        ];
        //dd($body);
        //Cada Proyecto tiene un usuario y una password diferente;
        $credentialPayment = CredentialPayment::where('project_id',$department->project_id)->first();
        #Si no esta registrado ninguna credencial
        if (!$credentialPayment) {
            return $this->sendError(trans('custom.title.error'), ['active' => false], 500);
        }
        #Si esta en modo Test
        if(!$credentialPayment->active){
            return $this->sendError(trans('custom.title.error'), ['active' => false, 'mode' => false], 500);
        }
        #Si no tiene Password de Producción
        if(!$credentialPayment->password_prod){
            return $this->sendError(trans('custom.title.error'), ['active' => false, 'pass' => false], 500);
        }
        #Si no tiene Token JS de Producción
        if(!$credentialPayment->token_js_prod){
            return $this->sendError(trans('custom.title.error'), ['active' => false, 'js' => false], 500);
        }
        $authToken = $credentialPayment->user.':'.$credentialPayment->password_prod;
        $codeAuthToken = base64_encode($authToken);
        #Test
        //$authToken = '89289758:testpassword_7vAtvN49E8Ad6e6ihMqIOvOHC6QV5YKmIXgxisMm0V7Eq';
        //$codeAuthToken = base64_encode($authToken);
        //$TESTcodeAuthToken = 'ODkyODk3NTg6dGVzdHBhc3N3b3JkXzd2QXR2TjQ5RThBZDZlNmloTXFJT3ZPSEM2UVY1WUttSVhneGlzTW0wVjdFcQ==';
        #Test
        try {
            $client = new Client();
            $response = $client->post($this->urlCreatePayment, [
                'headers' => ['Content-Type' => 'application/json', 'Authorization' => "Basic ".$codeAuthToken],
                'body'    => json_encode($body)
            ]); 
            $responseData = json_decode($response->getBody()->getContents());
            return $this->sendResponse(['success' => true, "t" => $responseData->answer->formToken, 'j' => $credentialPayment->token_js_prod], trans('custom.title.success'), 200);
        }
        catch (\GuzzleHttp\Exception\RequestException $e) {
            return $this->sendError(trans('custom.title.error'), ['success' => false], 500);
        }
    }

    public function customer(CustomerRequest $request){
        return $this->sendResponse([], trans('custom.title.success'), 200);
    }

    public function pay(Request $request){
        $department = Department::where('slug',$request->slug)->with('projectRel')->first();
        if (!$department) {
            return $this->sendError("");
        }
        //Aca se tiene que ver la disponibilidad del departamento antes de pagar

        //Si no esta disponible mandar error

        //Si esta disponible proceder con el pago
        $dt = MasterDocumentType::where('description',$request->type_document_id)->first();
        $r_customer = request(['document_number','name','lastname','lastname_2','email','mobile']);
        $r_customer = array_merge($r_customer, [ "type_document_id" => $dt->id]);
        $checkCustomer = Customer::where('document_number',$request->document_number)->first();
        try {
            if($checkCustomer){
                $customer = Customer::UpdateOrCreate(["id" => $checkCustomer->id],$r_customer);
            }
            else{
                $slug = Str::random(20);
                $customer = Customer::UpdateOrCreate(array_merge($r_customer, ["slug" => $slug]));
            }
            //return $this->sendResponse([], trans('custom.title.success'), 200);
        } catch (\Exception $e) {
            dd($e);
            //OCURRIO UN ERROR AL PROCESAR EL PAGO
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
        $advisor = null;
        $price_deparment_separation = $department->projectRel->price_separation;
        //Procesar los items con su descuento y su total
        $r_order = ["customer_id" => $customer->id, "department_id" => $department->id, "total_price" => $price_deparment_separation, "order_date" => Carbon::now()];
        #Setear Asesor si viene desde la URL de Separacion
        if($request->adv){
            $r_advisor = $request->adv;
            $advisor = Advisor::where('sap_code',$r_advisor)->first();
            if($advisor){
                $r_order = array_merge($r_order,["advisor_id" => $advisor->id]);
            }
        }
        try {
            $order = Order::UpdateOrCreate($r_order);
        }
        catch (\Exception $e) {
            //OCURRIO UN ERROR AL PROCESAR EL PAGO
            dd($e);
            return $this->sendError(trans('custom.order.payment'), [], 500);
        }
        $r_order_detail = ["order_id" => $order->id, "project_id" => $department->project_id, "quantity" => 1, "department_id" => $department->id, 'price_element' => $price_deparment_separation, 'total_price' => $price_deparment_separation];
        try {
            $order_detail = OrderDetail::UpdateOrCreate($r_order_detail);
            return $this->sendResponse([], trans('custom.title.success'), 200);
        }
        catch (\Exception $e) {
            //OCURRIO UN ERROR AL PROCESAR EL PAGO
            dd($e);
            return $this->sendError(trans('custom.order.payment'), [], 500);
        }
        //Transaccion con Pasarela segun Proyecto
        //Si es exitoso

        //Si hay fallo
        //OCURRIO UN ERROR AL PROCESAR EL PAGO Y MANDAR EL ERROR RESPECTIVO
    }
}
