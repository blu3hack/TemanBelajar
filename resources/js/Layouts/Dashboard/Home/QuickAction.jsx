import React from "react";
import {
    Plus,
    Video,
    MessageCircleHeart,
    Landmark,
    BookUser,
} from "lucide-react";
import Link from "./Link";

function QuickAction({ user, verif_mentor, verif_student }) {
    // Kondisi utama
    let mentorLink = "/mentor-register"; // default jika belum daftar
    let mentorLabel = "Daftar Mentor";

    if (verif_mentor) {
        // Sudah daftar mentor
        if (verif_mentor.status === "active") {
            mentorLink = "/rule-classroom"; // boleh buka kelas
            mentorLabel = "Buat Kelas";
        } else {
            mentorLink = "/wait-verification"; // menunggu verifikasi
            mentorLabel = "Menunggu verifikasi";
        }
    }

    return (
        <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">
                Aksi Cepat
            </h3>

            <div className="grid grid-cols-4 gap-3">
                {/* Tombol mentor */}
                <Link link={mentorLink} label={mentorLabel} icon={BookUser} />

                {/* Tombol lainnya */}
                <Link link="#" label="Daftar Meeting" icon={Video} />
                <Link link="#" label="Chat Admin" icon={MessageCircleHeart} />
                <Link link="/explore" label="Explore Kelas" icon={Landmark} />
            </div>
        </div>
    );
}

export default QuickAction;
