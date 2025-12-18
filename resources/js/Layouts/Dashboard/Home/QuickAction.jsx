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
    const isGuestOrStudent = verif_mentor === null || verif_student === null;

    const isWaitingVerification =
        verif_mentor?.token === user.token &&
        verif_mentor?.status === "inactive";

    const mentorLink = isWaitingVerification
        ? "/wait-verification"
        : "/mentor-register";

    return (
        <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">
                Aksi Cepat
            </h3>

            <div className="grid grid-cols-4 gap-3">
                {isGuestOrStudent ? (
                    <Link
                        link={mentorLink}
                        label={
                            isWaitingVerification
                                ? "Menunggu verif_mentor"
                                : "Daftar Mentor"
                        }
                        icon={BookUser}
                    />
                ) : (
                    <Link
                        link="/rule-classroom"
                        label="Buat Kelas"
                        icon={Plus}
                    />
                )}

                <Link link="#" label="Daftar Meeting" icon={Video} />
                <Link link="#" label="Chat Admin" icon={MessageCircleHeart} />
                <Link link="/explore" label="Explore Kelas" icon={Landmark} />
            </div>
        </div>
    );
}

export default QuickAction;
