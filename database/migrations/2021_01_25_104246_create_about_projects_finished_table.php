<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAboutProjectsFinishedTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('about_projects_finished', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name',100);
            $table->boolean('active')->default(true);
            $table->integer('index');
            $table->string('image', 100);
            $table->text('description_es')->nullable();
            $table->text('description_en')->nullable();
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
        Schema::dropIfExists('about_projects_finished');
    }
}
