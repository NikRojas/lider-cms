<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProjectsParentTypeDepartmentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects_parent_type_departments')->insert([
            [
                'name' 	=> 'Flat',
                'slug'  => Str::random(20),
            ],
            [
                'name' 	=> 'Duplex',
                'slug'  => Str::random(20),
            ],
            [
                'name' 	=> 'Triplex',
                'slug'  => Str::random(20),
            ],
            [
                'name' 	=> 'Loft',
                'slug'  => Str::random(20),
            ],
        ]);
    }
}
