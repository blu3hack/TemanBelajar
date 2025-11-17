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
             $table->dropColumn(['platform_pay', 'no_platform_pay', 'name_platform_pay']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('data_active_mentor_tables', function (Blueprint $table) {
            $table->string('platform_pay')->nullable();
            $table->string('no_platform_pay', 20)->nullable();
            $table->string('name_platform_pay', 20)->nullable();
        });
    }
};
