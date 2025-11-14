import React from "react";
import { GraduationCap, Award } from "lucide-react";

export default function ButtonRegister({ handleSubmit }) {
    return (
        <div className="mt-8 text-center">
            <button
                onClick={handleSubmit}
                className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 text-lg"
            >
                <span className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Kirim Registrasi! 🎉
                    <Award className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </span>

                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
        </div>
    );
}
