<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CoursePaymentController extends Controller
{
    public function Payment($classroom_id)
    {
        $token = Auth::user()->token;
        $name = Auth::user()->name;
        $transaction_payment = DB::table('transaction_payment')
            ->where('classroom_id', $classroom_id)
            ->first(); // ambil satu data

        $whatapp_no = DB::table('whatsapp_otp')
            ->where('token', $token)
            ->first(); // ambil satu data
        
        return Inertia::render('Payment/CoursePayment', [
            'classroom_id' => $transaction_payment->classroom_id ?? null,
            'instructor' => $transaction_payment->instructor ?? null,
            'name' => $name ?? null,
            'title' => $transaction_payment->title ?? null,
            'amount' => $transaction_payment->amount ?? null,
            'no_wa' => $whatapp_no->no_wa,
        ]);
    }

    public function store(Request $request)
    {
        // contoh insert ke database
        DB::table('transaction_payment')->insert([
            'classroom_id' => $request->classroom_id,
            'token' => $request->token_mentor,
            'title' => $request->title,
            'instructor' => $request->instructor,
            'name' => $request->name,
            'token_student' => $request->token_student,
            'amount' => $request->amount,
            'status_payment' => 'unpaid',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // redirect ke halaman pembayaran atau sukses
        return redirect()->route('course-payment',
            [
            'classroom_id' => $request->classroom_id
            ])
        ->with('success', 'Pendaftaran berhasil!');
    }
}

