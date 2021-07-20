<?php

use Illuminate\Database\Seeder;

class ChatSchedulesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('chat_schedules')->insert([
            [
                'description'          => 'Por la mañana (9am - 12pm)',
                'index' => 1
            ],
            [
                'description'          => 'Por la tarde (2pm - 6pm)',
                'index' => 2
            ],
            [
                'description'          => 'Por la noche (6pm - 9pm)',
                'index' => 3
            ],
        ]);
    }
}
