import React from "react";
import FormWrap from "./FormWrap";
import {
    BookOpen,
    School,
    GraduationCap,
    LuggageIcon,
    Award,
} from "lucide-react";
import InputLongText from "./InputLongText";
import InputText from "./InputText";
import InputArea from "./InputArea";
import InputFile from "./InputFile";

function FormAcademicMentor({ data, setData, errors }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };
    return (
        <div>
            <FormWrap
                title="Info Akademik"
                subtitle="Data akademik & Basic Mentoring"
                icon={BookOpen}
            >
                <div className="space-y-5">
                    <InputLongText
                        label="Almamater"
                        type="text"
                        name="graduate"
                        value={data.graduate}
                        onChange={handleChange}
                        placeholder="Contoh: Institut Teknologi Sepuluh Nopember"
                        icon={School}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputText
                            label="Jurusan"
                            type="text"
                            name="vacation"
                            value={data.vacation}
                            onChange={handleChange}
                            placeholder="Contoh: Informatika"
                            icon={GraduationCap}
                        />

                        <InputText
                            label="Tahun Lulus"
                            type="text"
                            name="year_graduate"
                            value={data.year_graduate}
                            onChange={handleChange}
                            placeholder="Contoh: 2019"
                            icon={GraduationCap}
                        />
                    </div>
                    <InputArea
                        label="Penglaman Mengajar"
                        name="train_experience"
                        value={data.train_experience}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-300 focus:border-red-500 transition-all group-hover:border-red-300"
                        placeholder="Ceritakan secara singkat pengalaman mengajar kamu sejauh ini..."
                        icon={LuggageIcon}
                    />

                    <InputFile
                        label=" Upload Sertifikat (optional * gunakan jpeg/png/jpg)"
                        name="certificate"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) setData("certificate", file);
                        }}
                        icon={Award}
                    />
                </div>
            </FormWrap>
        </div>
    );
}

export default FormAcademicMentor;
