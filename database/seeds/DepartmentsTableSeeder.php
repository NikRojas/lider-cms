<?php

use Illuminate\Database\Seeder;

class DepartmentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('departments')->insert([
            [
                'name' 	=> 'PLAY Group',
                'title' => 'PLAY Group',
                //'slug' => NULL,
				'logo' 	=>  NULL,
				'excerpt' => 'Humans With Digital Minds',
                'main'    => 1
            ],
            [
                'name' 	=> 'Digital Performance',
                'title' => 'Digital Performance',
                //'slug' => 'digital-performance',
				'logo' 	=>  NULL,
				'excerpt' => 'Business Growth Engine',
                'main'    => 0
            ],
            [
                'name' 	=> 'Creativity Hub',
                'title' => 'Creativity Hub',
                //'slug' => 'creativity-hub',
				'logo' 	=>  NULL,
				'excerpt' => 'When Real Connection Happens',
                'main'    => 0
            ],
            [
                'name' 	=> 'Software Factory',
                'title' => 'Software Factory',
                //'slug' => 'software-factory',
				'logo' 	=>  NULL,
				'excerpt' => 'Technology Lab of Innovation',
                'main'    => 0
            ]
        ]);
    }
}
