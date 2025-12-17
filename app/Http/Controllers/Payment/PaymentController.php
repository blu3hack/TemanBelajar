<?php

namespace App\Http\Controllers\Payment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Midtrans\Snap;

class PaymentController extends Controller
{
    public function create(Request $request)
    {
        $orderId = "INVOICE-" . time() . "-focuz.id";

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

        return response()->json(['message' => 'OK']);
    }
}
