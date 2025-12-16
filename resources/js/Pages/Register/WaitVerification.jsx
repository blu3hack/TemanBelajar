import React from "react";
import { Clock } from "lucide-react";

function WaitVerification() {
    const handleBackToDashboard = () => {
        window.location.href = "/dashboard";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-md w-full text-center">
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full">
                    <Clock className="w-10 h-10 text-blue-600" />
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Menunggu Verifikasi
                </h2>

                <p className="text-gray-600 leading-relaxed mb-8">
                    Anda sudah terdaftar sebagai Mentor. Tunggu verifikasi dari
                    pihak kami untuk bisa membuat kelas belajar.
                </p>

                <button
                    onClick={handleBackToDashboard}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                    Kembali ke Dashboard
                </button>
            </div>
        </div>
    );
}

export default WaitVerification;
