<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileMentorController extends Controller
{
    public function ProfileMentorView()
    {
        return Inertia::render('Profile/ProfileMentor');
    }
}
