<?php

namespace App\Http\Controllers\Register;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WhatsappVerificationCOntroller extends Controller
{
    public function SendWAVerification() {
        return Inertia::render('Register/WhatsappVerification');
    }
}
