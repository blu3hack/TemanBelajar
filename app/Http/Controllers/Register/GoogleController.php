<?php

namespace App\Http\Controllers\Register;

use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class GoogleController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();

            // Cek user di database
            $token = 'IDLINK' . str_pad(random_int(0, 99999999), 8, '0', STR_PAD_LEFT);
            $user = User::firstOrCreate(
                ['email' => $googleUser->getEmail()],
                [
                    'google_id' => $googleUser->getId(),
                    'name' => $googleUser->getName(),
                    'token' => $token,
                    'avatar' => $googleUser->getAvatar(),
                    'password' => bcrypt('123456'), // password default
                ]
            );
            Auth::login($user);
            return redirect('/dashboard');
        } catch (\Exception $e) {
            return redirect('/login/google')->with('error', 'Login gagal: ' . $e->getMessage());
        }
    }
}
