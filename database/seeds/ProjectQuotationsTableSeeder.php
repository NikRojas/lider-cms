<?php

use Illuminate\Database\Seeder;

class ProjectQuotationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $els = factory(App\ProjectQuotation::class, 200)->create();
    }
}
