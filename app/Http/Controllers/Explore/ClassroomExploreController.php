<?php

namespace App\Http\Controllers\Explore;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ClassroomExploreController extends Controller
{
    public function Explore() {
        return Inertia::render('Explore/ClassroomExplore');
    }

    public function CreateExploreCLass(Request $request) {
        try {
            DB::table('explore_class')->insert([
            'token' => $request->token,
            'title' => $request->title,
            'instructor' => $request->instructor,
            'students' => $request->students,
            'image' => $request->image,
            'price' => $request->price,
            'level' => $request->level,
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
