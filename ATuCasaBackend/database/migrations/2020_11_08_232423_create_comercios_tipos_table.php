<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComerciosTiposTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comercios_tipos', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('comercio_id');
            $table->uuid('tipo_restaurante_id');

            $table->foreign('comercio_id')
                  ->references('id')
                  ->on('comercios')
                  ->onDelete('cascade')
                  ->onUpdate('cascade');

            $table->foreign('tipo_restaurante_id')
                  ->references('id')
                  ->on('restaurant_types')
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
        Schema::dropIfExists('comercios_tipos');
    }
}
