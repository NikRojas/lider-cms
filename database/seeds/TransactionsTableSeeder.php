<?php

use Illuminate\Database\Seeder;

class TransactionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('transactions')->insert([
            [
                'order_id' => 1000,
                'transaction_date' => '2020-09-09 17:45:06',
                'amount' => 6500,
                'transaction_status_id' => 1,
                'response' => 'El proceso esta pendiente'
            ],
            [
                'order_id' => 1000,
                'transaction_date' => '2020-10-09 17:45:06',
                'amount' => 6500,
                'transaction_status_id' => 2,
                'response' => 'El proceso se acepto'
            ]
        ]);
    }
}
