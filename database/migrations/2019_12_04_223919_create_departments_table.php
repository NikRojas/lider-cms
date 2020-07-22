<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name');

            $table->string('title')->nullable();
            $table->string('logo')->nullable();
            $table->string('logo_white')->nullable();
            $table->string('banner')->nullable();

            $table->string('image_menu')->nullable();

            //$table->string('slug')->unique()->nullable();
            $table->string('excerpt')->nullable();

            $table->boolean('main');

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
        Schema::dropIfExists('departments');
    }
}
