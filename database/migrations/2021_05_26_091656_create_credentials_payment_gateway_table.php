<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCredentialsPaymentGatewayTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('credentials_payment_gateway', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('user')->nullable();
            $table->text('password_test')->nullable();
            $table->text('password_prod')->nullable();
            $table->text('token_js_test')->nullable();
            $table->text('token_js_prod')->nullable();
            $table->boolean('active')->default(false);
            $table->bigInteger('project_id')->unsigned();
            $table->foreign('project_id')->references('id')->on('projects');
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
        Schema::dropIfExists('credentials_payment_gateway');
    }
}
