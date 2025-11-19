import React from "react";
import { BookOpen, ChevronRight } from "lucide-react";

function Label({ label, icon: Icon }) {
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-black text-gray-800 mb-6 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
                        {Icon && <Icon className="w-7 h-7 text-white" />}
                    </div>
                    {label}
                </h2>
                <a
                    href="#"
                    className="text-emerald-600 font-bold flex items-center gap-1 hover:gap-2 transition-all group"
                >
                    Lihat semua{" "}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </>
    );
}

export default Label;
