import React from "react";

function InputArea({ label, name, value, onChange, placeholder, icon: Icon }) {
    return (
        <div className="group">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                {Icon && <Icon className="w-4 h-4 text-pink-500" />}
                {label}
            </label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows="3"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-300 focus:border-red-500 transition-all group-hover:border-red-300"
                placeholder={placeholder}
            />
        </div>
    );
}
export default InputArea;
