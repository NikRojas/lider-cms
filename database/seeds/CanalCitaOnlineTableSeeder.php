<?php

use Illuminate\Database\Seeder;

class CanalCitaOnlineTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('canales_cita_virtual')->insert([
            [
                'name'          => 'Llamada Telefónica',
                'sap_id' => 1
            ],
            [
                'name'          => 'Whatsapp Videollamada',
                'sap_id' => 3
            ],
            [
                'name'          => 'Google Meet',
                'sap_id' => 4
            ],
            [
                'name'          => 'Zoom',
                'sap_id' => 5
            ],
            [
                'name'          => 'Visita Caseta',
                'sap_id' => 8
            ],
        ]);
    }
}
