import React from "react";
import { Search } from "lucide-react";
function SiswaNav() {
    return (
        <div className="flex items-center justify-between">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Daftar Siswa
            </h2>
            <button className="w-12 h-12 lg:w-14 lg:h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-green-700 active:scale-95 transition-all">
                <Search size={24} />
            </button>
        </div>
    );
}

export default SiswaNav;
