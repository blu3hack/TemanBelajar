import React, { useState, useEffect } from "react";
import { usePage, useForm } from "@inertiajs/react";
import {
    BookOpen,
    Calendar,
    Clock,
    Tag,
    Trophy,
    School,
    HeartHandshake,
} from "lucide-react";
import InputFile from "./FormComponent/InputFile";
import InputLongText from "./FormComponent/InputLongText";
import Tagline from "./FormComponent/Tagline";
import InputShortText from "./FormComponent/InputShortText";
import Describe from "./FormComponent/Describe";
import ButtonClass from "./FormComponent/ButtonClass";
import InputSelection from "./FormComponent/InputSelection";
import Student from "../Register/Student";

function GroupClass() {
    const user = usePage().props.auth.user;
    const { flash = {} } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        token: "",
        title: "",
        instructor: "",
        students: "",
        image: "",
        price: "",
        level: "",
        badge: "",
        lesson: "",
        describe: "",
        duration: "",
        startdate: "",
        audience: "",
        total_meet: "",
    });

    useEffect(() => {
        if (user) {
            setData("token", user.token);
            setData("instructor", user.name);
            setData("level", "group");
            setData("image", "");
            setData("students", "");
            setData("badge", "Terbaru");
        }
    }, [user]);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/create-explore");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header dengan Dekorasi */}
                <Tagline
                    tagline="Buat Kelas Private"
                    label="Bagikan ilmu kamu ke teman-teman"
                />

                {/* Form Card dengan Style Playful */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-blue-200">
                    <div className="space-y-6">
                        {/* Nama Kelas */}
                        <InputLongText
                            type="text"
                            value={data.title}
                            icon={BookOpen}
                            label="Nama Kelas"
                            name="title"
                            onChange={handleChange}
                            placeholder="Contoh: Matematika Seru buat Kelas 7 😊"
                        />

                        {/* Upload Gambar Kelas */}
                        {/* <InputFile
                            onChange={handleImageChange}
                            previewImage={previewImage}
                        /> */}

                        {/* Grid 2 Kolom */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Kategori */}
                            <InputSelection
                                icon={Tag}
                                label="Kategori Pelajaran"
                                name="lesson"
                                type="text"
                                value={data.lesson}
                                onChange={handleChange}
                                options={[
                                    "Matematika",
                                    "Kimia",
                                    "Biologi",
                                    "Fisika",
                                ]}
                                color="green"
                            />

                            {/* Harga */}
                            <InputSelection
                                icon={Trophy}
                                label="Harga satu pertemuan"
                                name="price"
                                type="number"
                                value={data.price}
                                onChange={handleChange}
                                options={[50000, 65000, 75000, 100000]}
                                color="green"
                            />

                            {/* Durasi */}
                            <InputSelection
                                icon={Clock}
                                label="Durasi (Jam)"
                                name="duration"
                                type="text"
                                value={data.duration}
                                onChange={handleChange}
                                options={[
                                    "60 menit",
                                    "90 menit",
                                    "100 menit",
                                    "120 menit",
                                ]}
                                color="green"
                            />

                            {/* Jumlah pertemuan */}
                            <InputSelection
                                icon={HeartHandshake}
                                label="Jumlah Pertemuan"
                                name="total_meet"
                                type="text"
                                value={data.total_meet}
                                onChange={handleChange}
                                options={[
                                    "2 kali per bulan",
                                    "4 kali per bulan",
                                    "6 kali per bulan",
                                    "8 kali per bulan",
                                ]}
                                color="green"
                            />

                            {/* Tanggal Mulai */}
                            <InputShortText
                                icon={Calendar}
                                label="Pelaksanaan"
                                type="datetime-local"
                                name="startdate"
                                value={data.startdate}
                                onChange={handleChange}
                                color="green"
                            />

                            {/* Audience */}
                            <InputSelection
                                icon={School}
                                label="Audience"
                                name="audience"
                                value={data.audience}
                                onChange={handleChange}
                                options={["SD", "SMP", "SMA", "Umum"]}
                                color="green"
                            />
                        </div>

                        {/* Deskripsi */}
                        <Describe
                            label="Ceritakan Tentang Kelasmu"
                            name="describe"
                            value={data.describe}
                            onChange={handleChange}
                            placeholder="Apa yang seru dari kelas ini? Apa yang akan dipelajari teman-teman? 🚀"
                        />
                        <input type="hidden" name="token" value={data.token} />

                        {/* Submit Button */}
                        <ButtonClass
                            label="Bikin Kelas Sekarang!"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GroupClass;
