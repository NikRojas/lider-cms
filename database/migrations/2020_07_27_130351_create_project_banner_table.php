<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectBannerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_banner', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('image_es', 100);
            $table->string('image_responsive_es', 100);
            $table->string('image_en', 100);
            $table->string('image_responsive_en', 100);
            $table->integer('index');
            $table->bigInteger('project_id')->unsigned();
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
        Schema::dropIfExists('project_banner');
    }
}
