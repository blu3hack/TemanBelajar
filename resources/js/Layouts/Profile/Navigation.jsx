import React from "react";
import {
    BookOpen,
    MessageCircle,
    Clock,
    Lightbulb, // Ganti dari emoji 💡
} from "lucide-react";

function Navigation({ activeTab, setActiveTab }) {
    return (
        <div className="px-4 mb-4">
            <div className="bg-white rounded-2xl shadow-lg p-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                        {
                            id: "about",
                            label: "Tentang",
                            icon: <Lightbulb size={18} />,
                        },
                        {
                            id: "subjects",
                            label: "Pelajaran",
                            icon: <BookOpen size={18} />,
                        },
                        {
                            id: "testimonials",
                            label: "Testimoni",
                            icon: <MessageCircle size={18} />,
                        },
                        {
                            id: "schedule",
                            label: "Jadwal",
                            icon: <Clock size={18} />,
                        },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-3 py-3 rounded-xl font-semibold transition-all text-sm ${
                                activeTab === tab.id
                                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <span className="text-lg">{tab.icon}</span>
                            <span className="text-xs sm:text-sm">
                                {tab.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navigation;
