import React from "react";
import { TrendingUp, Calendar, DollarSign, CheckCircle } from "lucide-react";

function Penghasilan() {
    const historyPenghasilan = [
        {
            tanggal: "15 Des 2024",
            sumber: "Les Privat Matematika",
            siswa: "Andi Pratama",
            durasi: "2 jam",
            jumlah: 200000,
            status: "Diterima",
            metodePembayaran: "Transfer Bank",
            color: "emerald",
        },
        {
            tanggal: "14 Des 2024",
            sumber: "Les Kelompok Fisika",
            siswa: "Kelompok A (5 siswa)",
            durasi: "1.5 jam",
            jumlah: 375000,
            status: "Diterima",
            metodePembayaran: "Cash",
            color: "blue",
        },
        {
            tanggal: "13 Des 2024",
            sumber: "Les Online Bahasa Inggris",
            siswa: "Sarah Wijaya",
            durasi: "1 jam",
            jumlah: 150000,
            status: "Diterima",
            metodePembayaran: "E-wallet",
            color: "purple",
        },
        {
            tanggal: "12 Des 2024",
            sumber: "Les Privat Kimia",
            siswa: "Budi Santoso",
            durasi: "2 jam",
            jumlah: 250000,
            status: "Diterima",
            metodePembayaran: "Transfer Bank",
            color: "orange",
        },
        {
            tanggal: "11 Des 2024",
            sumber: "Les Privat Matematika",
            siswa: "Rina Kusuma",
            durasi: "1.5 jam",
            jumlah: 175000,
            status: "Diterima",
            metodePembayaran: "Cash",
            color: "emerald",
        },
        {
            tanggal: "10 Des 2024",
            sumber: "Les Kelompok Bahasa Indonesia",
            siswa: "Kelompok B (4 siswa)",
            durasi: "2 jam",
            jumlah: 320000,
            status: "Diterima",
            metodePembayaran: "Transfer Bank",
            color: "pink",
        },
    ];

    const formatRupiah = (angka) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(angka);
    };

    const totalPenghasilan = historyPenghasilan.reduce(
        (sum, item) => sum + item.jumlah,
        0
    );

    return (
        <div className="space-y-6">
            {/* Summary Card */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-xl text-white">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold opacity-90">
                        Total Penghasilan
                    </h2>
                    <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold mb-1">
                    {formatRupiah(totalPenghasilan)}
                </div>
                <p className="text-emerald-100 text-sm">
                    Dari {historyPenghasilan.length} transaksi bulan ini
                </p>
            </div>

            {/* History Cards */}
            <div className="grid lg:grid-cols-2 gap-4">
                {historyPenghasilan.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-900 text-lg mb-1">
                                    {item.sumber}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {item.siswa}
                                </p>
                            </div>
                            <div
                                className={`px-3 py-1 bg-${item.color}-100 text-${item.color}-700 text-xs font-semibold rounded-full flex items-center gap-1`}
                            >
                                <CheckCircle className="w-3 h-3" />
                                {item.status}
                            </div>
                        </div>

                        {/* Amount */}
                        <div className="bg-gray-50 rounded-xl p-4 mb-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-emerald-600" />
                                    <span className="text-2xl font-bold text-gray-900">
                                        {formatRupiah(item.jumlah)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Durasi</span>
                                <span className="font-medium text-gray-900">
                                    {item.durasi}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">
                                    Pembayaran
                                </span>
                                <span className="font-medium text-gray-900">
                                    {item.metodePembayaran}
                                </span>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.tanggal}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Penghasilan;
