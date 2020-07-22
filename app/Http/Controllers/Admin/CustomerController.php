<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Customer;

use App\Http\Requests\Admin\CustomerRequest;
use App\Http\Traits\AdminTrait;

use Illuminate\Support\Facades\Storage;

class CustomerController extends Controller
{
    use AdminTrait;

    public function index()
    {
        return view ("pages.customers");
    }

    public function create(CustomerRequest $request){
        $customer = request(["name","status"]);
        $image_name = $this->setFileName('c-',$request->file('image'));
        $store_image = Storage::disk('gcs')->putFileAs('img/customers/',$request->file('image'),$image_name);
        if(!$store_image){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
        $customer = array_merge($customer,["image"=>$image_name]);
        $cliente = $this->getMaxIndex(Customer::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        if(count($cliente) > 0){
            $customer = array_merge($customer,["index"=>$cliente[0]["index"] + 1]); 
        }
        else{
            $customer = array_merge($customer,["index"=>1]);    
        }
        try{
            $customer = Customer::UpdateOrCreate($customer); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.customer')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.customer')]) ],500);    
        }
    }

    public function getCustomer(Customer $customer){
        return response()->json($customer);        
    }

    public function getCustomers(Request $request){
        $customers = Customer::orderBy('index')->get();
        return response()->json($customers);
    }

    public function delete(Customer $customer){
        $image = $customer->image;
        try {
            $delete_customer = $customer->delete();
            if($delete_customer){
                Storage::disk('gcs')->delete('img/customers/'.$image);    
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.customer')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.customer')])],500);
        }
    }

    public function order(Request $request){
        $customers = $request->all();
        try{
            for ($i=0; $i < count($customers); $i++) { 
                $cliente = Customer::UpdateOrCreate(["id"=>$customers[$i]["id"]],["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.customer')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.customer')])],500);
        }
    }

    public function update(CustomerRequest $request,Customer $customer){
        $request_customer = request(["name","status"]);
        if($request->hasFile('image')){
            $image_name = $this->setFileName('c-',$request->file('image'));
            $store_image = Storage::disk('gcs')->putFileAs('img/customers/',$request->file('image'),$image_name);
            if(!$store_image){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_customer = array_merge($request_customer,["image" => $image_name]);   
        }  
        else{
            $request_customer = array_merge($request_customer,["image" => $customer->image]);   
        }
        if($request->hasFile('image') && $customer->image){
            Storage::disk('gcs')->delete('img/customers/'.$customer->image);
        } 
        try{
            $customer = Customer::UpdateOrCreate(["id"=>$customer->id],$request_customer); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.customer')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.customer')]) ],500);
        }
    }
}