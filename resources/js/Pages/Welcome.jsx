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
    ArrowRight,
    CheckCircle2,
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
            icon: <Search className="w-7 h-7" />,
            title: "Cari Guru Terbaik",
            description:
                "Temukan guru les yang sesuai dengan kebutuhan dan mata pelajaran Anda dengan filter cerdas.",
            color: "from-blue-500 to-cyan-400",
        },
        {
            icon: <Shield className="w-7 h-7" />,
            title: "Guru Terverifikasi",
            description:
                "Semua guru telah melalui proses seleksi akademis dan verifikasi data yang ketat.",
            color: "from-purple-500 to-pink-400",
        },
        {
            icon: <Clock className="w-7 h-7" />,
            title: "Jadwal Fleksibel",
            description:
                "Atur waktu belajar Anda sendiri, pagi atau malam, kami siap mendampingi Anda.",
            color: "from-orange-500 to-yellow-400",
        },
        {
            icon: <Video className="w-7 h-7" />,
            title: "Belajar Hybrid",
            description:
                "Fleksibilitas penuh untuk memilih metode tatap muka atau pertemuan daring via video call.",
            color: "from-green-500 to-emerald-400",
        },
        {
            icon: <Target className="w-7 h-7" />,
            title: "Kurikulum Terarah",
            description:
                "Materi belajar yang terstruktur untuk membantu Anda mencapai target nilai impian.",
            color: "from-indigo-500 to-blue-400",
        },
        {
            icon: <MessageSquare className="w-7 h-7" />,
            title: "Konsultasi 24/7",
            description:
                "Tanyakan kesulitan tugas sekolah kapan saja melalui fitur chat interaktif kami.",
            color: "from-pink-500 to-rose-400",
        },
    ];

    const subjects = [
        { name: "Matematika", icon: "📐", color: "from-blue-400 to-blue-600" },
        { name: "Fisika", icon: "⚛️", color: "from-purple-400 to-purple-600" },
        { name: "Kimia", icon: "🧪", color: "from-green-400 to-green-600" },
        {
            name: "Biologi",
            icon: "🧬",
            color: "from-emerald-400 to-emerald-600",
        },
        { name: "B. Inggris", icon: "🗣️", color: "from-red-400 to-red-600" },
        {
            name: "B. Indonesia",
            icon: "📚",
            color: "from-orange-400 to-orange-600",
        },
        { name: "Ekonomi", icon: "💰", color: "from-yellow-400 to-yellow-600" },
        { name: "Akuntansi", icon: "📊", color: "from-pink-400 to-pink-600" },
    ];

    const stats = [
        {
            number: "10k+",
            label: "Siswa Aktif",
            icon: <Users className="w-6 h-6" />,
        },
        {
            number: "2.5k+",
            label: "Guru Pro",
            icon: <GraduationCap className="w-6 h-6" />,
        },
        {
            number: "50+",
            label: "Mata Pelajaran",
            icon: <BookOpen className="w-6 h-6" />,
        },
        {
            number: "4.9",
            label: "Rating Kepuasan",
            icon: <Star className="w-6 h-6 fill-current" />,
        },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] selection:bg-blue-100 selection:text-blue-700">
            {/* Background Decorations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/30 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/30 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
            </div>

            {/* Navbar */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100 py-3"
                        : "bg-transparent py-5"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center group cursor-pointer">
                        <img
                            src="Assets/Logo/logo.png"
                            alt="Logo"
                            className="h-10 w-auto transform transition group-hover:scale-105"
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#features"
                            className="text-sm font-medium hover:text-blue-600 transition"
                        >
                            Fitur
                        </a>
                        <a
                            href="#subjects"
                            className="text-sm font-medium hover:text-blue-600 transition"
                        >
                            Pelajaran
                        </a>
                        <div className="h-6 w-[1px] bg-gray-200"></div>
                        <a href="/login/google">
                            <button className="px-7 py-2.5 bg-gray-900 text-white rounded-full font-semibold hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95">
                                Daftar Sekarang
                            </button>
                        </a>
                    </div>

                    <button
                        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 z-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10 text-center lg:text-left">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 animate-fade-in-up">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs font-bold tracking-wider uppercase italic">
                                Masa Depan Cerah Dimulai Di Sini
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                            Temukan Guru Les <br />
                            <span className="relative inline-block mt-2">
                                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                                    Terbaik
                                </span>
                                <span className="absolute bottom-3 left-0 w-full h-4 bg-blue-100/60 -z-0 rounded-full"></span>
                            </span>
                            <br />
                            Untuk Anda
                        </h1>

                        <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Akses pendidikan berkualitas dari guru-guru pilihan.
                            Belajar lebih efektif, personal, dan menyenangkan
                            hanya di{" "}
                            <span className="font-bold text-gray-800 underline decoration-blue-400">
                                focuz.id
                            </span>
                            .
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <div className="bg-white p-2 rounded-full shadow-2xl shadow-blue-100 border border-gray-100 flex items-center gap-1">
                                <button
                                    onClick={() => setActiveTab("student")}
                                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                                        activeTab === "student"
                                            ? "bg-blue-600 text-white shadow-lg"
                                            : "text-gray-500 hover:bg-gray-50"
                                    }`}
                                >
                                    Cari Guru
                                </button>
                                <button
                                    onClick={() => setActiveTab("teacher")}
                                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                                        activeTab === "teacher"
                                            ? "bg-indigo-600 text-white shadow-lg"
                                            : "text-gray-500 hover:bg-gray-50"
                                    }`}
                                >
                                    Jadi Mentor
                                </button>
                            </div>
                        </div>

                        <div className="pt-4">
                            <CardPlatform
                                label={
                                    activeTab === "student"
                                        ? "Platform Belajar Terlengkap"
                                        : "Wujudkan Karir Mengajar Anda"
                                }
                                benefits={
                                    activeTab === "student"
                                        ? [
                                              "Mentor Berpengalaman",
                                              "Materi Interaktif",
                                              "Progress Tracking",
                                          ]
                                        : [
                                              "Income Fleksibel",
                                              "Sistem Profesional",
                                              "Jangkauan Nasional",
                                          ]
                                }
                                buttonText={
                                    activeTab === "student"
                                        ? "Daftar Sebagai Siswa"
                                        : "Daftar Sebagai Mentor"
                                }
                                buttonLink={
                                    activeTab === "student"
                                        ? "/student-register"
                                        : "/mentor-register"
                                }
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-[3rem] blur-2xl opacity-50 animate-pulse"></div>
                        <div className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 rounded-[2.5rem] p-8 lg:p-12 shadow-3xl text-white overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10 grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="group p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                            {stat.icon}
                                        </div>
                                        <div className="text-3xl lg:text-4xl font-black mb-1 tracking-tight">
                                            {stat.number}
                                        </div>
                                        <div className="text-blue-100 text-xs font-bold uppercase tracking-widest opacity-80">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 p-6 bg-white/10 rounded-3xl border border-white/10 backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 rounded-full border-2 border-indigo-600 bg-gray-200 overflow-hidden"
                                            >
                                                <img
                                                    src={`https://i.pravatar.cc/150?img=${
                                                        i + 10
                                                    }`}
                                                    alt="user"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs font-medium">
                                        Bergabung dengan 15.000+ lainnya
                                    </p>
                                </div>
                                <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                                    <div className="h-full w-[85%] bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-base font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">
                            Keunggulan Kami
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            Mengapa focuz.id Begitu Berbeda?
                        </h3>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                            Kami menggabungkan teknologi dan pedagogi untuk
                            menciptakan pengalaman belajar yang tak terlupakan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 transform hover:-translate-y-2"
                            >
                                <div
                                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                                >
                                    {feature.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {feature.description}
                                </p>
                                <div className="flex items-center text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Selengkapnya{" "}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subjects Section */}
            <section
                id="subjects"
                className="py-24 bg-gray-900 text-white rounded-[4rem] mx-4 my-10 overflow-hidden relative"
            >
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-4">
                                Pilih Minatmu
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black italic tracking-tight">
                                Kuasai Mata Pelajaran <br /> Populer Hari Ini
                            </h3>
                        </div>
                        <button className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition font-bold">
                            Lihat Semua <ArrowRight />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {subjects.map((subject, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-blue-500 transition-all cursor-pointer"
                            >
                                <div
                                    className={`w-16 h-16 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all`}
                                >
                                    {subject.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                    {subject.name}
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    250+ Guru Aktif
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12 items-center">
                        <div className="lg:col-span-1 space-y-6">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                                Kata <br /> Mereka
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Keberhasilan siswa adalah prioritas utama kami.
                                Berikut adalah cerita inspiratif dari pengguna
                                focuz.id.
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-current"
                                        />
                                    ))}
                                </div>
                                <span className="font-bold text-gray-900 text-lg ml-2">
                                    4.9/5.0
                                </span>
                            </div>
                        </div>

                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    name: "Siti Nurhaliza",
                                    role: "Siswa SMA",
                                    text: "Berhasil meningkatkan nilai matematika dari 6 ke 9 dalam 3 bulan.",
                                    avatar: "👩‍🎓",
                                    color: "from-blue-500 to-cyan-400",
                                },
                                {
                                    name: "Ahmad Rizki",
                                    role: "Guru Fisika",
                                    text: "Platform termudah untuk mengatur jadwal mengajar secara profesional.",
                                    avatar: "👨‍🏫",
                                    color: "from-purple-500 to-pink-400",
                                },
                            ].map((testi, i) => (
                                <div
                                    key={i}
                                    className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 space-y-6"
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`w-14 h-14 bg-gradient-to-br ${testi.color} rounded-full flex items-center justify-center text-2xl shadow-lg`}
                                        >
                                            {testi.avatar}
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900">
                                                {testi.name}
                                            </h5>
                                            <p className="text-sm text-gray-500 font-medium">
                                                {testi.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic leading-relaxed text-lg">
                                        "{testi.text}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 pt-24 pb-12 px-6 text-gray-400 rounded-t-[4rem]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                        <div className="col-span-1 md:col-span-1">
                            <img
                                src="Assets/Logo/logo.png"
                                alt="Logo"
                                className="h-10 mb-8 brightness-0 invert"
                            />
                            <p className="leading-relaxed mb-8">
                                Solusi belajar terbaik untuk generasi masa kini
                                yang fokus pada hasil nyata.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/5 hover:bg-blue-600 transition rounded-full flex items-center justify-center text-white text-sm"
                                >
                                    fb
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/5 hover:bg-pink-600 transition rounded-full flex items-center justify-center text-white text-sm"
                                >
                                    ig
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/5 hover:bg-cyan-500 transition rounded-full flex items-center justify-center text-white text-sm"
                                >
                                    tw
                                </a>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">
                                Perusahaan
                            </h5>
                            <ul className="space-y-4 font-medium">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        Tentang Kami
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        Karir
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">
                                Dukungan
                            </h5>
                            <ul className="space-y-4 font-medium">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        Kebijakan Privasi
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                    >
                                        Kontak Kami
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
                            <h5 className="text-white font-bold mb-4">
                                Berlangganan Newsletter
                            </h5>
                            <div className="flex flex-col gap-3">
                                <input
                                    type="text"
                                    placeholder="Email Anda"
                                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                />
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-blue-900/20">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-white/10 text-center text-sm tracking-wide font-medium">
                        © 2025 focuz.id. Dibuat dengan penuh ❤️ untuk Pendidikan
                        Indonesia.
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
                        transform: translate(40px, -60px) scale(1.15);
                    }
                    66% {
                        transform: translate(-30px, 30px) scale(0.95);
                    }
                }
                .animate-blob {
                    animation: blob 8s infinite cubic-bezier(0.4, 0, 0.2, 1);
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                }
            `}</style>
        </div>
    );
}
