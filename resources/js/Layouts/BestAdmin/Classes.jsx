import React from "react";

function Classes({ explore_class, TableHeader, UpdateImageButton }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
                <h3 className="text-xl font-bold">Daftar Kelas Aktif</h3>
            </div>

            {/* wrapper untuk horizontal scroll */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-max">
                    <TableHeader
                        columns={[
                            "NO",
                            "ID",
                            "Kelas",
                            "Mentor",
                            "Pamflet",
                            "Harga",
                            "Pertemuan",
                            "Total Harga",
                            "Durasi",
                            "Level",
                            "Tanggal Mulai",
                            "Audience",
                            "Status",
                        ]}
                    />
                    <tbody className="divide-y divide-slate-700">
                        {explore_class.map((dataclass, index) => (
                            <tr key={dataclass.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-center font-medium border border-blue-400">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 font-medium border border-blue-400 ">
                                    {dataclass.classroom_id}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {dataclass.title}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {dataclass.instructor}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {dataclass.image}{" "}
                                    <UpdateImageButton id={dataclass.id} />
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    <span className="text-blue-600 font-bold">
                                        {" "}
                                        Rp{" "}
                                        {new Intl.NumberFormat("id-ID").format(
                                            dataclass.price
                                        )}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {dataclass.total_meet}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    <span className="text-blue-600 font-bold">
                                        {" "}
                                        Rp{" "}
                                        {new Intl.NumberFormat("id-ID").format(
                                            dataclass.total_price
                                        )}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {dataclass.duration}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {dataclass.level}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {new Date(
                                        dataclass.startdate
                                    ).toLocaleString("id-ID", {
                                        dateStyle: "long",
                                        timeStyle: "short",
                                    })}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {dataclass.audience}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {dataclass.status === "post" ? (
                                        <span className="bg-green-400  text-white py-1 px-1 rounded-lg">
                                            {dataclass.status}
                                        </span>
                                    ) : (
                                        <span className="bg-orange-700  text-white py-1 px-1 rounded-lg">
                                            {dataclass.status}
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Classes;
