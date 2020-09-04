<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCamiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cami', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('logo', 100);
            $table->string('title_es');
            $table->string('title_en');
            $table->text('description_es');
            $table->text('description_en');
            $table->string('title_team_es');
            $table->string('title_team_en');
            $table->text('description_team_es');
            $table->text('description_team_en');
            $table->string('title_projects_es');
            $table->string('title_projects_en');
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
        Schema::dropIfExists('cami');
    }
}
