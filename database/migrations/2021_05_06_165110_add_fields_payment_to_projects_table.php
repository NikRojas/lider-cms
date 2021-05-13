<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsPaymentToProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->decimal('price_separation',11,2)->nullable();
            $table->decimal('price_parking_sap',11,2)->nullable();
            $table->decimal('price_parking_foreign_sap',11,2)->nullable();
            //Precio Minuta
            $table->decimal('price_bill',11,2)->nullable();
            $table->decimal('price_bill_foreign',11,2)->nullable();
            $table->tinyInteger('stock_parking')->nullable();
            $table->string('sap_code',20)->nullable()->unique();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('projects', function (Blueprint $table) {
            //
        });
    }
}
