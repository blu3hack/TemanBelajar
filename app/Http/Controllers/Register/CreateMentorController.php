<?php

namespace App\Http\Controllers\Register;

use App\Models\Mentor;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

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
            // Insert ke tabel data_active_mentor_tables
            DB::table('data_active_mentor_tables')->insert([
                'id' => Str::uuid()->toString(),
                'token' => $request->token,
                'name' => $request->name,
                'bio' => null,
                'instagram' => null,
                'tiktok' => null,
                'twitter' => null,
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
                'status' => 'inactive',
                'wa_verified' => 'not verified',
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            

            // Hapus data OTP dan Role lama jika ada
            DB::table('whatsapp_otp')
                ->where('token', $request->token)
                ->delete();

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

            // Hapus data OTP dan Role lama jika ada
            DB::table('role_management_user')
                ->where('token', $request->token)
                ->delete();

            // Insert Role
            DB::table('role_management_user')->insert([
                'id' => Str::uuid()->toString(),
                'token' => $request->token,
                'name' => $request->name,
                'role' => $request->role,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            DB::commit();
            // ⛔ GANTI WITH() MENJADI SESSION PUT()
            session()->put('token', $request->token);
            session()->put('name', $request->name);
            session()->put('no_wa', $request->phone_number);
            session()->put('role', $request->role);
            return redirect()->route('send-wa');

        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Terjadi kesalahan: ' . $e->getMessage());
        }
    }
}
