import React from "react";
import {
    BookOpen,
    Users,
    Clock,
    Star,
    X,
    Sparkles,
    Award,
    FileText,
    Trophy,
} from "lucide-react";

function OpenModal({
    selectedCourse,
    router,
    user,
    closeModal,
    getBadgeStyle,
    explore_class,
}) {
    return (
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
                            Pertemuan
                        </p>
                        <p className="text-lg font-black text-gray-900">
                            {selectedCourse.total_meet}
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
                            {/* {selectedCourse.rating} */}
                            4.8
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
                        Kelas ini dirancang khusus untuk kamu yang ingin
                        menguasai {selectedCourse.title}. Dengan metode
                        pembelajaran interaktif dan praktis, kamu akan dibimbing
                        step-by-step oleh {selectedCourse.instructor} yang
                        berpengalaman. Cocok untuk level {selectedCourse.level}
                        dan sudah dipercaya oleh{" "}
                        {selectedCourse.students?.toLocaleString() ?? 0} siswa!
                        🚀
                    </p>
                </div>

                {/* Price and CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t-2 border-dashed border-gray-200">
                    <div>
                        <p className="text-sm text-gray-600 font-semibold">
                            Harga Kelas
                        </p>
                        <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                            Rp.{" "}
                            {Number(selectedCourse.total_price).toLocaleString(
                                "id-ID"
                            )}
                        </span>
                    </div>
                    <button
                        onClick={() =>
                            router.post("/checkout", {
                                classroom_id: selectedCourse.classroom_id,
                                amount: selectedCourse.total_price,
                                title: selectedCourse.title,
                                instructor: selectedCourse.instructor,
                                token_mentor: selectedCourse.token,
                                token_student: user.token,
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
    );
}

export default OpenModal;
