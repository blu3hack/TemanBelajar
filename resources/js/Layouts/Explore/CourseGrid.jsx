import React from "react";
import {
    Users,
    Clock,
    Star,
    Sparkles,
    Award,
    ArrowRight,
    User,
} from "lucide-react";

function CourseGrid({
    explore_class,
    openModal,
    getBadgeStyle,
    verifikasi,
    token,
    count_student,
}) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {explore_class.map((course) => (
                    <div
                        key={course.id}
                        className="group relative perspective-1000"
                        style={{ perspective: "1000px" }}
                    >
                        <div
                            className="relative bg-gradient-to-br from-blue-50/95 via-sky-50/95 to-indigo-50/95 backdrop-blur-xl rounded-[2rem] transition-all duration-700 hover:shadow-[0_35px_70px_-15px_rgba(59,130,246,0.4)] border border-blue-200/60 flex flex-col overflow-hidden"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "translateZ(0)",
                                boxShadow:
                                    "0 8px 32px 0 rgba(59, 130, 246, 0.15)",
                            }}
                        >
                            {/* Glass Shine Effect */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{
                                    transform: "translateZ(10px)",
                                }}
                            />

                            {/* 3D Floating Orbs Background */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                                <div className="absolute bottom-10 left-10 w-24 h-24 bg-sky-300/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 delay-100" />
                            </div>

                            {/* Image Section - 3D Floating Style */}
                            <div
                                className="relative h-48 m-2 overflow-hidden rounded-[1.8rem] shadow-2xl transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.4)]"
                                style={{
                                    transform: "translateZ(20px)",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Glass Overlay Effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Hover Reveal Overlay with Glass */}
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                    {verifikasi?.token === token ? (
                                        <button
                                            onClick={() => openModal(course)}
                                            className="relative bg-white/90 backdrop-blur-sm text-gray-900 px-7 py-3 rounded-2xl font-black text-xs shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 hover:bg-blue-600 hover:text-white hover:scale-110"
                                            style={{
                                                transform: "translateZ(30px)",
                                            }}
                                        >
                                            CEK DETAIL
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    ) : (
                                        <a href="/student-register">
                                            <button
                                                className="relative bg-white/90 backdrop-blur-sm text-gray-900 px-7 py-3 rounded-2xl font-black text-xs shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-110"
                                                style={{
                                                    transform:
                                                        "translateZ(30px)",
                                                }}
                                            >
                                                DAFTAR SEKARANG
                                            </button>
                                        </a>
                                    )}
                                </div>

                                {/* Badges with Glass Effect */}
                                <div
                                    className="absolute top-3 left-3"
                                    style={{
                                        transform: "translateZ(25px)",
                                    }}
                                >
                                    <span
                                        className={`${getBadgeStyle(
                                            course.badge
                                        )} px-3 py-1.5 rounded-xl text-[10px] font-black text-white shadow-2xl uppercase tracking-wider backdrop-blur-sm`}
                                        style={{
                                            background:
                                                "rgba(255, 255, 255, 0.1)",
                                            backdropFilter: "blur(10px)",
                                        }}
                                    >
                                        {course.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section with Glass Background */}
                            <div
                                className="px-6 py-5 flex flex-col flex-grow relative"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(219, 234, 254, 0.4), rgba(224, 242, 254, 0.3))",
                                }}
                            >
                                {/* Title with 3D Effect */}
                                <h3
                                    className="text-2xl font-black text-gray-800 leading-tight mb-3 line-clamp-2 transition-all duration-300 group-hover:text-blue-600"
                                    style={{
                                        transform: "translateZ(15px)",
                                        textShadow:
                                            "0 2px 20px rgba(59, 130, 246, 0.2)",
                                    }}
                                >
                                    {course.title}
                                </h3>

                                {/* Instructor - Moved below title */}
                                <div className="flex items-center gap-2 mb-5">
                                    <div
                                        className="w-7 h-7 rounded-full bg-blue-100/80 backdrop-blur-sm flex items-center justify-center shadow-lg border border-blue-300/50"
                                        style={{
                                            transform: "translateZ(10px)",
                                        }}
                                    >
                                        <User className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <span className="text-base font-bold text-gray-700">
                                        by : Kak{" "}
                                        {course.instructor.split(" ")[0]}
                                    </span>
                                    <span
                                        className="text-sm font-black text-purple-700 bg-purple-100/80 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md border border-purple-300/50 ml-auto"
                                        style={{
                                            transform: "translateZ(10px)",
                                        }}
                                    >
                                        {course.level}
                                    </span>
                                </div>

                                {/* Stats Chips with Glass Effect */}
                                <div
                                    className="flex items-center gap-3 mb-6"
                                    style={{
                                        transform: "translateZ(12px)",
                                    }}
                                >
                                    <div className="flex items-center gap-2 bg-blue-100/70 backdrop-blur-md px-3 py-2 rounded-lg shadow-lg border border-blue-300/60">
                                        <Users className="w-5 h-5 text-blue-600" />
                                        <span className="text-sm font-bold text-gray-700">
                                            {count_student[
                                                course.classroom_id
                                            ] ?? 0}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-sky-100/70 backdrop-blur-md px-3 py-2 rounded-lg shadow-lg border border-sky-300/60">
                                        <Clock className="w-5 h-5 text-sky-600" />
                                        <span className="text-sm font-bold text-gray-700">
                                            {course.duration}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-100/80 to-orange-100/80 backdrop-blur-md px-3 py-2 rounded-lg ml-auto shadow-lg border border-yellow-400/60">
                                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                        <span className="text-sm font-black text-orange-700">
                                            {course.rating}
                                        </span>
                                    </div>
                                </div>

                                {/* Price Bottom Bar with Enhanced Glass */}
                                <div
                                    className="mt-auto pt-4 border-t border-blue-200/60 flex justify-between items-center"
                                    style={{
                                        transform: "translateZ(18px)",
                                    }}
                                >
                                    <span className="text-sm font-black text-gray-500 uppercase tracking-widest">
                                        Harga Kelas
                                    </span>
                                    <span
                                        className="text-3xl font-black bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 text-transparent bg-clip-text transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            filter: "drop-shadow(0 2px 8px rgba(59, 130, 246, 0.4))",
                                        }}
                                    >
                                        Rp
                                        {Number(
                                            course.total_price
                                        ).toLocaleString("id-ID")}
                                    </span>
                                </div>
                            </div>

                            {/* 3D Border Glow Effect */}
                            <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                <div
                                    className="absolute inset-0 rounded-[2rem]"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))",
                                        filter: "blur(20px)",
                                        transform: "translateZ(-5px)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseGrid;
