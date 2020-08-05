<?php

use Illuminate\Database\Seeder;

class MasterLeadsTimeDayTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_leads_time_day')->insert([
            [
                'name' 	=> 'Mañana',
            ],
            [
                'name' 	=> 'Tarde',
            ],
        ]);
    }
}
