<?php

use Illuminate\Database\Seeder;

class MasterLeadsMediumTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_leads_medium')->insert([
            [
                'id'    => uniqid(),
                'name' 	=> 'Llamada',
                'videocall' => false,
            ],
            [
                'id'    => uniqid(),
                'name' 	=> 'Email',
                'videocall' => false,
            ],
            [
                'id'    => uniqid(),
                'name' 	=> 'Whatsapp',
                'videocall' => false,
            ],

            [
                'id'    => uniqid(),
                'name' 	=> 'Hangout',
                'videocall' => true,
            ],

            [
                'id'    => uniqid(),
                'name' 	=> 'Skype',
                'videocall' => true,
            ],

            [
                'id'    => uniqid(),
                'name' 	=> 'Zoom',
                'videocall' => true,
            ],
        ]);
    }
}
