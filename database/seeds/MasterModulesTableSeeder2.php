<?php

use Illuminate\Database\Seeder;

class MasterModulesTableSeeder2 extends Seeder
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
                'name' 	=> 'Vistas Inmueble',
                'slug' 		=> 'administracion/vistas',
                'parent' 	=> $pAdmin,
                'icon' 		=> NULL,
                'index'    => 6
            ],
            [
                'name' 	=> 'Tipos Inmueble',
                'slug' 		=> 'administracion/tipos',
                'parent' 	=> $pAdmin,
                'icon' 		=> NULL,
                'index'    => 7
            ],
        ]); 
    }
}
