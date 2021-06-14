<?php

use Illuminate\Database\Seeder;

class TestValuesPaymentGatewayTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('test_values_payment_gateway')->insert([
            [
                'value' 	=> '36000000000008',
                'brand'     => 'Diners',
                'date_end'  => '11/21',
                'ccv'       => '123',
                'status'    => 'Aceptado'
            ],
            [
                'value' 	=> '36000000000057',
                'ccv'       => '123',
                'date_end'  => '11/21',
                'brand'     => 'Diners',
                'status'    => 'Rechazado'
            ],
            [
                'value' 	=> '4970100000000055',
                'brand'     => 'Visa',
                'date_end'  => '11/21',
                'ccv'       => '123',
                'status'    => 'Aceptado'
            ],
            [
                'value' 	=> '4970100000000113',
                'ccv'       => '123',
                'date_end'  => '11/21',
                'brand'     => 'Visa',
                'status'    => 'Rechazado'
            ],
            [
                'value' 	=> '5970100300000067',
                'brand'     => 'Mastercard',
                'date_end'  => '11/21',
                'ccv'       => '123',
                'status'    => 'Aceptado'
            ],
            [
                'value' 	=> '5970100300000109',
                'ccv'       => '123',
                'date_end'  => '11/21',
                'brand'     => 'Mastercard',
                'status'    => 'Rechazado'
            ],
        ]);
    }
}
