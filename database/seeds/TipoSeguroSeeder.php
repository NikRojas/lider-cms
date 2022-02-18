<?php

use Illuminate\Database\Seeder;

class TipoSeguroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tipo_seguros')->insert([
            [
                'value' 	=> 0.035,
                'name'  => 'Un Titular',
                'index' => 1
            ],
            [
                'value' 	=> 0.065,
                'name'  => 'Mancomunado',
                'index' => 2
            ],
        ]);
    }
}
