<?php

namespace App\Http\Controllers\Api\Reserve;

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

class PostController extends BaseController
{
    public function customer(CustomerRequest $request){
        return $this->sendResponse([], trans('custom.title.success'), 200);
    }

    public function pay(Request $request){
        $department = Department::where('slug',$request->slug)->with('projectRel')->first();
        if (!$department) {
            return $this->sendError("");
        }
        //Aca se tiene que ver la disponibilidad del departamento antes de pagar
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
            //return $this->sendResponse([], trans('custom.title.success'), 200);;
        } catch (\Exception $e) {
            dd($e);
            return $this->sendError(trans('custom.title.error'), [], 500);
        }
        $advisor = null;
        $price_deparment_separation = $department->projectRel->price_separation;
        $r_order = ["customer_id" => $customer->id, "department_id" => $department->id, "total_price" => $price_deparment_separation, "order_date" => Carbon::now()];
        if($request->adv){
            $advisor = $request->adv;
            $r_order = array_merge($r_order,["advisor_id" => $advisor]);
        }
        try {
            $order = Order::UpdateOrCreate($r_order);
        }
        catch (\Exception $e) {
            dd($e);
            return $this->sendError(trans('custom.order.payment'), [], 500);
        }
        $r_order_detail = ["order_id" => $order->id, "project_id" => $department->project_id, "quantity" => 1, "department_id" => $department->id, 'price_element' => $price_deparment_separation, 'total_price' => $price_deparment_separation];
        try {
            $order_detail = OrderDetail::UpdateOrCreate($r_order_detail);
            return $this->sendResponse([], trans('custom.title.success'), 200);
        }
        catch (\Exception $e) {
            dd($e);
            return $this->sendError(trans('custom.order.payment'), [], 500);
        }
    }
}
