<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMasterSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('master_sections', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');

            $table->bigInteger('master_page_id')->unsigned();
            $table->foreign('master_page_id')->references('id')->on('master_pages');
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
        Schema::dropIfExists('master_sections');
    }
}
