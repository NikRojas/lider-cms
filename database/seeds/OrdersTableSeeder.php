<?php

use Illuminate\Database\Seeder;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //$els = factory(App\Order::class, 200)->create();
        DB::table('orders')->insert([
            [
                'customer_id' => 100,
                //'proforma_number' => ,
                'total' => 6500,
                'order_date' => '2020-09-09 17:39:06',
                'created_at' => '2020-09-09 17:39:06'
            ]
        ]);
    }
}
