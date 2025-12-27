import React from "react";

function Statscard({ label, value, color, icon: Icon }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm text-gray-500 font-medium">{label}</p>
                    <h3 className="text-2xl font-bold mt-1 text-gray-800">
                        {value}
                    </h3>
                </div>
                <div className={`${color} p-2 rounded-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
            </div>
        </div>
    );
}

export default Statscard;
