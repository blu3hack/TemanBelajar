import React from "react";

function StatusModal({
    data,
    handleUpdateSubmit,
    setData,
    setModalUpdateStatus,
}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                {/* Tombol Close */}
                <button
                    type="button"
                    onClick={() => setModalUpdateStatus(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
                >
                    ×
                </button>

                <h1 className="text-xl font-semibold mb-4">Update Status</h1>

                <form onSubmit={handleUpdateSubmit} className="space-y-4">
                    {/* Select Option */}
                    <div>
                        <select
                            name="status"
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            required
                        >
                            <option value="">-- Pilih Status --</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}

export default StatusModal;
