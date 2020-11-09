<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriaMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categoria_menus', function (Blueprint $table) {

            $table->uuid("id")->primary();
            $table->uuid("comercio_id");
            $table->string('nombre',100);

            $table->timestamps();

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
        Schema::dropIfExists('categoria_menus');
    }
}
