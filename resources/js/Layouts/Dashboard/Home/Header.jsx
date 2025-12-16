import React from "react";

function Header({ user }) {
    return (
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-6 lg:p-8 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-2xl lg:text-3xl font-bold">
                        Halo, {user.name}! 👋
                    </h2>
                    <p className="text-white/90 text-sm lg:text-base mt-1">
                        Semangat Belajar hari ini
                    </p>
                </div>
                <button className="w-12 h-12 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-sm rounded-full overflow-hidden flex items-center justify-center hover:bg-white/30 transition-all">
                    <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                    />
                </button>
            </div>
            <div className="grid grid-cols-3 gap-3 lg:gap-4 mt-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 lg:p-4 hover:bg-white/30 transition-all cursor-pointer">
                    <div className="text-2xl lg:text-3xl font-bold">24</div>
                    <div className="text-xs lg:text-sm text-white/90 mt-1">
                        Kelas
                    </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 lg:p-4 hover:bg-white/30 transition-all cursor-pointer">
                    <div className="text-2xl lg:text-3xl font-bold">18</div>
                    <div className="text-xs lg:text-sm text-white/90 mt-1">
                        Siswa
                    </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 lg:p-4 hover:bg-white/30 transition-all cursor-pointer">
                    <div className="text-2xl lg:text-3xl font-bold">4.8</div>
                    <div className="text-xs lg:text-sm text-white/90 mt-1">
                        Rating
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
