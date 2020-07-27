<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsAdvisorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects_advisors', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('advisor_id')->unsigned();
            $table->string('project_id');
            $table->foreign('advisor_id')->references('id')->on('advisors');
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
        Schema::dropIfExists('projects_advisors');
    }
}
