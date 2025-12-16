import React from "react";
import { Users, Clock, Star, Sparkles, Award } from "lucide-react";

function CourseGrid({
    explore_class,
    openModal,
    getBadgeStyle,
    verifikasi,
    token,
}) {
    return (
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
                                        {course.students?.toLocaleString() ?? 0}
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
                                    {Number(course.total_price).toLocaleString(
                                        "id-ID"
                                    )}
                                </span>
                                {verifikasi?.token === token ? (
                                    <button
                                        onClick={() => openModal(course)}
                                        className="px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-xl font-black transition-all transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base"
                                    >
                                        Cek Yuk!
                                        <Award className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <a href="/student-register">
                                        <button className="px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-xl font-black transition-all transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base">
                                            Cek Yuk!
                                            <Award className="w-4 h-4" />
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseGrid;
