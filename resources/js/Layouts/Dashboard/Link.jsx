import React from "react";

function Link({ link, label, icon: Icon }) {
    return (
        <div>
            <a href={link}>
                <button className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md active:scale-95 transition-all">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        {Icon && <Icon className="text-blue-600" size={24} />}
                    </div>
                    <span className="text-xs font-medium text-gray-700">
                        {label}
                    </span>
                </button>
            </a>
        </div>
    );
}

export default Link;
