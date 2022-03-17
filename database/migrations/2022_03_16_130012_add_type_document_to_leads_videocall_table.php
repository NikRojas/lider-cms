<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTypeDocumentToLeadsVideocallTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('leads_videocall', function (Blueprint $table) {
            $table->bigInteger('type_document_id')->nullable()->unsigned();
            $table->foreign('type_document_id')->references('id')->on('master_documents_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('leads_videocall', function (Blueprint $table) {
            //
        });
    }
}
