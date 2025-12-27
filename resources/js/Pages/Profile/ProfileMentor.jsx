import React, { useState } from "react";
import { usePage, useForm } from "@inertiajs/react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    BookOpen,
    Star,
    Instagram,
    Send,
    Twitter,
    Briefcase,
    Trophy,
    Users,
    Edit,
    X,
    Save,
    Camera,
} from "lucide-react";
import ProfileModal from "@/Layouts/Profile/ProfileModal";
import StatItem from "@/Layouts/Profile/StatItem";
import ListCard from "@/Layouts/Profile/ListCard";
import DetailItem from "@/Layouts/Profile/DetailItem";

function PublicProfile() {
    const { props } = usePage();
    const { profile } = props;

    // State untuk Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    // Form Hook dari Inertia
    const { data, setData, post, processing, errors, reset } = useForm({
        _method: "PUT",
        name: profile.name || "",
        email: profile.email || "",
        phone_number: profile.phone_number || "",
        address: profile.address || "",
        bio: profile.bio || "",
        instagram: profile.instagram || "",
        tiktok: profile.tiktok || "",
        twitter: profile.twitter || "",
        profile_picture: null,
    });

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        // Mengirim data ke backend. Pastikan route 'profile.update' tersedia di Laravel
        post(route("update.profile.mentor"), {
            onSuccess: () => {
                setIsUpdateModalOpen(false);
                reset("profile_picture");
            },
            forceFormData: true,
        });
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
            field: "phone_number",
            color: "text-green-600",
            bg: "bg-green-50",
        },
        {
            icon: MapPin,
            label: "Lokasi",
            field: "address",
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
            link: profile.instagram
                ? `https://instagram.com/${profile.instagram.replace("@", "")}`
                : "#",
        },
        {
            icon: Send,
            label: "TikTok",
            field: "tiktok",
            color: "text-gray-900",
            link: profile.tiktok
                ? `https://www.tiktok.com/${profile.tiktok}`
                : "#",
        },
        {
            icon: Twitter,
            label: "X (Twitter)",
            field: "twitter",
            color: "text-black",
            link: profile.twitter
                ? `https://x.com/${profile.twitter.replace("@", "")}`
                : "#",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-3">
                        <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-95"></div>

                            <div className="relative p-6 sm:p-10 text-white">
                                <div className="flex flex-col items-center text-center gap-6">
                                    <div
                                        className="relative w-32 h-32 sm:w-40 sm:h-40 bg-white bg-opacity-30 backdrop-blur-sm rounded-full flex items-center justify-center text-5xl sm:text-6xl font-extrabold text-white shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300 flex-shrink-0 border-4 border-white"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        <img
                                            src={`/Assets/Images/ProfilePictures/${profile.profile_picture}`}
                                            alt="Profile"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>

                                    <div className="max-w-xl mx-auto">
                                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-1">
                                            {profile.name}
                                        </h2>
                                        <p className="text-lg font-semibold text-white/90 mb-6">
                                            {profile.address}
                                        </p>
                                        <button
                                            onClick={() =>
                                                setIsUpdateModalOpen(true)
                                            }
                                            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
                                        >
                                            <Edit size={18} />
                                            <span>Edit Profile</span>
                                        </button>
                                    </div>

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

                    <div className="lg:col-span-2 space-y-6">
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                    <div className="lg:col-span-1 space-y-6">
                        <ListCard
                            title="Pengalaman Profesional"
                            icon={Briefcase}
                            color="text-indigo-600"
                            items={experiences}
                        />
                        <ListCard
                            title="Pencapaian"
                            icon={Trophy}
                            color="text-yellow-600"
                            items={achievements}
                        />
                    </div>
                </div>
            </div>

            {/* Modal Foto Profil (Zoom) */}
            <ProfileModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                profile_picture={profile.profile_picture}
            />

            {/* MODAL UPDATE PROFILE (Inline) */}
            {isUpdateModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
                        <div className="flex items-center justify-between p-6 border-b">
                            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <Edit className="text-indigo-600" /> Perbarui
                                Profil
                            </h2>
                            <button
                                onClick={() => setIsUpdateModalOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X size={24} className="text-gray-500" />
                            </button>
                        </div>

                        <form
                            onSubmit={handleUpdateSubmit}
                            className="overflow-y-auto p-6 space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Nama */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="border-2 rounded-xl p-3 focus:border-indigo-500 focus:ring-0 outline-none transition-all"
                                        placeholder="Nama Lengkap"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Nomor Telepon */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700">
                                        Nomor Telepon
                                    </label>
                                    <input
                                        type="text"
                                        value={data.phone_number}
                                        onChange={(e) =>
                                            setData(
                                                "phone_number",
                                                e.target.value
                                            )
                                        }
                                        className="border-2 rounded-xl p-3 focus:border-indigo-500 focus:ring-0 outline-none transition-all"
                                        placeholder="0812..."
                                    />
                                    {errors.phone_number && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.phone_number}
                                        </p>
                                    )}
                                </div>

                                {/* Foto Profil */}
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-sm font-bold text-gray-700">
                                        Ganti Foto Profil
                                    </label>
                                    <div className="flex items-center gap-4 border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-indigo-400 transition-colors">
                                        <Camera className="text-gray-400" />
                                        <input
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "profile_picture",
                                                    e.target.files[0]
                                                )
                                            }
                                            className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
                                        />
                                    </div>
                                    {errors.profile_picture && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.profile_picture}
                                        </p>
                                    )}
                                </div>

                                {/* Alamat */}
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-sm font-bold text-gray-700">
                                        Alamat / Lokasi
                                    </label>
                                    <input
                                        type="text"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData("address", e.target.value)
                                        }
                                        className="border-2 rounded-xl p-3 focus:border-indigo-500 focus:ring-0 outline-none transition-all"
                                        placeholder="Kota, Provinsi"
                                    />
                                </div>

                                {/* Bio */}
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-sm font-bold text-gray-700">
                                        Bio Singkat
                                    </label>
                                    <textarea
                                        rows="4"
                                        value={data.bio}
                                        onChange={(e) =>
                                            setData("bio", e.target.value)
                                        }
                                        className="border-2 rounded-xl p-3 focus:border-indigo-500 focus:ring-0 outline-none transition-all resize-none"
                                        placeholder="Tuliskan pengalaman atau keahlianmu..."
                                    />
                                </div>

                                {/* Media Sosial */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700">
                                        Instagram Username
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-3.5 text-gray-400 text-sm">
                                            @
                                        </span>
                                        <input
                                            type="text"
                                            value={data.instagram}
                                            onChange={(e) =>
                                                setData(
                                                    "instagram",
                                                    e.target.value
                                                )
                                            }
                                            className="border-2 rounded-xl p-3 pl-8 w-full focus:border-indigo-500 focus:ring-0 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700">
                                        TikTok Username
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-3.5 text-gray-400 text-sm">
                                            @
                                        </span>
                                        <input
                                            type="text"
                                            value={data.tiktok}
                                            onChange={(e) =>
                                                setData(
                                                    "tiktok",
                                                    e.target.value
                                                )
                                            }
                                            className="border-2 rounded-xl p-3 pl-8 w-full focus:border-indigo-500 focus:ring-0 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-3.5 text-gray-400 text-sm">
                                            @
                                        </span>
                                        <input
                                            type="text"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            className="border-2 rounded-xl p-3 pl-8 w-full focus:border-indigo-500 focus:ring-0 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700">
                                        Twitter
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-3.5 text-gray-400 text-sm">
                                            @
                                        </span>
                                        <input
                                            type="text"
                                            value={data.twitter}
                                            onChange={(e) =>
                                                setData(
                                                    "twitter",
                                                    e.target.value
                                                )
                                            }
                                            className="border-2 rounded-xl p-3 pl-8 w-full focus:border-indigo-500 focus:ring-0 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-6 border-t mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsUpdateModalOpen(false)}
                                    className="px-6 py-2.5 text-gray-600 font-semibold hover:bg-gray-100 rounded-xl transition"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-indigo-600 text-white px-8 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition flex items-center gap-2 disabled:opacity-50 shadow-lg shadow-indigo-200"
                                >
                                    {processing ? (
                                        <span className="flex items-center gap-2">
                                            <svg
                                                className="animate-spin h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Menyimpan...
                                        </span>
                                    ) : (
                                        <>
                                            <Save size={18} /> Simpan Perubahan
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PublicProfile;
