import React from "react";

function InputSelection({
    icon: Icon,
    label,
    name,
    value,
    onChange,
    options = [],
    color,
}) {
    return (
        <div>
            <label className="flex items-center gap-2 text-purple-900 font-bold mb-2 text-lg">
                {Icon && <Icon className={`w-6 h-6 text-${color}-500`} />}
                {label}
            </label>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full px-5 py-4 rounded-2xl border-3 border-${color}-200 focus:border-${color}-400 focus:outline-none transition-all bg-gradient-to-r from-${color}-50 to-${color}-50 text-lg`}
            >
                <option value="">Pilih {label.toLowerCase()}</option>
                {options.map((opt, index) => (
                    <option key={index} value={opt.value ?? opt}>
                        {opt.label ?? opt}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default InputSelection;
