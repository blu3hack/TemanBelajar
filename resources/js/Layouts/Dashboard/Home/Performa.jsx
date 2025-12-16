import React from "react";
import { TrendingUp, Award } from "lucide-react";

function Performa() {
    return (
        <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">
                Performa Minggu Ini
            </h3>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                        <TrendingUp className="text-green-600" size={20} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">89%</div>
                    <div className="text-sm text-gray-600 mt-1">Kehadiran</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center mb-3">
                        <Award className="text-yellow-600" size={20} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">12</div>
                    <div className="text-sm text-gray-600 mt-1">
                        Kelas Selesai
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Performa;
