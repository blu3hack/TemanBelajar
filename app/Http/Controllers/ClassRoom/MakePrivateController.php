<?php

namespace App\Http\Controllers\ClassRoom;

use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class MakePrivateController extends Controller
{
    public function PrivateClassStore(Request $request)
    {
        DB::table('private_classroom')->insert([
            'id' => Str::uuid()->toString(),
            'token' => $request->token,
            'classname' => $request->nameclass,
            'lesson_category' => $request->lesson,
            'price' => $request->price,
            'duration' => $request->duration,
            'startdate' => $request->startdate,
            'audience' => $request->audience,
            'total_meet' => $request->total_meet,
            'about' => $request->describe,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        return redirect()->back()->with('success', 'Kelas berhasil dibuat!');
    }
}
