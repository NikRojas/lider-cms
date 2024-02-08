<?php

namespace App\Notifications;

use App\FloorSector;
use App\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\DB;

class OrderPaid extends Notification implements ShouldQueue
{
    use Queueable;
    private $order;
    private $resend;
    private $deparment;
    private $warehouses;
    private $parkings;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Order $order, $resend = false)
    {
        $this->order = $order->load('orderDetailsRel.departmentRel','orderDetailsRel.projectRel.ubigeoRel'
        ,'orderDetailsRel.projectRel.statusRel','customerRel.documentTypeRel',
        'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel','orderDetailsRel.departmentRel.viewRel');
        $deparment = $order->orderDetailsRel->filter(function ($item) {
            return $item->departmentRel->sector_id == 1 || $item->departmentRel->sector_id == 4;
        });
        $this->deparment = $deparment[0]->departmentRel;
        $warehouses = [];
        $parkings = [];
        if(count($order->orderDetailsRel) > 1){
            $estates = $order->orderDetailsRel->pluck('departmentRel');
            $parkings = $estates->filter(function ($item) {
                return $item->sector_id == 2;
            });
            if(count($parkings)){
                foreach ($parkings as $keyDep => $valueDep) {
                    $parkingOnFloor = DB::table('floors_sector_departments')->where('department_id',$valueDep->id)->first();
                    if($parkingOnFloor){
                        $valueDep["floorView"] = FloorSector::find($parkingOnFloor->floor_id);
                    }
                    else{
                        $valueDep["floorView"] = NULL;
                    }
                }
            }
            $parkings = $parkings->values()->all();
            $warehouses = $estates->filter(function ($item) {
                return $item->sector_id == 3;
            });
            if(count($warehouses)){
                foreach ($warehouses as $keyDep => $valueDep) {
                    $warehouseOnFloor = DB::table('floors_sector_departments')->where('department_id',$valueDep->id)->first();
                    if($warehouseOnFloor){
                        $valueDep["floorView"] = FloorSector::find($warehouseOnFloor->floor_id);
                    }
                    else{
                        $valueDep["floorView"] = NULL;
                    }
                }
            }
            $warehouses = $warehouses->values()->all();
        }
        $this->parkings = $parkings;
        $this->warehouses = $warehouses;
        $this->resend = $resend;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database','mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject(trans('custom.mail.subjects.order_paid', ['name' => $this->order->customerRel["name"]]))
                    ->view('emails.orders.paid', ['order' => $this->order,"department" => $this->deparment, "warehouses" => $this->warehouses, "parkings" => $this->parkings]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'order_id' => $this->order->id,
            'email' => $this->order->customerRel["email"],
            'resend' => $this->resend
        ];
    }
}
