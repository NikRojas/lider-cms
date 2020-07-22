<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('full_name')->nullable();
            $table->string('email');
            $table->string('phone');
            $table->text('message')->nullable();
            $table->string('company')->nullable();
            $table->bigInteger('department_id')->nullable()->unsigned();
            $table->string('lead_medium_id')->nullable();

            $table->bigInteger('lead_source_id')->unsigned();

            $table->foreign('lead_medium_id')->references('id')->on('leads_medium');
            $table->foreign('lead_source_id')->references('id')->on('leads_source');
            $table->foreign('department_id')->references('id')->on('departments');

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
        Schema::dropIfExists('contacts');
    }
}
