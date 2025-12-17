<?php

namespace App\Http\Controllers\Payment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Midtrans\Snap;

class PaymentController extends Controller
{
    public function create(Request $request)
    {
        $token = Auth::user()->token;
        $orderId = "INVOICE-" . time() . "-focuz.id"; // samakan saja dengan classroom_id dari table transaction_payment
        $classroom_id = DB::table('transaction_payment')
            ->where('token_student', $token)
            ->where('classroom_id', $request->classroom_id) // classroom_id dari request
            ->first();

        
        DB::table('main_transaction_payment')->insert([
            'order_id' => $orderId,
            'classroom_id' => $classroom_id->classroom_id,
            'title' => $classroom_id->title,
            'mentor' => $classroom_id->instructor,
            'token_mentor' => $classroom_id->token,
            'student' => $classroom_id->name,
            'token_student' => $classroom_id->token_student,
            'amount' => $classroom_id->amount,
            'status_payment' => 'unpaid',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $params = [
            'transaction_details' => [
                'order_id' => $orderId,
                'gross_amount' => $request->amount,
            ],
            'customer_details' => [
                'first_name' => $request->name,
                'email' => $request->email,
                'phone' => $request->no_wa,
            ],
        ];

        $snapToken = \Midtrans\Snap::getSnapToken($params);

        return back()->with([
            'snapToken' => $snapToken,
            'order_id' => $orderId,
        ]);
    }

    public function callback(Request $request)
    {
        // 1. Validasi signature
        $serverKey = config('midtrans.server_key');
        $expectedSignature = hash(
            'sha512',
            $request->order_id .
            $request->status_code .
            $request->gross_amount .
            $serverKey
        );

        if ($expectedSignature !== $request->signature_key) {
            return response()->json(['message' => 'Invalid signature'], 403);
        }

        // 2. Ambil data penting
        $orderId            = $request->order_id;
        $transactionStatus  = $request->transaction_status;
        $paymentType        = $request->payment_type ?? null;
        $transactionId      = $request->transaction_id ?? null;
        $statusCode         = $request->status_code;
        $grossAmount        = $request->gross_amount;
        

        // 3. Simpan / update (idempotent)
        DB::table('notification_payment')->updateOrInsert(
            ['order_id' => $orderId],
            [
                'transaction_status' => $transactionStatus,
                'payment_type'       => $paymentType,
                'transaction_id'     => $transactionId,
                'status_code'        => $statusCode,
                'gross_amount'       => $grossAmount,
                'payload'            => json_encode($request->all()),
                'updated_at'         => now(),
                'created_at'         => now(),
            ]
        );

        // 4. Simpan Detil Pembayaran
        DB::table('detil_payment')->updateOrInsert(
            ['order_id' => $request->order_id],
            [
                'transaction_id'     => $request->transaction_id,
                'transaction_status' => $request->transaction_status,
                'payment_type'       => $request->payment_type,
                'bank'               => $request->va_numbers[0]['bank'] ?? null,
                'va_number'          => $request->va_numbers[0]['va_number'] ?? null,
                'gross_amount'       => $request->gross_amount,
                'currency'           => $request->currency,
                'fraud_status'       => $request->fraud_status,
                'status_code'        => $request->status_code,
                'transaction_time'   => $request->transaction_time,
                'settlement_time'    => $request->settlement_time ?? null,
                'expiry_time'        => $request->expiry_time ?? null,
                'customer_name'      => $request->customer_details['full_name'] ?? null,
                'customer_phone'     => $request->customer_details['phone'] ?? null,
                'merchant_id'        => $request->merchant_id,
            ]
        );

        // 5. Update status pembyaran menjadi paid saat berhasil melakukan proses pembayaran
        if ($request->transaction_status === 'settlement') {
            DB::table('main_transaction_payment')
                ->where('order_id', $orderId )
                ->update([
                    'status_payment' => 'paid',
                ]);
        }

        return response()->json(['message' => 'OK']);
    }
}
