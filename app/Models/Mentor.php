<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Mentor extends Model
{
    use HasFactory;

    // Jika nama tabel bukan bentuk jamak dari nama model, bisa tambahkan:
    // protected $table = 'nama_tabel_kamu';

    protected $fillable = [
        'token',
        'name',
        'gender',
        'place_birth',
        'date_born',
        'religion',
        'address',
        'phone_number',
        'email',
        'profile_picture',
        'graduate',
        'vacation',
        'campus',
        'year_graduate',
        'skill_apply',
        'train_experience',
        'course_before',
        'certificate',
        'available_day_training',
        'available_time',
        'training_mode',
        'platform_pay',
        'no_platform_pay',
        'name_platform_pay',
    ];
}
