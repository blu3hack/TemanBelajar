<?php

namespace App\Http\Controllers\Register;

use App\Models\Mentor;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class CreateMentorController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'profile_picture' => 'required|mimes:jpeg,jpg,png|max:2048',
            'certificate'     => 'nullable|mimes:jpeg,jpg,png|max:2048',
            'token'           => 'required|string',
            'name'            => 'required|string',
            'phone_number'    => 'required|string',
            'email'           => 'required|email'
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Upload Profile Picture
        $profile_picture = $request->file('profile_picture');
        $profile_picture_name = time().'_'.$profile_picture->getClientOriginalName();
        $profile_picture->move(public_path('Assets/Images/ProfilePictures'), $profile_picture_name);

        // Upload Certificate (Optional)
        $certificate_name = null;
        if ($request->hasFile('certificate')) {
            $certificate = $request->file('certificate');
            $certificate_name = time().'_'.$certificate->getClientOriginalName();
            $certificate->move(public_path('Assets/Images/Certificates'), $certificate_name);
        }

        DB::beginTransaction();

        try {
            // === Insert ke tabel data_active_mentor_tables ===
            $mentorId = DB::table('data_active_mentor_tables')->insertGetId([
                'id' => Str::uuid()->toString(),
                'token' => $request->token,
                'name' => $request->name,
                'gender' => $request->gender ?? null,
                'religion' => $request->religion ?? null,
                'place_birth' => $request->place_birth ?? null,
                'date_born' => $request->date_born ?? null,
                'address' => $request->address ?? null,
                'phone_number' => $request->phone_number,
                'email' => $request->email,
                'profile_picture' => $profile_picture_name,
                'graduate' => $request->graduate ?? null,
                'vacation' => $request->vacation ?? null,
                'year_graduate' => $request->year_graduate ?? null,
                'train_experience' => $request->train_experience ?? null,
                'certificate' => $certificate_name,
                'skill_apply' => json_encode($request->skill_apply ?? []),
                'available_day_training' => json_encode($request->available_day_training ?? []),
                'training_mode' => json_encode($request->training_mode ?? []),
                'available_time' => json_encode($request->available_time ?? []),
                'school_grade' => json_encode($request->school_grade ?? []),
                'status' => 'inactive',
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // === Insert ke tabel Whatsapp_otp ===
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

            return back()->with('success', 'Mentor berhasil disimpan! OTP: ' . $otp);

        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Terjadi kesalahan: ' . $e->getMessage());
        }
    }
}
