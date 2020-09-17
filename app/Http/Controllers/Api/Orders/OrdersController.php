<?php


namespace App\Http\Controllers\Api\Orders;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController;
use App\Notifications\OrderNotPaid;
use App\Notifications\OrderReceived;
use App\Notifications\OrderPaid;
use App\Order;

class OrdersController extends BaseController
{
   public function test(){
      
      //Notification::send($users, new LeadGestionable($lead));

      try {
         $order = Order::first()->load('customerRel');
         //dd($order->customerRel);
         $order->customerRel->notify(new OrderReceived($order));
         dd("corresto");
     } catch (\Exception $e) {
         dd($e);
      }
   }

   public function test2(){
      
      try {
         $order = Order::first()->load('customerRel');
         $order->customerRel->notify(new OrderPaid($order));
         dd("corresto2");
     } catch (\Exception $e) {
         dd($e);
      }
   }

   public function test3(){
      try {
         $order = Order::first()->load('customerRel');
         $order->customerRel->notify(new OrderNotPaid($order));
         dd("corresto3");
     } catch (\Exception $e) {
         dd($e);
      }
   }
}
