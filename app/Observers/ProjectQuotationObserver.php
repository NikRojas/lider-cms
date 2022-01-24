<?php

namespace App\Observers;

use App\Advisor;
use App\Jobs\Webhook;
use App\LogSapConnection;
use App\Notifications\ProjectQuotationNotification;
use App\Notifications\UserProjectQuotationNotification;
use App\Project;
use App\ProjectQuotation;
use App\SapCredential;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Str;
use GuzzleHttp\Client;

class ProjectQuotationObserver
{
    private $url = '/api/leads/asesores/proyecto?codigo=';
    private $lscType = 'Obtener Asesores Disponibles';

    public function created(ProjectQuotation $lead)
    {
        //Log::info("Test Log Permiso");
        $this->url = config('services.sap_url').$this->url;
        #Obtener Proyectos con Codigo SAP
        $project = Project::where('id', $lead->project_id)->first();
        #Obtener Credenciales
        $sapCredentials = SapCredential::first();
        if (!$sapCredentials->token) {
            $lsc = LogSapConnection::UpdateOrCreate(["type" => $this->lscType, 'description' =>  trans('custom.message.sap.no_token')]);
        }
        $slug = Str::random(20);
        $asesoresDesdeSAP = NULL;
        try {
            $client = $responseSap = NULL;
            $client = new Client();
            $responseSap = $client->request('GET', $this->url . $project->sap_code, [
                'headers' => ['Content-Type' => 'application/json', 'Authorization' => $sapCredentials->token]
            ]);
            $status = $responseSap->getStatusCode();
            $responseData = json_decode($responseSap->getBody());
            $description = 'Proyecto ' . $project->name_es . ' (Código SAP:'.$project->sap_code.')';
            if($responseData->exito){
                $description = $description.' - Éxito.';
                $asesoresDesdeSAP = $responseData->asesores;
            }
            else{
                $status = 500;
                $description = $description.' - Error Retorno SAP.'; 
            }
            #LogSapConnection
            $lsc = new LogSapConnection();
            $lsc->type = $this->lscType;
            $lsc->status = $status;
            $lsc->slug = $slug;
            $lsc->description = $description;
            $lsc->response = ["asesores" => $responseData->asesores];
            $lsc->save();
        }
        catch (\GuzzleHttp\Exception\RequestException $e) {
            #Cuando sea cualquier código de error, se enviara un email al correo indicado.
            $status = $e->getResponse()->getStatusCode();
            $description = 'Proyecto ' . $project->name_es . ' (Código SAP:'.$project->sap_code.') - Error.';
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $this->lscType, 'status' => $status, 'description' =>  (string) $description]);
        }
        
        $advisorId = null;
        $project = $lead->projectRel;
        $advisors = $project->advisorsRel;
        $advisorsPluck = array_filter($advisors->pluck('sap_code')->values()->all());
        $advisorsPluckSinNull = $advisorsPluck;
        $asesoresDesdeSAPPluck = collect($asesoresDesdeSAP)->pluck('codigo')->values()->all();
        //Log::info($advisorsPluckSinNull);
        //Log::info($asesoresDesdeSAPPluck);
        $asesoresFinal = array_intersect($advisorsPluckSinNull, $asesoresDesdeSAPPluck);
        Log::info($asesoresFinal);
        //$typeDepartment = $lead->projectTypeDepartmentRel;
        $ifItsFirstRecord = ProjectQuotation::count();
        //Is First Record
        if($ifItsFirstRecord == 1){
            //$advisorId = $advisors->first()->id;
            $advisorId = Advisor::where('sap_code',$asesoresFinal[0])->first()->id;
        }
        else{
            $advisorsTotal = count($asesoresFinal) - 1;
            $lastLeads = ProjectQuotation::orderBy('created_at','desc')->skip(1)->take($advisorsTotal)->get();
            $pluckAdvisors = [];
            foreach ($asesoresFinal as $key => $value) {
                $el = null;
                $el = Advisor::where('sap_code',$value)->first();
                if($el){
                    $pluckAdvisors[] = $el->id;
                }
            }
            $pluckAdvisors = collect($pluckAdvisors);
            $pluckAdvisorsLastLeads = $lastLeads->pluck('advisor_id');
            $diff = $pluckAdvisors->diff($pluckAdvisorsLastLeads);
            $diff = $diff->all();
            if(!$diff){
                $advisorId = $advisors->first()->id;
            }
            else{
                $advisorId = array_pop($diff);
            }
        }
        $lead->advisor_id = $advisorId;
        $lead->save();
        $advisor = Advisor::find($advisorId);

        $lead = $lead->load('projectRel.statusRel','projectRel.ubigeoRel','advisorRel','projectTypeDepartmentRel','projectRel.financingOptionsRel');
        if($lead->projectRel["send_to_email"]){
            Notification::route('mail',$advisor->email)->notify(new ProjectQuotationNotification($lead));  
        }
        //Log::info($advisor);
        Notification::route('mail',$lead->email)->notify(new UserProjectQuotationNotification($lead));  
        if($lead->projectRel["webhook_url_active"]){
            Webhook::dispatch($lead,$lead->projectRel["webhook_url"],$advisor->sap_code,1);
        }
    }
}
