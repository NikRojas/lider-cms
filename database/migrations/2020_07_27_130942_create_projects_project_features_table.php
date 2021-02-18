<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsProjectFeaturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects_project_features', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('feature_id')->unsigned();
            $table->bigInteger('project_id')->unsigned();
            $table->foreign('feature_id')->references('id')->on('project_features');
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
        Schema::dropIfExists('projects_project_features');
    }
}
