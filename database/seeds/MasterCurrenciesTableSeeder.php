<?php

use Illuminate\Database\Seeder;

class MasterCurrenciesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_currencies')->insert([
            [
                'name'          => 'Nuevo Sol Peruano',
                'abbreviation'  => 'PEN',
                'value'         => 1,
                'symbol'       => 'S/',
                'default'       => true
            ],
            [
                'name'          => 'Dolar Americano',
                'abbreviation'  => 'USD',
                'value'         => 3.51,
                'symbol'       => '$',
                'default'       => false
            ],
            /*[
                'name'          => 'Euro',
                'abbreviation'  => 'EUR',
                'value'         => 4.12,
                'symbol'       => '€',
                'default'       => false
            ]*/

        ]);
    }
}
