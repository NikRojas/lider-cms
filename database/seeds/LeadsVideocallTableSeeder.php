<?php

use Illuminate\Database\Seeder;

class LeadsVideocallTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $els = factory(App\LeadVideocall::class, 300)->create();
    }
}
