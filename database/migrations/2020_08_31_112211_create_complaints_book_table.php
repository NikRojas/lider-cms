<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComplaintsBookTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('complaints_book', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code');
            $table->string('name');
            $table->string('lastname');
            $table->string('mobile');
            $table->string('email');
            $table->string('address');
            $table->string('document_number');
            $table->bigInteger('document_type_id')->unsigned();
            $table->foreign('document_type_id')->references('id')->on('master_documents_type');
            $table->string('code_ubigeo');
            $table->foreign('code_ubigeo')->references('code_ubigeo')->on('master_ubigeo');
            $table->string('good_contracted_amount');
            $table->text('good_contracted_description');

            $table->text('claim_detail');
            $table->text('claim_order');

            $table->text('provider_detail')->nullable();

            $table->bigInteger('claim_type_id')->unsigned();
            $table->foreign('claim_type_id')->references('id')->on('master_documents_type');
            $table->bigInteger('good_contracted_id')->unsigned();
            $table->foreign('good_contracted_id')->references('id')->on('master_good_contracted_type');
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
        Schema::dropIfExists('complaints_book');
    }
}
