<?php

use Illuminate\Database\Seeder;

class MasterDocumentsTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_documents_type')->insert([
            [
                'name' 	=> 'DNI',
                'description' 	=> 'Documento Nacional de Identidad',
            ],
            [
                'name' 	=> 'CE',
                'description' 	=> 'Carnet de Extranjería',
            ],
        ]);
    }
}
