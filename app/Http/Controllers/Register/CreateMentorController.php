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
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $profile_picture = $request->file('profile_picture');
        $profile_picture_name = time().'_'.$profile_picture->getClientOriginalName();
        $profile_picture->move(public_path('Assets/Image/ProfilePictures'), $profile_picture_name);

        if ($request->hasFile('certificate')) {
            $certificate = $request->file('certificate');
            $certificate_name = time().'_'.$certificate->getClientOriginalName();
            $certificate->move(public_path('Assets/Image/Certificates'), $certificate_name);
        } else {
            $certificate_name = null;
        }

        DB::table('mentor_test')->insert([
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
            'status' => 'inactive',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        return back()->with('success', 'Mentor berhasil disimpan!');
    }
}
