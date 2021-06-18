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
        $this->call(CredentialsPaymentGateway::class);
        #EndPayment

        /*$this->call(ComplaintsBookSeeder::class);*/
        /**/
        //$this->call(SuscribersTableSeeder::class);
        #Need Projects & TipeDepartments
        /*$this->call(CustomersTableSeeder::class);
        $this->call(OrdersTableSeeder::class);
        $this->call(OrderDetailsTableSeeder::class);
        $this->call(TransactionsTableSeeder::class);*/

        //Leads
        //$this->call(LeadsTableSeeder::class);
        /*$this->call(LeadsSalesLandTableSeeder::class);
        $this->call(LeadsVideocallTableSeeder::class);
        $this->call(ProjectQuotationsTableSeeder::class);*/
    }
}
