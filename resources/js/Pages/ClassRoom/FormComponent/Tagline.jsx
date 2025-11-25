import React from "react";
import { Sparkles, GraduationCap } from "lucide-react";

function Tagline({ tagline, label }) {
    return (
        <div className="text-center mb-10">
            <div className="inline-block mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4 shadow-lg">
                    <GraduationCap className="w-12 h-12 text-white" />
                </div>
            </div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                {tagline}
            </h1>
            <p className="text-lg text-purple-600 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                {label}
                <Sparkles className="w-5 h-5" />
            </p>
        </div>
    );
}

export default Tagline;
