<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('slug',20);
            $table->string('description',100)->nullable();
            $table->string('sap_code',20)->unique();
            $table->boolean('available')->nullable();
            $table->decimal('price',11,2)->nullable();
            $table->decimal('price_foreign',11,2)->nullable();
            $table->float('area')->nullable();
            $table->tinyInteger('floor')->nullable();
            $table->bigInteger('view_id')->unsigned();
            $table->foreign('view_id')->references('id')->on('projects_views');
            $table->bigInteger('type_department_id')->unsigned();
            $table->foreign('type_department_id')->references('id')->on('project_type_departments');
            $table->string('image',100)->nullable();            
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
        Schema::dropIfExists('departments');
    }
}
