import React, { useState } from "react";
import Header from "@/Layouts/Profile/Header";
import Navigation from "@/Layouts/Profile/Navigation";
import About from "@/Layouts/Profile/Content/About";
import SubjectCard from "@/Layouts/Profile/Content/SubjectCard";
import Testimoni from "@/Layouts/Profile/Content/Testimoni";
import Schedule from "@/Layouts/Profile/Content/Schedule";
import Tips from "@/Layouts/Profile/Content/Tips";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("about");

    const profileData = {
        name: "Pak Ahmad Ridwan, S.Pd., M.Sc.", // Ditambahkan gelar agar lebih profesional
        nickname: "Pak Ridwan",
        role: "Guru Bidang Sains & Matematika", // Diperbarui
        rating: 4.9,
        reviews: 156,
        studentsLove: 245,
        motto: "Membentuk pola pikir logis untuk sukses di masa depan.", // Diperbarui
        location: "Surabaya, Jawa Timur",
        phone: "+62 812-3456-7890",
        email: "ahmad.ridwan@email.com",
        totalStudents: 245,
        totalLessons: 1580,
        responseTime: "< 2 jam",
    };

    const subjects = [
        {
            name: "Matematika",
            icon: "Calculations", // Deskripsi untuk Ikon
            level: "SMP - SMA",
            color: "from-blue-600 to-cyan-500", // Biru tua
        },
        {
            name: "Fisika",
            icon: "Physics", // Deskripsi untuk Ikon
            level: "SMA",
            color: "from-indigo-600 to-purple-500", // Ungu kebiruan
        },
        {
            name: "Kimia",
            icon: "Chemistry", // Deskripsi untuk Ikon
            level: "SMP - SMA",
            color: "from-teal-600 to-emerald-500", // Hijau kebiruan
        },
    ];

    // Ikon Achievements diubah ke Lucide React
    const achievements = [
        {
            title: "Guru Favorit",
            desc: "156 murid vote",
        },
        {
            title: "Rating Terbaik",
            desc: "Rating 4.9/5.0",
        },
        {
            title: "Master Teacher",
            desc: "1500+ jam mengajar",
        },
        {
            title: "Tingkat Keberhasilan",
            desc: "95% murid naik nilai",
        },
    ];

    const testimonials = [
        {
            name: "Siti Nurhaliza",
            grade: "SMA 11",
            text: "Pak Ridwan ngajarnya sistematis dan mudah diikuti. Konsep yang rumit jadi gampang dipahami. Sangat direkomendasikan!", // Diperbarui
            rating: 5,
            avatar: "SN", // Inisial
        },
        {
            name: "Budi Santoso",
            grade: "SMP 9",
            text: "Metode belajar Pak Ridwan sangat logis. Saya jadi lebih termotivasi untuk mendalami ilmu pengetahuan.", // Diperbarui
            rating: 5,
            avatar: "BS",
        },
        {
            name: "Dewi Lestari",
            grade: "SMA 12",
            text: "Berkat bimbingan Pak Ridwan, nilai Fisika saya meningkat pesat! Terima kasih banyak atas dedikasinya.", // Diperbarui
            rating: 5,
            avatar: "DL",
        },
    ];

    const availability = [
        { day: "Senin - Jumat", time: "15:00 - 20:00", status: "available" },
        { day: "Sabtu", time: "09:00 - 18:00", status: "available" },
        { day: "Minggu", time: "10:00 - 14:00", status: "limited" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 pb-6 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Header Card */}
                <Header
                    name={profileData.name}
                    role={profileData.role}
                    motto={profileData.motto}
                    rating={profileData.rating}
                    reviews={profileData.reviews}
                    studentsLove={profileData.studentsLove}
                    totalLessons={profileData.totalLessons}
                    totalStudents={profileData.totalStudents}
                />

                {/* Tab Navigation */}
                <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Content */}
                <div className="px-4">
                    {activeTab === "about" && (
                        <div className="space-y-4">
                            {/* About */}
                            <About
                                phone={profileData.phone}
                                email={profileData.email}
                                location={profileData.location}
                                achievements={achievements}
                            />
                        </div>
                    )}

                    {activeTab === "subjects" && (
                        <div className="space-y-4">
                            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    Mata Pelajaran
                                </h3>
                                <div className="space-y-4">
                                    {subjects.map((subject, idx) => (
                                        <SubjectCard
                                            key={idx}
                                            subject={subject}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "testimonials" && (
                        <div className="space-y-4">
                            <Testimoni testimonials={testimonials} />
                        </div>
                    )}

                    {activeTab === "schedule" && (
                        <div className="space-y-4">
                            {/* Jadwal */}
                            <Schedule
                                availability={availability}
                                profileData={profileData}
                            />

                            {/* Tips */}
                            <Tips />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
