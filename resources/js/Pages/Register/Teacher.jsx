import React, { useEffect, useState } from "react";
import {
    User,
    MapPin,
    Calendar,
    Phone,
    BookOpen,
    Award,
    GraduationCap,
} from "lucide-react";
import { useForm, usePage } from "@inertiajs/react";
import ButtonRegister from "./ButtonRegister";
import FormPersonalMentor from "./FormPersonalMentor";
import FormAcademicMentor from "./FormAcademicMentor";

function Teacher() {
    // useform data
    const user = usePage().props.auth.user;
    const { flash = {} } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        token: "",
        name: "",
        gender: "",
        place_birth: "",
        date_born: "",
        religion: "",
        address: "",
        phone_number: "",
        email: "",
        profile_picture: null,
        graduate: "",
        vacation: "",
        year_graduate: "",
        skill_apply: [],
        train_experience: "",
        certificate: "",
        available_day_training: [],
        available_time: [],
        training_mode: [],
        platform_pay: "",
        no_platform_pay: "",
        name_platform_pay: "",
    });

    useEffect(() => {
        if (user) {
            setData("token", user.token);
            setData("name", user.name);
            setData("email", user.email);
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/create-mentor", {
            forceFormData: true,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4 md:p-6">
            {/* Header dengan Ilustrasi */}
            {/* FLASH MESSAGE */}
            {flash?.success && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg shadow">
                    {flash.success}
                </div>
            )}

            {flash?.error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg shadow">
                    {flash.error}
                </div>
            )}
            <div className="text-center mb-6">
                <div className="inline-block mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-12 h-12 text-white" />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <FormPersonalMentor
                        data={data}
                        setData={setData}
                        errors={errors}
                    />
                    <FormAcademicMentor
                        data={data}
                        setData={setData}
                        errors={errors}
                    />
                </div>
                <ButtonRegister handleSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default Teacher;
