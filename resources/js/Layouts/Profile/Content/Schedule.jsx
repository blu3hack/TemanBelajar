import React from "react";
import { Clock } from "lucide-react";

function Schedule({ availability, profileData }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="text-blue-600" size={24} /> Jadwal &
                Ketersediaan
            </h3>
            <div className="space-y-3">
                {availability.map((slot, idx) => (
                    <div
                        key={idx}
                        className={`rounded-xl p-4 border-2 shadow-sm ${
                            slot.status === "available"
                                ? "bg-green-50 border-green-300"
                                : "bg-yellow-50 border-yellow-300" // Mengubah dari orange ke yellow untuk limited
                        }`}
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div>
                                <p className="font-bold text-gray-900 text-base sm:text-lg">
                                    {slot.day}
                                </p>
                                <p className="text-gray-700 text-sm">
                                    {slot.time}
                                </p>
                            </div>
                            <div
                                className={`px-3 py-1.5 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center w-fit ${
                                    slot.status === "available"
                                        ? "bg-green-200 text-green-800"
                                        : "bg-yellow-200 text-yellow-800"
                                }`}
                            >
                                {slot.status === "available"
                                    ? "✅ Tersedia Penuh"
                                    : "⚠️ Terbatas"}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-4 border-2 border-blue-300">
                <p className="text-center text-gray-700 text-sm">
                    <span className="font-bold text-blue-600">
                        Respon Time:
                    </span>{" "}
                    Biasanya membalas dalam{" "}
                    <span className="font-bold">
                        {profileData.responseTime}
                    </span>
                    .
                </p>
            </div>
        </div>
    );
}

export default Schedule;
