<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCamiElementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cami_elements', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('name_es');
            $table->text('name_en');
            $table->string('icon',100);
            $table->text('description_es');
            $table->text('description_en');
            $table->string('image',100);
            $table->integer('index');
            //Title, Icon, Short description
            $table->json('elements_es');
            $table->json('elements_en');
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
        Schema::dropIfExists('cami_elements');
    }
}
