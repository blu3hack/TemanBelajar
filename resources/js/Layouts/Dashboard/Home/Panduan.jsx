import React from "react";
import { Lightbulb } from "lucide-react";
function Panduan() {
    return (
        <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 shadow-sm">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Lightbulb className="text-white" />
                </div>
                <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-900 mb-2">
                        Panduan Penggunaan
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 font-bold mt-0.5">
                                •
                            </span>
                            <span>
                                <strong>Daftar Mentor:</strong> Bergabunglah
                                sebagai mentor dan mulai berbagi ilmu Anda
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 font-bold mt-0.5">
                                •
                            </span>
                            <span>
                                <strong>Daftar Murid:</strong> Daftar untuk
                                mengikuti kelas yang Anda minati
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 font-bold mt-0.5">
                                •
                            </span>
                            <span>
                                <strong>Chat Admin:</strong> Hubungi admin jika
                                ada pertanyaan atau kendala
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 font-bold mt-0.5">
                                •
                            </span>
                            <span>
                                <strong>Explore Kelas:</strong> Akan Terbuka
                                saat sudah mendaftar sebagai Murid lalu Temukan
                                berbagai kelas menarik yang tersedia
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Panduan;
