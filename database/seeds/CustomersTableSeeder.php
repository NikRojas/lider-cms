<?php

use Illuminate\Database\Seeder;

class CustomersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //$els = factory(App\Customer::class, 200)->create();
        DB::table('customers')->insert([
            [
                'name' => 'María',
                'lastname' => ' Perez Lujan',
                'email' => 'mperez@gmail.com',
                'mobile' => '989451322',
                'document_number' => '98541233',
                'slug' => 'f6A2s3e96aPc',
            ]
        ]);
    }
}
