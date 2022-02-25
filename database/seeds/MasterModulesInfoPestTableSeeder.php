<?php

use Illuminate\Database\Seeder;

class MasterModulesInfoPestTableSeeder extends Seeder
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
                'name'     => 'Información Cotizar',
                'slug'         => 'sistema-asesores/informacion-cotizar',
                'parent'     => $pSistema,
                'icon'         => NULL,
                'index'    => 2
            ]
        ]);
    }
}
