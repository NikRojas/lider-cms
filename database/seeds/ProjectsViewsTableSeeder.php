<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProjectsViewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects_views')->insert([
            [
                'name' 	=> 'Interna',
                'slug'  => Str::random(20),
                'sap_code' => '01'
            ],
            [
                'name' 	=> 'Externa',
                'slug'  => Str::random(20),
                'sap_code' => '02'
            ],
            [
                'name' 	=> 'Interna - Externa',
                'slug'  => Str::random(20),
                'sap_code' => '03'
            ],
            [
                'name' 	=> 'Parque Interno',
                'slug'  => Str::random(20),
                'sap_code' => '04'
            ],
            [
                'name' 	=> 'Parque Externo',
                'slug'  => Str::random(20),
                'sap_code' => '05'
            ],
            [
                'name' 	=> 'Doble Vista Interna',
                'slug'  => Str::random(20),
                'sap_code' => '06'
            ],
            [
                'name' 	=> 'Doble Vista Externa',
                'slug'  => Str::random(20),
                'sap_code' => '07'
            ],
            [
                'name' 	=> 'Al mar',
                'slug'  => Str::random(20),
                'sap_code' => '08'
            ],
        ]);
    }
}
