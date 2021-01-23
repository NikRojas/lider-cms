<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeadsVideocallTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leads_videocall', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email');
            $table->string('mobile',15);
            $table->string('document_number',15);
            /*$table->string('lead_medium_id')->nullable();
            $table->foreign('lead_medium_id')->references('id')->on('master_leads_medium');*/
            /*$table->bigInteger('lead_time_day')->unsigned();
            $table->foreign('lead_time_day')->references('id')->on('master_leads_time_day');*/
            $table->string('schedule',100);
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
        Schema::dropIfExists('leads_videocall');
    }
}
