import React from "react";

function ImageUpdateModal({
    setModalUpdateImage,
    handleImageSubmit,
    setData,
    data,
}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                {/* Close Button */}
                <button
                    type="button"
                    onClick={() => setModalUpdateImage(false)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>

                <h1 className="text-xl font-semibold mb-4">Update Pamflet</h1>

                <form onSubmit={handleImageSubmit} className="space-y-4">
                    {/* Input */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Update Image Pamflet
                        </label>
                        <input
                            type="text"
                            name="pamflet"
                            value={data.pamflet}
                            onChange={(e) => setData("pamflet", e.target.value)}
                            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-2">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ImageUpdateModal;
