import React, { useState } from "react";
import {
    BookOpen,
    Users,
    Briefcase,
    Package,
    Check,
    Info,
    Sparkles,
    TrendingUp,
} from "lucide-react";

function RuleClass() {
    const [selectedCard, setSelectedCard] = useState(null);

    const classTypes = [
        {
            id: 1,
            icon: BookOpen,
            title: "Private",
            color: "from-blue-500 to-blue-600",
            bgLight: "bg-blue-50",
            borderColor: "border-blue-200",
            accentColor: "text-blue-600",
            description: "Pembelajaran one-on-one dengan perhatian penuh",
            badge: "Premium",
            badgeColor: "bg-blue-500",
            rules: [
                {
                    label: "Pembagian Hasil",
                    value: "Instruktur 70% | Platform 30%",
                },
                { label: "Durasi Sesi", value: "60-90 menit/pertemuan" },
                { label: "Minimal Pertemuan", value: "4 sesi per bulan" },
                { label: "Biaya Reschedule", value: "Gratis (H-24)" },
            ],
            criteria: [
                "Instruktur bersertifikat minimal 2 tahun pengalaman",
                "Materi disesuaikan dengan kebutuhan siswa",
                "Laporan progress setiap 2 minggu",
                "Garansi uang kembali jika tidak puas (sesi pertama)",
            ],
        },
        {
            id: 2,
            icon: Users,
            title: "Grup",
            color: "from-green-500 to-green-600",
            bgLight: "bg-green-50",
            borderColor: "border-green-200",
            accentColor: "text-green-600",
            description: "Belajar bersama dalam kelompok kecil yang interaktif",
            badge: "Populer",
            badgeColor: "bg-green-500",
            rules: [
                {
                    label: "Pembagian Hasil",
                    value: "Instruktur 60% | Platform 40%",
                },
                { label: "Kapasitas Kelas", value: "5-15 siswa per kelas" },
                { label: "Durasi Sesi", value: "90-120 menit/pertemuan" },
                { label: "Minimal Siswa", value: "5 siswa untuk buka kelas" },
            ],
            criteria: [
                "Instruktur memiliki pengalaman mengajar grup",
                "Silabus terstruktur dengan timeline jelas",
                "Sesi Q&A 15 menit setiap pertemuan",
                "Grup WhatsApp/Telegram untuk diskusi",
            ],
        },
        {
            id: 3,
            icon: Briefcase,
            title: "Workshop",
            color: "from-purple-500 to-purple-600",
            bgLight: "bg-purple-50",
            borderColor: "border-purple-200",
            accentColor: "text-purple-600",
            description: "Pelatihan intensif untuk skill spesifik",
            badge: "Intensif",
            badgeColor: "bg-purple-500",
            rules: [
                {
                    label: "Pembagian Hasil",
                    value: "Instruktur 65% | Platform 35%",
                },
                { label: "Durasi Program", value: "1-3 hari (intensif)" },
                { label: "Kapasitas Kelas", value: "10-30 peserta" },
                { label: "Sertifikat", value: "Wajib disediakan" },
            ],
            criteria: [
                "Materi hands-on dengan studi kasus nyata",
                "Minimal 80% praktik dari total durasi",
                "E-certificate diberikan setelah selesai",
                "Rekaman sesi tersedia 30 hari",
            ],
        },
        {
            id: 4,
            icon: Package,
            title: "Paket",
            color: "from-orange-500 to-orange-600",
            bgLight: "bg-orange-50",
            borderColor: "border-orange-200",
            accentColor: "text-orange-600",
            description:
                "Bundel pembelajaran komprehensif dengan harga spesial",
            badge: "Best Value",
            badgeColor: "bg-orange-500",
            rules: [
                {
                    label: "Pembagian Hasil",
                    value: "Instruktur 65% | Platform 35%",
                },
                { label: "Durasi Akses", value: "3-12 bulan akses penuh" },
                { label: "Konten Bundle", value: "Video + Live + Modul" },
                { label: "Diskon Bundle", value: "15-30% dari harga satuan" },
            ],
            criteria: [
                "Minimal 20 video pembelajaran berkualitas HD",
                "2-4 live session per bulan",
                "Modul PDF dan source code lengkap",
                "Akses ke komunitas eksklusif alumni",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header with Animation */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        SOP & Kriteria Kelas
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Standar operasional dan ketentuan untuk setiap jenis
                        kelas di platform kami
                    </p>
                </div>

                {/* Cards Grid - Fixed Height */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {classTypes.map((classType) => {
                        const Icon = classType.icon;
                        const isSelected = selectedCard === classType.id;

                        return (
                            <div
                                key={classType.id}
                                onClick={() =>
                                    setSelectedCard(
                                        isSelected ? null : classType.id
                                    )
                                }
                                className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                                    isSelected
                                        ? "ring-4 ring-offset-2 ring-blue-400 scale-105"
                                        : ""
                                }`}
                            >
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all h-full flex flex-col">
                                    {/* Card Header with Gradient - Fixed Height */}
                                    <div
                                        className={`bg-gradient-to-br ${classType.color} p-6 text-white relative overflow-hidden h-44 flex flex-col justify-between`}
                                    >
                                        {/* Decorative circles */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>

                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-3">
                                                <Icon className="w-10 h-10" />
                                                <span
                                                    className={`${classType.badgeColor} text-white text-xs px-3 py-1 rounded-full font-semibold`}
                                                >
                                                    {classType.badge}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl font-bold mb-2">
                                                {classType.title}
                                            </h2>
                                            <p className="text-sm opacity-95 line-clamp-2">
                                                {classType.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card Body - Fixed Height with scroll */}
                                    <div className="p-5 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div
                                                className={`w-8 h-8 rounded-lg bg-gradient-to-br ${classType.color} flex items-center justify-center`}
                                            >
                                                <Info className="w-4 h-4 text-white" />
                                            </div>
                                            <h3 className="font-bold text-gray-800">
                                                Ketentuan Utama
                                            </h3>
                                        </div>

                                        {/* Fixed height container for rules */}
                                        <div className="space-y-2.5 mb-5 flex-1">
                                            {classType.rules.map(
                                                (rule, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`${classType.bgLight} rounded-xl p-3 border border-gray-100 hover:shadow-md transition-shadow`}
                                                    >
                                                        <div
                                                            className={`text-xs font-bold ${classType.accentColor} mb-1 uppercase tracking-wide`}
                                                        >
                                                            {rule.label}
                                                        </div>
                                                        <div className="text-sm font-semibold text-gray-800">
                                                            {rule.value}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>

                                        <button
                                            className={`w-full bg-gradient-to-r ${classType.color} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 group`}
                                        >
                                            {isSelected ? (
                                                <>
                                                    <span>Tutup Detail</span>
                                                    <TrendingUp className="w-4 h-4 rotate-180 group-hover:translate-y-1 transition-transform" />
                                                </>
                                            ) : (
                                                <>
                                                    <span>Lihat Kriteria</span>
                                                    <TrendingUp className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Modal Popup */}
                {selectedCard && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 sm:p-4 z-50 animate-fadeIn"
                        onClick={() => setSelectedCard(null)}
                    >
                        <div
                            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {classTypes
                                .filter((ct) => ct.id === selectedCard)
                                .map((classType) => {
                                    const Icon = classType.icon;
                                    return (
                                        <div key={classType.id}>
                                            {/* Modal Header */}
                                            <div
                                                className={`bg-gradient-to-br ${classType.color} p-5 sm:p-6 md:p-8 text-white relative overflow-hidden`}
                                            >
                                                <div className="absolute top-0 right-0 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 bg-white opacity-10 rounded-full -mr-16 sm:-mr-18 md:-mr-20 -mt-16 sm:-mt-18 md:-mt-20"></div>
                                                <div className="absolute bottom-0 left-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-white opacity-10 rounded-full -ml-12 sm:-ml-14 md:-ml-16 -mb-12 sm:-mb-14 md:-mb-16"></div>

                                                <div className="relative z-10">
                                                    <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                                                        <div className="flex items-center gap-3 sm:gap-4 flex-1">
                                                            <div className="bg-white bg-opacity-20 p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl backdrop-blur-sm flex-shrink-0">
                                                                <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                                                                    Kriteria{" "}
                                                                    {
                                                                        classType.title
                                                                    }
                                                                </h2>
                                                                <p className="text-white text-opacity-95 text-xs sm:text-sm md:text-base">
                                                                    {
                                                                        classType.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() =>
                                                                setSelectedCard(
                                                                    null
                                                                )
                                                            }
                                                            className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1.5 sm:p-2 transition-all backdrop-blur-sm flex-shrink-0"
                                                        >
                                                            <svg
                                                                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M6 18L18 6M6 6l12 12"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Modal Body */}
                                            <div className="p-4 sm:p-6 md:p-8">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-green-100">
                                                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-5 flex items-center gap-2">
                                                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-500 flex items-center justify-center">
                                                                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                                            </div>
                                                            <span className="text-sm sm:text-base md:text-xl">
                                                                Persyaratan
                                                                Instruktur
                                                            </span>
                                                        </h3>
                                                        <ul className="space-y-2.5 sm:space-y-3">
                                                            {classType.criteria
                                                                .slice(0, 2)
                                                                .map(
                                                                    (
                                                                        criterion,
                                                                        idx
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                idx
                                                                            }
                                                                            className="flex items-start gap-2.5 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                                                        >
                                                                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                                                            </div>
                                                                            <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                                                                                {
                                                                                    criterion
                                                                                }
                                                                            </span>
                                                                        </li>
                                                                    )
                                                                )}
                                                        </ul>
                                                    </div>

                                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-blue-100">
                                                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-5 flex items-center gap-2">
                                                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                                                                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                                            </div>
                                                            <span className="text-sm sm:text-base md:text-xl">
                                                                Fasilitas Siswa
                                                            </span>
                                                        </h3>
                                                        <ul className="space-y-2.5 sm:space-y-3">
                                                            {classType.criteria
                                                                .slice(2)
                                                                .map(
                                                                    (
                                                                        criterion,
                                                                        idx
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                idx
                                                                            }
                                                                            className="flex items-start gap-2.5 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                                                        >
                                                                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                                                            </div>
                                                                            <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                                                                                {
                                                                                    criterion
                                                                                }
                                                                            </span>
                                                                        </li>
                                                                    )
                                                                )}
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Enhanced Info Banner */}
                                                <div
                                                    className={`mt-5 sm:mt-6 md:mt-8 bg-gradient-to-r ${classType.color} bg-opacity-10 border-l-4 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-inner`}
                                                    style={{
                                                        borderLeftColor:
                                                            "currentColor",
                                                    }}
                                                >
                                                    <div className="flex gap-2.5 sm:gap-3">
                                                        <Sparkles
                                                            className={`w-5 h-5 sm:w-6 sm:h-6 ${classType.accentColor} flex-shrink-0 mt-0.5 sm:mt-1`}
                                                        />
                                                        <div>
                                                            <p className="text-gray-800 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                                                                Catatan Penting
                                                            </p>
                                                            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
                                                                Semua instruktur
                                                                wajib melalui
                                                                proses
                                                                verifikasi dan
                                                                pelatihan
                                                                platform sebelum
                                                                dapat membuka
                                                                kelas.
                                                                Pelanggaran SOP
                                                                dapat
                                                                mengakibatkan
                                                                penangguhan
                                                                akun.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Action Buttons */}
                                                <div className="mt-5 sm:mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                                                    <a
                                                        href={`/class/create/${classType.id}`}
                                                        className={`flex-1 bg-gradient-to-r ${classType.color} text-white py-3 sm:py-3.5 px-6 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 group text-sm sm:text-base`}
                                                    >
                                                        <span>
                                                            Buat{" "}
                                                            {classType.title}
                                                        </span>
                                                        <svg
                                                            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                            />
                                                        </svg>
                                                    </a>
                                                    <a
                                                        href="/class/guidelines"
                                                        className={`flex-1 bg-white border-2 ${classType.borderColor} ${classType.accentColor} py-3 sm:py-3.5 px-6 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 group text-sm sm:text-base`}
                                                    >
                                                        <span>
                                                            Lihat Panduan
                                                        </span>
                                                        <svg
                                                            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RuleClass;
