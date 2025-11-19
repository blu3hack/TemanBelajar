import React from "react";
import { Target, ChevronRight } from "lucide-react";

function Label({ Href }) {
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-black text-gray-800 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center shadow-lg">
                        <Target className="w-7 h-7 text-white" />
                    </div>
                    Rekomendasi Kelas
                </h2>
                <a
                    href={Href}
                    className="text-purple-600 font-bold flex items-center gap-1 hover:gap-2 transition-all group"
                >
                    Lihat semua{" "}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </>
    );
}

export default Label;
