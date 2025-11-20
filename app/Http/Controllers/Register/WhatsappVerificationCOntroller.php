<?php

namespace App\Http\Controllers\Register;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\FonnteService;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class WhatsappVerificationController extends Controller
{
    public function SendWAVerification(Request $request) {
        $target = session('no_wa'); // Ambil nomor WA dari session
        $message = 'Halo ' . session('name') . ' ini otp kamu *' . session('otp') . '* Jangan bagikan ke siapapun';

        $result = FonnteService::sendMessage($target, $message);

        session(['success' => $result['status'] ?? false]);

        return Inertia::render('Register/WhatsappVerification', [
            'token'   => session('token'),
            'name'    => session('name'),
            'no_wa'   => session('no_wa'),
            'success' => session('success'), 
        ]);
    }

    public function verifyOtp(Request $request)
    {
        $request->validate([
            'otp'   => 'required|digits:6',
            'token' => 'required|string',
        ]);

        // Pastikan OTP berupa string
        $otp = $request->input('otp');

        // Jika ternyata array (untuk jaga-jaga)
        if (is_array($otp)) {
            $otp = implode('', $otp);
        }

        // Cari OTP berdasarkan token
        $check = DB::table('whatsapp_otp')
            ->where('token', $request->token)
            ->where('otp', $otp)
            ->first();

        if (!$check) {
            return back()->with('error', 'OTP salah atau tidak ditemukan');
        }

        $role = DB::table('role_management_user')
            ->select('role')
            ->where('token', $request->token)
            ->get();

        if($role == 'mentor') {
            return redirect()->route('home.tentor')->with('success', 'Verifikasi berhasil!');
        }else {
             return redirect()->route('home.student')->with('success', 'Verifikasi berhasil!');
        }
    }
}