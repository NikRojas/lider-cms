<?php

use Illuminate\Database\Seeder;

class MasterOrderCycleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_order_cycle')->insert([
            [
                'name' 		=> 'Abierto',
                'payment_gateway_value'     => 'OPEN',
            ],
            [
                'name' 		=> 'Cerrado',
                'payment_gateway_value'     => 'CLOSED',
            ],
        ]); 
    }
}
