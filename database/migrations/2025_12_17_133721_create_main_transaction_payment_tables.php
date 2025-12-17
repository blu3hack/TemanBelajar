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
        Schema::create('main_transaction_payment', function (Blueprint $table) {
            $table->id();
            $table->string('order_id')->unique();
            $table->string('classroom_id')->nullable();
            $table->string('title')->nullable();
            $table->string('mentor')->nullable();
            $table->string('token_mentor')->nullable();
            $table->string('student')->nullable();
            $table->string('token_student')->nullable();
            $table->bigInteger('amount')->nullable();
            $table->string('status_payment')->nullable();
             $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('main_transaction_payment');
    }
};
