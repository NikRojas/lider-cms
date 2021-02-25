<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectQuotationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_quotation', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email');
            $table->string('document_number',15);
            $table->string('mobile',15);
            $table->text('message')->nullable();
            $table->bigInteger('project_id')->unsigned();
            $table->foreign('project_id')->references('id')->on('projects');
            $table->bigInteger('project_type_department_id')->unsigned();
            $table->foreign('project_type_department_id')->references('id')->on('project_type_departments');
            $table->bigInteger('advisor_id')->unsigned()->nullable();
            $table->foreign('advisor_id')->references('id')->on('advisors');
            $table->text('identifier_str')->nullable();
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
        Schema::dropIfExists('project_quotation');
    }
}
