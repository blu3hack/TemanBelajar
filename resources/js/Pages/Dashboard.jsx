import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import {
    Home,
    Calendar,
    BookOpen,
    History,
    Users,
    Settings,
    Search,
    Plus,
    Clock,
    Video,
    Phone,
    MessageCircleHeart,
    Star,
    TrendingUp,
    Award,
    ChevronRight,
    Menu,
    X,
} from "lucide-react";
import Link from "@/Layouts/Dashboard/Link";
import { BookUser } from "lucide-react";
import { Landmark } from "lucide-react";

const AdminDashboard = () => {
    const user = usePage().props.auth.user;
    const { schedule_class } = usePage().props;
    const { status } = usePage().props;
    const [activeMenu, setActiveMenu] = useState("home");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const menuItems = [
        { id: "home", label: "Home", icon: Home },
        { id: "jadwal", label: "Jadwal", icon: Calendar },
        { id: "jurnal", label: "Jurnal", icon: BookOpen },
        { id: "siswa", label: "Siswa", icon: Users },
        { id: "lainnya", label: "Lainnya", icon: Settings },
    ];

    const renderContent = () => {
        switch (activeMenu) {
            case "home":
                return (
                    <div className="space-y-6 pb-6">
                        {/* Header Card */}
                        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-6 lg:p-8 text-white shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className="text-2xl lg:text-3xl font-bold">
                                        Halo, {user.name}! 👋
                                    </h2>
                                    <p className="text-white/90 text-sm lg:text-base mt-1">
                                        Semangat Belajar hari ini
                                    </p>
                                </div>
                                <button className="w-12 h-12 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-sm rounded-full overflow-hidden flex items-center justify-center hover:bg-white/30 transition-all">
                                    <img
                                        src={user.avatar}
                                        alt="User Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            </div>
                            <div className="grid grid-cols-3 gap-3 lg:gap-4 mt-6">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 lg:p-4 hover:bg-white/30 transition-all cursor-pointer">
                                    <div className="text-2xl lg:text-3xl font-bold">
                                        24
                                    </div>
                                    <div className="text-xs lg:text-sm text-white/90 mt-1">
                                        Kelas
                                    </div>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 lg:p-4 hover:bg-white/30 transition-all cursor-pointer">
                                    <div className="text-2xl lg:text-3xl font-bold">
                                        18
                                    </div>
                                    <div className="text-xs lg:text-sm text-white/90 mt-1">
                                        Siswa
                                    </div>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 lg:p-4 hover:bg-white/30 transition-all cursor-pointer">
                                    <div className="text-2xl lg:text-3xl font-bold">
                                        4.8
                                    </div>
                                    <div className="text-xs lg:text-sm text-white/90 mt-1">
                                        Rating
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Quick Actions */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">
                                    Aksi Cepat
                                </h3>
                                <div className="grid grid-cols-4 gap-3">
                                    {status === "inactive" ? (
                                        <Link
                                            link="/mentor-register"
                                            label="Daftar Mentor"
                                            icon={BookUser}
                                        />
                                    ) : (
                                        <Link
                                            link="/rule-classroom"
                                            label="Buat Kelas"
                                            icon={Plus}
                                        />
                                    )}

                                    <Link
                                        link="#"
                                        label="Daftar Meeting"
                                        icon={Video}
                                    />

                                    <Link
                                        link="#"
                                        label="Chat Admin"
                                        icon={MessageCircleHeart}
                                    />

                                    <Link
                                        link="/explore"
                                        label="Explore Kelas"
                                        icon={Landmark}
                                    />
                                </div>
                            </div>

                            {/* Performa */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">
                                    Performa Minggu Ini
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                                            <TrendingUp
                                                className="text-green-600"
                                                size={20}
                                            />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900">
                                            89%
                                        </div>
                                        <div className="text-sm text-gray-600 mt-1">
                                            Kehadiran
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center mb-3">
                                            <Award
                                                className="text-yellow-600"
                                                size={20}
                                            />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900">
                                            12
                                        </div>
                                        <div className="text-sm text-gray-600 mt-1">
                                            Kelas Selesai
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "jadwal":
                return (
                    <div className="space-y-6 pb-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                Jadwal Kursus
                            </h2>
                            <button className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-blue-700 active:scale-95 transition-all">
                                <Plus size={24} />
                            </button>
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex gap-2 overflow-x-auto pb-2">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium whitespace-nowrap hover:bg-blue-700 transition-all">
                                Semua
                            </button>
                            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200 transition-all">
                                Hari Ini
                            </button>
                            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200 transition-all">
                                Minggu Ini
                            </button>
                            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200 transition-all">
                                Bulan Ini
                            </button>
                        </div>

                        {/* Jadwal Cards */}
                        <div className="grid lg:grid-cols-2 gap-4">
                            {(schedule_class ?? []).map((schedule) => (
                                <div
                                    key={schedule.id}
                                    className={`bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-5 border border-blue-200 shadow-sm hover:shadow-md transition-all`}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">
                                                {schedule.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {schedule.audience}
                                            </p>
                                        </div>
                                        <div
                                            className={`px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full`}
                                        >
                                            {schedule.startdate}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-sm text-gray-600">
                                            <Clock size={16} />
                                            <span>{schedule.duration}</span>
                                        </div>
                                        {schedule.status === "upcoming" ? (
                                            <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
                                                <Phone size={16} />
                                                Mulai Kelas
                                            </button>
                                        ) : (
                                            <span className="text-sm font-medium text-green-600">
                                                ✓ Selesai
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "jurnal":
                return (
                    <div className="space-y-6 pb-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                Jurnal Mengajar
                            </h2>
                            <button className="w-12 h-12 lg:w-14 lg:h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-purple-700 active:scale-95 transition-all">
                                <Plus size={24} />
                            </button>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-4">
                            {[
                                {
                                    tanggal: "04 Des 2024",
                                    kelas: "Matematika Dasar",
                                    topik: "Aljabar Linear",
                                    catatan:
                                        "Siswa memahami konsep dengan baik. Perlu tambahan latihan soal untuk penguatan materi.",
                                    mood: "😊",
                                    color: "blue",
                                },
                                {
                                    tanggal: "03 Des 2024",
                                    kelas: "Bahasa Inggris",
                                    topik: "Grammar Present Tense",
                                    catatan:
                                        "Siswa masih kesulitan dengan auxiliary verbs. Akan dibuat worksheet tambahan.",
                                    mood: "🤔",
                                    color: "purple",
                                },
                                {
                                    tanggal: "02 Des 2024",
                                    kelas: "Fisika",
                                    topik: "Hukum Newton",
                                    catatan:
                                        "Performa sangat bagus! Siswa aktif bertanya dan mengerjakan semua latihan dengan benar.",
                                    mood: "🎉",
                                    color: "green",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all"
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="text-3xl">
                                            {item.mood}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <h3 className="font-bold text-gray-900">
                                                    {item.topik}
                                                </h3>
                                            </div>
                                            <div
                                                className={`inline-block px-2 py-1 bg-${item.color}-100 text-${item.color}-700 text-xs font-medium rounded-lg mb-2`}
                                            >
                                                {item.kelas}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                        {item.catatan}
                                    </p>
                                    <div className="text-xs text-gray-500">
                                        {item.tanggal}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "siswa":
                return (
                    <div className="space-y-6 pb-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                Daftar Siswa
                            </h2>
                            <button className="w-12 h-12 lg:w-14 lg:h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-green-700 active:scale-95 transition-all">
                                <Search size={24} />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                            {[
                                {
                                    nama: "Budi Santoso",
                                    kelas: 8,
                                    rating: 4.9,
                                    color: "from-blue-400 to-blue-600",
                                },
                                {
                                    nama: "Ani Wijaya",
                                    kelas: 12,
                                    rating: 5.0,
                                    color: "from-purple-400 to-purple-600",
                                },
                                {
                                    nama: "Dian Pratama",
                                    kelas: 6,
                                    rating: 4.7,
                                    color: "from-green-400 to-green-600",
                                },
                                {
                                    nama: "Eka Putri",
                                    kelas: 10,
                                    rating: 4.8,
                                    color: "from-pink-400 to-pink-600",
                                },
                                {
                                    nama: "Fajar Ahmad",
                                    kelas: 7,
                                    rating: 4.6,
                                    color: "from-orange-400 to-orange-600",
                                },
                                {
                                    nama: "Gita Sari",
                                    kelas: 9,
                                    rating: 4.9,
                                    color: "from-cyan-400 to-cyan-600",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all cursor-pointer"
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3`}
                                    >
                                        {item.nama.charAt(0)}
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-center text-sm mb-1">
                                        {item.nama}
                                    </h3>
                                    <p className="text-xs text-gray-600 text-center mb-2">
                                        {item.kelas} kelas
                                    </p>
                                    <div className="flex items-center justify-center gap-1 text-yellow-500">
                                        <Star size={14} fill="currentColor" />
                                        <span className="text-xs font-semibold text-gray-700">
                                            {item.rating}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "lainnya":
                return (
                    <div className="space-y-6 pb-6">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                            Lainnya
                        </h2>

                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Profile Card */}
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl font-bold">
                                        A
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            Dashboard
                                        </h3>
                                        <p className="text-white/80 text-sm">
                                            Pengajar Professional
                                        </p>
                                        <div className="flex items-center gap-1 mt-2">
                                            <Star size={16} fill="white" />
                                            <span className="font-semibold">
                                                4.8
                                            </span>
                                            <span className="text-white/80 text-sm">
                                                (156 ulasan)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Menu List */}
                            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                                {[
                                    {
                                        icon: History,
                                        label: "Riwayat",
                                        color: "text-blue-600",
                                        bg: "bg-blue-50",
                                    },
                                    {
                                        icon: TrendingUp,
                                        label: "Statistik",
                                        color: "text-green-600",
                                        bg: "bg-green-50",
                                    },
                                    {
                                        icon: Award,
                                        label: "Pencapaian",
                                        color: "text-yellow-600",
                                        bg: "bg-yellow-50",
                                    },
                                    {
                                        icon: Settings,
                                        label: "Pengaturan",
                                        color: "text-gray-600",
                                        bg: "bg-gray-50",
                                    },
                                ].map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <button
                                            key={idx}
                                            className="w-full flex items-center gap-4 p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 active:bg-gray-100 transition-all"
                                        >
                                            <div
                                                className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center`}
                                            >
                                                <Icon
                                                    className={item.color}
                                                    size={24}
                                                />
                                            </div>
                                            <span className="flex-1 text-left font-semibold text-gray-900">
                                                {item.label}
                                            </span>
                                            <ChevronRight
                                                className="text-gray-400"
                                                size={20}
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Logout Button */}
                        <form action="/logout" method="POST">
                            <input
                                type="hidden"
                                name="_token"
                                value={document
                                    .querySelector('meta[name="csrf-token"]')
                                    .getAttribute("content")}
                            />

                            <button className="w-full lg:w-auto lg:px-8 bg-red-50 text-red-600 font-semibold py-4 rounded-2xl hover:bg-red-100 active:scale-98 transition-all">
                                Keluar
                            </button>
                        </form>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Desktop Sidebar */}
            <div className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex-col p-6 z-50">
                <div className="mb-8">
                    <img
                        src="Assets/Logo/logo.png"
                        alt=""
                        className="w-50 h-10"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        Platform Pembelajaran
                    </p>
                </div>

                <nav className="flex-1 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeMenu === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveMenu(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                                    isActive
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                                <Icon size={22} strokeWidth={2.5} />
                                <span className="font-semibold">
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </nav>

                <div className="pt-6 border-t border-gray-200">
                    <form action="/logout" method="POST">
                        <input
                            type="hidden"
                            name="_token"
                            value={document
                                .querySelector('meta[name="csrf-token"]')
                                .getAttribute("content")}
                        />

                        <button className="w-full lg:w-auto lg:px-8 bg-red-50 text-red-600 font-semibold py-4 rounded-2xl hover:bg-red-100 active:scale-98 transition-all">
                            Keluar
                        </button>
                    </form>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-40">
                <div className="flex items-center justify-between px-4 py-4">
                    <img
                        src="Assets/Logo/logo.png"
                        alt=""
                        className="w-50 h-10"
                    />
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
                    >
                        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-50"
                    onClick={() => setSidebarOpen(false)}
                >
                    <div
                        className="absolute right-0 top-0 h-full w-64 bg-white p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold text-gray-900">
                                Menu
                            </h2>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <nav className="space-y-2">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeMenu === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setActiveMenu(item.id);
                                            setSidebarOpen(false);
                                        }}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                                            isActive
                                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                                : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                    >
                                        <Icon size={20} />
                                        <span className="font-semibold">
                                            {item.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="lg:ml-64 px-4 lg:px-8 pt-20 lg:pt-8 pb-24 lg:pb-8 max-w-7xl">
                {renderContent()}
            </div>

            {/* Bottom Navigation - Mobile Only */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 z-40">
                <div className="px-6 py-3">
                    <div className="flex items-center justify-between">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeMenu === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveMenu(item.id)}
                                    className={`flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all ${
                                        isActive ? "scale-110" : "scale-100"
                                    }`}
                                >
                                    <div
                                        className={`${
                                            isActive
                                                ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                                                : "bg-gray-100 text-gray-500"
                                        } w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-sm`}
                                    >
                                        <Icon size={22} strokeWidth={2.5} />
                                    </div>
                                    <span
                                        className={`text-xs font-medium ${
                                            isActive
                                                ? "text-gray-900"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        {item.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
