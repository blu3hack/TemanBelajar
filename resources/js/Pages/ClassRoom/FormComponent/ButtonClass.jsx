import React from "react";
import { Sparkles } from "lucide-react";

function ButtonClass({ onClick, label }) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-xl flex items-center justify-center gap-2"
        >
            <Sparkles className="w-6 h-6" />
            {label}
            <Sparkles className="w-6 h-6" />
        </button>
    );
}

export default ButtonClass;
