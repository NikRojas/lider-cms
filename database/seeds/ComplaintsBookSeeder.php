<?php

use Illuminate\Database\Seeder;

class ComplaintsBookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $els = factory(App\ComplaintBook::class, 200)->create();
    }
}
