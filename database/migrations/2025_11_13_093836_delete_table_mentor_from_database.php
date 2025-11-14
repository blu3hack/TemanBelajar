<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
       Schema::dropIfExists('mentor');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
       Schema::create('mentor', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('token')->unique();
            $table->string('nama');
            $table->string('gender');
            $table->string('almamater');
            $table->string('materi');
            $table->string('propinsi');
            $table->string('kabupaten');
            $table->string('kecamatan');
            $table->string('no')->unique();
            $table->string('email')->unique();
            $table->string('status');
        });
    }
};
