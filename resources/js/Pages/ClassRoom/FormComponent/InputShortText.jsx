import React from "react";

function InputShortText({
    icon: Icon,
    label,
    type,
    name,
    value,
    onChange,
    placeholder,
    color,
}) {
    return (
        <div>
            <label className="flex items-center gap-2 text-purple-900 font-bold mb-2 text-lg">
                {Icon && <Icon className={`w-6 h-6 text-${color}-500`} />}
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full px-5 py-4 rounded-2xl border-3 border-${color}-200 focus:border-${color}-400 focus:outline-none transition-all bg-gradient-to-r from-${color}-50 to-${color}-50 text-lg`}
            />
        </div>
    );
}

export default InputShortText;
