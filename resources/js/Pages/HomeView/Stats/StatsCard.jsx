import React from "react";

function StatsCard({ label, streak, color, icon: Icon }) {
    return (
        <>
            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="relative inline-block">
                    {Icon && (
                        <Icon
                            className={`w-14 h-14 mx-auto text-${color}-500 mb-2 group-hover:text-${color}-600 transition-colors drop-shadow-lg`}
                        />
                    )}
                    <div
                        className={`absolute inset-0 bg-${color}-400 blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
                    ></div>
                </div>
                <p
                    className={`text-3xl font-black bg-gradient-to-r from-${color}-500 to-red-600 bg-clip-text text-transparent`}
                >
                    {streak}
                </p>
                <p className="text-sm font-semibold text-gray-700 mt-1">
                    {label}
                </p>
            </div>
        </>
    );
}

export default StatsCard;
