<?php

namespace App\Http\Controllers\Api\Reserve;

use App\Advisor;
use App\CredentialPayment;
use App\Customer;
use App\Department;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\Api\Reservation\CustomerRequest;
use App\MasterDocumentType;
use App\MasterOrderCycle;
use App\MasterTransactionStatus;
use App\Order;
use App\OrderDetail;
use App\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;
use Lyra\Client as LyraClient;

class PostController extends BaseController
{
    private $urlCreatePayment = 'https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment';
    private $urlIpn = '/api/reserve/payment/ipn';

    #Aca se maneja las transacciones de la Order
    public function ipn(Request $request){
        Log::info($request);
        $rawKrAnswer = json_decode($request["kr-answer"]);
        $orderId = $rawKrAnswer->orderDetails->orderId;
        $orderCycle = $rawKrAnswer->orderCycle;
        $order = Order::with('orderDetailsRel','transactionLatestRel')->findOrFail($orderId);
        #Si tiene ultima transacción
        if($order->transactionLatestRel){
            #Y si esta Cerrada
            $masterOrderCycleClosed = MasterOrderCycle::where('payment_gateway_value','CLOSED')->first();
            if($order->transactionLatestRel->order_cycle_id == $masterOrderCycleClosed->id){
                return $this->sendError(trans('custom.title.error'), ['success '=> false, 'tr_open' => false], 500);
            }
        }
        $orderDetails = $order->orderDetailsRel[0];
        $project_id = $orderDetails->project_id;
        
        $credentialPayment = CredentialPayment::where('project_id',$project_id)->firstorFail();
        $checkCredentials = $this->checkCredentialsStored($credentialPayment);
        if(!$checkCredentials['active']){
            return $this->sendError(trans('custom.title.error'), $checkCredentials, 500);
        }

        /* Username, password and endpoint used for server to server web-service calls */
        LyraClient::setDefaultUsername($credentialPayment->user);
        LyraClient::setDefaultPassword($credentialPayment->password_prod);
        LyraClient::setDefaultEndpoint("https://api.micuentaweb.pe");

        /* publicKey and used by the javascript client */
        LyraClient::setDefaultPublicKey($credentialPayment->token_js_prod);

        /* SHA256 key */
        LyraClient::setDefaultSHA256Key($credentialPayment->token_sha_256_prod);
        
        $client = new LyraClient();
        #Verificar Fraude
        if (!$client->checkHash()) {
            return $this->sendError(trans('custom.title.error'), ['hash' => false], 500);
        }

        #Verificar Disponibilidad
        Log::info($rawKrAnswer->transactions[0]->detailedStatus);

        #Transacción
        //Ver que pasa si viene uno de los q no tenga guardado en base de datos
        $transactionsStatus = MasterTransactionStatus::where('value_detailed_status',$rawKrAnswer->transactions[0]->detailedStatus)->first();
        $masterOrderCycle = MasterOrderCycle::where('payment_gateway_value',$orderCycle)->first();
        if(!$transactionsStatus){
            return $this->sendError(trans('custom.title.error'), ['ts' => false], 500);
        }
        if(!$masterOrderCycle){
            return $this->sendError(trans('custom.title.error'), ['moc' => false], 500);
        }
        try {
            $transaction2 = new Transaction();
            $transaction2->order_id = $orderId;
            $transaction2->transaction_date = Carbon::now();
            $transaction2->amount = $order->total_price;
            $transaction2->transaction_status_id = $transactionsStatus->id;
            $transaction2->response = $request["kr-answer"];
            $transaction2->order_cycle_id = $masterOrderCycle->id;
            $transaction2->save();
            return $this->sendResponse(['success' => true], trans('custom.title.success'), 200);
        }
        catch (\Exception $e) {
            Log::info($e);
            #Ocurrio crear la transacción
            return $this->sendError(trans('custom.title.error'), ['success '=> false, 'utr' => false], 500);
        }
    }

    #Verificar Credenciales
    public function checkCredentialsStored($credentialPayment){
        #Si no esta registrado ninguna credencial
        if (!$credentialPayment) {
            return ['active' => false];
        }
        #Si esta en modo Test
        if(!$credentialPayment->active){
            return ['active' => false, 'mode' => false];
        }
        #Si no tiene Password de Producción
        if(!$credentialPayment->password_prod){
            return ['active' => false, 'pass' => false];
        }
        #Si no tiene Token JS de Producción
        if(!$credentialPayment->token_js_prod){
            return ['active' => false, 'js' => false];
        }
        return ['active' => true ];
    }

    public function paymentInit(Request $request){
        $department = Department::where('slug',$request->slug)->with('projectRel')->first();
        if (!$department) {
            return $this->sendError("");
        }
        $orderId = $request->oi;
        $price_deparment_separation = $department->projectRel->price_separation;
        #Comenzar la transacción
        $transactionsStatusPending = MasterTransactionStatus::where('name','Pendiente')->first();
        $transactionRegistered = Transaction::where('order_id',$orderId)->where('transaction_status_id', $transactionsStatusPending->id)->first();
        #Si no existe registrarla
        if(!$transactionRegistered){
            $masterOrderCycleOpen = MasterOrderCycle::where('payment_gateway_value','OPEN')->first();
            try {
                $transaction = new Transaction();
                $transaction->order_id = $orderId;
                $transaction->transaction_date = Carbon::now();
                $transaction->amount = $price_deparment_separation;
                $transaction->transaction_status_id = $transactionsStatusPending->id;
                $transaction->order_cycle_id = $masterOrderCycleOpen->id;
                $transaction->save();
            }
            catch (\Exception $e) {
                #Ocurrio un error al crear la transacción pendiente
                return $this->sendError(trans('custom.title.error'), ['success '=> false, 'tr_pending' => false], 500);
            }
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
            //"orderId" => $order->id,
            "orderId" => $request->oi,
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
        $checkCredentials = $this->checkCredentialsStored($credentialPayment);
        if(!$checkCredentials['active']){
            return $this->sendError(trans('custom.title.error'), $checkCredentials, 500);
        }
        $authToken = $credentialPayment->user.':'.$credentialPayment->password_prod;
        $codeAuthToken = base64_encode($authToken);
        #Test {
            //$authToken = '89289758:testpassword_7vAtvN49E8Ad6e6ihMqIOvOHC6QV5YKmIXgxisMm0V7Eq';
            //$codeAuthToken = base64_encode($authToken);
            //$TESTcodeAuthToken = 'ODkyODk3NTg6dGVzdHBhc3N3b3JkXzd2QXR2TjQ5RThBZDZlNmloTXFJT3ZPSEM2UVY1WUttSVhneGlzTW0wVjdFcQ==';
        #Test}
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
        #Crear Orden solo si no existe la orden creada
        if(!$request->oi){
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
                return $this->sendResponse(["order_id" => $order->id], trans('custom.title.success'), 200);
            }
            catch (\Exception $e) {
                #Ocurrio un error al crear el Detalle de la Orden
                return $this->sendError(trans('custom.order.payment'), ['success '=> false, 'ord' => false], 500);
            }
        }
        else{
            return $this->sendResponse(["order_id" => $request->id], trans('custom.title.success'), 200);
        }
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
