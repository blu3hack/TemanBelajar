import React, { useState, useEffect } from "react";
import {
    Search,
    BookOpen,
    Users,
    Award,
    Star,
    Menu,
    X,
    GraduationCap,
    Clock,
    TrendingUp,
    Sparkles,
    Zap,
    Target,
    MessageSquare,
    Video,
    Shield,
} from "lucide-react";
import CardPlatform from "@/Layouts/Wellcome/CardPlatform";

export default function TutoringPlatform() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("student");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const features = [
        {
            icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Cari Guru Terbaik",
            description:
                "Temukan guru les yang sesuai dengan kebutuhan dan mata pelajaran Anda",
            color: "from-blue-500 to-cyan-400",
        },
        {
            icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Guru Terverifikasi",
            description:
                "Semua guru telah melalui proses seleksi dan verifikasi ketat",
            color: "from-purple-500 to-pink-400",
        },
        {
            icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Jadwal Fleksibel",
            description: "Atur jadwal belajar sesuai dengan waktu luang Anda",
            color: "from-orange-500 to-yellow-400",
        },
        {
            icon: <Video className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Belajar Online/Offline",
            description: "Pilih metode belajar yang paling nyaman untuk Anda",
            color: "from-green-500 to-emerald-400",
        },
        {
            icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Belajar Tersistem",
            description:
                "Kurikulum terstruktur dan progress tracking yang jelas",
            color: "from-indigo-500 to-blue-400",
        },
        {
            icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Chat 24/7",
            description:
                "Komunikasi langsung dengan guru kapan saja Anda butuhkan",
            color: "from-pink-500 to-rose-400",
        },
    ];

    const subjects = [
        { name: "Matematika", icon: "📐", color: "from-blue-400 to-blue-500" },
        { name: "Fisika", icon: "⚛️", color: "from-purple-400 to-purple-500" },
        { name: "Kimia", icon: "🧪", color: "from-green-400 to-green-500" },
        {
            name: "Biologi",
            icon: "🧬",
            color: "from-emerald-400 to-emerald-500",
        },
        {
            name: "Bahasa Inggris",
            icon: "🗣️",
            color: "from-red-400 to-red-500",
        },
        {
            name: "Bahasa Indonesia",
            icon: "📚",
            color: "from-orange-400 to-orange-500",
        },
        { name: "Ekonomi", icon: "💰", color: "from-yellow-400 to-yellow-500" },
        { name: "Akuntansi", icon: "📊", color: "from-pink-400 to-pink-500" },
    ];

    const stats = [
        {
            number: "10,000+",
            label: "Siswa Aktif",
            icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
        },
        {
            number: "2,500+",
            label: "Guru Berpengalaman",
            icon: (
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            ),
        },
        {
            number: "50+",
            label: "Mata Pelajaran",
            icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
        },
        {
            number: "4.9/5",
            label: "Rating Rata-rata",
            icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
        },
    ];

    const testimonials = [
        {
            name: "Siti Nurhaliza",
            role: "Siswa SMA",
            avatar: "👩‍🎓",
            text: "Platform ini sangat membantu! Saya berhasil meningkatkan nilai matematika dari 6 ke 9 dalam 3 bulan.",
            rating: 5,
            color: "from-blue-400 to-cyan-400",
        },
        {
            name: "Ahmad Rizki",
            role: "Guru Fisika",
            avatar: "👨‍🏫",
            text: "Sebagai guru, platform ini memudahkan saya menemukan siswa dan mengatur jadwal mengajar dengan fleksibel.",
            rating: 5,
            color: "from-purple-400 to-pink-400",
        },
        {
            name: "Maya Angelina",
            role: "Orang Tua Siswa",
            avatar: "👩",
            text: "Saya merasa tenang karena bisa memantau perkembangan belajar anak dengan transparan dan terstruktur.",
            rating: 5,
            color: "from-orange-400 to-yellow-400",
        },
    ];

    const benefits = [
        { icon: <Zap className="w-5 h-5" />, text: "Respons Cepat" },
        { icon: <Award className="w-5 h-5" />, text: "Guru Bersertifikat" },
        {
            icon: <TrendingUp className="w-5 h-5" />,
            text: "Peningkatan Nilai Terbukti",
        },
        {
            icon: <Sparkles className="w-5 h-5" />,
            text: "Metode Belajar Modern",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-32 h-32 sm:w-64 sm:h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            {/* Navbar */}
            <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <img
                                src="Assets/Logo/logo.png"
                                alt=""
                                className="w-50 h-10"
                            />
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="/login">
                                <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-50 transition">
                                    Masuk
                                </button>
                            </a>
                            <a href="/register">
                                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-full hover:shadow-lg transition transform hover:-translate-y-0.5">
                                    Daftar Gratis
                                </button>
                            </a>
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-4 py-4 space-y-3">
                            <button className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-full">
                                Login
                            </button>
                            <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-full">
                                Register
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Temukan Guru Les
                                <span className="block bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    Terbaik
                                </span>
                                untuk Kesuksesan Anda
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                                Belajar dengan guru berpengalaman dan
                                terverifikasi. Tingkatkan prestasi akademik Anda
                                bersama focuz.id
                            </p>

                            {/* Tab Selector */}
                            <div className=" space-x-2 sm:space-x-4 bg-white rounded-full p-1.5 sm:p-2 shadow-xl inline-flex mx-auto lg:mx-0">
                                <button
                                    onClick={() => setActiveTab("student")}
                                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition text-sm sm:text-base font-semibold ${
                                        activeTab === "student"
                                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                                            : "text-gray-600 hover:text-blue-500"
                                    }`}
                                >
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 inline mr-1 sm:mr-2" />
                                    Cari Guru
                                </button>
                                <button
                                    onClick={() => setActiveTab("teacher")}
                                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition text-sm sm:text-base font-semibold ${
                                        activeTab === "teacher"
                                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                                            : "text-gray-600 hover:text-blue-500"
                                    }`}
                                >
                                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 inline mr-1 sm:mr-2" />
                                    Jadi Guru
                                </button>
                            </div>

                            {/* Search Box */}
                            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 transform hover:scale-[1.02] transition">
                                {activeTab === "student" ? (
                                    <CardPlatform
                                        label="Platform Belajar Online"
                                        benefits={[
                                            "Didampingi Mentor berpengalaman",
                                            "Materi interaktif dan menarik",
                                            "Dashboard mudah digunakan",
                                        ]}
                                        buttonText="Daftar sebagai Siswa"
                                        buttonLink="/student-register"
                                    />
                                ) : (
                                    <CardPlatform
                                        label=" Mulai karir mengajar Anda bersama
                                            kami!"
                                        benefits={[
                                            "Penghasilan tambahan fleksibel",
                                            "Ribuan siswa menunggu Anda",
                                            "Platform profesional & mudah",
                                            "Atur jadwal sendiri",
                                        ]}
                                        buttonText="Daftar sebagai Mentor"
                                        buttonLink="/mentor-register"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Stats Cards - Improved Responsive */}
                        <div className="relative mt-8 lg:mt-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-3 opacity-20"></div>
                            <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    {stats.map((stat, index) => (
                                        <div
                                            key={index}
                                            className="bg-white/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transform hover:scale-105 transition"
                                        >
                                            <div className="flex justify-center mb-2">
                                                {stat.icon}
                                            </div>
                                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                                                {stat.number}
                                            </div>
                                            <div className="text-xs sm:text-sm text-blue-100">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                className="py-12 sm:py-16 lg:py-20 px-4 bg-white/50 backdrop-blur-sm"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 sm:mb-16">
                        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-semibold mb-4">
                            ⚡ Fitur Unggulan
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Mengapa Memilih{" "}
                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                focuz.id
                            </span>
                            ?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                            Platform les online dan offline terlengkap dengan
                            fitur terbaik
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-gray-100 hover:border-transparent"
                            >
                                <div
                                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}
                                >
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subjects Section */}
            <section id="subjects" className="py-12 sm:py-16 lg:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 sm:mb-16">
                        <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-xs sm:text-sm font-semibold mb-4">
                            📚 Mata Pelajaran
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Mata Pelajaran Populer
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                            Temukan guru untuk berbagai mata pelajaran
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                        {subjects.map((subject, index) => (
                            <div
                                key={index}
                                className="group bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-blue-400"
                            >
                                <div className="text-center">
                                    <div
                                        className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${subject.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-2xl sm:text-3xl group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg`}
                                    >
                                        {subject.icon}
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg group-hover:text-blue-500 transition">
                                        {subject.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                id="testimonials"
                className="py-12 sm:py-16 lg:py-20 px-4 bg-white/50 backdrop-blur-sm"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 sm:mb-16">
                        <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-xs sm:text-sm font-semibold mb-4">
                            💬 Testimoni
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Apa Kata Mereka?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                            Cerita sukses dari pengguna focuz.id
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-gray-100"
                            >
                                <div className="flex items-center mb-3 sm:mb-4">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                                            />
                                        )
                                    )}
                                </div>
                                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex items-center">
                                    <div
                                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${testimonial.color} rounded-full sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mr-3 sm:mr-4 shadow-lg`}
                                    >
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-gray-600">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                        <div className="relative z-10">
                            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300 mx-auto mb-4 sm:mb-6 animate-bounce" />
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                                Siap Memulai Perjalanan Belajar Anda?
                            </h2>
                            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                                Bergabunglah dengan ribuan siswa dan guru yang
                                telah merasakan manfaatnya
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-10 sm:py-12 lg:py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
                        <div>
                            <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
                                <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                                <span className="text-xl sm:text-2xl font-bold">
                                    focuz.id
                                </span>
                            </div>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                Platform les terpercaya untuk kesuksesan
                                akademik Anda
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
                                Tentang
                            </h3>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-blue-400 transition"
                                    >
                                        Tentang Kami
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-blue-400 transition"
                                    >
                                        Karir
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-blue-400 transition"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
                                Bantuan
                            </h3>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-blue-400 transition"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-blue-400 transition"
                                    >
                                        Kontak
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-blue-400 transition"
                                    >
                                        Syarat & Ketentuan
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
                                Ikuti Kami
                            </h3>
                            <div className="flex space-x-3 sm:space-x-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg text-sm sm:text-base"
                                >
                                    f
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg text-sm sm:text-base"
                                >
                                    t
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg text-sm sm:text-base"
                                >
                                    ig
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
                        <p>
                            © 2024 focuz.id. All rights reserved. Made with ❤️
                            in Indonesia
                        </p>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                @keyframes blob {
                    0%,
                    100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
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
            `}</style>
        </div>
    );
}
