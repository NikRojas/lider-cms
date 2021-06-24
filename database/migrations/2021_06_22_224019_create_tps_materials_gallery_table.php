<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTpsMaterialsGalleryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tps_materials_gallery', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('image', 100);
            $table->bigInteger('index');
            $table->bigInteger('project_gallery_id')->unsigned();
            $table->foreign('project_gallery_id')->references('id')->on('project_gallery');

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
        Schema::dropIfExists('tps_materials_gallery');
    }
}
