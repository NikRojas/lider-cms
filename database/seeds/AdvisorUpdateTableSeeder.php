<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class AdvisorUpdateTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('advisors')->where('email', 'vlobato@lider.com.pe')->update(['sap_code' => '01000079' ,'slug' => Str::random(8)]);
        DB::table('advisors')->where('email', 'kysla@lider.com.pe')->update(['sap_code' => '01000101' ,'slug' => Str::random(8)]);
        DB::table('advisors')->where('email', 'mespinoza@lider.com.pe')->update(['sap_code' => '01000015' ,'slug' => Str::random(8)]);
        DB::table('advisors')->where('email', 'epeceros@lider.com.pe')->update(['sap_code' => '01000053' ,'slug' => Str::random(8)]);
        DB::table('advisors')->where('email', 'areategui@lider.com.pe')->update(['sap_code' => '01000100' ,'slug' => Str::random(8)]);
        DB::table('advisors')->where('email', 'pmarinos@lider.com.pe')->update(['sap_code' => '01000098' ,'slug' => Str::random(8)]);
        DB::table('advisors')->where('email', 'hdamian@lider.com.pe')->update(['sap_code' => '01000099' ,'slug' => Str::random(8)]);
        DB::table('advisors')->where('email', 'pvera@lider.com.pe')->update(['sap_code' => '01000058' ,'slug' => Str::random(8)]);
        DB::table('advisors')->where('email', 'jaliaga@lider.com.pe')->update(['sap_code' => '01000097' ,'slug' => Str::random(8)]);
        DB::table('advisors')->where('email', 'ecarpio@lider.com.pe')->update(['sap_code' => '01000067' ,'slug' => Str::random(8)]);
        DB::table('advisors')->where('email', 'vlamela@lider.com.pe')->update(['sap_code' => '01000102' ,'slug' => Str::random(8)]);
        DB::table('advisors')->where('email', 'gveracierta@lider.com.pe')->update(['sap_code' => '01000094' ,'slug' => Str::random(8)]);
        DB::table('advisors')->where('email', 'eferreyra@lider.com.pe')->update(['sap_code' => '01000104' ,'slug' => Str::random(8)]);
        DB::table('advisors')->where('email', 'lruiz@lider.com.pe')->update(['sap_code' => '01000103' ,'slug' => Str::random(8)]);
        DB::table('advisors')->where('email', 'dfernandezp@lider.com.pe')->update(['sap_code' => '01000022' ,'slug' => Str::random(8)]);
        //DB::table('advisors')->where('email', 'jnarvaez@lider.com.pe')->update(['sap_code' => '1000079' ,'slug' => Str::random(8)]);
    }
}
