import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    BookOpen,
    Award,
    Edit2,
    Save,
    X,
    Camera,
    Star,
    Instagram,
    Send, // Digunakan untuk TikTok/Social Media
    Twitter, // Digunakan untuk X/Twitter
    Briefcase, // Digunakan untuk Pengalaman
    Trophy, // Digunakan untuk Pencapaian
    Clock, // Digunakan untuk Jam Mengajar
} from "lucide-react";

function Pengaturan() {
    const { props } = usePage();
    const [isEditing, setIsEditing] = useState({});

    const {
        auth: { user },
    } = props;
    const [profile, setProfile] = useState({
        name: "Ahmad Setiawan",
        email: "ahmad.setiawan@email.com",
        phone: "+62 812-3456-7890",
        location: "Surabaya, Indonesia",
        bio: "Pengajar professional dengan pengalaman 5 tahun di bidang pengembangan web dan desain UI/UX. Saya berkomitmen untuk memberikan materi berkualitas tinggi dan mudah dipahami.",
        courses: 12,
        students: 450,
        rating: 4.8,
        reviews: 156,
        // Bidang Sosial Media Baru
        instagram: "@ahmad_dev",
        tiktok: "@ahmadsetiawan.tech",
        twitter: "@AhmadSetiaDev",
        // Bidang Pencapaian Baru
        totalHours: 5200, // Total jam mengajar
    });

    // Data statis untuk Pengalaman dan Pencapaian yang bisa Anda edit
    const [experiences, setExperiences] = useState([
        "Senior Web Developer, TechSolutions (2018 - 2023)",
        "Freelance UI/UX Designer, Proyek Mandiri (2023 - Sekarang)",
        "Asisten Dosen Mata Kuliah Algoritma (2016 - 2017)",
    ]);

    const [achievements, setAchievements] = useState([
        "Penghargaan 'Instruktur Terbaik' 2024",
        "Top 10 Kontributor di forum komunitas developer",
        "Sertifikasi Google Professional Web Developer",
    ]);

    const toggleEdit = (field) => {
        setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const handleChange = (field, value) => {
        setProfile((prev) => ({ ...prev, [field]: value }));
    };

    const profileFields = [
        {
            icon: User,
            label: "Nama Lengkap",
            field: "name",
            color: "text-indigo-600",
            bg: "bg-indigo-50",
            type: "text",
        },
        {
            icon: Mail,
            label: "Email",
            field: "email",
            color: "text-blue-600",
            bg: "bg-blue-50",
            type: "email",
        },
        {
            icon: Phone,
            label: "Nomor Telepon",
            field: "phone",
            color: "text-green-600",
            bg: "bg-green-50",
            type: "tel",
        },
        {
            icon: MapPin,
            label: "Lokasi",
            field: "location",
            color: "text-red-600",
            bg: "bg-red-50",
            type: "text",
        },
        // Social Media Fields
        {
            icon: Instagram,
            label: "Instagram",
            field: "instagram",
            color: "text-pink-600",
            bg: "bg-pink-50",
            type: "text",
        },
        {
            icon: Send, // Menggunakan Send Lucide sebagai representasi TikTok
            label: "TikTok",
            field: "tiktok",
            color: "text-gray-900", // Warna gelap untuk TikTok
            bg: "bg-gray-200",
            type: "text",
        },
        {
            icon: Twitter,
            label: "X (Twitter)",
            field: "twitter",
            color: "text-black",
            bg: "bg-gray-100",
            type: "text",
        },
    ];

    const StatItem = ({ value, label, icon: Icon, color }) => (
        <div className="text-center p-3 sm:p-4 bg-white bg-opacity-20 rounded-xl flex-1 min-w-0">
            <Icon className={`mx-auto mb-1 ${color}`} size={24} />
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-white text-opacity-80 text-sm">{label}</div>
        </div>
    );

    const ProfileDetailItem = ({ item }) => {
        const Icon = item.icon;
        const isEditingField = isEditing[item.field];
        return (
            <div
                key={item.field}
                className="p-4 sm:p-5 hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div
                        className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                        <Icon className={item.color} size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 mb-1">
                            {item.label}
                        </p>
                        {isEditingField ? (
                            <input
                                type={item.type}
                                value={profile[item.field]}
                                onChange={(e) =>
                                    handleChange(item.field, e.target.value)
                                }
                                className="w-full p-2 border border-indigo-200 rounded-lg focus:border-indigo-500 focus:outline-none font-semibold text-sm"
                            />
                        ) : (
                            <p className="text-gray-900 font-semibold truncate text-sm sm:text-base">
                                {profile[item.field]}
                            </p>
                        )}
                    </div>
                    <button
                        onClick={() => toggleEdit(item.field)}
                        className={`flex-shrink-0 p-2 rounded-lg transition-all ${
                            isEditingField
                                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                        {isEditingField ? (
                            <Save size={18} />
                        ) : (
                            <Edit2 size={18} />
                        )}
                    </button>
                </div>
            </div>
        );
    };

    const ListCard = ({
        title,
        icon: Icon,
        color,
        items,
        field,
        isEditingList,
        toggleEditList,
    }) => (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div
                className={`p-4 sm:p-6 flex items-center justify-between border-b border-gray-100`}
            >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Icon className={color} size={24} />
                    {title}
                </h3>
                <button
                    onClick={() => toggleEditList(field)}
                    className="text-indigo-600 hover:text-indigo-700 p-2 rounded-lg transition-colors flex-shrink-0"
                >
                    {isEditingList ? (
                        <X size={20} className="text-red-500" />
                    ) : (
                        <Edit2 size={20} />
                    )}
                </button>
            </div>
            <ul className="divide-y divide-gray-100 p-4 sm:p-6 space-y-3">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 pt-3">
                            <span className="text-green-500 mt-0.5">
                                <Star size={16} fill="currentColor" />
                            </span>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                {item}
                            </p>
                        </li>
                    ))
                ) : (
                    <li className="text-gray-500 italic text-sm pt-3">
                        Belum ada data yang ditambahkan.
                    </li>
                )}
            </ul>
        </div>
    );

    // *Karena pengalaman dan pencapaian adalah array, kita harus menambahkan state edit terpisah.*
    const toggleListEdit = (listField) => {
        // Logika sederhana: untuk demo, kita hanya mengaktifkan/menonaktifkan mode edit secara global untuk list tersebut
        alert(
            "Fungsi pengeditan daftar perlu diimplementasikan secara terpisah (CRUD sederhana untuk array). Menonaktifkan mode edit untuk saat ini."
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 border-b pb-3 border-indigo-200">
                    <Award
                        className="inline-block mr-2 text-indigo-600"
                        size={28}
                    />
                    Pengaturan Profil
                </h2>

                {/* Bagian Profil Utama (Gradient Card) */}
                <div className="mb-6">
                    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="relative group">
                                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl sm:rounded-3xl flex items-center justify-center text-4xl sm:text-5xl font-bold shadow-lg">
                                    {profile.name.charAt(0)}
                                </div>
                                <button className="absolute bottom-0 right-0 bg-white text-indigo-600 p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Camera size={18} />
                                </button>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl sm:text-3xl font-bold mb-1">
                                    {profile.name}
                                </h3>
                                <p className="text-white text-opacity-90 text-sm sm:text-base max-w-2xl mx-auto">
                                    {profile.location}
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center w-full gap-3 sm:gap-4 mt-4">
                                <StatItem
                                    value={profile.courses}
                                    label="Kursus"
                                    icon={BookOpen}
                                    color="text-yellow-300"
                                />
                                <StatItem
                                    value={profile.students}
                                    label="Siswa"
                                    icon={User}
                                    color="text-teal-300"
                                />
                                <StatItem
                                    value={profile.totalHours.toLocaleString()} // Format angka
                                    label="Jam Mengajar"
                                    icon={Clock}
                                    color="text-red-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tata Letak Utama - 2 Kolom di Desktop, 1 Kolom di Mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Kolom Kiri: Bio & Detail Kontak */}
                    <div className="space-y-6">
                        {/* Bagian Bio */}
                        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <BookOpen
                                        className="text-purple-600"
                                        size={24}
                                    />
                                    Bio
                                </h3>
                                <button
                                    onClick={() => toggleEdit("bio")}
                                    className="text-indigo-600 hover:text-indigo-700 p-2 rounded-lg transition-colors flex-shrink-0"
                                >
                                    {isEditing.bio ? (
                                        <X size={20} className="text-red-500" />
                                    ) : (
                                        <Edit2 size={20} />
                                    )}
                                </button>
                            </div>
                            {isEditing.bio ? (
                                <div className="space-y-3">
                                    <textarea
                                        value={profile.bio}
                                        onChange={(e) =>
                                            handleChange("bio", e.target.value)
                                        }
                                        className="w-full p-3 sm:p-4 border-2 border-indigo-200 rounded-xl focus:border-indigo-500 focus:outline-none resize-none text-sm"
                                        rows="3"
                                    />
                                    <button
                                        onClick={() => toggleEdit("bio")}
                                        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-indigo-700 transition-colors font-semibold text-sm"
                                    >
                                        <Save size={18} />
                                        Simpan Bio
                                    </button>
                                </div>
                            ) : (
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                                    {profile.bio}
                                </p>
                            )}
                        </div>

                        {/* Bagian Informasi Profil & Sosial Media */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                                    <Mail size={24} />
                                    Detail Kontak & Sosial Media
                                </h3>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {profileFields.map((item) => (
                                    <ProfileDetailItem
                                        key={item.field}
                                        item={item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Pengalaman & Pencapaian */}
                    <div className="space-y-6">
                        {/* Bagian Pengalaman Profesional */}
                        <ListCard
                            title="Pengalaman Profesional"
                            icon={Briefcase}
                            color="text-blue-600"
                            items={experiences}
                            field="experiences"
                            isEditingList={isEditing.experiencesList}
                            toggleEditList={toggleListEdit}
                        />

                        {/* Bagian Pencapaian & Penghargaan */}
                        <ListCard
                            title="Pencapaian & Penghargaan"
                            icon={Trophy}
                            color="text-amber-600"
                            items={achievements}
                            field="achievements"
                            isEditingList={isEditing.achievementsList}
                            toggleEditList={toggleListEdit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pengaturan;
