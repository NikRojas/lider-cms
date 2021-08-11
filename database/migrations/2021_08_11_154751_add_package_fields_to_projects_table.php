<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPackageFieldsToProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->boolean('reservation_in_package')->default(false);
            $table->boolean('has_warehouse')->default(false);
            $table->boolean('has_parking')->default(false);
            $table->text('package_description')->nullable();
            $table->decimal('price_warehouse_sap',11,2)->nullable();
            $table->decimal('price_warehouse_foreign_sap',11,2)->nullable();
            $table->tinyInteger('stock_warehouse')->nullable();
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
