import React from "react";
import { Search, Sparkles, TrendingUp, Users } from "lucide-react";

function HeroSection({ user }) {
    return (
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300 opacity-20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-300 opacity-15 rounded-full blur-2xl animate-pulse"
                    style={{ animationDelay: "2s" }}
                ></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
                        Yuk, Belajar Hal Seru
                        <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                            Bersama Kami
                        </span>
                    </h1>
                </div>

                {/* Search Bar with Enhanced Design */}
                {/* <div className="relative max-w-3xl mx-auto mb-10">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative">
                            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-purple-500 w-5 h-5 sm:w-6 sm:h-6 z-10" />
                            <input
                                type="text"
                                placeholder="Mau belajar apa nih? Cari yuk... 🔍"
                                className="relative w-full pl-14 sm:pl-16 pr-4 py-4 sm:py-5 rounded-3xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-400 text-base sm:text-lg font-medium shadow-2xl bg-white"
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default HeroSection;
