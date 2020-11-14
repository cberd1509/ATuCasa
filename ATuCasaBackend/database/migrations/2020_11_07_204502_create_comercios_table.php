<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComerciosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comercios', function (Blueprint $table) {
            $table->uuid('id')->primary();

            $table->string('name',75);
            $table->string('email',50);
            $table->string('phone',20);
            $table->string('password',20);

            $table->boolean('published')->default(false);

            $table->boolean('email_verified')->default(false);
            $table->boolean('whatsapp_verified')->default(false);

            //Nullable

            $table->string('logo_path',200)->nullable();
            $table->string('banner_path',200)->nullable();

            $table->float('latitude')->nullable();
            $table->float('longitude')->nullable();

            $table->string('vendor_rut_path',200)->nullable();
            $table->string('rep_doc_path',200)->nullable();
            $table->string('bank_certificate_path',200)->nullable();

            //Auditoria
            $table->softDeletes();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comercios');
    }
}
