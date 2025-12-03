import React, { useState } from "react";
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
} from "lucide-react";

function ClassroomExplore() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const courses = [
        {
            id: 1,
            title: "Bikin Website Keren dari Nol",
            instructor: "Pak Budi",
            students: 1234,
            duration: "8 minggu",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
            price: "Rp 499.000",
            level: "Pemula",
            badge: "Populer",
        },
        {
            id: 2,
            title: "Jago Desain UI/UX ala Gen-Z",
            instructor: "Kak Siti",
            students: 856,
            duration: "6 minggu",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
            price: "Rp 599.000",
            level: "Menengah",
            badge: "Hot",
        },
        {
            id: 3,
            title: "Marketing di TikTok & Instagram",
            instructor: "Mas Ahmad",
            students: 2103,
            duration: "10 minggu",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
            price: "Rp 449.000",
            level: "Pemula",
            badge: "Trending",
        },
        {
            id: 4,
            title: "Data Science buat Anak Muda",
            instructor: "Kak Dewi",
            students: 987,
            duration: "12 minggu",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
            price: "Rp 699.000",
            level: "Lanjutan",
            badge: "Baru",
        },
        {
            id: 5,
            title: "Bisnis Online dari Kamar",
            instructor: "Bang Rudi",
            students: 1567,
            duration: "8 minggu",
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
            price: "Rp 549.000",
            level: "Pemula",
            badge: "Populer",
        },
        {
            id: 6,
            title: "React JS - Level Up Skills!",
            instructor: "Kak Andi",
            students: 2340,
            duration: "10 minggu",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
            price: "Rp 799.000",
            level: "Lanjutan",
            badge: "Hot",
        },
    ];

    const getBadgeStyle = (badge) => {
        const styles = {
            Populer: "bg-gradient-to-r from-purple-500 to-pink-500",
            Hot: "bg-gradient-to-r from-orange-500 to-red-500",
            Trending: "bg-gradient-to-r from-green-500 to-teal-500",
            Baru: "bg-gradient-to-r from-blue-500 to-cyan-500",
        };
        return styles[badge] || "bg-gray-500";
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
                        <h1 className="text-5xl font-black mb-4">
                            Yuk, Belajar Hal Seru! 🎉
                        </h1>
                        <p className="text-xl font-semibold">
                            Upgrade skill kamu bareng ribuan teman lainnya 💪
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-6 h-6" />
                        <input
                            type="text"
                            placeholder="Mau belajar apa nih? Cari yuk... 🔍"
                            className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-400 text-lg font-medium shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
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
                                    )} px-4 py-2 rounded-full text-sm font-black text-white shadow-lg flex items-center gap-1`}
                                >
                                    <Sparkles className="w-4 h-4" />
                                    {course.badge}
                                </div>
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-black text-purple-600 shadow-lg">
                                    {course.level}
                                </div>
                            </div>

                            {/* Course Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-black text-gray-900 mb-2 line-clamp-2">
                                    {course.title}
                                </h3>
                                <p className="text-gray-600 font-semibold mb-4">
                                    by {course.instructor}
                                </p>

                                {/* Stats */}
                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-5 font-bold">
                                    <div className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full">
                                        <Users className="w-4 h-4 text-blue-500" />
                                        <span>
                                            {course.students.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
                                        <Clock className="w-4 h-4 text-green-500" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span>{course.rating}</span>
                                    </div>
                                </div>

                                {/* Price and CTA */}
                                <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-gray-200">
                                    <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                                        {course.price}
                                    </span>
                                    <button className="px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-xl font-black transition-all transform hover:scale-105 flex items-center gap-2">
                                        Cek Yuk!
                                        <Award className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ClassroomExplore;
