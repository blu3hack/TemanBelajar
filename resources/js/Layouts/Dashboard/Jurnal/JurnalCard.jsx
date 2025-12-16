import React from "react";

function JurnalCard() {
    return (
        <div className="grid lg:grid-cols-2 gap-4">
            {[
                {
                    tanggal: "04 Des 2024",
                    kelas: "Matematika Dasar",
                    topik: "Aljabar Linear",
                    catatan:
                        "Siswa memahami konsep dengan baik. Perlu tambahan latihan soal untuk penguatan materi.",
                    mood: "😊",
                    color: "blue",
                },
                {
                    tanggal: "03 Des 2024",
                    kelas: "Bahasa Inggris",
                    topik: "Grammar Present Tense",
                    catatan:
                        "Siswa masih kesulitan dengan auxiliary verbs. Akan dibuat worksheet tambahan.",
                    mood: "🤔",
                    color: "purple",
                },
                {
                    tanggal: "02 Des 2024",
                    kelas: "Fisika",
                    topik: "Hukum Newton",
                    catatan:
                        "Performa sangat bagus! Siswa aktif bertanya dan mengerjakan semua latihan dengan benar.",
                    mood: "🎉",
                    color: "green",
                },
            ].map((item, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all"
                >
                    <div className="flex items-start gap-3 mb-3">
                        <div className="text-3xl">{item.mood}</div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="font-bold text-gray-900">
                                    {item.topik}
                                </h3>
                            </div>
                            <div
                                className={`inline-block px-2 py-1 bg-${item.color}-100 text-${item.color}-700 text-xs font-medium rounded-lg mb-2`}
                            >
                                {item.kelas}
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                        {item.catatan}
                    </p>
                    <div className="text-xs text-gray-500">{item.tanggal}</div>
                </div>
            ))}
        </div>
    );
}

export default JurnalCard;
