<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmailDestinationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('email_destination', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('leads_traditional')->nullable();
            $table->string('leads_videocall')->nullable();
            $table->string('leads_sale_land')->nullable();
            $table->string('leads_job')->nullable();
            $table->string('type')->nullable();
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
        Schema::dropIfExists('email_destination');
    }
}
