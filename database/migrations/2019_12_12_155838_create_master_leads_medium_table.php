<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMasterLeadsMediumTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('master_leads_medium', function (Blueprint $table) {
            //$table->bigIncrements('id');
            $table->string('id')->primary();
            $table->string('name');
            $table->boolean('videocall');
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
        Schema::dropIfExists('master_leads_medium');
    }
}
