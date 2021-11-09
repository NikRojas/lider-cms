<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdatingColumns2ToDepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('departments', function (Blueprint $table) {
            $table->bigInteger('view_id')->nullable()->unsigned()->change();
            $table->foreign('view_id')->references('id')->on('projects_views');
            $table->bigInteger('type_department_id')->nullable()->unsigned()->change();
            $table->foreign('type_department_id')->references('id')->on('project_type_departments');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('departments', function (Blueprint $table) {
            //
        });
    }
}
