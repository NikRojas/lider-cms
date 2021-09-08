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
        #Main
        /*$this->call(MasterModulesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(MasterSocialNetworksTableSeeder::class);
        $this->call(MasterLeadsMediumTableSeeder::class);
        $this->call(MasterLeadsSourceTableSeeder::class);
        $this->call(MasterCurrenciesTableSeeder::class);
        $this->call(MasterUbigeoTableSeeder::class);
        $this->call(MasterTypeGalleryTableSeeder::class);
        $this->call(MasterDocumentsTypeSeeder::class);
        $this->call(MasterClaimsSeeder::class);
        $this->call(MasterGoodContractedSeeder::class);
        $this->call(MasterTransactionStatusTableSeeder::class);
        $this->call(MasterPagesTableSeeder::class);
        $this->call(MasterSectionsTableSeeder::class);
        $this->call(MasterFieldsTableSeeder::class);*/

        #Payment
        $this->call(ProjectsParentTypeDepartmentsTableSeeder::class);
        $this->call(ProjectsViewsTableSeeder::class);
        $this->call(MasterModulesTableSeeder2::class);
        $this->call(MasterDocumentTypeSeeder2::class);
        $this->call(SapCredentiasTableSeeder::class);
        $this->call(MasterFieldsTableSeeder2::class);
        $this->call(MasterTransactionStatusTableSeeder2::class);
        $this->call(MasterOrderCycleTableSeeder::class);
        DB::update("ALTER TABLE orders AUTO_INCREMENT = 100000000;");
        $this->call(AdvisorUpdateTableSeeder::class);
        //$this->call(CredentialsPaymentGateway::class);
        $this->call(UpdateSAPCodeProjectsTableSeeder::class);
        //$this->call(AdvisorUpdateTableSeeder::class);
        #EndPayment

        #sistema de asesores
        $this->call(MasterModulesTableSeeder3::class);
        #fin sistema de asesores

        #Chat
        /*$this->call(ChatSchedulesTableSeeder::class);
        $this->call(ChatContactMediumTableSeeder::class);*/
        $this->call(MasterModulesTableSeeder4::class);
    }
}
