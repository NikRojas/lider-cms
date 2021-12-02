<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRealStatePackageDepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('real_state_package_departments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('real_state_package_id')->unsigned();
            $table->foreign('real_state_package_id')->references('id')->on('real_state_packages');
            $table->bigInteger('department_id')->unsigned()->unique();
            $table->foreign('department_id')->references('id')->on('departments');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('real_state_package_departments');
    }
}
