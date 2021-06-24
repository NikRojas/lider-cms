<?php

use Illuminate\Database\Seeder;

class MasterModulesTableSeeder3 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pSistema = 38;
        DB::table('master_modules')->insert([
            [
                'name'     => 'Sistema Asesores',
                'slug'         => null,
                'parent'     => NULL,
                'icon'         => 'headset',
                'index'    => 7
            ],
            [
                'name'     => 'Sobre Lider',
                'slug'         => 'sistema-asesores/sobre-lider',
                'parent'     => $pSistema,
                'icon'         => NULL,
                'index'    => 1
            ]
        ]);
    }
}
