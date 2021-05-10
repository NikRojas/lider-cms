<?php

use Illuminate\Database\Seeder;

class SapCredentiasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sap_credentials')->insert([
            [
                'user' 	=> 'LiderSapApi',
                'password'  => 'LiX74r89lSys',
            ],
        ]);
    }
}
