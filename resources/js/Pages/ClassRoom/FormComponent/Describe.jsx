import React from "react";
import { FileText } from "lucide-react";

function Describe({ label, name, value, onChange, placeholder }) {
    return (
        <div>
            <div>
                <label className="flex items-center gap-2 text-purple-900 font-bold mb-2 text-lg">
                    <FileText className="w-6 h-6 text-indigo-500" />
                    {label}
                </label>
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows="5"
                    className="w-full px-5 py-4 rounded-2xl border-3 border-indigo-200 focus:border-indigo-400 focus:outline-none transition-all bg-gradient-to-r from-indigo-50 to-blue-50 resize-none text-lg"
                />
            </div>
        </div>
    );
}

export default Describe;
