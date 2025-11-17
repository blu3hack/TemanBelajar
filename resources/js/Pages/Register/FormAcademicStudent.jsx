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

function FormAcademicStudent({ data, setData, errors }) {
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
                        label="Asal Sekolah"
                        type="text"
                        name="school_from"
                        value={data.school_from}
                        onChange={handleChange}
                        placeholder="Contoh: SMP N 5 Surabaya"
                        icon={School}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputText
                            label="Jurusan * boleh di kosongi"
                            type="text"
                            name="vacation"
                            value={data.vacation}
                            onChange={handleChange}
                            placeholder="Contoh: IPA"
                            icon={GraduationCap}
                        />

                        <InputText
                            label="Tahun Ajaran"
                            type="text"
                            name="year_graduate"
                            value={data.year_graduate}
                            onChange={handleChange}
                            placeholder="Contoh: 2024/2025"
                            icon={GraduationCap}
                        />
                    </div>
                </div>
            </FormWrap>
        </div>
    );
}

export default FormAcademicStudent;
