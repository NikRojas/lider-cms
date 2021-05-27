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
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;

class PostController extends BaseController
{
    private $urlCreatePayment = 'https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment';
    private $urlIpn = '/api/reserve/payment/ipn';

    public function ipn(Request $request){
        Log::info('ipn');
        Log::info($request);
    }

    public function checkHash($key=NULL)
    {
        $supportedHashAlgorithm = array('sha256_hmac');

        /* check if the hash algorithm is supported */
        if (!in_array($_POST['kr-hash-algorithm'],  $supportedHashAlgorithm)) {
            throw new LyraException("hash algorithm not supported:" . $_POST['kr-hash-algorithm'] .". Update your SDK");
        }

        /* on some servers, / can be escaped */
        $krAnswer = str_replace('\/', '/', $_POST['kr-answer']);

        /* if key is not defined, we use kr-hash-key POST parameter to choose it */
        if (is_null($key)) {
            if ($_POST['kr-hash-key'] == "sha256_hmac") {
                $key = $this->_hashKey;
            } elseif ($_POST['kr-hash-key'] == "password") {
                $key = $this->_password;
            } else {
                throw new LyraException("invalid kr-hash-key POST parameter");
            }
        }
    
        $calculatedHash = hash_hmac('sha256', $krAnswer, $key);
        $this->_lastCalculatedHash = $calculatedHash;

        /* return true if calculated hash and sent hash are the same */
        return ($calculatedHash == $_POST['kr-hash']);
    }

    public function paymentInit(Request $request){
        $department = Department::where('slug',$request->slug)->with('projectRel')->first();
        if (!$department) {
            return $this->sendError("");
        }
        #Crear Cliente
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
        } catch (\Exception $e) {
            #Ocurrio un error al crear el cliente
            return $this->sendError(trans('custom.title.error'), ['success '=> false, 'cu' => false], 500);
        }
        #Crear Orden 
        $advisor = null;
        $price_deparment_separation = $department->projectRel->price_separation;
        #Si hubiera descuento se debe procesar aqui antes de guardar en la orden
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
            #Ocurrio un error al crear la orden
            return $this->sendError(trans('custom.order.payment'), ['success '=> false, 'or' => false], 500);
        }
        #Si hubiar descuento del item se debe procesar aqui
        $r_order_detail = ["order_id" => $order->id, "project_id" => $department->project_id, "quantity" => 1, "department_id" => $department->id, 'price_element' => $price_deparment_separation, 'total_price' => $price_deparment_separation];
        try {
            $order_detail = OrderDetail::UpdateOrCreate($r_order_detail);
        }
        catch (\Exception $e) {
            #Ocurrio un error al crear el Detalle de la Orden
            return $this->sendError(trans('custom.order.payment'), ['success '=> false, 'ord' => false], 500);
        }
        #Conexión con Pasarela
        $price_deparment_separation_payment_gateway = intval(str_replace(".", "", $price_deparment_separation));
        $body = [
            "amount" => $price_deparment_separation_payment_gateway,
            "currency" => "PEN",
            #URL Notificación
            "ipnTargetUrl" => config('app.url').$this->urlIpn,
            //Order
            //"orderId" => "myOrderId-999999",
            "orderId" => $order->id,
            "customer" => [
                "email" => $request->email,
                "billingDetails" => [
                    "firstName" => $request->name,
                    "lastName" => $request->lastname,
                    "phoneNumber" => $request->mobile,
                    "identityCode" => $request->document_number
                ],
                "metadata" => [
                    "tipo_documento" => $request->type_document_id,
                    "apellido_paterno" => $request->lastname_2,
                    "proyecto" => $department->projectRel->name_es,
                    "inmueble" => $department->description,
                    "slug_inmueble" => $department->slug
                ]
            ]
        ];
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
    //Esto seria el flujo antes de crear orden o ver si la orden puede ser random
    /*public function pay(Request $request){
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
    }*/
}
