import React from "react";

function InputLongText({
    label,
    name,
    value,
    onChange,
    placeholder,
    icon: Icon,
}) {
    return (
        <div className="group">
            <label className="flex items-center gap-2 text-purple-900 font-bold mb-2 text-lg">
                {Icon && <Icon className="w-6 h-6 text-blue-500" />}
                {label}
            </label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-5 py-4 rounded-2xl border-3 border-blue-200 focus:border-purple-400 focus:outline-none transition-all bg-gradient-to-r from-blue-50 to-purple-50 text-lg"
            />
        </div>
    );
}

export default InputLongText;
