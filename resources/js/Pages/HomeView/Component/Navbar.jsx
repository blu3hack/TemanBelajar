import React from "react";
import { Menu, Sparkles } from "lucide-react";

function Navbar({ label, name }) {
    return (
        <>
            <header className="glass-effect sticky top-0 z-40 border-b-2 border-cyan-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-3">
                            <Menu className="w-6 h-6 text-cyan-600 lg:hidden cursor-pointer hover:scale-110 transition-transform" />
                            <h1 className="text-xl sm:text-2xl font-black gradient-text flex items-center gap-2">
                                <Sparkles className="w-6 h-6" />
                                Dashboard {label}
                            </h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                {name}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
