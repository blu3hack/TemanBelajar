import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import MainStats from "./MainComponent/MainStats";
import ScheduleList from "./Schedule/ScheduleList";
import HistoryList from "./HIstory/HistoryList";
import { Trophy, Flame, Zap } from "lucide-react";
import "./style.css";

import CLassRecomList from "./ClassRecom.jsx/CLassRecomList";

export default function HomeViewStudent() {
    const studentName = "Bayu";
    const streak = 12;
    const points = 2840;
    const rank = 7;

    const todaySchedule = [
        {
            subject: "Matematika SMA",
            mentor: "Pak Budi S.Pd",
            time: "14:00 - 15:30",
            status: "upcoming",
        },
        {
            subject: "Fisika Olimpiade",
            mentor: "Kak Salsa M.Sc",
            time: "16:00 - 17:30",
            status: "upcoming",
        },
        {
            subject: "Biologi Olimpiade",
            mentor: "Kak Azizah M.Sc",
            time: "16:00 - 17:30",
            status: "upcoming",
        },
    ];

    const courseHistory = [
        {
            date: "18 Nov 2025",
            subject: "Matematika SMA",
            mentor: "Pak Budi S.Pd",
            duration: "90 menit",
            rating: 5,
        },
        {
            date: "17 Nov 2025",
            subject: "Fisika Kelas 12",
            mentor: "Kak Salsa M.Sc",
            duration: "85 menit",
            rating: 4.8,
        },
        {
            date: "16 Nov 2025",
            subject: "Bahasa Inggris",
            mentor: "Miss Clara",
            duration: "60 menit",
            rating: 5,
        },
        {
            date: "15 Nov 2025",
            subject: "Kimia UNBK",
            mentor: "Kak Fikri",
            duration: "100 menit",
            rating: 4.9,
        },
    ];

    const recommendedClasses = [
        {
            title: "Workshop Kimia UNBK 2026",
            mentor: "Kak Fikri",
            students: 42,
            price: "Rp85.000",
            rating: 4.9,
        },
        {
            title: "Intensif Bahasa Inggris TOEFL",
            mentor: "Miss Clara",
            students: 28,
            price: "Rp120.000",
            rating: 5.0,
        },
        {
            title: "Live Class Biologi SBMPTN",
            mentor: "Dokter Nadia",
            students: 56,
            price: "Rp75.000",
            rating: 4.8,
        },
    ];

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 relative overflow-hidden">
                <Navbar label="Siswa" name={studentName} />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
                    <MainStats
                        streak={streak}
                        rank={rank}
                        points={points}
                        label1="Sesi"
                        label2="Peringkat"
                        label3="point"
                        icon1={Flame}
                        icon2={Trophy}
                        icon3={Zap}
                    />
                    <ScheduleList todaySchedule={todaySchedule} />
                    <HistoryList courseHistory={courseHistory} />
                    <CLassRecomList recommendedClasses={recommendedClasses} />
                </main>
            </div>
        </>
    );
}
