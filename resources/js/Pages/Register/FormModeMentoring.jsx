import React from "react";
import FormWrap from "./FormWrap";
import { BookOpen } from "lucide-react";
import InputMultipleSelection from "./InputMultipleSelection";

function FormModeMentoring({ data, setData }) {
    return (
        <div>
            <FormWrap
                title="Info Mentoring"
                subtitle="Input Metode dan Akses Mentoring"
                icon={BookOpen}
            >
                <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputMultipleSelection
                            label="Pilih pelajaran"
                            name="skill_apply"
                            options={[
                                "Matematika",
                                "Fisika",
                                "Bahasa Inggris",
                                "Kimia",
                                "Biologi",
                                "Bahasa Indonesia",
                                "Umum",
                            ]}
                            value={data.skill_apply} // WAJIB: array
                            setData={setData} // WAJIB
                        />
                        <InputMultipleSelection
                            label="Hari Mengajar:"
                            name="available_day_training"
                            options={[
                                "Senin",
                                "Selasa",
                                "Rabu",
                                "Kamis",
                                "Jumat",
                                "Sabtu",
                                "Minggu",
                            ]}
                            value={data.available_day_training} // WAJIB: array
                            setData={setData} // WAJIB
                        />
                        <InputMultipleSelection
                            label="Mode Mengajar:"
                            name="training_mode"
                            options={["ONLINE", "OFFLINE"]}
                            value={data.training_mode} // WAJIB: array
                            setData={setData} // WAJIB
                        />
                        <InputMultipleSelection
                            label="Waktu Mengajar:"
                            name="available_time"
                            options={["Pagi", "Siang", "Malam"]}
                            value={data.available_time} // WAJIB: array
                            setData={setData} // WAJIB
                        />
                        <InputMultipleSelection
                            label="Jenjang Siswa:"
                            name="school_grade"
                            options={["SD", "SMP", "SMA", "Umum"]}
                            value={data.school_grade} // WAJIB: array
                            setData={setData} // WAJIB
                        />
                    </div>
                </div>
            </FormWrap>
        </div>
    );
}

export default FormModeMentoring;
