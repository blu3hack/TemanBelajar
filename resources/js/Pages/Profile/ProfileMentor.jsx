import React, { useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    BookOpen,
    Award,
    Star,
    Instagram,
    Send,
    Twitter,
    Briefcase,
    Trophy,
    Clock,
    Users,
    X,
} from "lucide-react";

// Komponen Modal Sederhana untuk Foto Profil
const ProfileModal = ({ isOpen, onClose, name }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4"
            onClick={onClose}
        >
            {/* Modal diperbesar dengan class max-w-lg dan w-11/12 */}
            <div
                className="relative p-8 w-11/12 max-w-lg bg-white rounded-xl shadow-2xl animate-in fade-in-0 zoom-in-95"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-3 right-3 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 transition z-10"
                    onClick={onClose}
                >
                    <X size={24} />
                </button>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center border-b pb-3">
                    Foto Profil {name}
                </h3>

                {/* Placeholder Foto Full - Ukuran Avatar diperbesar */}
                <div className="w-full h-auto aspect-square bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center text-9xl font-extrabold text-white shadow-xl border-4 border-white mx-auto">
                    {name.charAt(0)}
                </div>
            </div>
        </div>
    );
};

function PublicProfile() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const profile = {
        name: "Ahmad Setiawan",
        email: "ahmad.setiawan@email.com",
        phone: "+62 812-3456-7890",
        location: "Surabaya, Indonesia",
        bio: "Pengajar professional dengan pengalaman 5 tahun di bidang pengembangan web dan desain UI/UX. Saya berkomitmen untuk memberikan materi berkualitas tinggi dan mudah dipahami.",
        courses: 12,
        students: 450,
        rating: 4.8,
        reviews: 156,
        instagram: "@ahmad_dev",
        tiktok: "@ahmadsetiawan.tech",
        twitter: "@AhmadSetiaDev",
        totalHours: 5200,
    };

    const experiences = [
        "Senior Web Developer, TechSolutions (2018 - 2023)",
        "Freelance UI/UX Designer, Proyek Mandiri (2023 - Sekarang)",
        "Asisten Dosen Mata Kuliah Algoritma (2016 - 2017)",
    ];

    const achievements = [
        "Penghargaan 'Instruktur Terbaik' 2024",
        "Top 10 Kontributor di forum komunitas developer",
        "Sertifikasi Google Professional Web Developer",
    ];

    const contactFields = [
        {
            icon: Mail,
            label: "Email",
            field: "email",
            color: "text-blue-600",
            bg: "bg-blue-50",
        },
        {
            icon: Phone,
            label: "Nomor Telepon",
            field: "phone",
            color: "text-green-600",
            bg: "bg-green-50",
        },
        {
            icon: MapPin,
            label: "Lokasi",
            field: "location",
            color: "text-red-600",
            bg: "bg-red-50",
        },
    ];

    const socialMediaFields = [
        {
            icon: Instagram,
            label: "Instagram",
            field: "instagram",
            color: "text-pink-600",
            link: `https://instagram.com/${profile.instagram.slice(1)}`,
        },
        {
            icon: Send,
            label: "TikTok",
            field: "tiktok",
            color: "text-gray-900",
            link: `https://tiktok.com/${profile.tiktok.slice(1)}`,
        },
        {
            icon: Twitter,
            label: "X (Twitter)",
            field: "twitter",
            color: "text-black",
            link: `https://twitter.com/${profile.twitter.slice(1)}`,
        },
    ];

    // Komponen untuk menampilkan statistik
    const StatItem = ({ value, label, icon: Icon, color }) => (
        <div className="text-center p-3 flex-1 min-w-0">
            <Icon className={`mx-auto mb-1 ${color}`} size={20} />
            <div className="text-xl sm:text-2xl font-extrabold text-white">
                {value}
            </div>
            <div className="text-white text-opacity-80 text-xs sm:text-sm">
                {label}
            </div>
        </div>
    );

    // Komponen untuk menampilkan list
    const ListCard = ({ title, icon: Icon, color, items }) => (
        // Menggunakan shadow yang lebih menonjol
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 h-full transform hover:shadow-indigo-200 transition duration-300">
            <div
                className={`p-4 flex items-center gap-2 rounded-t-xl ${color
                    .replace("text", "bg")
                    .replace("-600", "-100")}`}
            >
                <Icon className={color} size={20} />
                <h3 className="text-base font-bold text-gray-800">{title}</h3>
            </div>
            <div className="p-4 space-y-3">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 text-sm border-b border-dashed border-gray-100 pb-2 last:border-b-0"
                        >
                            <span className="text-purple-500 mt-1 flex-shrink-0">
                                <Star size={14} fill="currentColor" />
                            </span>
                            <p className="text-gray-700 leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 italic text-sm">
                        Tidak ada data yang tersedia.
                    </p>
                )}
            </div>
        </div>
    );

    // Komponen untuk detail item kontak/sosial media
    const DetailItem = ({
        icon: Icon,
        label,
        value,
        color,
        bg,
        isLink = false,
        linkUrl = "#",
    }) => (
        <a
            href={isLink ? linkUrl : "#"}
            target={isLink ? "_blank" : "_self"}
            rel={isLink ? "noopener noreferrer" : ""}
            className={`flex items-center gap-4 p-3 rounded-xl transition duration-200 ${
                isLink ? "hover:bg-indigo-50 cursor-pointer" : ""
            } border border-gray-100 hover:border-indigo-200`}
        >
            <div
                className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}
            >
                <Icon className={color} size={18} />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 truncate">{label}</p>
                <p
                    className={`font-medium text-sm truncate ${
                        isLink
                            ? "text-indigo-600 group-hover:underline"
                            : "text-gray-900"
                    }`}
                >
                    {value}
                </p>
            </div>
        </a>
    );

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Grid Konten Utama - 1 Kolom Mobile, 3 Kolom Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Kolom Tengah (Header Card) */}
                    <div className="lg:col-span-3">
                        {/* Header Card dengan Background Gradasi/Pattern */}
                        <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
                            {/* Background Pattern - Menggunakan gradasi tema sebagai background utama */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-95"></div>

                            {/* Konten Card */}
                            <div className="relative p-6 sm:p-10 text-white">
                                {/* Header Profil - FULL CENTERED */}
                                <div className="flex flex-col items-center text-center gap-6">
                                    {/* Avatar */}
                                    <div
                                        className="relative w-32 h-32 sm:w-40 sm:h-40 bg-white bg-opacity-30 backdrop-blur-sm rounded-full flex items-center justify-center text-5xl sm:text-6xl font-extrabold text-white shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300 flex-shrink-0 border-4 border-white"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        {profile.name.charAt(0)}
                                    </div>

                                    {/* Info Utama */}
                                    <div className="max-w-xl mx-auto">
                                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-1">
                                            {profile.name}
                                        </h2>
                                        <p className="text-lg font-semibold text-white/90 mb-6">
                                            {profile.location}
                                        </p>
                                    </div>

                                    {/* Stats Strip */}
                                    <div className="bg-black bg-opacity-20 rounded-xl p-3 shadow-inner flex justify-center flex-wrap gap-4 w-full max-w-2xl border border-white/30">
                                        <StatItem
                                            value={profile.courses}
                                            label="Kursus"
                                            icon={BookOpen}
                                            color="text-yellow-300"
                                        />
                                        <StatItem
                                            value={profile.students}
                                            label="Siswa"
                                            icon={Users}
                                            color="text-teal-300"
                                        />
                                        <StatItem
                                            value={profile.rating}
                                            label="Rating"
                                            icon={Star}
                                            color="text-amber-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BARIS KEDUA: KONTEN DETAIL (2:1 Grid) */}

                    {/* Kolom Kiri Bawah (2/3 Bagian) */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Card Bio */}
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-5 sm:p-6 transform hover:shadow-purple-200 transition duration-300">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4 border-b pb-2">
                                <BookOpen
                                    className="text-purple-600"
                                    size={24}
                                />
                                Bio Singkat
                            </h3>
                            <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
                                {profile.bio}
                            </p>
                        </div>

                        {/* Card Detail Kontak & Sosial Media - Digabungkan dan disempurnakan */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card Detail Kontak */}
                            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transform hover:shadow-blue-200 transition duration-300">
                                <div className="p-4 bg-blue-50 border-b border-blue-100">
                                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                        <Mail
                                            className="text-blue-600"
                                            size={20}
                                        />
                                        Detail Kontak
                                    </h3>
                                </div>
                                <div className="p-4 space-y-3">
                                    {contactFields.map((item) => (
                                        <DetailItem
                                            key={item.field}
                                            icon={item.icon}
                                            label={item.label}
                                            value={profile[item.field]}
                                            color={item.color}
                                            bg={item.bg}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Card Sosial Media */}
                            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transform hover:shadow-pink-200 transition duration-300">
                                <div className="p-4 bg-pink-50 border-b border-pink-100">
                                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                        <Instagram
                                            className="text-pink-600"
                                            size={20}
                                        />
                                        Sosial Media
                                    </h3>
                                </div>
                                <div className="p-4 space-y-3">
                                    {socialMediaFields.map((item) => (
                                        <DetailItem
                                            key={item.field}
                                            icon={item.icon}
                                            label={item.label}
                                            value={profile[item.field]}
                                            color={item.color}
                                            bg="bg-gray-100"
                                            isLink={true}
                                            linkUrl={item.link}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan (1/3 Bagian: Pengalaman & Pencapaian) */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Bagian Pengalaman Profesional */}
                        <ListCard
                            title="Pengalaman Profesional"
                            icon={Briefcase}
                            color="text-indigo-600"
                            items={experiences}
                        />

                        {/* Bagian Pencapaian & Penghargaan */}
                        <ListCard
                            title="Pencapaian & Penghargaan"
                            icon={Trophy}
                            color="text-amber-600"
                            items={achievements}
                        />
                    </div>
                </div>
            </div>

            {/* Modal untuk menampilkan foto profil */}
            <ProfileModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                name={profile.name}
            />
        </div>
    );
}

export default PublicProfile;
