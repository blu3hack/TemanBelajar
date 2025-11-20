import { useEffect, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import { Shield, Lock, ArrowRight, Tag, Users, BookOpen } from "lucide-react";

export default function CoursePayment() {
    const { flash, name, amount, email, no_wa } = usePage().props;
    const [loading, setLoading] = useState(false);

    // Load Snap.js
    useEffect(() => {
        if (!document.getElementById("midtrans-script")) {
            const script = document.createElement("script");
            script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
            script.id = "midtrans-script";
            script.setAttribute(
                "data-client-key",
                import.meta.env.VITE_MIDTRANS_CLIENT_KEY
            );
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    // Jika snapToken diterima → jalankan snap.pay()
    useEffect(() => {
        if (flash.snapToken && window.snap) {
            setLoading(false);
            window.snap.pay(flash.snapToken, {
                onSuccess: (result) => console.log("Success:", result),
                onPending: (result) => console.log("Pending:", result),
                onError: (result) => {
                    console.log("Error:", result);
                    setLoading(false);
                },
                onClose: () => {
                    console.log("Popup ditutup");
                    setLoading(false);
                },
            });
        }
    }, [flash.snapToken]);

    // Kirim request ke PaymentController → ambil snapToken
    const handleClickPayment = () => {
        setLoading(true);
        router.post("/payment", {
            name: name,
            amount: amount,
            email: email,
            no_wa: no_wa,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-blue-100 rounded-full px-5 py-2 mb-4 shadow-sm">
                        <Lock className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">
                            Transaksi Aman
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold text-slate-800 mb-2">
                        Checkout
                    </h1>
                    <p className="text-slate-500">Selesaikan pembayaran Anda</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left Section - Course & Customer Info */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Product Card */}
                        <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-2 mb-5">
                                <BookOpen className="w-5 h-5 text-blue-600" />
                                <h2 className="text-lg font-bold text-slate-800">
                                    Detail Produk
                                </h2>
                            </div>

                            <div className="flex gap-4">
                                {/* Course Image */}
                                <div className="flex-shrink-0">
                                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                                        <span className="text-white text-3xl">
                                            🎓
                                        </span>
                                    </div>
                                </div>

                                {/* Course Info */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                                        Master Web Development Course
                                    </h3>
                                    <p className="text-sm text-slate-500 mb-3">
                                        Akses selamanya • 120+ Video •
                                        Sertifikat
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl font-bold text-blue-600">
                                            Rp {amount}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Customer Info Card */}
                        <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-2 mb-5">
                                <Users className="w-5 h-5 text-blue-600" />
                                <h2 className="text-lg font-bold text-slate-800">
                                    Informasi Pembeli
                                </h2>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-blue-50/50 backdrop-blur-sm rounded-xl p-4 border border-blue-100">
                                    <label className="text-xs text-slate-500 mb-1 font-medium block">
                                        Nama Lengkap
                                    </label>
                                    <p className="font-semibold text-slate-800">
                                        {name}
                                    </p>
                                </div>

                                <div className="bg-blue-50/50 backdrop-blur-sm rounded-xl p-4 border border-blue-100">
                                    <label className="text-xs text-slate-500 mb-1 font-medium block">
                                        Nomor WhatsApp
                                    </label>
                                    <p className="font-semibold text-slate-800">
                                        {no_wa}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-100 p-6 sticky top-8 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-2 mb-5">
                                <Tag className="w-5 h-5 text-blue-600" />
                                <h2 className="text-lg font-bold text-slate-800">
                                    Ringkasan
                                </h2>
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-3 mb-5 pb-5 border-b border-blue-100">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-600">
                                        Harga Kursus
                                    </span>
                                    <span className="font-semibold text-slate-800">
                                        Rp {amount}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-600">
                                        Diskon
                                    </span>
                                    <span className="font-semibold text-green-600">
                                        -
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-600">
                                        Biaya Admin
                                    </span>
                                    <span className="font-semibold text-green-600">
                                        Gratis
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-600">
                                        PPN (11%)
                                    </span>
                                    <span className="font-semibold text-slate-800">
                                        -
                                    </span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="bg-blue-50/50 backdrop-blur-sm rounded-xl p-4 mb-5 border border-blue-100">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-slate-800">
                                        Total
                                    </span>
                                    <span className="text-xl font-bold text-blue-600">
                                        Rp {amount}
                                    </span>
                                </div>
                            </div>

                            {/* Payment Button */}
                            <button
                                onClick={handleClickPayment}
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3.5 rounded-xl hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 mb-4"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Memproses...
                                    </>
                                ) : (
                                    <>
                                        Bayar Sekarang
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>

                            {/* Security Info */}
                            <div className="space-y-2.5">
                                <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
                                    <Lock className="w-3.5 h-3.5" />
                                    <span>Dilindungi SSL 256-bit</span>
                                </div>

                                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-blue-100">
                                    <Shield className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs text-slate-600">
                                        Garansi 30 Hari
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
