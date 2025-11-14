import React from "react";

function InputText({
    label,
    type,
    name,
    value,
    onChange,
    placeholder,
    icon: Icon,
}) {
    return (
        <div className="group">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                {Icon && <Icon className="w-4 h-4 text-pink-500" />}
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all group-hover:border-pink-300"
            />
        </div>
    );
}

export default InputText;
