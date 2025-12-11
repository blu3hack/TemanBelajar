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
        $schedule_class = DB::table('explore_class')->get();
        $token = Auth::user()->token;

        $role = DB::table('data_active_mentor_tables')
            ->select('status')
            ->where('token', $token)
            ->first();

        return Inertia::render('Dashboard', [
            'schedule_class' => $schedule_class,
            'status' => $role->status
        ]);
    }
}
