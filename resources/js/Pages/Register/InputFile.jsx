import React from "react";

function InputFile({ label, name, onChange, icon: Icon }) {
    return (
        <div className="group">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                {Icon && <Icon className="w-4 h-4 text-pink-500" />}
                {label}
            </label>

            <input
                type="file"
                name={name}
                accept="image/*"
                onChange={onChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all group-hover:border-blue-300"
            />
        </div>
    );
}

export default InputFile;
