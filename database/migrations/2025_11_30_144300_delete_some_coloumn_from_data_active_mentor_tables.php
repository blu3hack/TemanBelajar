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
        Schema::table('data_active_mentor_tables', function (Blueprint $table) {
            $table->dropColumn(['available_day_training', 'available_time', 'training_mode', 'school_grade']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('data_active_mentor_tables', function (Blueprint $table) {
            $table->string('available_day_training')->nullable();
            $table->string('available_time')->nullable();
            $table->string('training_mode', 20)->nullable();
            $table->string('school_grade', 20)->nullable();
        });
    }
};
