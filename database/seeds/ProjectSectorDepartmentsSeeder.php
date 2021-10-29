<?php

use Illuminate\Database\Seeder;

class ProjectSectorDepartmentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('project_sector_departments')->insert([
            [
                'name' 	=> 'Departamento',
                'sap_code' => '10'
            ],
            [
                'name' 	=> 'Estacionamiento',
                'sap_code' => '30'
            ],
            [
                'name' 	=> 'Depósito',
                'sap_code' => '50'
            ],
            [
                'name' 	=> 'Casa',
                'sap_code' => '80'
            ],
        ]);
    }
}
