import React from "react";
import { MapPin, Phone, Mail, Briefcase, Award } from "lucide-react";

function About({ phone, email, location, achievements }) {
    return (
        <div className="space-y-4">
            {/* About */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Briefcase className="text-blue-600" size={24} /> Tentang
                    Saya
                </h3>

                <div className="space-y-3">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4">
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Saya seorang guru Sains dan Matematika yang
                            berdedikasi. Fokus saya adalah menciptakan
                            lingkungan belajar yang{" "}
                            <strong>efektif dan terstruktur</strong>, memastikan
                            setiap murid tidak hanya menghafal, tetapi
                            benar-benar <strong>memahami konsep dasar</strong>{" "}
                            untuk kesuksesan jangka panjang.
                        </p>
                    </div>

                    <div className="bg-indigo-50 rounded-xl p-4 border-l-4 border-indigo-500">
                        <p className="text-xs sm:text-sm text-indigo-600 font-semibold mb-1">
                            Fokus Pengajaran:
                        </p>
                        <p className="text-gray-800 text-sm sm:text-base">
                            Analisis masalah, penalaran logis, dan persiapan
                            ujian masuk universitas.
                        </p>
                    </div>

                    <div className="bg-sky-50 rounded-xl p-4 border-l-4 border-sky-500">
                        <p className="text-xs sm:text-sm text-sky-600 font-semibold mb-1">
                            Pengalaman:
                        </p>
                        <p className="text-gray-800 text-sm sm:text-base">
                            Mengajar secara profesional selama 8 tahun.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Phone className="text-blue-600" size={24} /> Kontak
                </h3>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                        <Phone
                            className="text-blue-600 flex-shrink-0"
                            size={20}
                        />
                        <div className="min-w-0">
                            <p className="text-xs text-gray-600">
                                Telepon / WhatsApp
                            </p>
                            <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                                {phone}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-xl">
                        <Mail
                            className="text-sky-600 flex-shrink-0"
                            size={20}
                        />
                        <div className="min-w-0">
                            <p className="text-xs text-gray-600">Email</p>
                            <p className="font-semibold text-gray-900 text-sm truncate">
                                {email}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl">
                        <MapPin
                            className="text-indigo-600 flex-shrink-0"
                            size={20}
                        />
                        <div className="min-w-0">
                            <p className="text-xs text-gray-600">Lokasi</p>
                            <p className="font-semibold text-gray-900 text-sm sm:text-base">
                                {location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="text-blue-600" size={24} /> Pencapaian
                </h3>

                <div className="grid grid-cols-2 gap-3">
                    {achievements.map((achievement, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center border-2 border-yellow-300"
                        >
                            <div className="mb-2">{achievement.icon}</div>

                            <p className="font-bold text-gray-900 text-sm sm:text-base">
                                {achievement.title}
                            </p>

                            <p className="text-xs sm:text-sm text-gray-600">
                                {achievement.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
