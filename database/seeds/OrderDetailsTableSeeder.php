<?php

use Illuminate\Database\Seeder;

class OrderDetailsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //$els = factory(App\OrderDetail::class, 600)->create();
        DB::table('order_details')->insert([
            [
                'project_id' => 1,
                'project_type_department_id' => 2,
                'order_id' => 1000,
                'quantity' => 1,
                'price' => 6500,
                //'discount' => $discount,
                'total' => 6500
            ]
        ]);
    }
}
