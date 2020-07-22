<?php

use Illuminate\Database\Seeder;

class MasterLeadsSourceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_leads_source')->insert([
            [
                'name' 	=> 'Web',
            ],
            [
                'name' 	=> 'Chatbot',
            ],
        ]);
    }
}
