import React from "react";
import { Plus } from "lucide-react";

function JurnalNav() {
    return (
        <div className="flex items-center justify-between">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Jurnal Mengajar
            </h2>
            <button className="w-12 h-12 lg:w-14 lg:h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-purple-700 active:scale-95 transition-all">
                <Plus size={24} />
            </button>
        </div>
    );
}

export default JurnalNav;
