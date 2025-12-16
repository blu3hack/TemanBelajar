<?php

namespace App\Http\Controllers\Register;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WaitVerificationController extends Controller
{
    public function WaitVerification() {
        return Inertia::render('Register/WaitVerification');
    }
}
