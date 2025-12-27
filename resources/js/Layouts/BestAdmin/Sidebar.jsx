import React from "react";
import { Video } from "lucide-react";

function Sidebar({ menuItems, activeMenu, setActiveMenu }) {
    return (
        <div className="w-64 bg-indigo-900 text-white flex-shrink-0">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-8">
                    <Video className="w-8 h-8 text-indigo-400" />
                    <h1 className="text-xl font-bold tracking-tight">
                        FOCUZ.<span className="text-indigo-400">ID</span>
                    </h1>
                </div>
                <nav className="space-y-1">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveMenu(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                                activeMenu === item.id
                                    ? "bg-indigo-600 text-white shadow-lg"
                                    : "text-indigo-200 hover:bg-indigo-800 hover:text-white"
                            }`}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
