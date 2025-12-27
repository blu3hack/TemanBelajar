import React from "react";
import { Star } from "lucide-react";

const ListCard = ({ title, icon: Icon, color, items }) => (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 h-full transform hover:shadow-indigo-200 transition duration-300">
        <div
            className={`p-4 flex items-center gap-2 rounded-t-xl ${color
                .replace("text", "bg")
                .replace("-600", "-100")}`}
        >
            <Icon className={color} size={20} />
            <h3 className="text-base font-bold text-gray-800">{title}</h3>
        </div>
        <div className="p-4 space-y-3">
            {items.length > 0 ? (
                items.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-3 text-sm border-b border-dashed border-gray-100 pb-2 last:border-b-0"
                    >
                        <span className="text-purple-500 mt-1 flex-shrink-0">
                            <Star size={14} fill="currentColor" />
                        </span>
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 italic text-sm">
                    Tidak ada data yang tersedia.
                </p>
            )}
        </div>
    </div>
);

export default ListCard;
