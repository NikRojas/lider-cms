<?php

use Illuminate\Database\Seeder;

class MasterClaimsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_claims_type')->insert([
            [
                'name' 	=> 'Reclamo',
            ],
            [
                'name' 	=> 'Queja',
            ],
        ]);
    }
}
