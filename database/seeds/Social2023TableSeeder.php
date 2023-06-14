<?php

use Illuminate\Database\Seeder;

class Social2023TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_social_networks')->insert([
            [
                'name' 		=> 'Tiktok',
                'icon'     => 'tiktok',
            ],
        ]);
    }
}
