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
        Schema::create('explore_class', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100);
            $table->string('instructor', 100);
            $table->string('students', 100);
            $table->string('rating', 100);
            $table->string('image', 100);
            $table->string('price', 100);
            $table->string('level', 100);
            $table->string('badge', 100);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('explore_class');
    }
};
