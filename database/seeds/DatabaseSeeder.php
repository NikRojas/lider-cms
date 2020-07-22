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
        /*$this->call(RolesTableSeeder::class);
        $this->call(MasterModulesTableSeeder::class);
        $this->call(MasterPermissionsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(DepartmentsTableSeeder::class);
        $this->call(MasterSocialNetworksTableSeeder::class);
        $this->call(MasterPagesTableSeeder::class);
        $this->call(MasterSectionsTableSeeder::class);
        $this->call(MasterFieldsTableSeeder::class);
        $this->call(LeadsMediumTableSeeder::class);
        $this->call(LeadsSourceTableSeeder::class);
        $this->call(MasterSectionsTableSeeder2::class);  
        $this->call(MasterFieldsTableSeeder2::class);
        $this->call(MasterSectionsTableSeeder3::class);  
        $this->call(MasterFieldsTableSeeder3::class);*/
        $this->call(LeadsSourceTableSeeder2::class);
    }
}
