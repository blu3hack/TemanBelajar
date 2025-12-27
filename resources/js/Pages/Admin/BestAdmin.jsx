import React, { useState } from "react";
import { usePage, useForm } from "@inertiajs/react";
import {
    Users,
    BookOpen,
    DollarSign,
    TrendingUp,
    UserCheck,
    Edit,
    Wallet,
    HandCoins,
} from "lucide-react";
import Sidebar from "@/Layouts/BestAdmin/Sidebar";
import Header from "@/Layouts/BestAdmin/Header";
import Dashboard from "@/Layouts/BestAdmin/Dashboard";
import Student from "@/Layouts/BestAdmin/Student";
import Mentor from "@/Layouts/BestAdmin/Mentor";
import Classes from "@/Layouts/BestAdmin/Classes";
import Payment from "@/Layouts/BestAdmin/Payment";
import Earn from "@/Layouts/BestAdmin/Earn";
import StatusModal from "@/Layouts/BestAdmin/Statusmodal";
import ImageUpdateModal from "@/Layouts/BestAdmin/ImageUpdateModal";

function BestAdmin() {
    const { props } = usePage();
    const { mentors, students, explore_class, payment, balance } = props;
    const [activeMenu, setActiveMenu] = useState("dashboard");
    const [ModalUpdateStatus, setModalUpdateStatus] = useState(false);
    const [selectID, setSelectID] = useState(null);
    const { data, setData, put, reset } = useForm({
        status: "",
        pamflet: "",
    });
    const [classID, setClassID] = useState(null);
    const [modalUpdateImage, setModalUpdateImage] = useState(false);

    // --- update status handler ---
    const handleUpdate = (id) => {
        setModalUpdateStatus(true);
        setSelectID(id);
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        put(route("update.status.mentor", selectID), {
            onSuccess: () => {
                setModalUpdateStatus(false);
                reset();
            },
        });
    };

    // --- update Image Class Handler -------
    const handleImageUpdate = (idImage) => {
        setClassID(idImage);
        setModalUpdateImage(true);
    };

    const handleImageSubmit = (e) => {
        e.preventDefault();
        put(route("update.image.class", classID), {
            onSuccess: () => {
                setModalUpdateImage(false);
                reset();
            },
        });
    };

    // --- RENDER COMPONENTS ---
    const TableHeader = ({ columns }) => (
        <thead>
            <tr className="bg-gray-50 text-left  ">
                {columns.map((col, i) => (
                    <th
                        key={i}
                        className=" border border-white px-6 py-4 text-sm font-semibold text-white border-x-cyan-50 uppercase tracking-wider text-center bg-blue-700 "
                    >
                        {col}
                    </th>
                ))}
            </tr>
        </thead>
    );

    const ActionButtons = ({ id, type }) => (
        <button
            onClick={() => handleUpdate(id, type)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
        >
            <Edit className="w-4 h-4" />
        </button>
    );

    const UpdateImageButton = ({ id }) => (
        <button
            onClick={() => handleImageUpdate(id)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
        >
            <Edit className="w-4 h-4" />
        </button>
    );

    const renderContent = () => {
        switch (activeMenu) {
            case "students":
                return (
                    <Student
                        TableHeader={TableHeader}
                        students={students}
                        ActionButtons={ActionButtons}
                    />
                );
            case "mentors":
                return (
                    <Mentor
                        ActionButtons={ActionButtons}
                        TableHeader={TableHeader}
                        mentors={mentors}
                    />
                );
            case "classes":
                return (
                    <Classes
                        explore_class={explore_class}
                        UpdateImageButton={UpdateImageButton}
                        TableHeader={TableHeader}
                    />
                );
            case "payments":
                return <Payment payment={payment} TableHeader={TableHeader} />;
            case "earn":
                return <Earn TableHeader={TableHeader} balance={balance} />;
            default:
                return (
                    <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                        <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-medium text-gray-500">
                            Halaman {activeMenu} sedang dikembangkan
                        </h3>
                    </div>
                );
        }
    };

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: TrendingUp },
        { id: "students", label: "Siswa", icon: Users },
        { id: "mentors", label: "Mentor", icon: UserCheck },
        { id: "classes", label: "Kelas", icon: BookOpen },
        { id: "payments", label: "Pembayaran", icon: DollarSign },
        { id: "earn", label: "Pendapatan", icon: HandCoins },
        { id: "keuangan", label: "Keuangan", icon: Wallet },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar
                menuItems={menuItems}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
            />
            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <Header activeMenu={activeMenu} />
                <main className="p-8">
                    {activeMenu === "dashboard" ? (
                        <div>
                            <Dashboard />
                            {renderContent()}
                        </div>
                    ) : (
                        renderContent()
                    )}
                </main>
                {ModalUpdateStatus && (
                    <StatusModal
                        selectID={selectID}
                        data={data}
                        handleUpdateSubmit={handleUpdateSubmit}
                        setData={setData}
                        setModalUpdateStatus={setModalUpdateStatus}
                    />
                )}

                {modalUpdateImage && (
                    <ImageUpdateModal
                        setModalUpdateImage={setModalUpdateImage}
                        handleImageSubmit={handleImageSubmit}
                        setData={setData}
                        data={data}
                    />
                )}
            </div>
        </div>
    );
}

export default BestAdmin;
