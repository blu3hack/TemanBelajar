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
            $table->string('wa_verified')->nullable()->after('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('data_active_mentor_tables', function (Blueprint $table) {
            $table->dropColumn('wa_verified');
        });
    }
};
