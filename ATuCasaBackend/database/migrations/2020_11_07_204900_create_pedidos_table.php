<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePedidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos', function (Blueprint $table) {

            $table->uuid('id')->primary();
            $table->uuid('comercio_id');

            $table->string('direccion_entrega',20);

            $table->boolean('aceptado',20)->default(false);
            $table->integer('calificacion')->nullable();

            $table->float("valor_pedido")->nullable();

            $table->timestamp("fecha_entrega")->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('comercio_id')
                  ->references('id')
                  ->on('comercios')
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
        Schema::dropIfExists('pedidos');
    }
}
