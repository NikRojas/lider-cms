<?php

use Illuminate\Database\Seeder;

class MasterModulesFebreroTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pAdmin = 7;
        DB::table('master_modules')->insert([
            [
                'name' 	=> 'Tipo Seguros',
                'slug' 		=> 'administracion/tipo-seguros',
                'parent' 	=> $pAdmin,
                'icon' 		=> NULL,
                'index'    => 8
            ],
        ]); 
    }
}
