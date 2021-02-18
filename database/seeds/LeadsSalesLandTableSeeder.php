<?php

use Illuminate\Database\Seeder;

class LeadsSalesLandTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $els = factory(App\LeadSaleLand::class, 300)->create();
    }
}
