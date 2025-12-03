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
            $table->string('token', 100);
            $table->string('title', 100);
            $table->string('instructor', 100);
            $table->string('students', 100)->nullable();
            $table->integer('rating'); // FIX
            $table->string('image', 255)->nullable();
            $table->integer('price'); // FIX
            $table->string('level', 100);
            $table->string('badge', 100)->nullable();
            $table->string('lesson', 100);
            $table->string('describe', 100);
            $table->string('duration', 100);
            $table->string('startdate', 100);
            $table->string('audience', 100);
            $table->string('total_meet', 100);
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
