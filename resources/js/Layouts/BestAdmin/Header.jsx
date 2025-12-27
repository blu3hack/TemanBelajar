import React from "react";

function Header({ activeMenu }) {
    return (
        <div>
            <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800 capitalize">
                    {activeMenu}
                </h2>
                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-gray-800">
                            Administrator
                        </p>
                        <p className="text-xs text-gray-500">Super Admin</p>
                    </div>
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold border-2 border-indigo-200">
                        A
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
