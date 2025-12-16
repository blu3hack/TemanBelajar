import React from "react";
import { Info, TrendingUp } from "lucide-react";

function GridRule({ classTypes, selectedCard, setSelectedCard }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {classTypes.map((classType) => {
                const Icon = classType.icon;
                const isSelected = selectedCard === classType.id;

                return (
                    <div
                        key={classType.id}
                        onClick={() =>
                            setSelectedCard(isSelected ? null : classType.id)
                        }
                        className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                            isSelected
                                ? "ring-4 ring-offset-2 ring-blue-400 scale-105"
                                : ""
                        }`}
                    >
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all h-full flex flex-col">
                            {/* Card Header with Gradient - Fixed Height */}
                            <div
                                className={`bg-gradient-to-br ${classType.color} p-6 text-white relative overflow-hidden h-44 flex flex-col justify-between`}
                            >
                                {/* Decorative circles */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-3">
                                        <Icon className="w-10 h-10" />
                                        <span
                                            className={`${classType.badgeColor} text-white text-xs px-3 py-1 rounded-full font-semibold`}
                                        >
                                            {classType.badge}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-2">
                                        {classType.title}
                                    </h2>
                                    <p className="text-sm opacity-95 line-clamp-2">
                                        {classType.description}
                                    </p>
                                </div>
                            </div>

                            {/* Card Body - Fixed Height with scroll */}
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <div
                                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${classType.color} flex items-center justify-center`}
                                    >
                                        <Info className="w-4 h-4 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-800">
                                        Ketentuan Utama
                                    </h3>
                                </div>

                                {/* Fixed height container for rules */}
                                <div className="space-y-2.5 mb-5 flex-1">
                                    {classType.rules.map((rule, idx) => (
                                        <div
                                            key={idx}
                                            className={`${classType.bgLight} rounded-xl p-3 border border-gray-100 hover:shadow-md transition-shadow`}
                                        >
                                            <div
                                                className={`text-xs font-bold ${classType.accentColor} mb-1 uppercase tracking-wide`}
                                            >
                                                {rule.label}
                                            </div>
                                            <div className="text-sm font-semibold text-gray-800">
                                                {rule.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className={`w-full bg-gradient-to-r ${classType.color} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 group`}
                                >
                                    {isSelected ? (
                                        <>
                                            <span>Tutup Detail</span>
                                            <TrendingUp className="w-4 h-4 rotate-180 group-hover:translate-y-1 transition-transform" />
                                        </>
                                    ) : (
                                        <>
                                            <span>Lihat Kriteria</span>
                                            <TrendingUp className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default GridRule;
