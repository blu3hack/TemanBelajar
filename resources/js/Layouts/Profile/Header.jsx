import React from "react";
import {
    Star,
    MapPin,
    Phone,
    Mail,
    Heart,
    BookOpen,
    Users,
    MessageCircle,
    Clock,
    TrendingUp,
    Briefcase, // Ganti dari Coffee (Kopi) menjadi Briefcase (Profesional)
    Award, // Dipertahankan
    CheckCircle, // Ganti dari emoji ✅
    Lightbulb, // Ganti dari emoji 💡
} from "lucide-react";

function Header({
    name,
    role,
    motto,
    rating,
    reviews,
    studentsLove,
    totalLessons,
    totalStudents,
}) {
    return (
        <div className="bg-white rounded-b-3xl shadow-xl overflow-hidden mb-4">
            {/* Cover */}
            <div className="h-32 sm:h-40 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 relative">
                <div className="absolute inset-0 opacity-20">
                    {/* Aksen visual tetap dipertahankan dengan emoji yang lebih minimalis */}
                    <div className="absolute top-4 left-10 text-3xl sm:text-4xl">
                        📘
                    </div>
                    <div className="absolute top-8 right-10 sm:right-20 text-2xl sm:text-3xl">
                        💡
                    </div>
                    <div className="absolute bottom-6 left-1/3 text-3xl sm:text-4xl">
                        👨‍🏫
                    </div>
                </div>
            </div>

            {/* Profile Info */}
            <div className="px-4 sm:px-6 pb-6">
                <div className="flex flex-col items-center -mt-16 sm:-mt-20">
                    {/* Avatar */}
                    <div className="relative mb-4">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-4xl sm:text-5xl shadow-2xl border-4 border-white text-white font-bold">
                            AR
                        </div>
                        <div className="absolute bottom-0 right-0 bg-green-500 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-4 border-white flex items-center justify-center">
                            <Clock size={16} className="text-white" />
                        </div>
                    </div>

                    {/* Name */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-1">
                        {name}
                    </h1>
                    <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-2 text-center">
                        {role}
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base italic mb-4 text-center px-4">
                        "{motto}"
                    </p>

                    {/* Rating & Love */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                        <div className="flex items-center gap-1 bg-yellow-100 px-3 sm:px-4 py-2 rounded-full">
                            <Star
                                size={16}
                                fill="#FCD34D"
                                className="text-yellow-500"
                            />
                            <span className="font-bold text-gray-900 text-sm sm:text-base">
                                {rating}
                            </span>
                            <span className="text-gray-600 text-xs sm:text-sm">
                                ({reviews} Ulasan)
                            </span>
                        </div>
                        <div className="flex items-center gap-2 bg-red-100 px-3 sm:px-4 py-2 rounded-full">
                            <Heart
                                size={16}
                                fill="#EF4444"
                                className="text-red-500"
                            />
                            <span className="font-bold text-gray-900 text-sm sm:text-base">
                                {studentsLove}
                            </span>
                            <span className="text-gray-600 text-xs sm:text-sm">
                                murid suka
                            </span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 w-full max-w-md">
                        <div className="text-center p-3 bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl border-2 border-blue-300">
                            <BookOpen
                                className="mx-auto text-blue-600 mb-1"
                                size={20}
                            />
                            <p className="text-lg sm:text-xl font-bold text-gray-900">
                                {totalLessons}+
                            </p>
                            <p className="text-xs text-gray-600">
                                Sesi Mengajar
                            </p>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl border-2 border-indigo-300">
                            <Users
                                className="mx-auto text-indigo-600 mb-1"
                                size={20}
                            />
                            <p className="text-lg sm:text-xl font-bold text-gray-900">
                                {totalStudents}
                            </p>
                            <p className="text-xs text-gray-600">Total Murid</p>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl border-2 border-green-300">
                            <TrendingUp
                                className="mx-auto text-green-600 mb-1"
                                size={20}
                            />
                            <p className="text-lg sm:text-xl font-bold text-gray-900">
                                95%
                            </p>
                            <p className="text-xs text-gray-600">
                                Tingkat Sukses
                            </p>
                        </div>
                    </div>

                    {/* Contact Button */}
                    <button className="mt-4 w-full max-w-xs bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all flex items-center justify-center gap-2">
                        <MessageCircle size={18} />
                        Hubungi Guru
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
