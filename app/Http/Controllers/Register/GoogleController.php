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
        $googleUrl = Socialite::driver('google')->redirect()->getTargetUrl();
        return redirect($googleUrl . '&prompt=select_account');
    }

    public function handleGoogleCallback()
    {
        $googleUser = Socialite::driver('google')->user();

        $token = 'FOCUZID-' . date('YmdHis') . random_int(100, 999);

        $user = User::firstOrCreate(
            ['email' => $googleUser->getEmail()],
            [
                'google_id' => $googleUser->getId(),
                'name' => $googleUser->getName(),
                'token' => $token,
                'avatar' => $googleUser->getAvatar(),
                'password' => bcrypt('ExtreamFantasy'),
                'email_verified_at' => now(),
            ]
        );

        Auth::login($user);
        request()->session()->regenerate();
        return redirect()->to('/dashboard');
    }
}
