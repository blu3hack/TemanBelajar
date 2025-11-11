<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail; // aktifkan ini
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements MustVerifyEmail // tambahkan interface ini
{
    use HasFactory, Notifiable;

    /**
     * Kolom yang bisa diisi massal.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'token',
        'email',
        'password',
    ];

    /**
     * Kolom yang disembunyikan dari serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Kolom yang harus dikonversi ke tipe data tertentu.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
