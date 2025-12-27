import React from "react";
import {
    BookUser,
    Video,
    MessageCircleHeart,
    Landmark,
    BookOpenText,
} from "lucide-react";
import Panduan from "./Panduan";

function Link({ link, label, icon: Icon }) {
    return (
        <div className="flex justify-center">
            <a href={link} className="w-full">
                <button className="group relative flex flex-col items-center gap-3 p-6 md:p-8 w-full md:w-40 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-white/20 backdrop-blur-xl"></div>
                    <div className="absolute inset-0 rounded-3xl border border-white/20 shadow-xl group-hover:shadow-2xl transition-shadow duration-500"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </div>
                    <div className="relative w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-500 group-hover:rotate-[5deg] group-hover:scale-110">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent"></div>
                        {Icon && (
                            <Icon
                                className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300"
                                size={26}
                                strokeWidth={2.5}
                            />
                        )}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-2 md:w-16 bg-blue-600/30 blur-md rounded-full group-hover:w-14 md:group-hover:w-20 group-hover:bg-blue-600/40 transition-all duration-500"></div>
                    </div>
                    <span className="relative z-10 text-sm md:text-base font-semibold bg-gradient-to-br from-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300">
                        {label}
                    </span>
                </button>
            </a>
        </div>
    );
}

function QuickAction({ user, verif_mentor, verif_student }) {
    let mentorLink = "/mentor-register";
    let mentorLabel = "Daftar Mentor";

    if (verif_mentor) {
        if (verif_mentor.status === "active") {
            mentorLink = "/rule-classroom";
            mentorLabel = "Buat Kelas";
        } else {
            mentorLink = "/wait-verification";
            mentorLabel = "Menunggu verifikasi";
        }
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">
                Aksi Cepat
            </h3>

            <div className="flex justify-center mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    <Link
                        link={mentorLink}
                        label={mentorLabel}
                        icon={BookUser}
                    />

                    {!verif_student ? (
                        <Link
                            link="/student-register"
                            label="Daftar Murid"
                            icon={Video}
                        />
                    ) : (
                        <Link link="/explore" label="Explore" icon={Landmark} />
                    )}

                    <Link link="#" label="Chat" icon={MessageCircleHeart} />

                    <Link link="#" label="Kelas" icon={BookOpenText} />
                </div>
            </div>

            <Panduan />
        </div>
    );
}

export default QuickAction;
