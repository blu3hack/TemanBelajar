<?php

namespace App\Http\Controllers\Register;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class CreateStudentController extends Controller
{
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'profile_picture' => 'required|mimes:jpeg,jpg,png|max:2048'
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // === Upload Profile Picture ===
        $profile_picture = $request->file('profile_picture');
        $profile_picture_name = time().'_'.$profile_picture->getClientOriginalName();
        $profile_picture->move(public_path('Assets/Images/ProfilePictures'), $profile_picture_name);

        DB::beginTransaction();

        try {
            DB::table('data_active_student_tables')->insert([
                'id' => Str::uuid()->toString(),
                'token' => $request->token,
                'name' => $request->name,
                'gender' => $request->gender,
                'religion' => $request->religion,
                'place_birth' => $request->place_birth,
                'date_born' => $request->date_born,
                'address' => $request->address,
                'phone_number' => $request->phone_number,
                'email' => $request->email,
                'profile_picture' => $profile_picture_name,
                'school_from' => $request->school_from,
                'vacation' => $request->vacation,
                'year_graduate' => $request->year_graduate,
                'status' => 'inactive',
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Insert OTP
            $otp = mt_rand(100000, 999999);
            DB::table('whatsapp_otp')->insert([
                'id' => Str::uuid()->toString(),
                'token' => $request->token,
                'name' => $request->name,
                'no_wa' => $request->phone_number,
                'otp' => $otp,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            DB::commit();

            // ⛔ GANTI WITH() MENJADI SESSION PUT()
            session()->put('token', $request->token);
            session()->put('name', $request->name);
            session()->put('no_wa', $request->phone_number);
            session()->put('otp', $otp);
            return redirect()->route('send-wa');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Terjadi kesalahan: ' . $e->getMessage());
        }
        return back()->with('success', 'Mentor berhasil disimpan!');
    }
}
