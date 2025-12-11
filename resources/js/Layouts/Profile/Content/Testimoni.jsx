import React from "react";
import { Star, MessageCircle } from "lucide-react";

function Testimoni({ testimonials }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageCircle className="text-blue-600" size={24} /> Ulasan
                Murid
            </h3>

            <div className="space-y-4">
                {testimonials.map((testi, idx) => (
                    <div
                        key={idx}
                        className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-4 border-2 border-blue-200 shadow-md"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                                {testi.avatar}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between mb-2 gap-2">
                                    <div className="min-w-0">
                                        <p className="font-bold text-gray-900 text-sm sm:text-base truncate">
                                            {testi.name}
                                        </p>
                                        <p className="text-xs text-gray-600">
                                            {testi.grade}
                                        </p>
                                    </div>

                                    <div className="flex gap-1 flex-shrink-0">
                                        {[...Array(testi.rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    size={14}
                                                    fill="#FCD34D"
                                                    className="text-yellow-500"
                                                />
                                            )
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed italic text-sm">
                                    "{testi.text}"
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimoni;
