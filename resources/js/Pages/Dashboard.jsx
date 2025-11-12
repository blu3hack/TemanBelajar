import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <>
            <Head title="Pendaftaran" />

            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-8 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-0 -left-4"></div>
                    <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-0 right-4"></div>
                    <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-8 left-20"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-block mb-6 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl opacity-50 animate-pulse"></div>
                            <span className="text-6xl sm:text-8xl relative z-10 inline-block animate-bounce">
                                🎓
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4">
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                                Yuk, Gabung Bersama Kami!
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 font-medium">
                            Pilih peranmu dan mulai petualangan belajarmu 🚀
                        </p>
                        <div className="flex justify-center gap-2 mt-6">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse animation-delay-200"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-400"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
                        {/* Card Kiri - Tentor */}
                        <div
                            onMouseEnter={() => setHoveredCard("tentor")}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="group relative"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-75 transition duration-500"></div>

                            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700 group-hover:border-purple-500 transition-all duration-500 shadow-2xl">
                                {/* Animated Header */}
                                <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 overflow-hidden">
                                    <div className="absolute inset-0 bg-black opacity-20"></div>
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -ml-16 -mb-16"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-3">
                                            <h2 className="text-3xl sm:text-4xl font-black text-white">
                                                MENTOR
                                            </h2>
                                            <span className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                                                👨‍🏫
                                            </span>
                                        </div>
                                        <p className="text-blue-100 text-sm sm:text-base font-medium">
                                            Berbagi ilmu sambil dapat cuan!
                                        </p>
                                        <div className="mt-4 inline-block px-4 py-1 bg-white bg-opacity-20 rounded-full text-xs font-bold text-white backdrop-blur-sm">
                                            Jadi Tentor Keren! 👨‍🏫
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 space-y-6">
                                    {/* Requirements */}
                                    <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 border border-slate-600 group-hover:border-purple-500 transition-all duration-300">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500 opacity-10 rounded-full blur-2xl"></div>
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <span className="text-2xl">⚡</span>
                                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                Syarat Gampang Kok!
                                            </span>
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 group/item">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                                    <span className="text-sm">
                                                        📚
                                                    </span>
                                                </div>
                                                <span className="text-gray-300 text-sm">
                                                    Minimal lulusan S1 atau
                                                    setara
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3 group/item">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                                    <span className="text-sm">
                                                        ⭐
                                                    </span>
                                                </div>
                                                <span className="text-gray-300 text-sm">
                                                    Punya pengalaman mengajar
                                                    min. 1 tahun
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3 group/item">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                                    <span className="text-sm">
                                                        🎯
                                                    </span>
                                                </div>
                                                <span className="text-gray-300 text-sm">
                                                    Jago di bidang yang akan
                                                    kamu ajarkan
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3 group/item">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                                    <span className="text-sm">
                                                        💪
                                                    </span>
                                                </div>
                                                <span className="text-gray-300 text-sm">
                                                    Siap ikut pelatihan tentor
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Process */}
                                    <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 border border-slate-600 group-hover:border-blue-500 transition-all duration-300">
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <span className="text-2xl">🎯</span>
                                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                                Cara Daftarnya
                                            </span>
                                        </h3>
                                        <div className="space-y-3">
                                            {[1, 2, 3, 4, 5].map((step) => (
                                                <div
                                                    key={step}
                                                    className="flex items-start gap-3 group/step"
                                                >
                                                    <div className="relative">
                                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover/step:scale-110 transition-transform">
                                                            {step}
                                                        </div>
                                                        {step < 5 && (
                                                            <div className="absolute top-8 left-1/2 w-0.5 h-3 bg-gradient-to-b from-purple-500 to-transparent -ml-px"></div>
                                                        )}
                                                    </div>
                                                    <span className="text-gray-300 text-sm pt-1.5">
                                                        {step === 1 &&
                                                            " Klik tombol Daftar Jadi Tentor"}
                                                        {step === 2 &&
                                                            "Isi formulir dengan data dirimu"}
                                                        {step === 3 &&
                                                            " Upload CV"}
                                                        {step === 4 &&
                                                            "Tunggu untuk verifikasi"}
                                                        {step === 5 &&
                                                            " Ikut pelatihan & mulai mengajar!"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Benefits */}
                                    <div className="relative bg-gradient-to-br from-yellow-900 to-orange-900 rounded-2xl p-6 border border-yellow-700 overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 opacity-10 rounded-full blur-3xl"></div>
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <span className="text-2xl">💎</span>
                                            <span>Keuntungan Jadi Tentor</span>
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-black bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
                                                <div className="text-2xl mb-1">
                                                    💰
                                                </div>
                                                <div className="text-xs text-gray-300">
                                                    Penghasilan oke & jadwal
                                                    fleksibel
                                                </div>
                                            </div>
                                            <div className="bg-black bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
                                                <div className="text-2xl mb-1">
                                                    ⏰
                                                </div>
                                                <div className="text-xs text-gray-300">
                                                    Atur sendiri waktu
                                                    mengajarmu
                                                </div>
                                            </div>
                                            <div className="bg-black bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
                                                <div className="text-2xl mb-1">
                                                    🚀
                                                </div>
                                                <div className="text-xs text-gray-300">
                                                    Platform pembelajaran modern
                                                </div>
                                            </div>
                                            <div className="bg-black bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
                                                <div className="text-2xl mb-1">
                                                    📈
                                                </div>
                                                <div className="text-xs text-gray-300">
                                                    Pelatihan & pengembangan
                                                    gratis
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <a
                                        href="/mentor-register"
                                        className="relative w-full group/btn overflow-hidden block"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative px-8 py-5 text-white font-bold text-lg flex items-center justify-center gap-2">
                                            <span>
                                                Daftar Jadi Tentor Sekarang!
                                            </span>
                                            <span className="transform group-hover/btn:translate-x-2 transition-transform">
                                                →
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Card Kanan - Student */}
                        <div
                            onMouseEnter={() => setHoveredCard("student")}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="group relative"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-75 transition duration-500"></div>

                            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700 group-hover:border-pink-500 transition-all duration-500 shadow-2xl">
                                {/* Animated Header */}
                                <div className="relative bg-gradient-to-br from-pink-600 via-rose-600 to-purple-700 p-8 overflow-hidden">
                                    <div className="absolute inset-0 bg-black opacity-20"></div>
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -ml-16 -mb-16"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-3">
                                            <h2 className="text-3xl sm:text-4xl font-black text-white">
                                                STUDENT
                                            </h2>
                                            <span className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                                                🎒
                                            </span>
                                        </div>
                                        <p className="text-pink-100 text-sm sm:text-base font-medium">
                                            Belajar seru tanpa batas!
                                        </p>
                                        <div className="mt-4 inline-block px-4 py-1 bg-white bg-opacity-20 rounded-full text-xs font-bold text-white backdrop-blur-sm">
                                            Ayo Belajar Sekarang
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 space-y-6">
                                    {/* Requirements */}
                                    <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 border border-slate-600 group-hover:border-pink-500 transition-all duration-300">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500 opacity-10 rounded-full blur-2xl"></div>
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <span className="text-2xl">✨</span>
                                            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                                Syarat Super Mudah!
                                            </span>
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 group/item">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                                    <span className="text-sm">
                                                        🎂
                                                    </span>
                                                </div>
                                                <span className="text-gray-300 text-sm">
                                                    Minimal umur 12 tahun
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3 group/item">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                                    <span className="text-sm">
                                                        📧
                                                    </span>
                                                </div>
                                                <span className="text-gray-300 text-sm">
                                                    Punya email yang masih aktif
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3 group/item">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                                    <span className="text-sm">
                                                        🔥
                                                    </span>
                                                </div>
                                                <span className="text-gray-300 text-sm">
                                                    Semangat belajar yang tinggi
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3 group/item">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                                    <span className="text-sm">
                                                        📱
                                                    </span>
                                                </div>
                                                <span className="text-gray-300 text-sm">
                                                    Punya HP/laptop & internet
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Process */}
                                    <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 border border-slate-600 group-hover:border-pink-500 transition-all duration-300">
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <span className="text-2xl">🚀</span>
                                            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                                Cara Daftar (Gampang!)
                                            </span>
                                        </h3>
                                        <div className="space-y-3">
                                            {[1, 2, 3, 4, 5].map((step) => (
                                                <div
                                                    key={step}
                                                    className="flex items-start gap-3 group/step"
                                                >
                                                    <div className="relative">
                                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover/step:scale-110 transition-transform">
                                                            {step}
                                                        </div>
                                                        {step < 5 && (
                                                            <div className="absolute top-8 left-1/2 w-0.5 h-3 bg-gradient-to-b from-pink-500 to-transparent -ml-px"></div>
                                                        )}
                                                    </div>
                                                    <span className="text-gray-300 text-sm pt-1.5">
                                                        {step === 1 &&
                                                            " Klik tombol Daftar Jadi Student"}
                                                        {step === 2 &&
                                                            "Isi formulir dengan lengkap ya"}
                                                        {step === 3 &&
                                                            "Cek email & klik link aktivasi"}
                                                        {step === 4 &&
                                                            " Pilih kursus yang kamu suka"}
                                                        {step === 5 &&
                                                            "Bayar & langsung mulai belajar!"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Benefits */}
                                    <div className="relative bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl p-6 border border-blue-700 overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <span className="text-2xl">🎁</span>
                                            <span> Yang Kamu Dapat</span>
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-black bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
                                                <div className="text-2xl mb-1">
                                                    📚
                                                </div>
                                                <div className="text-xs text-gray-300">
                                                    Banyak materi pembelajaran
                                                    seru
                                                </div>
                                            </div>
                                            <div className="bg-black bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
                                                <div className="text-2xl mb-1">
                                                    👨‍🏫
                                                </div>
                                                <div className="text-xs text-gray-300">
                                                    Tentor berpengalaman & ramah
                                                </div>
                                            </div>
                                            <div className="bg-black bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
                                                <div className="text-2xl mb-1">
                                                    🏆
                                                </div>
                                                <div className="text-xs text-gray-300">
                                                    Sertifikat setelah selesai
                                                    kursus
                                                </div>
                                            </div>
                                            <div className="bg-black bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
                                                <div className="text-2xl mb-1">
                                                    🤗
                                                </div>
                                                <div className="text-xs text-gray-300">
                                                    Komunitas belajar yang asik
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <a
                                        href="/student-register"
                                        className="relative w-full group/btn overflow-hidden block"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 rounded-2xl"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative px-8 py-5 text-white font-bold text-lg flex items-center justify-center gap-2">
                                            <span>Mulai Belajar</span>
                                            <span className="transform group-hover/btn:translate-x-2 transition-transform">
                                                →
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0%,
                    100% {
                        transform: translate(0, 0) scale(1);
                    }
                    25% {
                        transform: translate(20px, -50px) scale(1.1);
                    }
                    50% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    75% {
                        transform: translate(50px, 50px) scale(1.05);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animation-delay-200 {
                    animation-delay: 200ms;
                }
                .animation-delay-400 {
                    animation-delay: 400ms;
                }
                @keyframes gradient {
                    0%,
                    100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </>
    );
}
