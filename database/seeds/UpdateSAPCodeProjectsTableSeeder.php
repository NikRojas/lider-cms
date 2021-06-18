<?php

use Illuminate\Database\Seeder;

class UpdateSAPCodeProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //UNNO 
        DB::table('projects')->where('id', 1)->update(['sap_code' => 'UNN' ,'master_currency_id' => 1, 'price_separation' => 1.00]);
        //DOSS
        DB::table('projects')->where('id', 2)->update(['sap_code' => 'DOS' ,'master_currency_id' => 1, 'price_separation' => 1.00]);
        //MODO
        DB::table('projects')->where('id', 3)->update(['sap_code' => 'MSR' ,'master_currency_id' => 1, 'price_separation' => 1.00]);
        //NAMUA
        DB::table('projects')->where('id', 4)->update(['sap_code' => 'NAM' ,'master_currency_id' => 2, 'price_separation' => 1.00]);
        //INFINITUM
        DB::table('projects')->where('id', 5)->update(['sap_code' => 'MLC' ,'master_currency_id' => 2, 'price_separation' => 1.00]);
        //KAMPU
        //No tiene codigo
        //DB::table('projects')->where('id', 6)->update(['sap_code' => 'MLC' ,'master_currency_id' => 1, 'price_separation' => 1.00]);
        //ALMIRA
        DB::table('projects')->where('id', 7)->update(['sap_code' => 'ALM' ,'master_currency_id' => 1, 'price_separation' => 1.00]);
        //CONDOMONIO A
        DB::table('projects')->where('id', 8)->update(['sap_code' => 'ALE' ,'master_currency_id' => 1, 'price_separation' => 1.00]);
        //TRESS
        DB::table('projects')->where('id', 9)->update(['sap_code' => 'TRE' ,'master_currency_id' => 1, 'price_separation' => 1.00]);
        //FLOW
        DB::table('projects')->where('id', 10)->update(['sap_code' => 'FLA' ,'master_currency_id' => 1, 'price_separation' => 1.00]);    }
}
