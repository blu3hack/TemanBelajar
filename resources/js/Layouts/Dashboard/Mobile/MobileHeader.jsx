import React from "react";
import { Menu, X } from "lucide-react";

function MobileHeader({ sidebarOpen, setSidebarOpen }) {
    return (
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-40">
            <div className="flex items-center justify-between px-4 py-4">
                <img src="Assets/Logo/logo.png" alt="" className="w-50 h-10" />
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
                >
                    {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
        </div>
    );
}

export default MobileHeader;
