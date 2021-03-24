<?php

namespace App\Notifications;

use App\FinancingOption;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserProjectQuotationNotification extends Notification implements ShouldQueue
{
    use Queueable;
    private $lead;
    private $financingOptions;
    /*private $project;
    private $typeDepartment;
    private $advisor;*/

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    //public function __construct($lead, $project, $typeDepartment, $advisor)
    public function __construct($lead)
    {
        $this->lead = $lead;
        //$this->financingOptions = FinancingOption::where('active',true)->orderBy('index','asc')->get();
        /*$this->project = $project->load('statusRel');
        $this->typeDepartment = $typeDepartment;
        $this->advisor = $advisor;*/
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
                    ->subject(config('app.name').' - Cotización')
                    ->view('emails.user-quotation', ['lead' => $this->lead, "financingOptions" => $this->financingOptions]);
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
