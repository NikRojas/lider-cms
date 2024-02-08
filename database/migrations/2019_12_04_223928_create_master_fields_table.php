<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMasterFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('master_fields', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name');
            $table->string('variable');
            $table->string('type');
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
        Schema::dropIfExists('master_fields');
    }
}
