<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
        // Tangkap notifikasi dari Midtrans
        $data = $request->all();
        // Simpan status pembayaran ke database jika perlu
        return response()->json(['message' => 'Callback received']);
    }
}
