import React from "react";

function Student({ TableHeader, students, ActionButtons }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
                <h3 className="text-xl font-bold">Daftar Murid</h3>
            </div>

            {/* wrapper untuk horizontal scroll */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-max">
                    <TableHeader
                        columns={[
                            "NO",
                            "ID",
                            "Nama",
                            "NO HP",
                            "Email",
                            "Alamat",
                            "Tanggal Lahir",
                            "Sekolah",
                            "Jurusan",
                            "Tahun Ajaran",
                        ]}
                    />
                    <tbody className="divide-y divide-slate-700">
                        {students.map((datastudent, index) => (
                            <tr
                                key={datastudent.id}
                                className="hover:bg-gray-50"
                            >
                                <td className="px-6 py-4 text-center font-medium border border-blue-400">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 font-medium border border-blue-400 ">
                                    {datastudent.token}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datastudent.name}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datastudent.phone_number}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datastudent.email}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datastudent.address}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datastudent.date_born}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datastudent.school_from}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datastudent.vacation}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datastudent.year_graduate}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Student;
