<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items_menus', function (Blueprint $table) {

            $table->uuid('id')->primary();
            $table->uuid('comercio_id');
            $table->uuid('categoria_menu_id');

            $table->string('nombre',50);
            $table->string('descripcion',50);
            $table->string('image_path',100)->nullable();
            $table->float('costo_base');
            $table->boolean('disponible')->default(true);

            $table->timestamps();

            $table->foreign('comercio_id')
                  ->references('id')
                  ->on('comercios')
                  ->onDelete('cascade')
                  ->onUpdate('cascade');


            $table->foreign('categoria_menu_id')
                  ->references('id')
                  ->on('categoria_menus')
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
        Schema::dropIfExists('items_menus');
    }
}
