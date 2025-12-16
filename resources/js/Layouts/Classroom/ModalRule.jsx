import React from "react";
import { Check, Sparkles } from "lucide-react";

function ModalRule({ selectedCard, setSelectedCard, classTypes }) {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 sm:p-4 z-50 animate-fadeIn"
            onClick={() => setSelectedCard(null)}
        >
            <div
                className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {classTypes
                    .filter((ct) => ct.id === selectedCard)
                    .map((classType) => {
                        const Icon = classType.icon;
                        return (
                            <div key={classType.id}>
                                {/* Modal Header */}
                                <div
                                    className={`bg-gradient-to-br ${classType.color} p-5 sm:p-6 md:p-8 text-white relative overflow-hidden`}
                                >
                                    <div className="absolute top-0 right-0 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 bg-white opacity-10 rounded-full -mr-16 sm:-mr-18 md:-mr-20 -mt-16 sm:-mt-18 md:-mt-20"></div>
                                    <div className="absolute bottom-0 left-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-white opacity-10 rounded-full -ml-12 sm:-ml-14 md:-ml-16 -mb-12 sm:-mb-14 md:-mb-16"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                                            <div className="flex items-center gap-3 sm:gap-4 flex-1">
                                                <div className="bg-white bg-opacity-20 p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl backdrop-blur-sm flex-shrink-0">
                                                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                                                        Kriteria{" "}
                                                        {classType.title}
                                                    </h2>
                                                    <p className="text-white text-opacity-95 text-xs sm:text-sm md:text-base">
                                                        {classType.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    setSelectedCard(null)
                                                }
                                                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1.5 sm:p-2 transition-all backdrop-blur-sm flex-shrink-0"
                                            >
                                                <svg
                                                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Body */}
                                <div className="p-4 sm:p-6 md:p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-green-100">
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-5 flex items-center gap-2">
                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-500 flex items-center justify-center">
                                                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                                </div>
                                                <span className="text-sm sm:text-base md:text-xl">
                                                    Persyaratan
                                                </span>
                                            </h3>
                                            <ul className="space-y-2.5 sm:space-y-3">
                                                {classType.criteria
                                                    .slice(0, 2)
                                                    .map((criterion, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-2.5 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                                        >
                                                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                                            </div>
                                                            <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                                                                {criterion}
                                                            </span>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-blue-100">
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-5 flex items-center gap-2">
                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                                                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                                </div>
                                                <span className="text-sm sm:text-base md:text-xl">
                                                    Fasilitas
                                                </span>
                                            </h3>
                                            <ul className="space-y-2.5 sm:space-y-3">
                                                {classType.criteria
                                                    .slice(2)
                                                    .map((criterion, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-2.5 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                                        >
                                                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                                            </div>
                                                            <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                                                                {criterion}
                                                            </span>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Enhanced Info Banner */}
                                    <div
                                        className={`mt-5 sm:mt-6 md:mt-8 bg-gradient-to-r ${classType.color} bg-opacity-10 border-l-4 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-inner`}
                                        style={{
                                            borderLeftColor: "currentColor",
                                        }}
                                    >
                                        <div className="flex gap-2.5 sm:gap-3">
                                            <Sparkles
                                                className={`w-5 h-5 sm:w-6 sm:h-6 ${classType.accentColor} flex-shrink-0 mt-0.5 sm:mt-1 text-white`}
                                            />
                                            <div>
                                                <p className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                                                    Catatan Penting
                                                </p>
                                                <p className="text-white leading-relaxed text-xs sm:text-sm md:text-base">
                                                    Semua instruktur wajib
                                                    melalui proses verifikasi
                                                    dan pelatihan platform
                                                    sebelum dapat membuka kelas.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="mt-5 sm:mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                                        <a
                                            href={`/${classType.title}-classroom`}
                                            className={`flex-1 bg-gradient-to-r ${classType.color} text-white py-3 sm:py-3.5 px-6 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 group text-sm sm:text-base`}
                                        >
                                            <span>Buat {classType.title}</span>
                                            <svg
                                                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            href="/class/guidelines"
                                            className={`flex-1 bg-white border-2 ${classType.borderColor} ${classType.accentColor} py-3 sm:py-3.5 px-6 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 group text-sm sm:text-base`}
                                        >
                                            <span>Lihat Panduan</span>
                                            <svg
                                                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default ModalRule;
