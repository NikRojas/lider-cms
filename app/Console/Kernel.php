<?php

namespace App\Console;

use App\Jobs\GetThirdPartyCredential;
use App\SapCredential;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\SapLogin::class,
        Commands\SapGetAvailableDepartments::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule
            ->command('sap:login')->everyThirtyMinutes();

        $schedule
            ->command('sap:get-available-departments')->everyTenMinutes();
        /*$schedule
            ->job(new GetThirdPartyCredential)
            ->everyThirtyMinutes();*/
            //->cron('*/20 * * * *');
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
