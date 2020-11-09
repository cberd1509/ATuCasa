<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComercioRadiosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comercio_radios', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->float('comercio_id');
            $table->float('radio_domicilio');
            $table->float('costo_domicilio');

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
        Schema::dropIfExists('comercio_radios');
    }
}
