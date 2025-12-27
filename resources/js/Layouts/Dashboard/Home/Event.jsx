import React from "react";
import { Calendar, Users, ArrowRight } from "lucide-react";

function Event({ events, verif_mentor, verif_student }) {
    return (
        <>
            <div className="flex items-center gap-2 mb-4 px-1">
                <h3 className="text-lg font-bold text-gray-900">
                    Kelas Terbaru
                </h3>
            </div>

            <div className="space-y-3">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="group relative p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                    >
                        {/* Gradient overlay on hover */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-r ${event.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                        ></div>

                        <div className="relative">
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span
                                            className={`${event.tagColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}
                                        >
                                            {event.tag}
                                        </span>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                        {event.title}
                                    </h4>
                                </div>
                                <div className="flex-shrink-0 w-8 h-8 bg-gray-100 group-hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-200">
                                    <ArrowRight />
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1.5">
                                    <Calendar />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Users />
                                    <span>{event.participants} peserta</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            {(verif_mentor || verif_student) && (
                <a href="/explore">
                    <button className="mt-4 w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300 active:scale-98">
                        Lihat Semua Event
                    </button>
                </a>
            )}
        </>
    );
}

export default Event;
