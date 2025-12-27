import React from "react";
import { User, X } from "lucide-react";

function ProfileModal({ isOpen, onClose, profile_picture }) {
    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4"
            onClick={onClose}
        >
            <div
                className="relative p-8 w-11/12 max-w-lg bg-white rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-3 right-3 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 transition z-10"
                    onClick={onClose}
                >
                    <X size={24} />
                </button>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center border-b pb-3">
                    Foto Profil
                </h3>

                <div className="w-full h-auto aspect-square bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center text-9xl font-extrabold text-white shadow-xl border-4 border-white mx-auto">
                    <img
                        src={`/Assets/Images/ProfilePictures/${profile_picture}`}
                        alt=""
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default ProfileModal;
