import React from "react";

function Mentor({ ActionButtons, TableHeader, mentors }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
                <h3 className="text-xl font-bold">Daftar Mentor</h3>
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
                            "Pendidikan",
                            "Jurusan",
                            "Tahun Lulus",
                            "Pengalaman",
                            "Setifikat",
                            "Instagram",
                            "Tiktok",
                            "Twitter",
                            "Status",
                        ]}
                    />
                    <tbody className="divide-y divide-slate-700">
                        {mentors.map((datamentor, index) => (
                            <tr
                                key={datamentor.id}
                                className="hover:bg-gray-50"
                            >
                                <td className="px-6 py-4 text-center font-medium border border-blue-400">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 font-medium border border-blue-400 ">
                                    {datamentor.token}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datamentor.name}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datamentor.phone_number}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datamentor.email}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datamentor.address}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datamentor.date_born}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datamentor.graduate}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datamentor.vacation}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datamentor.year_graduate}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datamentor.train_experience}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datamentor.certificate}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datamentor.instagram}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datamentor.tiktok}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    {datamentor.twitter}
                                </td>
                                <td className="px-6 py-4 text-center border border-blue-400">
                                    <span className="bg-red-500 py-1 px-1 text-white rounded-xl">
                                        {" "}
                                        {datamentor.status}
                                    </span>
                                    <span>
                                        <ActionButtons id={datamentor.id} />
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

export default Mentor;
