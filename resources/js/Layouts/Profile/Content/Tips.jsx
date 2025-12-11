import React from "react";
import {
    CheckCircle, // Ganti dari emoji ✅
    Lightbulb, // Ganti dari emoji 💡
} from "lucide-react";

function Tips() {
    return (
        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-2xl shadow-lg p-4 sm:p-6 border-2 border-indigo-200">
            <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg flex items-center gap-2">
                <Lightbulb className="text-indigo-600" size={20} /> Tips Belajar
                Efektif
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                    <CheckCircle
                        size={16}
                        className="text-indigo-500 flex-shrink-0"
                    />
                    <span>
                        Siapkan topik dan pertanyaan spesifik sebelum kelas
                    </span>
                </li>
                <li className="flex items-center gap-2">
                    <CheckCircle
                        size={16}
                        className="text-indigo-500 flex-shrink-0"
                    />
                    <span>
                        Jangan ragu untuk meminta penjelasan lebih mendalam
                    </span>
                </li>
                <li className="flex items-center gap-2">
                    <CheckCircle
                        size={16}
                        className="text-indigo-500 flex-shrink-0"
                    />
                    <span>
                        Lakukan review materi secara berkala (Setiap hari)
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default Tips;
