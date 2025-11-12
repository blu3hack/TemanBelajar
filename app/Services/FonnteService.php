<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class FonnteService
{
    public static function sendMessage($target, $message)
    {
        $response = Http::withHeaders([
            'Authorization' => env('FONNTE_TOKEN'),
        ])->asForm()->post('https://api.fonnte.com/send', [
            'target' => $target,  // Nomor tujuan, contoh: 6281234567890
            'message' => $message // Pesan yang ingin dikirim
        ]);

        return $response->json();
    }
}
