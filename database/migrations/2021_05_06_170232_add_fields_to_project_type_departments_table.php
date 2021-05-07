<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToProjectTypeDepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('project_type_departments', function (Blueprint $table) {
            $table->string('sap_code',20)->unique()->nullable();
            $table->bigInteger('parent_type_department_id')->unsigned()->nullable();
            $table->foreign('parent_type_department_id')->references('id')->on('projects_parent_type_departments');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('project_type_departments', function (Blueprint $table) {
            //
        });
    }
}
