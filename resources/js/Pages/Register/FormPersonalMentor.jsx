import React from "react";
import FormWrap from "./FormWrap";
import InputText from "./InputText";
import InputSelection from "./InputSelection";
import InputArea from "./InputArea";
import InputFile from "./InputFile";

import { MapPin, Calendar, Church, Camera, User } from "lucide-react";

function FormPersonalMentor({ data, setData, errors }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    return (
        <FormWrap
            title="Tentang Kamu"
            subtitle="Ceritain tentang diri kamu"
            icon={User}
        >
            <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputText
                        label="Tempat Lahir"
                        type="text"
                        name="place_birth"
                        value={data.place_birth}
                        onChange={handleChange}
                        placeholder="Contoh: Jakarta"
                        icon={MapPin}
                    />

                    <InputText
                        label="Tanggal Lahir"
                        type="date"
                        name="date_born"
                        value={data.date_born}
                        onChange={handleChange}
                        icon={Calendar}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputSelection
                        label="Gender"
                        name="gender"
                        value={data.gender}
                        onChange={handleChange}
                        options={["Laki-laki", "Perempuan"]}
                        icon={Church}
                    />

                    <InputSelection
                        label="Agama"
                        name="religion"
                        value={data.religion}
                        onChange={handleChange}
                        options={[
                            "Islam",
                            "Kristen",
                            "Katolik",
                            "Budha",
                            "Hindu",
                            "Konghucu",
                        ]}
                        icon={Church}
                    />
                </div>

                <InputArea
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    label="Alamat"
                    icon={MapPin}
                    placeholder="Contoh: Jl. Merdeka No. 123"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputText
                        label="No HP"
                        type="tel"
                        name="phone_number"
                        value={data.phone_number}
                        onChange={handleChange}
                        placeholder="Contoh: 0812-3456-7890"
                        icon={MapPin}
                    />

                    <InputFile
                        label="Foto Profile"
                        name="profile_picture"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) setData("profile_picture", file);
                        }}
                        icon={Camera}
                    />
                </div>

                {errors?.profile_picture && (
                    <p className="text-red-500 text-sm">
                        {errors.profile_picture}
                    </p>
                )}
            </div>
        </FormWrap>
    );
}

export default FormPersonalMentor;
