<?php

use Illuminate\Database\Seeder;

class MasterSectionsTableSeeder3 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_sections')->insert([
            #DI, CH, SW
            [
                'name' 		=> 'Frase',
                'master_page_id'     => 2,
            ],
            [
                'name' 		=> 'Frase',
                'master_page_id'     => 3,
            ],
            [
                'name' 		=> 'Frase',
                'master_page_id'     => 4,
            ],
        ]);
    }
}
