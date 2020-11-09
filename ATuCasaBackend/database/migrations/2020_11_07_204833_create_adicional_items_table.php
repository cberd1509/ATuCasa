<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdicionalItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adicional_items', function (Blueprint $table) {

            $table->uuid('id')->primary();
            $table->uuid('item_id');

            $table->string('nombre',50);
            $table->float('costo_base');
            $table->boolean('disponible')->default(true);

            $table->foreign('item_id')
                  ->references('id')
                  ->on('items_menus')
                  ->onDelete('cascade')
                  ->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('adicional_items');
    }
}
