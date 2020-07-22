<?php

use Illuminate\Database\Seeder;

class MasterFieldsTableSeeder2 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_fields')->insert([
            #Trabaja con Nosotros
            //Contáctenos
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 35
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 35
            ],
            #Conversemos
            //Contáctenos
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 36
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 36
            ],
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 36
            ],
        ]);
    }
}
