<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CoursePaymentController extends Controller
{
   public function Payment() {
        return Inertia::render('Payment/CoursePayment', [
            'name' => "Bayu Jaya",
            'amount' => 750000,
            'email' => "ariesofyan55@gmail.com",
            'no_wa' => "+6281237885206",
        ]);
    }
}

