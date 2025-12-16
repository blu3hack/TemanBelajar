import React from "react";
import { Plus } from "lucide-react";

function JadwalNav() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Jadwal Kursus
                </h2>
                <button className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-blue-700 active:scale-95 transition-all">
                    <Plus size={24} />
                </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium whitespace-nowrap hover:bg-blue-700 transition-all">
                    Semua
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200 transition-all">
                    Hari Ini
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200 transition-all">
                    Minggu Ini
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200 transition-all">
                    Bulan Ini
                </button>
            </div>
        </div>
    );
}

export default JadwalNav;
