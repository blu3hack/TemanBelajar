import React from "react";
import { Search } from "lucide-react";

function HeroSection({ user }) {
    return (
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                        Yuk, Belajar Hal Seru
                    </h1>
                    <p className="text-lg sm:text-xl font-semibold">
                        Upgrade skill kamu bareng ribuan teman lainnya
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5 sm:w-6 sm:h-6" />
                    <input
                        type="text"
                        placeholder="Mau belajar apa nih? Cari yuk... 🔍"
                        className="w-full pl-12 sm:pl-14 pr-4 py-3 sm:py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-400 text-base sm:text-lg font-medium shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
