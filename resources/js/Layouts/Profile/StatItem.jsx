import React from "react";

const StatItem = ({ value, label, icon: Icon, color }) => (
    <div className="text-center p-3 flex-1 min-w-0">
        <Icon className={`mx-auto mb-1 ${color}`} size={20} />
        <div className="text-xl sm:text-2xl font-extrabold text-white">
            {value}
        </div>
        <div className="text-white text-opacity-80 text-xs sm:text-sm">
            {label}
        </div>
    </div>
);

export default StatItem;
