import React, { useEffect, useState } from "react";
import {
    User,
    MapPin,
    Calendar,
    Phone,
    BookOpen,
    Award,
    GraduationCap,
} from "lucide-react";
import { School } from "lucide-react";
import { Church } from "lucide-react";
import { VenusAndMars } from "lucide-react";
import { BookOpenCheck } from "lucide-react";
import { LuggageIcon } from "lucide-react";
import { Camera } from "lucide-react";
import { usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

function Teacher() {
    // useform data
    const user = usePage().props.auth.user;

    const [formData, setFormData] = useState({
        token: "",
        name: "",
        gender: "",
        place_birth: "",
        date_born: "",
        religion: "",
        address: "",
        phone_number: "",
        email: "",
        profile_picture: "",
        graduate: "",
        vacation: "",
        year_graduate: "",
        skill_apply: [],
        train_experience: "",
        certificate: "",
        available_day_training: [],
        available_time: [],
        training_mode: [],
        platform_pay: "",
        no_platform_pay: "",
        name_platform_pay: "",
    });

    useEffect(() => {
        if (user) {
            setFormData((prev) => ({
                ...prev,
                token: user.token,
                name: user.name,
                email: user.email,
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => {
            // Jika checkbox group (array)
            if (Array.isArray(prev[name])) {
                let arr = [...prev[name]];

                if (checked) arr.push(value);
                else arr = arr.filter((item) => item !== value);

                return { ...prev, [name]: arr };
            }

            // Jika checkbox single
            if (type === "checkbox") {
                return { ...prev, [name]: checked };
            }

            // Input biasa
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        // Masukkan semua field dari formData ke FormData
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        // Kirim pakai Inertia dengan multipart/form-data
        Inertia.post("/create-mentor", data, {
            forceFormData: true, // penting agar Inertia kirim sebagai multipart
            onSuccess: () => {
                alert("🎉 Registrasi mentor berhasil!");
            },
            onError: (errors) => {
                console.log(errors);
                alert("⚠️ Validasi gagal, periksa kembali form kamu!");
            },
        });
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
                    {/* Card pertama - Form input Data Pribadi */}
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
                                        name="place_birth"
                                        value={formData.place_birth}
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
                                        name="date_born"
                                        value={formData.date_born}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all group-hover:border-blue-300"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <VenusAndMars className="w-4 h-4 text-pink-500" />
                                        Gender
                                    </label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all group-hover:border-pink-300"
                                    >
                                        <option value="">
                                            Pilih jenis kelamin
                                        </option>
                                        <option value="Laki-laki">
                                            Laki-laki
                                        </option>
                                        <option value="Perempuan">
                                            Perempuan
                                        </option>
                                    </select>
                                </div>
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <Church className="w-4 h-4 text-blue-500" />
                                        Agama
                                    </label>
                                    <select
                                        name="religion"
                                        value={formData.religion}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all group-hover:border-pink-300"
                                    >
                                        <option value="">Pilih Agama</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Kristen">Kristen</option>
                                        <option value="Budha">Budha</option>
                                        <option value="Katolik">Katolik</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Konghuchu">
                                            Konghuchu
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                    <MapPin className="w-4 h-4 text-red-500" />
                                    Alamat Lengkap
                                </label>
                                <textarea
                                    name="address"
                                    value={formData.address}
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
                                        name="phone_number"
                                        value={formData.phone_number}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all group-hover:border-green-300"
                                        placeholder="Contoh: 0812-3456-7890"
                                    />
                                </div>
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <Camera className="w-4 h-4 text-blue-500" />
                                        Foto Profil
                                    </label>

                                    <input
                                        type="file"
                                        name="profile_picture"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                // Simpan file ke state
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    profile_picture: file,
                                                    preview:
                                                        URL.createObjectURL(
                                                            file
                                                        ),
                                                }));
                                            }
                                        }}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all group-hover:border-blue-300"
                                    />

                                    {/* Preview gambar */}
                                    {formData.preview && (
                                        <div className="mt-3 flex justify-center">
                                            <img
                                                src={formData.preview}
                                                alt="Preview Foto Profil"
                                                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card Kedua - Form Input Data Akademik */}
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
                                    Info Akademik
                                </h2>
                                <p className="text-blue-100 text-sm">
                                    Data akademik & Basic Mentoring
                                </p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                    <School className="w-4 h-4 text-blue-500" />
                                    Almamater
                                </label>
                                <input
                                    type="text"
                                    name="graduate"
                                    value={formData.graduate}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all group-hover:border-blue-300"
                                    placeholder="Contoh: Institut Teknologi Sepuluh Nopember"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <GraduationCap className="w-4 h-4 text-purple-500" />
                                        Jurusan
                                    </label>
                                    <input
                                        type="text"
                                        name="vacation"
                                        value={formData.vacation}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all group-hover:border-pink-300"
                                        placeholder="Contoh: Bahasa Inggris"
                                    />
                                </div>
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <GraduationCap className="w-4 h-4 text-purple-500" />
                                        Tahun Lulus
                                    </label>
                                    <input
                                        type="text"
                                        name="year_graduate"
                                        value={formData.year_graduate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all group-hover:border-pink-300"
                                        placeholder="Contoh: 2022"
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                    <LuggageIcon className="w-4 h-4 text-red-500" />
                                    Pengalaman Mengajar
                                </label>
                                <textarea
                                    name="train_experience"
                                    value={formData.train_experience}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-300 focus:border-red-500 transition-all group-hover:border-red-300"
                                    placeholder="Ceritakan secara singkat pengalaman mengajar kamu sejauh ini..."
                                />
                            </div>

                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                    <Award className="w-4 h-4 text-blue-500" />
                                    Upload Sertifikat (optional * gunakan
                                    jpeg/png/jpg)
                                </label>

                                <input
                                    type="file"
                                    name="certificate"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            // Simpan file ke state
                                            setFormData((prev) => ({
                                                ...prev,
                                                certificate: file,
                                                preview:
                                                    URL.createObjectURL(file),
                                            }));
                                        }
                                    }}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all group-hover:border-blue-300"
                                />

                                {/* Preview gambar */}
                                {formData.preview && (
                                    <div className="mt-3 flex justify-center">
                                        <img
                                            src={formData.preview}
                                            alt="Preview Foto Profil"
                                            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Card Ketiga - Form Input Data Pengajaran  */}
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
                                    Info Mentoring
                                </h2>
                                <p className="text-blue-100 text-sm">
                                    Informasi metode Mentoring
                                </p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <label className="font-semibold">
                                        Pilih Pelajaran:
                                    </label>

                                    <div className="space-y-2">
                                        {[
                                            "Matematika",
                                            "Fisika",
                                            "Bahasa Inggris",
                                            "Kimia",
                                            "Biologi",
                                            "Bahasa Indonesia",
                                            "Umum",
                                        ].map((item) => (
                                            <label
                                                key={item}
                                                className="flex items-center gap-3 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    name="skill_apply"
                                                    value={item}
                                                    checked={formData.skill_apply.includes(
                                                        item
                                                    )}
                                                    onChange={handleChange}
                                                    className="h-5 w-5 rounded-md"
                                                />
                                                <span>{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="font-semibold">
                                        Hari Mengajar:
                                    </label>

                                    <div className="space-y-2">
                                        {[
                                            "Senin",
                                            "Selasa",
                                            "Rabu",
                                            "Kamis",
                                            "Jumat",
                                            "Sabtu",
                                            "Minggu",
                                        ].map((item) => (
                                            <label
                                                key={item}
                                                className="flex items-center gap-3 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    name="training_mode"
                                                    value={item}
                                                    checked={formData.training_mode.includes(
                                                        item
                                                    )}
                                                    onChange={handleChange}
                                                    className="h-5 w-5 rounded-md"
                                                />
                                                <span>{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="font-semibold">
                                        Mode Mengajar:
                                    </label>

                                    <div className="space-y-2">
                                        {["ONLINE", "OFFLINE"].map((item) => (
                                            <label
                                                key={item}
                                                className="flex items-center gap-3 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    name="training_mode"
                                                    value={item}
                                                    checked={formData.training_mode.includes(
                                                        item
                                                    )}
                                                    onChange={handleChange}
                                                    className="h-5 w-5 rounded-md"
                                                />
                                                <span>{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="font-semibold">
                                        Waktu Mengajar:
                                    </label>

                                    <div className="space-y-2">
                                        {["Pagi", "Siang", "Malam"].map(
                                            (item) => (
                                                <label
                                                    key={item}
                                                    className="flex items-center gap-3 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="training_mode"
                                                        value={item}
                                                        checked={formData.training_mode.includes(
                                                            item
                                                        )}
                                                        onChange={handleChange}
                                                        className="h-5 w-5 rounded-md"
                                                    />
                                                    <span>{item}</span>
                                                </label>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="font-semibold">
                                        Jenjang Siswa:
                                    </label>

                                    <div className="space-y-2">
                                        {["SD", "SMP", "SMA", "Umum"].map(
                                            (item) => (
                                                <label
                                                    key={item}
                                                    className="flex items-center gap-3 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="training_mode"
                                                        value={item}
                                                        checked={formData.training_mode.includes(
                                                            item
                                                        )}
                                                        onChange={handleChange}
                                                        className="h-5 w-5 rounded-md"
                                                    />
                                                    <span>{item}</span>
                                                </label>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card Ketiga - Form Input Data Pembayaran  */}
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
                                    Info Pembayaran
                                </h2>
                                <p className="text-blue-100 text-sm">
                                    Info Tujuan Penyaluran Fee
                                </p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <BookOpen className="w-4 h-4 text-green-500" />
                                        E-Wallet
                                    </label>
                                    <select
                                        name="ewalet_name"
                                        value={formData.ewalet_name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all group-hover:border-pink-300"
                                    >
                                        <option value="">Pilih E-Wallet</option>
                                        <option value="OVO">OVO</option>
                                        <option value="DANA">DANA</option>
                                        <option value="GOPAY">GOPAY</option>
                                        <option value="SHOOPE-PAY">
                                            SHOOPE-PAY
                                        </option>
                                        <option value="LINK-AJA">
                                            LINK-AJA
                                        </option>
                                    </select>
                                </div>
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <BookOpenCheck className="w-4 h-4 text-blue-500" />
                                        Pilih BANK
                                    </label>
                                    <select
                                        name="bank_name"
                                        value={formData.bank_name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all group-hover:border-pink-300"
                                    >
                                        <option value="">Pilih BANK</option>
                                        <option value="BNI">BNI</option>
                                        <option value="BCA">BCA</option>
                                        <option value="BRI">BRI</option>
                                        <option value="MANDIRI">MANDIRI</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <GraduationCap className="w-4 h-4 text-purple-500" />
                                        No E-Wallet
                                    </label>
                                    <input
                                        type="text"
                                        name="account_ewalet"
                                        value={formData.account_ewalet}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all group-hover:border-pink-300"
                                        placeholder="Contoh: 0813-xxxx-xxxx"
                                    />
                                </div>
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <GraduationCap className="w-4 h-4 text-purple-500" />
                                        No Rekening
                                    </label>
                                    <input
                                        type="text"
                                        name="account_bank"
                                        value={formData.account_bank}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all group-hover:border-pink-300"
                                        placeholder="Contoh: 456-xxxx-xxxx"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <GraduationCap className="w-4 h-4 text-purple-500" />
                                        A/N E-Wallet
                                    </label>
                                    <input
                                        type="text"
                                        name="vacation"
                                        value={formData.vacation}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all group-hover:border-pink-300"
                                        placeholder="Contoh: Bayu Jaya"
                                    />
                                </div>
                                <div className="group">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                                        <GraduationCap className="w-4 h-4 text-purple-500" />
                                        A/N Bank
                                    </label>
                                    <input
                                        type="text"
                                        name="year_graduate"
                                        value={formData.year_graduate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all group-hover:border-pink-300"
                                        placeholder="Contoh: Bayu Jaya"
                                    />
                                </div>
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

export default Teacher;
