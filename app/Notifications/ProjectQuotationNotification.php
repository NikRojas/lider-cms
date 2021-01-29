<?php

namespace App\Notifications;

use App\Advisor;
use App\Project;
use App\ProjectTypeDepartment;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ProjectQuotationNotification extends Notification implements ShouldQueue
{
    use Queueable;
    private $lead;
    private $project;
    private $typeDepartment;
    private $advisor;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($lead, $project, $typeDepartment, $advisor)
    {
        $this->lead = $lead;
        $this->project = $project->load('statusRel');
        $this->typeDepartment = $typeDepartment;
        $this->advisor = $advisor;
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
                    ->subject('Cotización')
                    ->line('Estimado:' .$this->lead->first_name)
                    ->line($this->project->description_es)
                    ->line($this->project->name_es)
                    ->line('Estado '.$this->project->statusRel["name_es"])
                    ->line('Tipologia '.$this->typeDepartment->name)
                    ->line('Dormitorios '.$this->typeDepartment->room)
                    ->line('Metraje '.$this->typeDepartment->area)
                    ->line('Asesor')
                    ->line('Nombre '.$this->advisor->name)
                    ->line('Teléfono '.$this->advisor->mobile_masked)
                    ->line('Correo '.$this->advisor->email)
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
            //
        ];
    }
}
