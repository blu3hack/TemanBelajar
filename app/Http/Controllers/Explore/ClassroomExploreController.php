<?php

namespace App\Http\Controllers\Explore;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ClassroomExploreController extends Controller
{
    public function Explore() {
        $explore_class = DB::table('explore_class')->get();
        $token = Auth::user()->token;
        $verifikasi = DB::table('data_active_student_tables')
            ->where('token', $token)
            ->first();
        return Inertia::render('Explore/ClassroomExplore', [
            'explore_class' => $explore_class,
            'verifikasi' => $verifikasi,
            'token' => $token,
        ]);
    }

    public function CreateExploreCLass(Request $request) {
        $parts = explode(' ', $request->total_meet);
        $total_meet = $parts[0];
        $total_price = $request->price * $total_meet;
        $level = $request->level;

        $classroom_id = "CLASS-" . time() . "-" . $level . "-focuz.id";

        try {
            DB::table('explore_class')->insert([
            'token' => $request->token,
            'classroom_id' => $classroom_id,
            'title' => $request->title,
            'instructor' => $request->instructor,
            'students' => $request->students,
            'image' => $request->image,
            'price' => $request->price,
            'total_price' => $total_price,
            'level' => $level,
            'badge' => $request->badge,
            'lesson' => $request->lesson,
            'describe' => $request->describe,
            'duration' => $request->duration,
            'startdate' => $request->startdate,
            'audience' => $request->audience,
            'total_meet' => $request->total_meet,
        ]);
            return redirect()->back()->with('success', 'Kelas berhasil dibuat!');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', $e->getMessage());
        }
    }

}
