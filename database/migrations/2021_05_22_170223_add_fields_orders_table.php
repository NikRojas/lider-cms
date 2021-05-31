<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->bigInteger('advisor_id')->unsigned()->nullable();
            $table->foreign('advisor_id')->references('id')->on('advisors');
            $table->bigInteger('department_id')->unsigned()->nullable();
            $table->foreign('department_id')->references('id')->on('departments');
            $table->boolean('sended_to_sap')->default(false);
            $table->dropColumn('total');
            $table->decimal('total_price',11,2);
        });
        DB::update("ALTER TABLE orders AUTO_INCREMENT = 100000000;");
    }
   

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
