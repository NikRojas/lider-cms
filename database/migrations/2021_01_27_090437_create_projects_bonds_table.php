<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsBondsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects_bonds', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('bond_id')->unsigned();
            $table->bigInteger('project_id')->unsigned();
            $table->foreign('bond_id')->references('id')->on('bonds');
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
        Schema::dropIfExists('projects_bonds');
    }
}
