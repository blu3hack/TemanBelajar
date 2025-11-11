import React, { useState, useEffect } from "react";

export default function LandingPage() {
    const [scrolled, setScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const handleMouseMove = (e) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;
            setMousePosition({ x, y });
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
            {/* Futuristic Grid Background */}
            <div className="fixed inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                        linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
                    `,
                        backgroundSize: "50px 50px",
                        maskImage:
                            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
                    }}
                ></div>
            </div>

            {/* Animated Glow */}
            <div
                className="fixed w-full h-full pointer-events-none transition-transform duration-300"
                style={{
                    transform: `translate(${mousePosition.x * 40}px, ${
                        mousePosition.y * 40
                    }px)`,
                }}
            >
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-300 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-25"></div>
            </div>

            {/* Navigation */}
            <nav
                className={`fixed w-full z-50 transition-all duration-500 ${
                    scrolled ? "bg-white/90 backdrop-blur-2xl shadow-lg" : ""
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-lg relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </div>
                            <span className="text-lg sm:text-xl font-bold tracking-wider bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                                TUTORLINK
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-28 sm:pt-40 pb-16 sm:pb-32 px-4 sm:px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 sm:space-y-8">
                            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-violet-100 border border-violet-200 rounded-full backdrop-blur-sm">
                                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
                                <span className="text-xs sm:text-sm text-violet-700 tracking-wider font-medium">
                                    MARKETPLACE GURU LES TERPERCAYA
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="text-slate-900">Temukan</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600">
                                    Guru Les Ideal
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
                                Platform yang menghubungkan siswa dengan guru
                                les berkualitas atau menjadi guru les
                                profesional. Mulai perjalanan belajar atau
                                mengajar Anda hari ini.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                                <a
                                    href="/login"
                                    className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-violet-500/50 transition-all text-center relative overflow-hidden"
                                >
                                    <span className="relative z-10">Login</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-pink-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                </a>
                                <a
                                    href="/register"
                                    className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-100 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-200 transition-all text-center"
                                >
                                    Register
                                </a>
                            </div>
                        </div>

                        <div className="relative mt-8 md:mt-0">
                            <div className="relative bg-gradient-to-br from-violet-100/50 to-fuchsia-100/50 backdrop-blur-xl rounded-2xl p-1 border border-violet-200">
                                <div className="bg-white/80 rounded-xl p-4 sm:p-6">
                                    <div className="space-y-3 sm:space-y-4">
                                        {[
                                            {
                                                subject: "Matematika",
                                                tutors: "350+",
                                                icon: "📐",
                                                rate: "Rp 75k/jam",
                                            },
                                            {
                                                subject: "Bahasa Inggris",
                                                tutors: "420+",
                                                icon: "🌐",
                                                rate: "Rp 80k/jam",
                                            },
                                            {
                                                subject: "Fisika",
                                                tutors: "280+",
                                                icon: "⚡",
                                                rate: "Rp 70k/jam",
                                            },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="group p-3 sm:p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all cursor-pointer"
                                            >
                                                <div className="flex items-center gap-3 sm:gap-4">
                                                    <div className="text-2xl sm:text-3xl">
                                                        {item.icon}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="font-bold text-slate-900 text-sm sm:text-base truncate">
                                                            {item.subject}
                                                        </div>
                                                        <div className="text-xs sm:text-sm text-slate-600">
                                                            {item.tutors} Guru
                                                            Tersedia
                                                        </div>
                                                        <div className="text-xs sm:text-sm font-semibold text-violet-600 mt-1">
                                                            Mulai dari{" "}
                                                            {item.rate}
                                                        </div>
                                                    </div>
                                                    <div className="text-xl sm:text-2xl text-slate-400 group-hover:text-violet-500 transition-colors">
                                                        →
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-violet-400 to-fuchsia-400 rounded-lg flex items-center justify-center text-2xl sm:text-3xl animate-pulse backdrop-blur-sm border-2 border-white shadow-lg">
                                🎓
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative bg-gradient-to-b from-white to-slate-50"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <div className="inline-block px-3 sm:px-4 py-2 bg-purple-100 border border-purple-200 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
                            <span className="text-xs sm:text-sm text-purple-700 tracking-widest font-medium">
                                MENGAPA PILIH KAMI
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-violet-900 to-purple-900">
                                Keunggulan Platform
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
                            Solusi lengkap untuk kebutuhan les privat Anda
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            {
                                icon: "🔍",
                                title: "Guru Terverifikasi",
                                desc: "Semua guru telah melalui proses verifikasi ketat dengan background check dan review kredensial",
                            },
                            {
                                icon: "💰",
                                title: "Harga Transparan",
                                desc: "Lihat tarif jelas dari setiap guru, bandingkan, dan pilih sesuai budget Anda",
                            },
                            {
                                icon: "📍",
                                title: "Lokasi Fleksibel",
                                desc: "Pilih les di rumah, tempat umum, atau secara online sesuai preferensi Anda",
                            },
                            {
                                icon: "⭐",
                                title: "Rating & Review",
                                desc: "Sistem rating transparan dari siswa untuk membantu Anda memilih guru terbaik",
                            },
                            {
                                icon: "📅",
                                title: "Jadwal Fleksibel",
                                desc: "Atur jadwal les sesuai waktu luang Anda dengan sistem booking yang mudah",
                            },
                            {
                                icon: "🛡️",
                                title: "Pembayaran Aman",
                                desc: "Sistem pembayaran terintegrasi dan aman dengan proteksi untuk kedua belah pihak",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group relative p-6 sm:p-8 bg-white backdrop-blur-sm border border-slate-200 rounded-2xl hover:shadow-xl hover:scale-105 transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 to-fuchsia-100/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                                <div className="relative">
                                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subjects Grid */}
            <section
                id="subjects"
                className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900">
                            Mata Pelajaran
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 px-4">
                            Temukan guru les untuk berbagai mata pelajaran
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                        {[
                            {
                                name: "Matematika",
                                icon: "∑",
                                color: "from-violet-500 to-purple-500",
                                tutors: "350+",
                            },
                            {
                                name: "Fisika",
                                icon: "⚛",
                                color: "from-purple-500 to-fuchsia-500",
                                tutors: "280+",
                            },
                            {
                                name: "Kimia",
                                icon: "⚗",
                                color: "from-fuchsia-500 to-pink-500",
                                tutors: "240+",
                            },
                            {
                                name: "Biologi",
                                icon: "🧬",
                                color: "from-pink-500 to-rose-500",
                                tutors: "200+",
                            },
                            {
                                name: "B. Inggris",
                                icon: "A",
                                color: "from-indigo-500 to-violet-500",
                                tutors: "420+",
                            },
                            {
                                name: "B. Indonesia",
                                icon: "📖",
                                color: "from-blue-500 to-indigo-500",
                                tutors: "180+",
                            },
                            {
                                name: "Ekonomi",
                                icon: "₿",
                                color: "from-orange-500 to-amber-500",
                                tutors: "160+",
                            },
                            {
                                name: "Komputer",
                                icon: "💻",
                                color: "from-teal-500 to-cyan-500",
                                tutors: "220+",
                            },
                        ].map((course, index) => (
                            <div
                                key={index}
                                className="group relative p-4 sm:p-6 bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl hover:shadow-lg hover:scale-105 transition-all cursor-pointer overflow-hidden"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                                ></div>
                                <div className="relative text-center">
                                    <div className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 text-slate-400 group-hover:text-slate-900 transition-colors">
                                        {course.icon}
                                    </div>
                                    <div className="text-xs sm:text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors mb-1">
                                        {course.name}
                                    </div>
                                    <div className="text-xs text-violet-600 font-medium">
                                        {course.tutors} Guru
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section
                id="testimonials"
                className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900">
                            Testimoni Pengguna
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 px-4">
                            Apa kata mereka tentang platform kami
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                name: "Diana Putri",
                                role: "Siswa SMA",
                                text: "Menemukan guru Matematika yang cocok dengan gaya belajar saya jadi mudah. Nilai saya meningkat drastis dalam 3 bulan!",
                                rating: 5,
                            },
                            {
                                name: "Reza Pratama",
                                role: "Guru Les Fisika",
                                text: "Platform ini memudahkan saya mendapat siswa baru. Sistem pembayaran aman dan jadwal fleksibel. Sangat profesional!",
                                rating: 5,
                            },
                            {
                                name: "Ibu Linda",
                                role: "Orang Tua Siswa",
                                text: "Sebagai orang tua, saya merasa tenang karena semua guru sudah terverifikasi. Prosesnya transparan dan terpercaya.",
                                rating: 5,
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="p-6 sm:p-8 bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-2xl hover:shadow-lg transition-all"
                            >
                                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                                        {item.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-bold text-slate-900 text-sm sm:text-base truncate">
                                            {item.name}
                                        </div>
                                        <div className="text-xs sm:text-sm text-slate-600 truncate">
                                            {item.role}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4">
                                    "{item.text}"
                                </p>
                                <div className="flex gap-1 text-yellow-500 text-lg sm:text-xl">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-violet-50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="relative p-8 sm:p-12 bg-gradient-to-br from-violet-100/80 to-fuchsia-100/80 backdrop-blur-xl border border-violet-200 rounded-3xl">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                            Siap Memulai?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-700 mb-6 sm:mb-10 px-4">
                            Bergabunglah dengan ribuan siswa dan guru di
                            platform kami
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <a
                                href="/login"
                                className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg font-bold hover:shadow-2xl hover:shadow-violet-500/50 transition-all"
                            >
                                Login
                            </a>
                            <a
                                href="/register"
                                className="px-8 sm:px-12 py-3 sm:py-4 bg-white border-2 border-violet-300 text-slate-700 rounded-lg font-bold hover:bg-slate-50 transition-all"
                            >
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
                        <div className="col-span-2 md:col-span-1 space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg"></div>
                                <span className="text-lg font-bold">
                                    TUTORLINK
                                </span>
                            </div>
                            <p className="text-slate-400 text-sm">
                                Platform terpercaya untuk menghubungkan siswa
                                dengan guru les berkualitas
                            </p>
                        </div>
                        {[
                            {
                                title: "Untuk Siswa",
                                items: ["Cari Guru", "Cara Kerja", "FAQ"],
                            },
                            {
                                title: "Untuk Guru",
                                items: ["Daftar Guru", "Panduan", "Benefit"],
                            },
                            {
                                title: "Perusahaan",
                                items: ["Tentang Kami", "Kontak", "Karir"],
                            },
                        ].map((col, index) => (
                            <div key={index}>
                                <h3 className="font-bold mb-3 sm:mb-4 text-sm tracking-wider">
                                    {col.title}
                                </h3>
                                <div className="space-y-2">
                                    {col.items.map((item, i) => (
                                        <div
                                            key={i}
                                            className="text-slate-400 text-sm hover:text-white transition-colors cursor-pointer"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-slate-800 pt-6 sm:pt-8 text-center text-slate-500 text-xs sm:text-sm tracking-wider">
                        © 2025 TUTORLINK. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </footer>
        </div>
    );
}
