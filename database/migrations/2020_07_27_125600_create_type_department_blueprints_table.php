<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTypeDepartmentBlueprintsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('type_department_blueprints', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('description_es');
            $table->text('description_en');
            $table->integer('index'); 
            $table->string('image',100)->nullable(); 

            $table->bigInteger('type_department_id')->unsigned();
            $table->foreign('type_department_id')->references('id')->on('project_type_departments');

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
        Schema::dropIfExists('type_department_blueprints');
    }
}
