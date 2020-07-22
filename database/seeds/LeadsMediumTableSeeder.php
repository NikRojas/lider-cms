<?php

use Illuminate\Database\Seeder;

class LeadsMediumTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('leads_medium')->insert([
            [
                'id'    => uniqid(),
                'name' 	=> 'Llamada',
            ],
            [
                'id'    => uniqid(),
                'name' 	=> 'Correo Electrónico',
            ],
            [
                'id'    => uniqid(),
                'name' 	=> 'Whatsapp',
            ],
        ]);
    }
}
