import React, { useState } from "react";
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

function GroupClass() {
    const user = usePage().props.auth.user;
    const { flash = {} } = usePage().props;
    const [formData, setFormData] = useState({
        token: "",
        nameclass: "",
        lesson: [],
        describe: "",
        price: "",
        duration: "",
        startdate: "",
        audience: "",
        total_meet: "",
    });

    useEffect(() => {
        if (user) {
            setData("token", user.token);
        }
    }, [user]);

    const [previewImage, setPreviewImage] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                gambar: file,
            }));

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/create-student", {
            forceFormData: true,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header dengan Dekorasi */}
                <Tagline
                    tagline="Buat Group Kelas"
                    label="Bagikan ilmu kamu ke teman-teman"
                />

                {/* Form Card dengan Style Playful */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-blue-200">
                    <div className="space-y-6">
                        {/* Nama Kelas */}
                        <InputLongText
                            type="text"
                            icon={BookOpen}
                            label="Nama Kelas"
                            name="nameclass"
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
                                value={formData.lesson}
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
                                value={formData.price}
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
                                value={formData.duration}
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
                                value={formData.total_meet}
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
                                value={formData.startdate}
                                onChange={handleChange}
                                color="green"
                            />

                            {/* Audience */}
                            <InputSelection
                                icon={School}
                                label="Audience"
                                name="audience"
                                value={formData.audience}
                                onChange={handleChange}
                                options={["SD", "SMP", "SMA", "Umum"]}
                                color="green"
                            />
                        </div>

                        {/* Deskripsi */}
                        <Describe
                            label="Ceritakan Tentang Kelasmu"
                            name="describe"
                            value={formData.describe}
                            onChange={handleChange}
                            placeholder="Apa yang seru dari kelas ini? Apa yang akan dipelajari teman-teman? 🚀"
                        />

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
