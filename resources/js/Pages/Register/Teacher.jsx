import React, { useState } from "react";

function FormRegister() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        terms: false,
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Nama lengkap harus diisi";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email harus diisi";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Format email tidak valid";
        }

        if (!formData.password) {
            newErrors.password = "Password harus diisi";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password minimal 8 karakter";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Konfirmasi password harus diisi";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Password tidak cocok";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Nomor telepon harus diisi";
        } else if (
            !/^[0-9]{10,13}$/.test(formData.phone.replace(/[-\s]/g, ""))
        ) {
            newErrors.phone = "Nomor telepon tidak valid";
        }

        if (!formData.terms) {
            newErrors.terms = "Anda harus menyetujui syarat dan ketentuan";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            alert(
                "Registrasi berhasil!\n\nData:\n" +
                    JSON.stringify(formData, null, 2)
            );
            // Reset form
            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: "",
                terms: false,
            });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Daftar Akun
                    </h1>
                    <p className="text-gray-600">
                        Buat akun baru untuk melanjutkan
                    </p>
                </div>

                <div onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${
                                errors.fullName
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                            placeholder="Masukkan nama lengkap"
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.fullName}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${
                                errors.email
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                            placeholder="nama@email.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Nomor Telepon
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${
                                errors.phone
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                            placeholder="08xxxxxxxxxx"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border ${
                                    errors.password
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                                placeholder="Minimal 8 karakter"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? "👁️" : "👁️‍🗨️"}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Konfirmasi Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border ${
                                    errors.confirmPassword
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                                placeholder="Ulangi password"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    {/* Terms and Conditions */}
                    <div>
                        <label className="flex items-start gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">
                                Saya menyetujui{" "}
                                <span className="text-blue-600 hover:underline">
                                    syarat dan ketentuan
                                </span>{" "}
                                yang berlaku
                            </span>
                        </label>
                        {errors.terms && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.terms}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
                    >
                        Daftar Sekarang
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                        Sudah punya akun?{" "}
                        <a
                            href="#"
                            className="text-blue-600 hover:underline font-medium"
                        >
                            Masuk di sini
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FormRegister;
