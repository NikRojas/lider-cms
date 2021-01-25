<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAboutCustomerSupportTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('about_customer_support', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title_es',100);
            $table->string('title_en',100);
            $table->text('description_es')->nullable();
            $table->text('description_en')->nullable();
            $table->integer('index');
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
        Schema::dropIfExists('about_customer_support');
    }
}
