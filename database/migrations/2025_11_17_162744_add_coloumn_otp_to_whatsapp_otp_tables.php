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
        Schema::table('whatsapp_otp', function (Blueprint $table) {
             $table->string('otp')->nullable()->after('no_wa')->index()->unique();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('whatsapp_otp', function (Blueprint $table) {
             $table->dropColumn('otp');
        });
    }
};
