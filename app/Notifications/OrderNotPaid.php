<?php

namespace App\Notifications;

use App\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class OrderNotPaid extends Notification implements ShouldQueue
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
        $this->order = $order->load('customerRel','orderDetailsRel.projectRel','orderDetailsRel.tipologyRel');
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
                    ->subject(trans('custom.mail.subjects.order_not_paid', ['name' => $this->order->customerRel["name"]]))
                    ->line('The introduction to the notification.')
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for using our application!');
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
