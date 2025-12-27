import React from "react";

function ButtomNav({ menuItems, activeMenu, setActiveMenu }) {
    return (
        <div className="px-6 py-3 overflow-x-auto">
            <div className="flex items-center gap-4 min-w-max">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeMenu === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveMenu(item.id)}
                            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all ${
                                isActive ? "scale-110" : "scale-100"
                            }`}
                        >
                            <div
                                className={`${
                                    isActive
                                        ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                                        : "bg-gray-100 text-gray-500"
                                } w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-sm`}
                            >
                                <Icon size={22} strokeWidth={2.5} />
                            </div>
                            <span
                                className={`text-xs font-medium whitespace-nowrap ${
                                    isActive ? "text-gray-900" : "text-gray-500"
                                }`}
                            >
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default ButtomNav;
