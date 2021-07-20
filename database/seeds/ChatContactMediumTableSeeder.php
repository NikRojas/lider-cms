<?php

use Illuminate\Database\Seeder;

class ChatContactMediumTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('chat_contact_medium')->insert([
            [
                'description'          => 'Llamada Telefónica',
                'index' => 1
            ],
            [
                'description'          => 'Whastapp',
                'index' => 2
            ],
            [
                'description'          => 'Videollamada por Zoom con información multimedia del proyecto',
                'index' => 3
            ],
            [
                'description'          => 'Videollamada por Google Meet con información multimedia del proyecto',
                'index' => 4
            ],
        ]);
    }
}
