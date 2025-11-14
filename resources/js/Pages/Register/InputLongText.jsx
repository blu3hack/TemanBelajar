import React from "react";

function InputLongText({
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
                {Icon && <Icon className="w-4 h-4 text-blue-500" />}
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all group-hover:border-blue-300"
                placeholder={placeholder}
            />
        </div>
    );
}
export default InputLongText;
