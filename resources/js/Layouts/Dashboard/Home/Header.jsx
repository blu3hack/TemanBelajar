import React from "react";

function Header({ user }) {
    return (
        <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-6 lg:p-8 text-white shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm text-white/80">
                                Online
                            </span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                            Halo, {user.name.split(" ")[0]}
                        </h2>
                        <p className="text-sm lg:text-base text-white/80">
                            Selamat datang kembali
                        </p>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                        <a href="/profile-mentor">
                            <button className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-md rounded-full overflow-hidden flex items-center justify-center hover:scale-110 transition-transform duration-300 ring-4 ring-white/30">
                                <img
                                    src={user.avatar}
                                    alt="User Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 lg:gap-5 mt-8"></div>
            </div>
        </div>
    );
}

export default Header;
