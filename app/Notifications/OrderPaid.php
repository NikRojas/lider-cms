<?php

namespace App\Notifications;

use App\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class OrderPaid extends Notification implements ShouldQueue
{
    use Queueable;
    private $order;
    private $resend;

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
                    ->view('emails.orders.paid', ['order' => $this->order]);
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
