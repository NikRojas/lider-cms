<?php

use Illuminate\Database\Seeder;

class MasterPagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_pages')->insert([
            [
                'name' 		=> 'Inicio',
                'slug'     => NULL,
                'title'     => 'PLAY Group - Human With Digital Minds',
                'department_id' => NULL,
                'index' => 1
            ],

            [
                'name' 		=> 'Digital Performance',
                'slug'     => 'digital-perfomance',
                'title'     => 'Digital Performance - Business Growth Engine',
                'department_id' => 2,
                'index' => 2
            ],
            [
                'name' 		=> 'Creativity Hub',
                'slug'     => 'creativity-hub',
                'title'     => 'Creativity Hub - When Real Connection Happens',
                'department_id' => 3,
                'index' => 3
            ],
            [
                'name' 		=> 'Software Factory',
                'slug'     => 'software-factory',
                'title'     => 'Software Factory - Technology Lab of Innovation',
                'department_id' => 4,
                'index' => 4
            ],

            [
                'name' 		=> 'Blog',
                'slug'     => 'blog',
                'title'     => 'Blog',
                'department_id' => NULL,
                'index' => 6
            ],

            [
                'name' 		=> 'Conócenos',
                'slug'     => 'conocenos',
                'title'     => 'Conócenos',
                'department_id' => NULL,
                'index' => 5
            ],

            [
                'name' 		=> 'Políticas de Privacidad',
                'slug'     => 'politicas-privacidad',
                'title'     => 'Políticas de Privacidad',
                'department_id' => NULL,
                'index' => 8
            ],

            [
                'name' 		=> 'Trabaja con nosotros',
                'slug'     => 'trabaja-con-nosotros',
                'title'     => 'Trabaja con nosotros',
                'department_id' => NULL,
                'index' => 7
            ],

            [
                'name' 		=> 'Conversemos',
                'slug'     => 'conversemos',
                'title'     => 'Conversemos',
                'department_id' => NULL,
                'index' => 6
            ],
        ]);
    }
}
