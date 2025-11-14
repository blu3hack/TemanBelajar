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
        Schema::create('data_active_mentor_tables', function (Blueprint $table) {
            $table->uuid('id')->primary(); // gunakan UUID sebagai primary key
            $table->string('token')->unique();
            $table->string('name');
            $table->enum('gender', ['Laki-laki', 'Perempuan']);
            $table->string('place_birth')->nullable();
            $table->date('date_born')->nullable();
            $table->text('address')->nullable();
            $table->string('phone_number', 20)->nullable();
            $table->string('email')->unique();
            $table->string('profile_picture')->nullable();
            $table->string('graduate')->nullable(); // pendidikan terakhir
            $table->string('vacation')->nullable(); // jurusan
            $table->string('campus')->nullable(); // nama kampus
            $table->year('year_graduate')->nullable();
            $table->string('skill_apply')->nullable(); // bidang keahlian
            $table->string('train_experience')->nullable(); // pengalaman mengajar
            $table->string('course_before')->nullable(); // tempat kursus sebelumnya
            $table->string('certificate')->nullable(); // file sertifikat
            $table->string('available_day_training')->nullable(); // hari tersedia
            $table->string('available_time')->nullable(); // waktu tersedia
            $table->string('training_mode')->nullable(); // online/offline
            $table->string('platform_pay')->nullable(); // nama platform pembayaran (bank/e-wallet)
            $table->string('no_platform_pay')->nullable(); // nomor rekening atau e-wallet
            $table->string('name_platform_pay')->nullable(); // nama pemilik rekening/e-wallet
            $table->string('status')->nullable(); // status mentor (aktif/non-aktif)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('data_active_mentor_tables');
    }
};
