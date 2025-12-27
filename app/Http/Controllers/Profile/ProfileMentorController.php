<?php

namespace App\Http\Controllers\Profile;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class ProfileMentorController extends Controller
{
    public function ProfileMentorView()
    {
        $token = Auth::user()->token;
        $profile = DB::table('data_active_mentor_tables')
        ->where('token', $token)
        ->first();

        return Inertia::render('Profile/ProfileMentor', ['profile' => $profile]);
    }

    public function UpdateProfile(Request $request) 
    {
        $token = Auth::user()->token;

        // 1. Validasi data
        $request->validate([
            'name'         => 'required|string|max:255',
            'bio'          => 'nullable|string|max:1000',
            'phone_number' => 'nullable|string|max:20',
            'address'      => 'nullable|string|max:255',
            'instagram'    => 'nullable|string|max:100',
            'tiktok'       => 'nullable|string|max:100',
            'twitter'      => 'nullable|string|max:100',
            'profile_picture' => 'nullable|image|mimes:jpg,jpeg,png|max:2048', // max 2MB
        ]);

        try {
            // Ambil data lama untuk mendapatkan nama foto lama
            $currentData = DB::table('data_active_mentor_tables')->where('token', $token)->first();
            $imageName = $currentData->profile_picture;

            // 2. Logika Upload Foto (Jika ada file baru)
            if ($request->hasFile('profile_picture')) {
                $file = $request->file('profile_picture');
                $imageName = time() . '_' . $token . '.' . $file->getClientOriginalExtension();
                
                // Simpan ke folder public/Assets/Images/ProfilePictures
                $file->move(public_path('Assets/Images/ProfilePictures'), $imageName);

                // Hapus foto lama jika bukan foto default (opsional)
                if ($currentData->profile_picture && file_exists(public_path('Assets/Images/ProfilePictures/' . $currentData->profile_picture))) {
                    @unlink(public_path('Assets/Images/ProfilePictures/' . $currentData->profile_picture));
                }
            }

            // 3. Update Database
            // Gunakan $request->input('field') untuk memastikan data terbaca meskipun dikirim via PUT spoofing
            DB::table('data_active_mentor_tables')
                ->where('token', $token)
                ->update([
                    'name'            => $request->input('name'),
                    'bio'             => $request->input('bio'),
                    'phone_number'    => $request->input('phone_number'),
                    'address'         => $request->input('address'),
                    'instagram'       => $request->input('instagram'),
                    'tiktok'          => $request->input('tiktok'),
                    'twitter'         => $request->input('twitter'),
                    'profile_picture' => $imageName,
                    'updated_at'      => now(),
                ]);

            return Redirect::back()->with('success', 'Profil berhasil diperbarui!');

        } catch (\Exception $e) {
            // Log error untuk debug jika diperlukan: \Log::error($e->getMessage());
            return Redirect::back()->with('error', 'Gagal memperbarui profil.');
        }
    }
}
