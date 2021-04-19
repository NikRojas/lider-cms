<?php

namespace App\Jobs;

use App\ProjectQuotation;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use GuzzleHttp\Client;

class Webhook implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $lead;
    private $webhook_url;
    private $is_quotation;
    private $advisor;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($lead, $webhook_url, $advisor = false, $is_quotation = false)
    {
        $this->lead = $lead;
        $this->webhook_url = $webhook_url;
        $this->is_quotation = $is_quotation;
        $this->advisor = $advisor;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        /*Log::info($this->lead);
        Log::info($this->webhook_url);
        Log::info($this->is_quotation);*/
        $leadToSend = [];
        if($this->is_quotation){
            $leadToSend["name"] = $this->lead->name;
            $leadToSend["lastname"] = $this->lead->lastname;
            $leadToSend["document_number"] = $this->lead->document_number;
            $leadToSend["mobile"] = $this->lead->mobile;
            $leadToSend["message"] = $this->lead->message;
            $leadToSend["utm_source"] = $this->lead->utm_source;
            $leadToSend["utm_medium"] = $this->lead->utm_medium;
            $leadToSend["utm_campaign"] = $this->lead->utm_campaign;
            $leadToSend["utm_term"] = $this->lead->utm_term;
            $leadToSend["utm_content"] = $this->lead->utm_content;
            $leadToSend["created_at"] = $this->lead->created_at_format;
            $leadToSend["project"] = $this->lead->projectRel->name_es;
            $leadToSend["tipology"] = $this->lead->projectTypeDepartmentRel->name;
            $leadToSend["identifier_web"] = config('services.web_url')."/cotizacion?id=".$this->lead->identifier_str;
            $leadToSend["price"] = $this->lead->projectTypeDepartmentRel->price_format;
            $leadToSend["area"] = $this->lead->projectTypeDepartmentRel->area;
            $leadToSend["asesor"] = $this->advisor;
            $leadToSend["type"] = "Cotización";
        }
        else{
            $this->lead->type = "Cita Online";
        }
        $client = new Client();
        $response = $client->request('POST', $this->webhook_url, ['json' => $leadToSend]);
        //Log::info($leadToSend);
        Log::info($response->getStatusCode());
        $status = $response->getStatusCode();
        if($this->is_quotation){
            if($status == 200){
                $toUpdate = ProjectQuotation::find($this->lead->id);
                $toUpdate->sended_to_webhook = true;
                $toUpdate->save();
            }   
        }
        else{
            
        }
        //Log::info(json_decode($response->getBody()));
    }
}
