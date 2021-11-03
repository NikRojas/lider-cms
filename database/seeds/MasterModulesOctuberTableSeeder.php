<?php

use Illuminate\Database\Seeder;

class MasterModulesOctuberTableSeeder extends Seeder
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
                'name'     => 'Combos',
                'slug'         => 'combos',
                'parent'     => NULL,
                'icon'         => 'tags',
                'index'    => 2
            ]
        ]);
    }
}
