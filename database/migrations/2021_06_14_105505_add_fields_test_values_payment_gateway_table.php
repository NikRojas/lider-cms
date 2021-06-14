<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsTestValuesPaymentGatewayTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('test_values_payment_gateway', function (Blueprint $table) {
            $table->string('ccv');
            $table->string('date_end');
            $table->string('brand');
            $table->string('status');
            //Ver si falta algo mas creo q se tiene q crear otra tabla con este test y la tabla credentetials internemedia para ver y poner el 
            //valor ok q se realizo el test
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
