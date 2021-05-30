<?php

namespace App\Notifications;

use App\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class OrderReceived extends Notification implements ShouldQueue
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
        $this->order = $order->load('customerRel','orderDetailsRel.projectRel');
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
                    ->subject(trans('custom.mail.subjects.order_received', ['name' => $this->order->customerRel["name"]]))
                    ->line('Proyecto.'.$this->order->orderDetailsRel[0]["projectRel"]["name_es"])
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for using our application!');
    }

    /*public function toDatabase($notifiable)
    {
        return [$this->lead];
    }*/

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
