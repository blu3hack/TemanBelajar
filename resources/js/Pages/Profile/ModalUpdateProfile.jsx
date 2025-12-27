import React from "react";
import { useForm } from "@inertiajs/react";
import { X, Save } from "lucide-react";

const ModalUpdateProfile = ({ isOpen, onClose, profile }) => {
    if (!isOpen) return null;

    // Menginisialisasi form dengan data profil yang sudah ada
    const { data, setData, post, processing, errors } = useForm({
        name: profile.name || "",
        address: profile.address || "",
        bio: profile.bio || "",
        email: profile.email || "",
        phone_number: profile.phone_number || "",
        instagram: profile.instagram || "",
        tiktok: profile.tiktok || "",
        twitter: profile.twitter || "",
        profile_picture: null, // Untuk upload file
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Menggunakan post dengan spoofing _method: 'PUT' jika route-nya adalah Resource/PUT
        // Karena HTML Form secara native tidak mendukung multipart/form-data dengan PUT
        post(route("profile.update"), {
            onSuccess: () => onClose(),
            forceFormData: true,
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Edit Profil
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Nama */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold text-gray-700">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            {errors.name && (
                                <span className="text-red-500 text-xs">
                                    {errors.name}
                                </span>
                            )}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        {/* Foto Profil */}
                        <div className="flex flex-col gap-1 md:col-span-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Foto Profil
                            </label>
                            <input
                                type="file"
                                onChange={(e) =>
                                    setData(
                                        "profile_picture",
                                        e.target.files[0]
                                    )
                                }
                                className="border rounded-lg p-2 text-sm"
                            />
                        </div>

                        {/* Bio */}
                        <div className="flex flex-col gap-1 md:col-span-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Bio Singkat
                            </label>
                            <textarea
                                rows="3"
                                value={data.bio}
                                onChange={(e) => setData("bio", e.target.value)}
                                className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        {/* Kontak Lainnya */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold text-gray-700">
                                Telepon
                            </label>
                            <input
                                type="text"
                                value={data.phone_number}
                                onChange={(e) =>
                                    setData("phone_number", e.target.value)
                                }
                                className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold text-gray-700">
                                Alamat
                            </label>
                            <input
                                type="text"
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-6 border-t">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center gap-2"
                        >
                            <Save size={18} />
                            {processing ? "Menyimpan..." : "Simpan Perubahan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalUpdateProfile;
