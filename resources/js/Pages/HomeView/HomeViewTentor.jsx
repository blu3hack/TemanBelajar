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
                        <a
                            href="/rule-classroom"
                            className="flex-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                        >
                            <Plus className="w-8 h-8" />
                            Buat Kelas Baru
                        </a>
                    </div>
                </main>
            </div>
        </>
    );
}
