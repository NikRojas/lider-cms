<?php

use Illuminate\Database\Seeder;

class MasterTypeGalleryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_type_gallery')->insert([
            [
                'name' 	=> 'Áreas Comunes',
            ],
            [
                'name' 	=> 'Interiores',
            ],
            [
                'name' 	=> 'Avance de Obras',
            ],
        ]);
    }
}
