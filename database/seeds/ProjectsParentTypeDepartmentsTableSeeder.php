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
                'room'  => 1
            ],
            [
                'name' 	=> 'Duplex',
                'slug'  => Str::random(20),
                'room'  => 2
            ],
            [
                'name' 	=> 'Triplex',
                'slug'  => Str::random(20),
                'room'  => 3
            ],
            [
                'name' 	=> 'Loft',
                'slug'  => Str::random(20),
                'room'  => 4
            ],
            [
                'name' 	=> 'Penthouse',
                'slug'  => Str::random(20),
                'room'  => 4
            ],
            [
                'name' 	=> 'Casa',
                'slug'  => Str::random(20),
                'room'  => 4
            ],
        ]);
    }
}
