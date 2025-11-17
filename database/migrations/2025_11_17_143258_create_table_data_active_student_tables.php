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
        Schema::create('data_active_student_tables', function (Blueprint $table) {
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
            $table->string('school_from')->nullable(); // pendidikan terakhir
            $table->string('vacation')->nullable(); // jurusan
            $table->string('year_graduate')->nullable(); // jurusan
            $table->string('status')->nullable(); // status mentor (aktif/non-aktif)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('data_active_student_tables');
    }
};
