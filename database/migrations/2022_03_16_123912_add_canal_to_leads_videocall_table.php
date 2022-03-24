<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCanalToLeadsVideocallTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('leads_videocall', function (Blueprint $table) {
            $table->bigInteger('id_canal')->unsigned()->nullable();
            $table->foreign('id_canal')->references('id')->on('canales_cita_virtual');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('leads_videocall', function (Blueprint $table) {
            //
        });
    }
}
