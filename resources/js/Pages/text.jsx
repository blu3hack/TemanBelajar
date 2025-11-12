import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <>
            <Head title="Pendaftaran" />

            <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-4 sm:p-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-12">
                        <div className="inline-block mb-4">
                            <span className="text-5xl sm:text-6xl">🎓</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                            Yuk, Gabung Bersama Kami!
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600">
                            Pilih peranmu dan mulai petualangan belajarmu 🚀
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {/* Card Kiri - Tentor */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
                            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 p-6 sm:p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 text-8xl opacity-10">
                                    👨‍🏫
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold mb-2 relative z-10">
                                    Jadi Tentor Keren! 👨‍🏫
                                </h2>
                                <p className="text-blue-100 relative z-10">
                                    Berbagi ilmu sambil dapat cuan!
                                </p>
                            </div>

                            <div className="p-5 sm:p-8 space-y-5">
                                {/* Syarat */}
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5 border-2 border-blue-200">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                        <span className="text-2xl mr-2">
                                            ✨
                                        </span>
                                        Syarat Gampang Kok!
                                    </h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                📚
                                            </span>
                                            <span>
                                                Minimal lulusan S1 atau setara
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                ⭐
                                            </span>
                                            <span>
                                                Punya pengalaman mengajar min. 1
                                                tahun
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                🎯
                                            </span>
                                            <span>
                                                Jago di bidang yang akan kamu
                                                ajarkan
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                📶
                                            </span>
                                            <span>Internet lancar jaya</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                💪
                                            </span>
                                            <span>
                                                Siap ikut pelatihan tentor
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Tata Cara */}
                                <div className="bg-white rounded-2xl p-5 border-2 border-purple-200">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                        <span className="text-2xl mr-2">
                                            🗺️
                                        </span>
                                        Cara Daftarnya
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 shadow-md">
                                                1
                                            </div>
                                            <p className="text-gray-700 pt-1">
                                                Klik tombol "Daftar Jadi Tentor"
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 shadow-md">
                                                2
                                            </div>
                                            <p className="text-gray-700 pt-1">
                                                Isi formulir dengan data dirimu
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 shadow-md">
                                                3
                                            </div>
                                            <p className="text-gray-700 pt-1">
                                                Upload CV, Ijazah & Sertifikat
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 shadow-md">
                                                4
                                            </div>
                                            <p className="text-gray-700 pt-1">
                                                Tunggu 1-3 hari untuk verifikasi
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 shadow-md">
                                                5
                                            </div>
                                            <p className="text-gray-700 pt-1">
                                                Ikut pelatihan & mulai mengajar!
                                                🎉
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefit */}
                                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-5 border-2 border-yellow-300">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                        <span className="text-2xl mr-2">
                                            🎁
                                        </span>
                                        Keuntungan Jadi Tentor
                                    </h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                💰
                                            </span>
                                            <span>
                                                Penghasilan oke & jadwal
                                                fleksibel
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                ⏰
                                            </span>
                                            <span>
                                                Atur sendiri waktu mengajarmu
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                🚀
                                            </span>
                                            <span>
                                                Platform pembelajaran modern
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                📈
                                            </span>
                                            <span>
                                                Pelatihan & pengembangan gratis
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Tombol Register */}
                                <button className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white font-bold py-4 sm:py-5 rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg text-base sm:text-lg">
                                    🎯 Daftar Jadi Tentor Sekarang!
                                </button>
                            </div>
                        </div>

                        {/* Card Kanan - Student */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
                            <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 p-6 sm:p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 text-8xl opacity-10">
                                    🎒
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold mb-2 relative z-10">
                                    Jadi Student! 🎒
                                </h2>
                                <p className="text-pink-100 relative z-10">
                                    Belajar seru tanpa batas!
                                </p>
                            </div>

                            <div className="p-5 sm:p-8 space-y-5">
                                {/* Syarat */}
                                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-5 border-2 border-pink-200">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                        <span className="text-2xl mr-2">
                                            ✨
                                        </span>
                                        Syarat Super Mudah!
                                    </h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                🎂
                                            </span>
                                            <span>Minimal umur 12 tahun</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                📧
                                            </span>
                                            <span>
                                                Punya email yang masih aktif
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                🔥
                                            </span>
                                            <span>
                                                Semangat belajar yang tinggi
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                📱
                                            </span>
                                            <span>
                                                Punya HP/laptop & internet
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                🤝
                                            </span>
                                            <span>
                                                Siap ikuti aturan belajar
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Tata Cara */}
                                <div className="bg-white rounded-2xl p-5 border-2 border-rose-200">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                        <span className="text-2xl mr-2">
                                            🗺️
                                        </span>
                                        Cara Daftar (Gampang!)
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 shadow-md">
                                                1
                                            </div>
                                            <p className="text-gray-700 pt-1">
                                                Klik tombol "Daftar Jadi
                                                Student"
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 shadow-md">
                                                2
                                            </div>
                                            <p className="text-gray-700 pt-1">
                                                Isi formulir dengan lengkap ya
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 shadow-md">
                                                3
                                            </div>
                                            <p className="text-gray-700 pt-1">
                                                Cek email & klik link aktivasi
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 shadow-md">
                                                4
                                            </div>
                                            <p className="text-gray-700 pt-1">
                                                Pilih kursus yang kamu suka
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 shadow-md">
                                                5
                                            </div>
                                            <p className="text-gray-700 pt-1">
                                                Bayar & langsung mulai belajar!
                                                🎉
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefit */}
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border-2 border-blue-300">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                        <span className="text-2xl mr-2">
                                            🎁
                                        </span>
                                        Yang Kamu Dapat
                                    </h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                📚
                                            </span>
                                            <span>
                                                Ribuan materi pembelajaran seru
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                👨‍🏫
                                            </span>
                                            <span>
                                                Tentor berpengalaman & ramah
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                🏆
                                            </span>
                                            <span>
                                                Sertifikat setelah selesai
                                                kursus
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-xl mr-2">
                                                🤗
                                            </span>
                                            <span>
                                                Komunitas belajar yang asik
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Tombol Register */}
                                <button className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-bold py-4 sm:py-5 rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg text-base sm:text-lg">
                                    🚀 Daftar Jadi Student Sekarang!
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer Fun */}
                    <div className="text-center mt-8 sm:mt-12">
                        <p className="text-gray-600 text-sm sm:text-base">
                            Masih bingung? Kontak kami aja! 💬
                        </p>
                        <div className="flex justify-center gap-4 mt-4">
                            <span className="text-2xl sm:text-3xl cursor-pointer hover:scale-125 transition-transform">
                                📞
                            </span>
                            <span className="text-2xl sm:text-3xl cursor-pointer hover:scale-125 transition-transform">
                                📧
                            </span>
                            <span className="text-2xl sm:text-3xl cursor-pointer hover:scale-125 transition-transform">
                                💬
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
