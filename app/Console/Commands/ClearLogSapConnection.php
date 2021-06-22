<?php

namespace App\Console\Commands;

use App\LogSapConnection;
use Carbon\Carbon;
use Illuminate\Console\Command;

class ClearLogSapConnection extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sap:clear-log';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear logs SAP Connection';

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
        $last48Hours = Carbon::now()->subDay(2);
        try {
            $lsc = LogSapConnection::where("created_at","<",$last48Hours)->delete();
        }
        catch (\Exception $e) {

        }
    }
}
