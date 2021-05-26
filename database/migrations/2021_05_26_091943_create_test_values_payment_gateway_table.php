<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestValuesPaymentGatewayTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('test_values_payment_gateway', function (Blueprint $table) {
            $table->bigIncrements('id');
            //Numero Tarjeta Test
            $table->text('value')->nullable();
            //Ver si falta algo mas creo q se tiene q crear otra tabla con este test y la tabla credentetials internemedia para ver y poner el 
            //valor ok q se realizo el test
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
        Schema::dropIfExists('test_values_payment_gateway');
    }
}
