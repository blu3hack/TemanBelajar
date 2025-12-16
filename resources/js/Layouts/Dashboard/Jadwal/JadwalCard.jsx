import React from "react";
import { Clock, Phone } from "lucide-react";

function JadwalCard({ schedule_class }) {
    return (
        <div className="grid lg:grid-cols-2 gap-4">
            {(schedule_class ?? []).map((schedule) => (
                <div
                    key={schedule.id}
                    className={`bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-5 border border-blue-200 shadow-sm hover:shadow-md transition-all`}
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-lg mb-1">
                                {schedule.title}
                            </h3>
                            <p className="text-gray-600">{schedule.audience}</p>
                        </div>
                        <div
                            className={`px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full`}
                        >
                            {schedule.startdate}
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Clock size={16} />
                            <span>{schedule.duration}</span>
                        </div>
                        {schedule.status === "upcoming" ? (
                            <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
                                <Phone size={16} />
                                Mulai Kelas
                            </button>
                        ) : (
                            <span className="text-sm font-medium text-green-600">
                                ✓ Selesai
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default JadwalCard;
