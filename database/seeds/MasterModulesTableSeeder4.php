<?php

use Illuminate\Database\Seeder;

class MasterModulesTableSeeder4 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_modules')->insert([
            [
                'name'     => 'Chatbot',
                'slug'         => 'chatbot',
                'parent'     => NULL,
                'icon'         => 'rocket',
                'index'    => 8
            ]
        ]);
    }
}
