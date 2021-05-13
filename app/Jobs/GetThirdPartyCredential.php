<?php

namespace App\Jobs;

use App\LogSapConnection;
use App\SapCredential;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class GetThirdPartyCredential implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    private $url = 'https://apps.lider.com.pe:8072/api/seguridad/login';
    //private $url = 'http://127.0.0.1:9000/api';

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $getSapCredential = SapCredential::first();
        $client = new Client();
        $response = $client->request('POST', $this->url, [
            'headers' => ['Content-Type' => 'application/json'],
            'json' => ['Usuario' => $getSapCredential->user, 'Clave' => $getSapCredential->password]
        ]);
        $status = $response->getStatusCode();
        $responseFormat = json_decode($response->getBody());
        if($status == 200){
            $description = 'Login Success';
        }
        else{
            $description = 'Login Error';
        }
        if(!$responseFormat->token){
            $description = 'Login Token No Recibido';
        }
        else{
            $description = 'Login Credenciales Obtenidas';
            $sc = SapCredential::UpdateOrCreate(['id' => $getSapCredential->id],['token' => $responseFormat->token]);
        }
        $lsc = LogSapConnection::UpdateOrCreate(["type" => 'login', 'status' => $status, 'description' =>  (string) $description, 'response' => (string) $response->getBody() ]);
        Log::info('Login Status:'. $status);
    }
}
