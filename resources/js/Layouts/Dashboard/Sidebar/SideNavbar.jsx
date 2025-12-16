import React from "react";

function SideNavbar({ menuItems, activeMenu, setActiveMenu }) {
    return (
        <div>
            <nav className="flex-1 space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeMenu === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveMenu(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                                isActive
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            <Icon size={22} strokeWidth={2.5} />
                            <span className="font-semibold">{item.label}</span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}

export default SideNavbar;
