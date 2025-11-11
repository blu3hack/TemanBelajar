<?php

namespace App\Http\Controllers\Register;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RegisterController extends Controller
{
    public function StudentRegister()
    {
        return Inertia::render('Register/Student');
    }

    public function TeacherRegister()
    {
        return Inertia::render('Register/Teacher');
    }
}
