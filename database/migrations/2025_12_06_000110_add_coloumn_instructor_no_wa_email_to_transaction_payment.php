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
        Schema::table('transaction_payment', function (Blueprint $table) {
            $table->string('instructor')->nullable()->after('title');
            $table->string('no_wa')->nullable()->after('name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('transaction_payment', function (Blueprint $table) {
             $table->dropColumn('instructor');
             $table->dropColumn('no_wa');
        });
    }
};
