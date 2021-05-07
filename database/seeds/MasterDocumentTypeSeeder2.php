<?php

use Illuminate\Database\Seeder;

class MasterDocumentTypeSeeder2 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_documents_type')->where('name', 'DNI')->update(['sap_value' => 'D']);
        DB::table('master_documents_type')->where('name', 'description')->update(['sap_value' => 'C']);
        DB::table('master_documents_type')->insert([
            [
                'name' 	=> 'Pasaporte',
                'description' 	=> 'Pasaporte',
                'sap_value' => 'P'
            ],
        ]);
    }
}
