<?php

use Illuminate\Database\Seeder;

class SuscribersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $els = factory(App\Suscriber::class, 500)->create();
    }
}
