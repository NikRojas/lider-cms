<?php

use Illuminate\Database\Seeder;

class MasterGoodContractedSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_good_contracted_type')->insert([
            [
                'name' 	=> 'Producto',
            ],
            [
                'name' 	=> 'Servicio',
            ],
        ]);
    }
}
