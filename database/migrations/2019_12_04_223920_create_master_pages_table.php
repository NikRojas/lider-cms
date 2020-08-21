<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMasterPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('master_pages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('slug_es')->unique()->nullable();  
            $table->string('slug_en')->unique()->nullable();  

            $table->string('title_es');
            $table->string('title_en');

            $table->string('seo_description_es')->nullable();
            $table->string('seo_description_en')->nullable();
            $table->string('seo_keywords_es')->nullable();
            $table->string('seo_keywords_en')->nullable();
            $table->string('seo_image',100)->nullable();

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
        Schema::dropIfExists('pages');
    }
}
