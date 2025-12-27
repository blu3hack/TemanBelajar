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
            $table->string('avatar')->nullable()->after('certificate');
            $table->string('bio')->nullable()->after('name');
            $table->string('instagram')->nullable()->after('bio');
            $table->string('tiktok')->nullable()->after('instagram');
            $table->string('twitter')->nullable()->after('tiktok');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('data_active_mentor_tables', function (Blueprint $table) {
            //
        });
    }
};
