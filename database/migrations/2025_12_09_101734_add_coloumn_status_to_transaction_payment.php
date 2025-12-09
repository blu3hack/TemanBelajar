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
            $table->string('status_payment')->nullable()->after('amount');
            $table->string('token_student')->nullable()->after('name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('transaction_payment', function (Blueprint $table) {
            $table->dropColumn('status_payment');
            $table->dropColumn('token_student');
        });
    }
};
