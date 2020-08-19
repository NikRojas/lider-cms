<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(MasterModulesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(MasterSocialNetworksTableSeeder::class);
        $this->call(MasterLeadsMediumTableSeeder::class);
        $this->call(MasterLeadsSourceTableSeeder::class);
        $this->call(MasterCurrenciesTableSeeder::class);
        $this->call(MasterLeadsTimeDayTableSeeder::class);
        $this->call(MasterUbigeoTableSeeder::class);
        $this->call(MasterPagesTableSeeder::class);
        $this->call(MasterTypeGalleryTableSeeder::class);
    }
}
