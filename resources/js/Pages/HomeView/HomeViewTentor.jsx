import React, { useState } from "react";
import {
    Users,
    UserCheck,
    Calendar,
    Clock,
    BookOpen,
    MessageSquare,
    TrendingUp,
    Star,
    Bell,
    Menu,
    Search,
    ChevronRight,
    CheckCircle2,
    FileText,
    Plus,
    X,
    Hash,
    DollarSign,
    CalendarDays,
    BookOpenText,
    Video,
    ArrowRight,
    Trophy,
    Flame,
    BadgeDollarSign,
    UsersRound,
    BookOpenCheck,
} from "lucide-react";
import Navbar from "./Component/Navbar";
import MainStats from "./MainComponent/MainStats";
import ScheduleList from "./Schedule/ScheduleList";
import HistoryList from "./HIstory/HistoryList";
import "./style.css";

export default function HomeViewTentor() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [classType, setClassType] = useState("private"); // "private" | "group"

    // Dummy data dummy
    const stats = [
        {
            label: "Total Siswa",
            value: "248",
            icon: Users,
            color: "from-cyan-400 to-blue-500",
        },
        {
            label: "Sesi Hari Ini",
            value: "12",
            icon: Calendar,
            color: "from-purple-400 to-pink-500",
        },
        {
            label: "Rating Rata-rata",
            value: "4.9",
            icon: Star,
            color: "from-yellow-400 to-orange-500",
        },
        {
            label: "Pesan Baru",
            value: "5",
            icon: MessageSquare,
            color: "from-green-400 to-emerald-500",
        },
    ];

    const todaySchedule = [
        {
            subject: "Matematika SMA",
            mentor: "Aflaha Arham",
            time: "14:00 - 15:30",
            status: "upcoming",
        },
        {
            subject: "Fisika Olimpiade",
            mentor: "Salsabila Putri",
            time: "16:00 - 17:30",
            status: "upcoming",
        },
    ];

    const recentStudents = [
        { name: "Nadia Putri", progress: 88, rating: 5 },
        { name: "Fikri Ahmad", progress: 72, rating: 4.8 },
        { name: "Aisyah Zahra", progress: 95, rating: 5 },
    ];

    const courseHistory = [
        {
            date: "18 Nov 2025",
            subject: "Matematika SMA",
            student: "Aditya Pratama",
            duration: "90 menit",
        },
        {
            date: "17 Nov 2025",
            subject: "Fisika Kelas 12",
            student: "Salsa Bila",
            duration: "85 menit",
        },
        {
            date: "16 Nov 2025",
            subject: "Bahasa Inggris",
            student: "Raka Putra",
            duration: "60 menit",
        },
        {
            date: "15 Nov 2025",
            subject: "Kimia SMA",
            student: "Bima Saputra",
            duration: "100 menit",
        },
    ];

    const sesi = 12;
    const student = 2840;
    const balance = "Rp 1250000";

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 relative overflow-hidden">
                <Navbar label="Mentor" name="Bayu" />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                    {/* Stats */}
                    <MainStats
                        streak={student}
                        rank={sesi}
                        points={balance}
                        label1="Siswa"
                        label2="Sesi"
                        label3="Balance"
                        icon1={UsersRound}
                        icon2={BookOpenCheck}
                        icon3={BadgeDollarSign}
                    />
                    <ScheduleList todaySchedule={todaySchedule} />
                    <HistoryList courseHistory={courseHistory} />

                    {/* Tombol Aksi Cepat + Buat Kelas */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                        >
                            <Plus className="w-8 h-8" />
                            Buat Kelas Baru
                        </button>
                    </div>
                </main>

                {/* ==================== MODAL BUAT KELAS BARU ==================== */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="sticky top-0 bg-white border-b border-gray-200 rounded-t-3xl p-6 flex items-center justify-between">
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Buat Kelas Baru
                                </h2>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Pilih Tipe */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Tipe Kelas
                                    </label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            onClick={() =>
                                                setClassType("private")
                                            }
                                            className={`p-5 rounded-2xl border-2 transition-all ${
                                                classType === "private"
                                                    ? "border-cyan-500 bg-cyan-50 shadow-lg"
                                                    : "border-gray-200 bg-gray-50"
                                            }`}
                                        >
                                            <UserCheck className="w-12 h-12 mx-auto mb-3 text-cyan-600" />
                                            <p className="font-bold">
                                                Privat 1-on-1
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                Personal dengan 1 siswa
                                            </p>
                                        </button>
                                        <button
                                            onClick={() =>
                                                setClassType("group")
                                            }
                                            className={`p-5 rounded-2xl border-2 transition-all ${
                                                classType === "group"
                                                    ? "border-purple-500 bg-purple-50 shadow-lg"
                                                    : "border-gray-200 bg-gray-50"
                                            }`}
                                        >
                                            <Users className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                                            <p className="font-bold">
                                                Workshop / Grup
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                Belajar bareng banyak siswa
                                            </p>
                                        </button>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <BookOpenText className="w-4 h-4 inline mr-1" />
                                            Judul Kelas
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={
                                                classType === "group"
                                                    ? "Workshop Olimpiade Matematika"
                                                    : "Matematika SMA Kelas 12"
                                            }
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                                        />
                                    </div>

                                    {classType === "group" && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                <Hash className="w-4 h-4 inline mr-1" />
                                                Kapasitas Maksimal
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="20"
                                                min="2"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <CalendarDays className="w-4 h-4 inline mr-1" />
                                            Tanggal & Jam
                                        </label>
                                        <input
                                            type="datetime-local"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <Clock className="w-4 h-4 inline mr-1" />
                                            Durasi
                                        </label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                                            <option>60 menit</option>
                                            <option>90 menit</option>
                                            <option>120 menit</option>
                                            <option>
                                                180 menit (Workshop)
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <DollarSign className="w-4 h-4 inline mr-1" />
                                            Harga per Siswa
                                        </label>
                                        <input
                                            type="number"
                                            placeholder={
                                                classType === "group"
                                                    ? "75.000"
                                                    : "150.000"
                                            }
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                        />
                                    </div>

                                    {classType === "group" && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                <Video className="w-4 h-4 inline mr-1" />
                                                Platform
                                            </label>
                                            <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200">
                                                <option>Zoom Meeting</option>
                                                <option>Google Meet</option>
                                                <option>
                                                    Live di Platform
                                                </option>
                                            </select>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Deskripsi
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Apa yang akan dipelajari, target siswa, benefit..."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 resize-none"
                                    />
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="flex-1 py-4 rounded-xl bg-gray-100 text-gray-700 font-bold hover:bg-gray-200"
                                    >
                                        Batal
                                    </button>
                                    <button className="flex-1 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition">
                                        {classType === "private"
                                            ? "Buat Kelas Privat"
                                            : "Publikasikan Workshop"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
