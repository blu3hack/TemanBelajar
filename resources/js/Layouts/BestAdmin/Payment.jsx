import React from "react";

function Payment({ payment, TableHeader }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
                <h3 className="text-xl font-bold">Daftar Pembayaran Kelas</h3>
            </div>

            {/* wrapper untuk horizontal scroll */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-max">
                    <TableHeader
                        columns={[
                            "NO",
                            "Invoice",
                            "Kelas",
                            "Mentor",
                            "Murid",
                            "Harga",
                            "Status",
                            "Tanggal Bayar",
                        ]}
                    />
                    <tbody className="divide-y divide-slate-700">
                        {payment.map((datapayment, index) => (
                            <tr
                                key={datapayment.id}
                                className="hover:bg-gray-50"
                            >
                                <td className="px-6 py-4 text-center font-medium border border-blue-400">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 font-medium border border-blue-400 ">
                                    {datapayment.order_id}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datapayment.title}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datapayment.mentor}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datapayment.student}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    <span className="text-blue-600 font-bold">
                                        {" "}
                                        Rp{" "}
                                        {new Intl.NumberFormat("id-ID").format(
                                            datapayment.amount
                                        )}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datapayment.status_payment}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datapayment.created_at}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Payment;
