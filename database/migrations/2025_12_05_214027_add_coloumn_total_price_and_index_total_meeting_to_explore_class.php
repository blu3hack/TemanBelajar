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
        Schema::table('explore_class', function (Blueprint $table) {
            $table->string('total_price')->nullable()->after('price');
            $table->string('index_total_meet')->nullable()->after('total_meet');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('explore_class', function (Blueprint $table) {
            $table->dropColumn('total_price');
            $table->dropColumn('index_total_meet');
        });
    }
};
