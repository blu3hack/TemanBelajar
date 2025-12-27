import React from "react";

function Earn({ balance, TableHeader }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
                <h3 className="text-xl font-bold">
                    Daftar Pendapatan Platform
                </h3>
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
                            "Level",
                            "Harga",
                            "Total Transaksi",
                            "Cosh Platform",
                            "Admin Midtrans",
                            "Bruto Platform",
                            "Pendapatan Mentor",
                            "Netto Platform",
                        ]}
                    />
                    <tbody className="divide-y divide-slate-700">
                        {balance.map((databalance, index) => (
                            <tr
                                key={databalance.id}
                                className="hover:bg-gray-50"
                            >
                                <td className="px-6 py-4 text-center font-medium border border-blue-400">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 font-medium border border-blue-400 ">
                                    {databalance.classroom_id}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {databalance.title}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {databalance.mentor}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {databalance.level}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    <span className="text-blue-600 font-bold">
                                        {" "}
                                        Rp{" "}
                                        {new Intl.NumberFormat("id-ID").format(
                                            databalance.amount
                                        )}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {databalance.total_transaksi}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {databalance.cosh_platform}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {databalance.admin_midtrans}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    <span className="text-blue-600 font-bold">
                                        {" "}
                                        Rp{" "}
                                        {new Intl.NumberFormat("id-ID").format(
                                            databalance.bruto_platform
                                        )}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    <span className="text-blue-600 font-bold">
                                        {" "}
                                        Rp{" "}
                                        {new Intl.NumberFormat("id-ID").format(
                                            databalance.pendapatan_mentor
                                        )}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    <span className="text-blue-600 font-bold">
                                        {" "}
                                        Rp{" "}
                                        {new Intl.NumberFormat("id-ID").format(
                                            databalance.netto_platform
                                        )}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Earn;
