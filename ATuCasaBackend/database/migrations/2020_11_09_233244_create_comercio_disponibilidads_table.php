<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComercioDisponibilidadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comercio_disponibilidades', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('comercio_id');
            $table->integer('dia_semana');
            $table->boolean('apertura')->default(true);
            $table->string('hora_apertura',5)->nullable();
            $table->string('hora_cierre',5)->nullable();

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
        Schema::dropIfExists('comercio_disponibilidades');
    }
}
