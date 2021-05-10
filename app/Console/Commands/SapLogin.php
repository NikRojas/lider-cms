<?php

namespace App\Console\Commands;

use App\LogSapConnection;
use App\SapCredential;
use GuzzleHttp\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class SapLogin extends Command
{
    private $url = 'https://apps.lider.com.pe:8072/api/seguridad/login';
    //private $url = 'http://127.0.0.1:9000/api';
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sap:login';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Login SAP';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
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
    }
}
