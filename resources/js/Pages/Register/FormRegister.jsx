// src/components/FormUtama.jsx
import React from "react";

function FormUtama({ title, inputs = [], onSubmit, buttonText = "Kirim" }) {
    const [formData, setFormData] = React.useState({});

    // Ubah state ketika ada input yang berubah
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Kirim data ke parent saat submit
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6"
        >
            {title && (
                <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
            )}

            {inputs.map((input, index) => (
                <div key={index} className="flex flex-col mb-4">
                    <label
                        htmlFor={input.name}
                        className="mb-1 font-semibold text-sm text-gray-700"
                    >
                        {input.label}
                    </label>
                    <input
                        id={input.name}
                        name={input.name}
                        type={input.type || "text"}
                        placeholder={input.placeholder || ""}
                        value={formData[input.name] || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            ))}

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full mt-4"
            >
                {buttonText}
            </button>
        </form>
    );
}

export default FormUtama;
