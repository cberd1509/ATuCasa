<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePedidoItemAdicionalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedido_item_adicional', function (Blueprint $table) {

            $table->uuid("id")->primary();
            $table->uuid('pedido_item_id');

            $table->string('nombre',50);
            $table->float('costo');


            $table->foreign('pedido_item_id')
                  ->references('id')
                  ->on('pedido_items')
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
        Schema::dropIfExists('pedido_item_adicional');
    }
}
