<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatLeadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chat_leads', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->json('project_value')->nullable();
            $table->text('name')->nullable();
            $table->text('email')->nullable();
            $table->text('project')->nullable();
            $table->text('mobile')->nullable();
            $table->text('host')->nullable();
            $table->string('slug',20)->nullable();
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
        Schema::dropIfExists('chat_leads');
    }
}
