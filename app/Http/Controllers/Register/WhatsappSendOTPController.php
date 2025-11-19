<?php

namespace App\Http\Controllers\Register;
use App\Services\FonnteService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WhatsappSendOTPController extends Controller
{
    public function send()
    {
        
        $target = '6282266002221'; // Nomor WA tujuan (tanpa tanda +)
        $message = 'Halo, ini pesan otomatis dari TemanBelajar.id! 🚀';

        $result = FonnteService::sendMessage($target, $message);

        return response()->json($result);
    }
}
