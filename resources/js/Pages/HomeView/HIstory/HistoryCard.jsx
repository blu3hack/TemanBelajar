import React from "react";
import { Clock, CheckCircle2, Star } from "lucide-react";

function HistoryCard({ item }) {
    return (
        <>
            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-6 border-2 border-emerald-200 hover:border-emerald-400 transition-all shadow-lg card-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200 rounded-full -mr-12 -mt-12 opacity-20"></div>
                <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-500 bg-white/70 px-2 py-1 rounded-lg">
                        {item.date}
                    </span>
                </div>
                <h4 className="font-black text-gray-800 text-lg">
                    {item.subject}
                </h4>
                <p className="text-sm text-gray-600 mt-2 font-medium">
                    {item.mentor}
                </p>
                <div className="flex items-center justify-between mt-5 text-sm">
                    <span className="flex items-center gap-1 font-semibold text-gray-700">
                        <Clock className="w-4 h-4 text-emerald-500" />
                        {item.duration}
                    </span>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, idx) => (
                            <Star
                                key={idx}
                                className={`w-4 h-4 ${
                                    idx < Math.floor(item.rating)
                                        ? "text-yellow-500 fill-yellow-500"
                                        : "text-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HistoryCard;
