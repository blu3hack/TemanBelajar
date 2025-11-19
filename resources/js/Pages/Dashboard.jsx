import { Head } from "@inertiajs/react";
import { useState } from "react";
import {
    GraduationCap,
    BookOpen,
    Star,
    Target,
    Users,
    Clock,
    Rocket,
    TrendingUp,
    Gift,
    Trophy,
    Heart,
    Mail,
    Smartphone,
    Zap,
    Sparkles,
    ArrowRight,
    UserCheck,
    Calendar,
    Award,
    Globe,
} from "lucide-react";

export default function Dashboard() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <>
            <Head title="Pendaftaran" />

            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 p-4 sm:p-8 relative overflow-hidden">
                {/* Soft Blob Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-10 left-0"></div>
                    <div className="absolute w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 top-20 right-0"></div>
                    <div className="absolute w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000 bottom-10 left-1/3"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-block mb-6">
                            <GraduationCap className="w-24 h-24 sm:w-32 sm:h-32 text-cyan-500 animate-bounce" />
                        </div>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4">
                            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                                Yuk, Gabung Bersama Kami!
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 font-medium">
                            Pilih peranmu dan mulai petualangan belajarmu
                        </p>
                        <div className="flex justify-center gap-3 mt-6">
                            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-200"></div>
                            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-400"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* CARD MENTOR */}
                        <div
                            onMouseEnter={() => setHoveredCard("mentor")}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="group relative transform transition-all duration-500 hover:-translate-y-3"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-700"></div>

                            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-200 shadow-xl">
                                {/* Header */}
                                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-8 text-white">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-4xl sm:text-5xl font-black">
                                            MENTOR
                                        </h2>
                                        <UserCheck className="w-16 h-16 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />
                                    </div>
                                    <p className="text-cyan-50 text-lg font-medium">
                                        Berbagi ilmu sambil dapat cuan!
                                    </p>
                                    <span className="mt-4 inline-block px-5 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm">
                                        Jadi Tentor Keren!
                                    </span>
                                </div>

                                <div className="p-8 space-y-8">
                                    {/* Syarat */}
                                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-3">
                                            <Sparkles className="w-7 h-7 text-cyan-600" />
                                            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                                Syarat Gampang Kok!
                                            </span>
                                        </h3>
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    icon: GraduationCap,
                                                    text: "Minimal lulusan S1 atau setara",
                                                },
                                                {
                                                    icon: Star,
                                                    text: "Punya pengalaman mengajar min. 1 tahun",
                                                },
                                                {
                                                    icon: Target,
                                                    text: "Jago di bidang yang akan kamu ajarkan",
                                                },
                                                {
                                                    icon: Zap,
                                                    text: "Siap ikut pelatihan tentor",
                                                },
                                            ].map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-4"
                                                >
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center shadow-md">
                                                        <item.icon className="w-7 h-7" />
                                                    </div>
                                                    <span className="text-gray-700">
                                                        {item.text}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Keuntungan */}
                                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <Gift className="w-6 h-6 text-blue-600" />
                                            Keuntungan Jadi Mentor
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                {
                                                    icon: TrendingUp,
                                                    text: "Penghasilan oke & fleksibel",
                                                },
                                                {
                                                    icon: Calendar,
                                                    text: "Atur jadwal sendiri",
                                                },
                                                {
                                                    icon: Rocket,
                                                    text: "Platform modern",
                                                },
                                                {
                                                    icon: Award,
                                                    text: "Pelatihan & pengembangan gratis",
                                                },
                                            ].map((b, i) => (
                                                <div
                                                    key={i}
                                                    className="bg-white/80 rounded-xl p-4 text-center shadow-sm"
                                                >
                                                    <b.icon className="w-10 h-10 mx-auto mb-2 text-blue-500" />
                                                    <p className="text-sm text-gray-600">
                                                        {b.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <a
                                        href="/mentor-register"
                                        className="w-full flex items-center justify-center gap-3 py-5 px-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-cyan-300/50 transform hover:scale-105 transition-all duration-300"
                                    >
                                        Daftar Jadi Mentor Sekarang
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD STUDENT */}
                        <div
                            onMouseEnter={() => setHoveredCard("student")}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="group relative transform transition-all duration-500 hover:-translate-y-3"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-700"></div>

                            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-200 shadow-xl">
                                <div className="bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 p-8 text-white">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-4xl sm:text-5xl font-black">
                                            STUDENT
                                        </h2>
                                        <BookOpen className="w-16 h-16 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                                    </div>
                                    <p className="text-purple-50 text-lg font-medium">
                                        Belajar seru tanpa batas!
                                    </p>
                                    <span className="mt-4 inline-block px-5 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm">
                                        Ayo Belajar Sekarang
                                    </span>
                                </div>

                                <div className="p-8 space-y-8">
                                    {/* Syarat */}
                                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-3">
                                            <Sparkles className="w-7 h-7 text-purple-600" />
                                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                                Syarat Super Mudah!
                                            </span>
                                        </h3>
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    icon: Users,
                                                    text: "Minimal umur 12 tahun",
                                                },
                                                {
                                                    icon: Mail,
                                                    text: "Punya email yang masih aktif",
                                                },
                                                {
                                                    icon: Zap,
                                                    text: "Semangat belajar yang tinggi",
                                                },
                                                {
                                                    icon: Smartphone,
                                                    text: "Punya HP/laptop & internet",
                                                },
                                            ].map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-4"
                                                >
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white flex items-center justify-center shadow-md">
                                                        <item.icon className="w-7 h-7" />
                                                    </div>
                                                    <span className="text-gray-700">
                                                        {item.text}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Yang Didapat */}
                                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <Trophy className="w-6 h-6 text-pink-600" />
                                            Yang Kamu Dapatkan
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                {
                                                    icon: BookOpen,
                                                    text: "Materi seru & lengkap",
                                                },
                                                {
                                                    icon: UserCheck,
                                                    text: "Tentor berpengalaman",
                                                },
                                                {
                                                    icon: Award,
                                                    text: "Sertifikat resmi",
                                                },
                                                {
                                                    icon: Heart,
                                                    text: "Komunitas asik & suportif",
                                                },
                                            ].map((b, i) => (
                                                <div
                                                    key={i}
                                                    className="bg-white/80 rounded-xl p-4 text-center shadow-sm"
                                                >
                                                    <b.icon className="w-10 h-10 mx-auto mb-2 text-pink-500" />
                                                    <p className="text-sm text-gray-600">
                                                        {b.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <a
                                        href="/student-register"
                                        className="w-full flex items-center justify-center gap-3 py-5 px-8 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-purple-300/50 transform hover:scale-105 transition-all duration-300"
                                    >
                                        Mulai Belajar Sekarang
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes blob {
                    0%,
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }
                .animate-blob {
                    animation: blob 12s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
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
                    animation: gradient 4s ease infinite;
                }
            `}</style>
        </>
    );
}
