<?php

namespace App\Notifications;

use App\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AdvisorOrderPaid extends Notification implements ShouldQueue
{
    use Queueable;
    private $order;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Order $order)
    {
        $this->order = $order->load('orderDetailsRel.departmentRel','orderDetailsRel.projectRel.ubigeoRel'
        ,'orderDetailsRel.projectRel.statusRel','customerRel.documentTypeRel',
        'orderDetailsRel.departmentRel.tipologyRel.parentTypeDepartmentRel','orderDetailsRel.departmentRel.viewRel');
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
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
                    ->subject(trans('custom.mail.subjects.advisor_order_paid', ['web' => config('app.name'), 'name' => $this->order->customerRel["name"]]))
                    ->view('emails.orders.advisor-paid', ['order' => $this->order]);
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
            //
        ];
    }
}
