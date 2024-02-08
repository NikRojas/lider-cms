<?php

namespace App\Notifications;

use App\FinancingOption;
use App\SocialNetwork;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserProjectQuotationNotification extends Notification implements ShouldQueue
{
    use Queueable;
    private $lead;
    private $financingOptions;
    private $socialNetworks;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    //public function __construct($lead, $project, $typeDepartment, $advisor)
    public function __construct($lead)
    {
        $this->lead = $lead;
        $this->socialNetworks = SocialNetwork::select('id','url','master_social_network_id')->with('master_social_networks:id,icon,name')->orderBy('index','asc')->get();  
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
                    ->view('emails.user-quotation', ['lead' => $this->lead, "financingOptions" => $this->financingOptions,
                "social_networks" => $this->socialNetworks]);
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
