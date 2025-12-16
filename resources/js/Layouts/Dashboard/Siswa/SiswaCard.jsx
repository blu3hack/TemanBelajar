import React from "react";
import { Star } from "lucide-react";

function SiswaCard() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {[
                {
                    nama: "Budi Santoso",
                    kelas: 8,
                    rating: 4.9,
                    color: "from-blue-400 to-blue-600",
                },
                {
                    nama: "Ani Wijaya",
                    kelas: 12,
                    rating: 5.0,
                    color: "from-purple-400 to-purple-600",
                },
                {
                    nama: "Dian Pratama",
                    kelas: 6,
                    rating: 4.7,
                    color: "from-green-400 to-green-600",
                },
                {
                    nama: "Eka Putri",
                    kelas: 10,
                    rating: 4.8,
                    color: "from-pink-400 to-pink-600",
                },
                {
                    nama: "Fajar Ahmad",
                    kelas: 7,
                    rating: 4.6,
                    color: "from-orange-400 to-orange-600",
                },
                {
                    nama: "Gita Sari",
                    kelas: 9,
                    rating: 4.9,
                    color: "from-cyan-400 to-cyan-600",
                },
            ].map((item, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                    <div
                        className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3`}
                    >
                        {item.nama.charAt(0)}
                    </div>
                    <h3 className="font-bold text-gray-900 text-center text-sm mb-1">
                        {item.nama}
                    </h3>
                    <p className="text-xs text-gray-600 text-center mb-2">
                        {item.kelas} kelas
                    </p>
                    <div className="flex items-center justify-center gap-1 text-yellow-500">
                        <Star size={14} fill="currentColor" />
                        <span className="text-xs font-semibold text-gray-700">
                            {item.rating}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SiswaCard;
