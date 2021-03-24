<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsFinancingOptions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects_financing_options', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('financing_option_id')->unsigned();
            $table->bigInteger('project_id')->unsigned();
            $table->foreign('financing_option_id')->references('id')->on('financing_options');
            $table->foreign('project_id')->references('id')->on('projects');
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
        Schema::dropIfExists('projects_financing_options');
    }
}
