<?php

namespace App\Console\Commands;

use App\LogSapConnection;
use App\SapCredential;
use GuzzleHttp\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class SapLogin extends Command
{
    private $url = 'https://apps.lider.com.pe:8072/api/seguridad/login';
    //private $url = 'http://127.0.0.1:9000/api';
    private $lscType = 'Login';
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
        $slug = Str::random(20);
        try {
            $client = new Client();
            $response = $client->request('POST', $this->url, [
                'headers' => ['Content-Type' => 'application/json'],
                'json' => ['Usuario' => $getSapCredential->user, 'Clave' => $getSapCredential->password]
            ]);
            $status = $response->getStatusCode();
            $responseFormat = json_decode($response->getBody());
            if($status == 200){
                $description = 'Login - Éxito';
            }
            if(!$responseFormat->token){
                $description = 'Login Token No Recibido - Error';
            }
            else{
                $description = 'Login Credenciales Obtenidas - Éxito';
                $sc = SapCredential::UpdateOrCreate(['id' => $getSapCredential->id],['token' => $responseFormat->token]);
            }
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $this->lscType, 'status' => $status, 'description' =>  (string) $description, 'response' => (string) $response->getBody() ]);
        }
        catch (\GuzzleHttp\Exception\RequestException $e) {
            #Cuando sea cualquier código de error, se enviara un email al correo indicado.
            $status = $e->getResponse()->getStatusCode();
            $description = 'Login - Error';
            $lsc = LogSapConnection::UpdateOrCreate(["slug" => $slug, "type" => $this->lscType, 'status' => $status, 'description' =>  (string) $description]);
        }
    }
}
