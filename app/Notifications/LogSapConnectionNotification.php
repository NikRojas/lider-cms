<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class LogSapConnectionNotification extends Notification implements ShouldQueue
{
    use Queueable;
    private $lsc; 

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($lsc)
    {
        $this->lsc = $lsc;
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
                    ->subject(config('app.name').' - Notificación Error Conexión SAP')
                    ->line('Ocurrió un error '.$this->lsc->status.' al actualizar el evento:')
                    ->line($this->lsc->description);
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
