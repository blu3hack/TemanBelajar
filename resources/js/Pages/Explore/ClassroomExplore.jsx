import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import {
    Search,
    BookOpen,
    Users,
    Clock,
    Star,
    Menu,
    X,
    Sparkles,
    Award,
    PlayCircle,
    FileText,
    Trophy,
} from "lucide-react";

function ClassroomExplore() {
    const { explore_class } = usePage().props;
    const user = usePage().props.auth.user;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getBadgeStyle = (badge) => {
        const styles = {
            Populer: "bg-gradient-to-r from-purple-500 to-pink-500",
            Hot: "bg-gradient-to-r from-orange-500 to-red-500",
            Trending: "bg-gradient-to-r from-green-500 to-teal-500",
            Baru: "bg-gradient-to-r from-blue-500 to-cyan-500",
        };
        return styles[badge] || "bg-gray-500";
    };

    const openModal = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
        document.body.style.overflow = "unset";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            {/* Navbar */}
            <nav className="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                                LearnHub
                            </span>
                            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                            Yuk, Belajar Hal Seru! 🎉
                        </h1>
                        <p className="text-lg sm:text-xl font-semibold">
                            Upgrade skill kamu bareng ribuan teman lainnya 💪
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5 sm:w-6 sm:h-6" />
                        <input
                            type="text"
                            placeholder="Mau belajar apa nih? Cari yuk... 🔍"
                            className="w-full pl-12 sm:pl-14 pr-4 py-3 sm:py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-400 text-base sm:text-lg font-medium shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {explore_class.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Course Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                                <div
                                    className={`absolute top-4 left-4 ${getBadgeStyle(
                                        course.badge
                                    )} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-black text-white shadow-lg flex items-center gap-1`}
                                >
                                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                                    {course.badge}
                                </div>
                                <div className="absolute top-4 right-4 bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-black text-purple-600 shadow-lg">
                                    {course.level}
                                </div>
                            </div>

                            {/* Course Info */}
                            <div className="p-5 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2 line-clamp-2">
                                    {course.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 font-semibold mb-4">
                                    by {course.instructor}
                                </p>

                                {/* Stats */}
                                <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-5 font-bold flex-wrap">
                                    <div className="flex items-center gap-1 bg-blue-50 px-2 sm:px-3 py-1 rounded-full">
                                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                                        <span>
                                            {course.students?.toLocaleString() ??
                                                0}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-green-50 px-2 sm:px-3 py-1 rounded-full">
                                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-yellow-50 px-2 sm:px-3 py-1 rounded-full">
                                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                                        <span>{course.rating}</span>
                                    </div>
                                </div>

                                {/* Price and CTA */}
                                <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-gray-200">
                                    <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                                        Rp.{" "}
                                        {Number(
                                            course.total_price
                                        ).toLocaleString("id-ID")}
                                    </span>
                                    <button
                                        onClick={() => openModal(course)}
                                        className="px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-xl font-black transition-all transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base"
                                    >
                                        Cek Yuk!
                                        <Award className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedCourse && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header with Image */}
                        <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-3xl">
                            <img
                                src={selectedCourse.image}
                                alt={selectedCourse.title}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                            </button>
                            <div
                                className={`absolute top-4 left-4 ${getBadgeStyle(
                                    selectedCourse.badge
                                )} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-black text-white shadow-lg flex items-center gap-1`}
                            >
                                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                                {selectedCourse.badge}
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 sm:p-8">
                            {/* Title and Instructor */}
                            <div className="mb-6">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
                                    {selectedCourse.title}
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 font-semibold flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-purple-600" />
                                    by {selectedCourse.instructor}
                                </p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                                <div className="bg-blue-50 rounded-xl p-4 text-center">
                                    <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                                    <p className="text-xs text-gray-600 font-semibold">
                                        Siswa
                                    </p>
                                    <p className="text-lg font-black text-gray-900">
                                        {selectedCourse.students?.toLocaleString() ??
                                            0}
                                    </p>
                                </div>
                                <div className="bg-green-50 rounded-xl p-4 text-center">
                                    <Clock className="w-6 h-6 text-green-500 mx-auto mb-2" />
                                    <p className="text-xs text-gray-600 font-semibold">
                                        Durasi
                                    </p>
                                    <p className="text-lg font-black text-gray-900">
                                        {selectedCourse.duration}
                                    </p>
                                </div>
                                <div className="bg-yellow-50 rounded-xl p-4 text-center">
                                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 mx-auto mb-2" />
                                    <p className="text-xs text-gray-600 font-semibold">
                                        Rating
                                    </p>
                                    <p className="text-lg font-black text-gray-900">
                                        {selectedCourse.rating}
                                    </p>
                                </div>
                                <div className="bg-purple-50 rounded-xl p-4 text-center">
                                    <Trophy className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                                    <p className="text-xs text-gray-600 font-semibold">
                                        Level
                                    </p>
                                    <p className="text-lg font-black text-gray-900">
                                        {selectedCourse.level}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-purple-600" />
                                    Deskripsi Kelas
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Kelas ini dirancang khusus untuk kamu yang
                                    ingin menguasai {selectedCourse.title}.
                                    Dengan metode pembelajaran interaktif dan
                                    praktis, kamu akan dibimbing step-by-step
                                    oleh {selectedCourse.instructor} yang
                                    berpengalaman. Cocok untuk level{" "}
                                    {selectedCourse.level}
                                    dan sudah dipercaya oleh{" "}
                                    {selectedCourse.students?.toLocaleString() ??
                                        0}{" "}
                                    siswa! 🚀
                                </p>
                            </div>

                            {/* What You'll Learn */}
                            <div className="mb-6">
                                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                                    <PlayCircle className="w-5 h-5 text-purple-600" />
                                    Yang Akan Kamu Pelajari
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                                        <span className="text-green-500 font-black mt-1">
                                            ✓
                                        </span>
                                        <span>
                                            Dasar-dasar fundamental hingga
                                            advanced
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                                        <span className="text-green-500 font-black mt-1">
                                            ✓
                                        </span>
                                        <span>
                                            Praktik langsung dengan project
                                            nyata
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                                        <span className="text-green-500 font-black mt-1">
                                            ✓
                                        </span>
                                        <span>
                                            Tips & trik dari expert di bidangnya
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                                        <span className="text-green-500 font-black mt-1">
                                            ✓
                                        </span>
                                        <span>
                                            Sertifikat setelah menyelesaikan
                                            kelas
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Price and CTA */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t-2 border-dashed border-gray-200">
                                <div>
                                    <p className="text-sm text-gray-600 font-semibold">
                                        Harga Kelas
                                    </p>
                                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                                        Rp.{" "}
                                        {Number(
                                            selectedCourse.total_price
                                        ).toLocaleString("id-ID")}
                                    </span>
                                </div>
                                <button
                                    onClick={() =>
                                        router.post("/checkout", {
                                            classroom_id:
                                                selectedCourse.classroom_id,
                                            amount: selectedCourse.total_price,
                                            title: selectedCourse.title,
                                            instructor:
                                                selectedCourse.instructor,
                                            token: user.token,
                                            name: user.name,
                                            no_wa: user.no_wa,
                                        })
                                    }
                                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-xl font-black transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-base sm:text-lg"
                                >
                                    Daftar Sekarang!
                                    <Award className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default ClassroomExplore;
