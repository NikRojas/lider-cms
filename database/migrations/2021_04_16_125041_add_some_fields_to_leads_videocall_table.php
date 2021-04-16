<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSomeFieldsToLeadsVideocallTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('leads_videocall', function (Blueprint $table) {
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
        Schema::table('leads_videocall', function (Blueprint $table) {
            //
        });
    }
}
