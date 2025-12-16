import React, { useState } from "react";
import { BookOpen, Users, Briefcase } from "lucide-react";
import Header from "@/Layouts/Classroom/Header";
import GridRule from "@/Layouts/Classroom/GridRule";
import ModalRule from "@/Layouts/Classroom/ModalRule";

function RuleClass() {
    const [selectedCard, setSelectedCard] = useState(null);

    const classTypes = [
        {
            id: 1,
            icon: BookOpen,
            title: "private",
            color: "from-blue-500 to-blue-600",
            bgLight: "bg-blue-50",
            borderColor: "border-blue-200",
            accentColor: "text-blue-600",
            description: "Pembelajaran one-on-one dengan perhatian penuh",
            badge: "Premium",
            badgeColor: "bg-blue-500",
            rules: [
                {
                    label: "Pembagian Hasil",
                    value: "Sesuai Kesepakatan awal",
                },
                { label: "Durasi Sesi", value: "60-90 menit/pertemuan" },
                { label: "Minimal Pertemuan", value: "4 sesi per bulan" },
                { label: "Biaya Reschedule", value: "Gratis (H-24)" },
            ],
            criteria: [
                "Instruktur berpengalaman dalam membimbing private",
                "Materi disesuaikan dengan kebutuhan siswa",
                "Disediakan pamlet, flayer setiap membuat kelas",
                "Disediakan Template Powerpoint Penunjang Pengajaran",
            ],
        },
        {
            id: 2,
            icon: Users,
            title: "group",
            color: "from-green-500 to-green-600",
            bgLight: "bg-green-50",
            borderColor: "border-green-200",
            accentColor: "text-green-600",
            description: "Belajar bersama dalam kelompok kecil yang interaktif",
            badge: "Populer",
            badgeColor: "bg-green-500",
            rules: [
                {
                    label: "Pembagian Hasil",
                    value: "Sesuai Kesepakatan awal",
                },
                { label: "Kapasitas Kelas", value: "5-15 siswa per kelas" },
                { label: "Durasi Sesi", value: "90-120 menit/pertemuan" },
                { label: "Minimal Siswa", value: "5 siswa untuk buka kelas" },
            ],
            criteria: [
                "Instruktur memiliki pengalaman mengajar grup",
                "Silabus terstruktur dengan timeline jelas",
                "Disediakan pamlet, flayer setiap membuat kelas",
                "Disediakan Template Powerpoint Penunjang Pengajaran",
                "Disediakan Link Zoom",
            ],
        },
        {
            id: 3,
            icon: Briefcase,
            title: "workshop",
            color: "from-purple-500 to-purple-600",
            bgLight: "bg-purple-50",
            borderColor: "border-purple-200",
            accentColor: "text-purple-600",
            description: "Pelatihan intensif untuk skill spesifik",
            badge: "Intensif",
            badgeColor: "bg-purple-500",
            rules: [
                {
                    label: "Pembagian Hasil",
                    value: "Sesuai Kesepakatan awal",
                },
                { label: "Durasi Program", value: "1-3 hari (intensif)" },
                { label: "Kapasitas Kelas", value: "10-30 peserta" },
                { label: "Sertifikat", value: "Wajib disediakan" },
            ],
            criteria: [
                "Materi hands-on dengan studi kasus nyata",
                "Minimal 80% praktik dari total durasi",
                "E-certificate diberikan setelah selesai",
                "Disediakan pamlet, flayer setiap membuat kelas",
                "Disediakan Template Powerpoint Penunjang Pengajaran",
                "Disediakan Link Zoom",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-6">
            <div className="max-w-7xl mx-auto">
                <Header />
                <GridRule
                    classTypes={classTypes}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                />
                {selectedCard && (
                    <ModalRule
                        selectedCard={selectedCard}
                        setSelectedCard={setSelectedCard}
                        classTypes={classTypes}
                    />
                )}
            </div>
        </div>
    );
}

export default RuleClass;
