<?php

use Illuminate\Database\Seeder;

class MasterFieldsTableSeeder3 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_fields')->insert([
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 37
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 38
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 39
            ]
        ]);
    }
}
