<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('information', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('location');
            //$table->string('phone',15)->nullable();
            $table->string('central_phone',15)->nullable();
            $table->string('main_office',15)->nullable();
            $table->string('email')->nullable();

            $table->string('billing_url')->nullable();
            
            $table->json('whatsapp_numbers')->nullable();
            $table->json('phone_numbers')->nullable();


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
        Schema::dropIfExists('information');
    }
}
