import React from "react";
import { X } from "lucide-react";

function MobileSidebar({
    menuItems,
    activeMenu,
    setActiveMenu,
    setSidebarOpen,
}) {
    return (
        <div
            className="absolute right-0 top-0 h-full w-64 bg-white p-6"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"
                >
                    <X size={18} />
                </button>
            </div>

            <nav className="space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeMenu === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => {
                                setActiveMenu(item.id);
                                setSidebarOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                                isActive
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            <Icon size={20} />
                            <span className="font-semibold">{item.label}</span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}

export default MobileSidebar;
