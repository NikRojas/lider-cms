<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsOrdersDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('order_details', function (Blueprint $table) {
            $table->bigInteger('department_id')->unsigned()->nullable();
            $table->foreign('department_id')->references('id')->on('departments');
            $table->dropColumn('total');
            $table->dropColumn('price');
            $table->dropColumn('discount');
            $table->decimal('price_element',11,2);
            $table->decimal('discount_price',11,2)->nullable();
            $table->decimal('total_price',11,2);
            $table->dropForeign(['project_type_department_id']);
            $table->dropColumn('project_type_department_id');
        });
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
