import React from "react";

function EditBioCard() {
    return (
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-5 sm:p-6 transform hover:shadow-purple-200 transition duration-300">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <BookOpen className="text-purple-600" size={24} />
                    Bio Singkat
                </h3>

                {!isEditingBio ? (
                    <button
                        onClick={() => setIsEditingBio(true)}
                        className="flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-700 transition"
                    >
                        <Edit size={16} />
                    </button>
                ) : (
                    <button
                        onClick={cancelEdit}
                        className="flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 transition"
                    >
                        <X size={16} /> Batal
                    </button>
                )}
            </div>

            {isEditingBio ? (
                <form onSubmit={handleUpdateBio} className="space-y-4">
                    <textarea
                        className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-gray-700"
                        rows="5"
                        value={data.bio}
                        name="bio"
                        onChange={(e) => setData("bio", e.target.value)}
                        placeholder="Tulis bio singkat Anda di sini..."
                    />
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition disabled:opacity-50 shadow-md shadow-purple-200 font-semibold"
                        >
                            <Save size={18} />
                            {processing ? "Menyimpan..." : "Simpan Perubahan"}
                        </button>
                    </div>
                </form>
            ) : (
                <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
                    {profile.bio || "Belum ada informasi bio."}
                </p>
            )}
        </div>
    );
}

export default EditBioCard;
