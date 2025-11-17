import React from "react";

function InputMultipleSelection({
    label,
    name,
    value = [],
    options = [],
    setData,
}) {
    const handleCheck = (item) => {
        const updated = value.includes(item)
            ? value.filter((v) => v !== item)
            : [...value, item];

        setData(name, updated);
    };

    return (
        <div className="space-y-3">
            <label className="font-semibold">{label}</label>

            <div className="space-y-2">
                {options.map((item) => (
                    <label
                        key={item}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            checked={value.includes(item)}
                            onChange={() => handleCheck(item)}
                            className="h-5 w-5 rounded-md"
                        />
                        <span>{item}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default InputMultipleSelection;
