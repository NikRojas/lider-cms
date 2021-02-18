<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('content', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('field');
            $table->longText('value')->nullable();
            $table->longText('value_es')->nullable();
            $table->longText('value_en')->nullable();
            $table->bigInteger('master_section_id')->unsigned();
            $table->foreign('master_section_id')->references('id')->on('master_sections');
            
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
        Schema::dropIfExists('content');
    }
}
