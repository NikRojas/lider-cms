<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestimonialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('testimonials', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->text('description_es')->nullable();
            $table->text('description_en')->nullable();

            $table->string('title_es');
            $table->string('title_en');
            $table->string('project');
            $table->string('image')->nullable();
            $table->text('url_video')->nullable();

            $table->boolean('type_video');
            $table->bigInteger('index');    
            
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
        Schema::dropIfExists('testimonials');
    }
}
