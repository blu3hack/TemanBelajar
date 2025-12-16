import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Home, Calendar, BookOpen, Users, CircleUserRound } from "lucide-react";
import Header from "@/Layouts/Dashboard/Home/Header";
import Performa from "@/Layouts/Dashboard/Home/Performa";
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

const AdminDashboard = () => {
    const user = usePage().props.auth.user;
    const { schedule_class } = usePage().props;
    const { status } = usePage().props;
    const [activeMenu, setActiveMenu] = useState("home");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const menuItems = [
        { id: "home", label: "Home", icon: Home },
        { id: "jadwal", label: "Jadwal", icon: Calendar },
        { id: "jurnal", label: "Jurnal", icon: BookOpen },
        { id: "siswa", label: "Siswa", icon: Users },
        { id: "pengaturan", label: "Profile", icon: CircleUserRound },
    ];

    const renderContent = () => {
        switch (activeMenu) {
            case "home":
                return (
                    <div className="space-y-6 pb-6">
                        <Header user={user} />
                        <div className="grid lg:grid-cols-2 gap-6">
                            <QuickAction status={status} />
                            <Performa />
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

            case "pengaturan":
                return (
                    <div className="space-y-6 pb-6">
                        <Pengaturan />
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
                <SideNavbar
                    menuItems={menuItems}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />
                <Logout />
            </div>

            {/* Mobile Header */}
            <MobileHeader
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-50"
                    onClick={() => setSidebarOpen(false)}
                >
                    <MobileSidebar
                        menuItems={menuItems}
                        activeMenu={activeMenu}
                        setActiveMenu={setActiveMenu}
                        setSidebarOpen={setSidebarOpen}
                    />
                </div>
            )}

            {/* Main Content */}
            <div className="lg:ml-64 px-4 lg:px-8 pt-20 lg:pt-8 pb-24 lg:pb-8 max-w-7xl">
                {renderContent()}
            </div>

            {/* Bottom Navigation - Mobile Only */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 z-40">
                <ButtomNav
                    menuItems={menuItems}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />
            </div>
        </div>
    );
};

export default AdminDashboard;
