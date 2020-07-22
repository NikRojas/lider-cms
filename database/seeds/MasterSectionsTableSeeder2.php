<?php

use Illuminate\Database\Seeder;

class MasterSectionsTableSeeder2 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_sections')->insert([
            #Home
            [
                'name' 		=> 'Contáctenos',
                'master_page_id'     => 8,
            ],
            [
                'name' 		=> 'Contáctenos',
                'master_page_id'     => 9,
            ],
        ]);
    }
}
