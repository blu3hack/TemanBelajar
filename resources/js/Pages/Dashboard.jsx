import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import {
    Home,
    Calendar,
    BookOpen,
    Users,
    CircleUserRound,
    CircleDollarSign,
} from "lucide-react";
import Header from "@/Layouts/Dashboard/Home/Header";
import QuickAction from "@/Layouts/Dashboard/Home/QuickAction";
import JadwalNav from "@/Layouts/Dashboard/Jadwal/JadwalNav";
import JadwalCard from "@/Layouts/Dashboard/Jadwal/JadwalCard";
import JurnalNav from "@/Layouts/Dashboard/Jurnal/JurnalNav";
import JurnalCard from "@/Layouts/Dashboard/Jurnal/JurnalCard";
import SiswaNav from "@/Layouts/Dashboard/Siswa/SiswaNav";
import SiswaCard from "@/Layouts/Dashboard/Siswa/SiswaCard";
import Pengaturan from "@/Layouts/Dashboard/Pengaturan/Pengaturan";
import Logo from "@/Layouts/Dashboard/Sidebar/Logo";
import SideNavbar from "@/Layouts/Dashboard/Sidebar/SideNavbar";
import Logout from "@/Layouts/Dashboard/Sidebar/Logout";
import MobileHeader from "@/Layouts/Dashboard/Mobile/MobileHeader";
import MobileSidebar from "@/Layouts/Dashboard/Mobile/MobileSidebar";
import ButtomNav from "@/Layouts/Dashboard/Mobile/ButtomNav";
import Event from "@/Layouts/Dashboard/Home/Event";
import Penghasilan from "@/Layouts/Dashboard/Penghasilan/Penghasilan";

const AdminDashboard = () => {
    const { props } = usePage();
    const {
        auth: { user },
        schedule_class,
        verif_mentor,
        verif_student,
    } = props;

    // Ambil query param dari URL
    const searchParams = new URLSearchParams(window.location.search);
    const menuQuery = searchParams.get("menu"); // baca ?menu=jadwal

    const [activeMenu, setActiveMenu] = useState(menuQuery || "home");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const menuItems = [
        { id: "home", label: "Home", icon: Home },
        { id: "jadwal", label: "Jadwal", icon: Calendar },
        { id: "jurnal", label: "Jurnal", icon: BookOpen },
        { id: "siswa", label: "Siswa", icon: Users },
        ...(verif_mentor
            ? [
                  {
                      id: "penghasilan",
                      label: "Penghasilan",
                      icon: CircleDollarSign,
                  },
              ]
            : []),
    ];

    const events = [
        {
            title: "Bootcamp Web Development 2025",
            date: "20 Des - 25 Jan",
            participants: "324",
            tag: "Trending",
            tagColor: "bg-red-500",
            gradient: "from-red-500 to-orange-500",
        },
        {
            title: "Workshop UI/UX Design Fundamentals",
            date: "22 Des - 29 Des",
            participants: "189",
            tag: "Hot",
            tagColor: "bg-orange-500",
            gradient: "from-orange-500 to-yellow-500",
        },
        {
            title: "Webinar: AI & Machine Learning",
            date: "24 Des 2024",
            participants: "456",
            tag: "Popular",
            tagColor: "bg-purple-500",
            gradient: "from-purple-500 to-pink-500",
        },
    ];

    const renderContent = () => {
        switch (activeMenu) {
            case "home":
                return (
                    <div className="space-y-6 pb-6 justify-center">
                        <Header user={user} />
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="mx-auto w-full max-w-2xl">
                                <QuickAction
                                    user={user}
                                    verif_mentor={verif_mentor}
                                    verif_student={verif_student}
                                />
                            </div>
                            <div className="w-full max-w-2xl mx-auto">
                                <Event
                                    events={events}
                                    verif_mentor={verif_mentor}
                                    verif_student={verif_student}
                                />
                            </div>
                        </div>
                    </div>
                );

            case "jadwal":
                return (
                    <div className="space-y-6 pb-6">
                        <JadwalNav />
                        <JadwalCard schedule_class={schedule_class} />
                    </div>
                );

            case "jurnal":
                return (
                    <div className="space-y-6 pb-6">
                        <JurnalNav />
                        <JurnalCard />
                    </div>
                );

            case "siswa":
                return (
                    <div className="space-y-6 pb-6">
                        <SiswaNav />
                        <SiswaCard />
                    </div>
                );

            case "penghasilan":
                if (!verif_mentor) {
                    return (
                        <div className="text-center py-20 text-gray-500">
                            Akses ditolak
                        </div>
                    );
                }

                return (
                    <div className="space-y-6 pb-6">
                        <Penghasilan />
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Desktop Sidebar */}
            <div className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex-col p-6 z-50">
                <Logo />
                {(verif_mentor || verif_student) && (
                    <SideNavbar
                        menuItems={menuItems}
                        activeMenu={activeMenu}
                        setActiveMenu={setActiveMenu}
                    />
                )}
                <Logout />
            </div>

            {/* Mobile Header */}
            <MobileHeader
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* Main Content */}
            <div className="lg:ml-64 px-4 lg:px-8 pt-20 lg:pt-8 pb-24 lg:pb-8 max-w-7xl">
                {renderContent()}
            </div>

            {/* Bottom Navigation - Mobile Only */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 z-40">
                {(verif_mentor || verif_student) && (
                    <ButtomNav
                        menuItems={menuItems}
                        activeMenu={activeMenu}
                        setActiveMenu={setActiveMenu}
                    />
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
