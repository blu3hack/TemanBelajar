import React, { useState } from "react";
import {
    User,
    MapPin,
    Calendar,
    Mail,
    Phone,
    BookOpen,
    Users,
    Award,
    GraduationCap,
} from "lucide-react";

function Student() {
    const [formData, setFormData] = useState({
        namaLengkap: "",
        tempatLahir: "",
        tanggalLahir: "",
        jenisKelamin: "",
        agama: "",
        alamat: "",
        noTelepon: "",
        email: "",
        asalSekolah: "",
        nisn: "",
        jurusan: "",
        tahunMasuk: "",
        kelas: "",
        namaWali: "",
        pekerjaanWali: "",
        kontakWali: "",
    });

    const [currentStep, setCurrentStep] = useState(1);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log("Data Form:", formData);
        alert("🎉 Selamat! Registrasi kamu berhasil disubmit!");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4 md:p-6">
            {/* Header dengan Ilustrasi */}
            <div className="text-center mb-6">
                <div className="inline-block mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-12 h-12 text-white" />
                    </div>
                </div>
            </div>

            <div className="w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Card Kiri - Data Pribadi */}
                    <div
                        className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border-4 border-purple-200 transform hover:scale-[1.02] transition-all duration-300"
                        onMouseEnter={() => setCurrentStep(1)}
                    >
                        <div className="flex items-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-lg">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-2xl mr-4 shadow-md">
                                <User className="w-8 h-8" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">
                                    Tentang Kamu
                                </h2>
                                <p className="text-purple-100 text-sm">
                                    Ceritain tentang diri kamu
                                </p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <MapPin className="w-4 h-4 text-pink-500" />
                                        Tempat Lahir
                                    </label>
                                    <input
                                        type="text"
                                        name="tempatLahir"
                                        value={formData.tempatLahir}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all group-hover:border-pink-300"
                                        placeholder="Contoh: Jakarta"
                                    />
                                </div>
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <Calendar className="w-4 h-4 text-blue-500" />
                                        Tanggal Lahir
                                    </label>
                                    <input
                                        type="date"
                                        name="tanggalLahir"
                                        value={formData.tanggalLahir}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all group-hover:border-blue-300"
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                    <MapPin className="w-4 h-4 text-red-500" />
                                    Alamat Lengkap
                                </label>
                                <textarea
                                    name="alamat"
                                    value={formData.alamat}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-300 focus:border-red-500 transition-all group-hover:border-red-300"
                                    placeholder="Contoh: Jl. Merdeka No. 123, Jakarta Pusat"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <Phone className="w-4 h-4 text-green-500" />
                                        No. HP Kamu
                                    </label>
                                    <input
                                        type="tel"
                                        name="noTelepon"
                                        value={formData.noTelepon}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all group-hover:border-green-300"
                                        placeholder="Contoh: 0812-3456-7890"
                                    />
                                </div>
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <Mail className="w-4 h-4 text-blue-500" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all group-hover:border-blue-300"
                                        placeholder="Contoh: budi@email.com"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card Kanan - Data Akademik & Wali */}
                    <div
                        className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border-4 border-blue-200 transform hover:scale-[1.02] transition-all duration-300"
                        onMouseEnter={() => setCurrentStep(2)}
                    >
                        <div className="flex items-center mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-4 shadow-lg">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mr-4 shadow-md">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">
                                    Info Tambahan
                                </h2>
                                <p className="text-blue-100 text-sm">
                                    Data akademik & orang tua
                                </p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                    <BookOpen className="w-4 h-4 text-blue-500" />
                                    Asal Sekolah
                                </label>
                                <input
                                    type="text"
                                    name="asalSekolah"
                                    value={formData.asalSekolah}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all group-hover:border-blue-300"
                                    placeholder="Contoh: SMP Negeri 1 Jakarta"
                                />
                            </div>

                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                    <User className="w-4 h-4 text-purple-500" />
                                    Nama Orang Tua/Wali
                                </label>
                                <input
                                    type="text"
                                    name="namaWali"
                                    value={formData.namaWali}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all group-hover:border-purple-300"
                                    placeholder="Nama Ayah/Ibu/Wali"
                                />
                            </div>

                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                    <Phone className="w-4 h-4 text-green-500" />
                                    No. HP Orang Tua/Wali
                                </label>
                                <input
                                    type="tel"
                                    name="kontakWali"
                                    value={formData.kontakWali}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all group-hover:border-green-300"
                                    placeholder="Contoh: 0812-3456-7890"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Button dengan Animasi */}
                <div className="mt-8 text-center">
                    <button
                        onClick={handleSubmit}
                        className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 text-lg"
                    >
                        <span className="flex items-center gap-3">
                            <GraduationCap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            Kirim Registrasi! 🎉
                            <Award className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        </span>
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Student;
