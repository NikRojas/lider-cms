<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('title_es');
            $table->string('title_en');
            $table->string('slug_es');
            $table->string('slug_en');
            $table->string('excerpt_es');
            $table->string('excerpt_en');

            $table->longText('content_es');
            $table->longText('content_en');
            $table->string('image');
            $table->string('thumbnail');
            $table->boolean('published');
            //$table->dateTime('published_at');
            $table->text('seo_keywords_es')->nullable();
            $table->text('seo_keywords_en')->nullable();

            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('category_id')->unsigned();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('category_id')->references('id')->on('categories');

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
        Schema::dropIfExists('posts');
    }
}
