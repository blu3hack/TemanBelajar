import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import Navbar from "@/Layouts/Explore/Navbar";
import HeroSection from "@/Layouts/Explore/HeroSection";
import CourseGrid from "@/Layouts/Explore/CourseGrid";
import OpenModal from "@/Layouts/Explore/OpenModal";

function ClassroomExplore() {
    const { explore_class } = usePage().props;
    const { verifikasi } = usePage().props;
    const { token } = usePage().props;
    const user = usePage().props.auth.user;
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getBadgeStyle = (badge) => {
        const styles = {
            Populer: "bg-gradient-to-r from-purple-500 to-pink-500",
            Hot: "bg-gradient-to-r from-orange-500 to-red-500",
            Trending: "bg-gradient-to-r from-green-500 to-teal-500",
            Baru: "bg-gradient-to-r from-blue-500 to-cyan-500",
        };
        return styles[badge] || "bg-gray-500";
    };

    const openModal = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
        document.body.style.overflow = "unset";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            <Navbar />
            <HeroSection user={user} />
            <CourseGrid
                explore_class={explore_class}
                getBadgeStyle={getBadgeStyle}
                openModal={openModal}
                verifikasi={verifikasi}
                token={token}
            />
            {isModalOpen && selectedCourse && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <OpenModal
                        selectedCourse={selectedCourse}
                        router={router}
                        user={user}
                        closeModal={closeModal}
                        getBadgeStyle={getBadgeStyle}
                    />
                </div>
            )}
        </div>
    );
}
export default ClassroomExplore;
