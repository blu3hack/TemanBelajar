import React from "react";
import { Upload, Image } from "lucide-react";

function InputFile({ onChange, previewImage }) {
    return (
        <div>
            <label className="flex items-center gap-2 text-purple-900 font-bold mb-2 text-lg">
                <Image className="w-6 h-6 text-pink-500" />
                Foto Kelas
            </label>
            <div className="relative">
                <input
                    type="file"
                    accept="image/*"
                    onChange={onChange}
                    className="hidden"
                    id="imageUpload"
                />
                <label
                    htmlFor="imageUpload"
                    className="flex flex-col items-center justify-center w-full h-48 border-4 border-dashed border-pink-300 rounded-2xl cursor-pointer bg-gradient-to-br from-pink-50 to-purple-50 hover:border-pink-400 hover:bg-pink-100 transition-all"
                >
                    {previewImage ? (
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <Upload className="w-12 h-12 text-white" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-3">
                            <Upload className="w-16 h-16 text-pink-400" />
                            <p className="text-lg font-semibold text-pink-600">
                                Klik untuk upload foto
                            </p>
                            <p className="text-sm text-pink-400">
                                PNG, JPG maksimal 5MB
                            </p>
                        </div>
                    )}
                </label>
            </div>
        </div>
    );
}

export default InputFile;
