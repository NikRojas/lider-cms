<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSomeFieldsToProjectQuotationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('project_quotation', function (Blueprint $table) {
            $table->string('lastname')->nullable();
            $table->text('utm_source')->nullable();
            $table->text('utm_medium')->nullable();
            $table->text('utm_campaign')->nullable();
            $table->text('utm_term')->nullable();
            $table->text('utm_content')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('project_quotation', function (Blueprint $table) {
            //
        });
    }
}
