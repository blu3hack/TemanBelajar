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
        Schema::create('notification_payment', function (Blueprint $table) {
            $table->id();
            $table->string('order_id')->nullable()->index();
            $table->string('transaction_status')->nullable();
            $table->string('payment_type')->nullable();
            $table->string('transaction_id')->nullable();
            $table->string('status_code')->nullable();
            $table->decimal('gross_amount', 15, 2)->nullable();
            $table->json('payload'); // SEMUA DATA MIDTRANS
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notification_payment');
    }
};
