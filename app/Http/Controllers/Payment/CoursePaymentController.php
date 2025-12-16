<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CoursePaymentController extends Controller
{
    public function Payment($classroom_id, $token)
    {
        $transaction_payment = DB::table('transaction_payment')
            ->where('classroom_id', $classroom_id)
            ->where('token', $token)
            ->first(); // ambil satu data

        return Inertia::render('Payment/CoursePayment', [
            'instructor' => $transaction_payment->instructor ?? null,
            'name' => $transaction_payment->name ?? null,
            'title' => $transaction_payment->title ?? null,
            'amount' => $transaction_payment->amount ?? null,
            'no_wa' => '081234567890',
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
        return redirect()->route('course-payment',[
            'classroom_id' => $request->classroom_id,
            'token_mentor' => $request->token_mentor])
        ->with('success', 'Pendaftaran berhasil!');
    }
}

