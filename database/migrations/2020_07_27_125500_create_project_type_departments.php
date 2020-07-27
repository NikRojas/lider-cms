<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectTypeDepartments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_type_departments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('image',100);
            $table->integer('index'); 
            $table->text('url_360')->nullable();
            $table->float('area')->nullable();
            $table->integer('rooms')->nullable();
            
            $table->string('project_id');
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
        Schema::dropIfExists('project_type_departments');
    }
}
