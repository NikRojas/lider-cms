<?php

use Illuminate\Database\Seeder;

class TasaSeguroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasa_seguro_bien')->insert([
            [
                'value' 	=> 0.018,
                'sector_id'  => 1,
            ],
            [
                'value' 	=> 0.021,
                'sector_id'  => 4,
            ],
        ]);
    }
}
