<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            //$table->bigIncrements('id');
            $table->string('id')->primary();
            $table->string('logo',100);
            $table->json('images');
            $table->boolean('active')->default(true);
            $table->text('description_es');
            $table->text('description_en');
            $table->string('location',150);
            $table->string('rooms_es',100);
            $table->string('rooms_en',100);
            $table->string('footage_es',100);
            $table->string('footage_en',100);
            $table->string('brochure',150)->nullable();
            $table->string('banner_es',100);
            $table->string('banner_en',100);
            $table->string('text_place_es',100)->nullable();
            $table->string('text_place_en',100)->nullable();
            $table->text('url_google_maps')->nullable();
            $table->text('url_waze')->nullable();
            $table->text('map_indications_es');
            $table->text('map_indications_en');
            $table->text('sales_room');
            $table->text('schedule_attention');
            $table->float('price_total');
            $table->float('price_total_foreign');
            $table->float('price');

            $table->float('latitude');
            $table->float('longitude');

            $table->bigInteger('project_status_id')->unsigned();
            $table->foreign('project_status_id')->references('id')->on('project_statuses');

            $table->string('code_ubigeo');
            $table->foreign('code_ubigeo')->references('code_ubigeo')->on('master_ubigeo');

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
        Schema::dropIfExists('projects');
    }
}
