<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

use Inertia\Inertia;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function schedule_class()
    {
        $user = Auth::user();
        $schedule_class = DB::table('explore_class')->get();
        $token = $user->token;

        $verif_mentor = DB::table('data_active_mentor_tables')
            ->where('token', $token)
            ->first();

        $verif_student = DB::table('data_active_student_tables')
            ->where('token', $token)
            ->first();

        return Inertia::render('Dashboard', [
            'user' => $user,
            'schedule_class' => $schedule_class,
            'token' => $token,
            'verif_mentor' => $verif_mentor,
            'verif_student' => $verif_student,
        ]);

    }
}
