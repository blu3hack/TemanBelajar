import React, { useState, useRef, useEffect } from "react";
import { usePage, useForm } from "@inertiajs/react";
import { MessageCircle, ArrowRight, Check } from "lucide-react";

function WhatsappVerification() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [isVerified, setIsVerified] = useState(false);
    const { token, name, no_wa } = usePage().props;
    const inputRefs = useRef([]);

    // FORM INERTIA

    const form = useForm({
        otp: "",
        token: token,
    });

    const formatWaNumber = (number) => {
        number = number.replace(/\D/g, "");

        if (number.startsWith("0")) {
            number = "62" + number.slice(1);
        }

        if (!number.startsWith("62")) {
            number = "62" + number;
        }

        const op = number.substring(2, 5);
        const part1 = number.substring(5, 9);
        const part2 = number.substring(9, 13);

        return `+62 ${op}-${part1}-${part2}`;
    };

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const handleChange = (index, value) => {
        if (value.length > 1) value = value[0];
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData
            .getData("text")
            .slice(0, 6)
            .split("");

        if (pastedData.every((char) => /^\d$/.test(char))) {
            const newOtp = [...otp];
            pastedData.forEach((char, i) => {
                if (i < 6) newOtp[i] = char;
            });
            setOtp(newOtp);
            inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
        }
    };

    // FIX 🔥🔥🔥 — INI BAGIAN PENTING

    const handleSubmit = (e) => {
        e.preventDefault();

        form.post(route("verify-wa"), {
            data: {
                otp: otp.join(""),
                token: token,
            },
            preserveScroll: true,
        });
    };

    const handleResend = () => {
        setOtp(["", "", "", "", "", ""]);
        setIsVerified(false);
        inputRefs.current[0]?.focus();
    };

    console.log("OTP yang dikirim:", otp.join(""));
    console.log("Token yang dikirim:", token);
    console.log("Errors dari server:", form.errors);

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-3 sm:p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-emerald-100 rounded-full -mr-16 sm:-mr-20 -mt-16 sm:-mt-20 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-teal-100 rounded-full -ml-12 sm:-ml-16 -mb-12 sm:-mb-16 opacity-50"></div>

                    <div className="relative z-10">
                        <div className="flex justify-center mb-4 sm:mb-6">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                            </div>
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
                            Verifikasi WhatsApp
                        </h1>

                        <p className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 px-2">
                            Masukkan kode OTP yang dikirim ke
                            <br />
                            <span className="font-semibold text-emerald-600">
                                {formatWaNumber(no_wa)}
                            </span>
                        </p>

                        {form.errors.otp && (
                            <div className="mb-4 bg-red-100 text-red-700 border border-red-300 px-4 py-3 rounded-lg text-sm">
                                {form.errors.otp}
                            </div>
                        )}

                        {form.errors.token && (
                            <div className="mb-4 bg-red-100 text-red-700 border border-red-300 px-4 py-3 rounded-lg text-sm">
                                Token tidak valid atau kadaluarsa.
                            </div>
                        )}

                        {usePage().props.flash?.error && (
                            <div className="mb-4 bg-red-100 text-red-700 border border-red-300 px-4 py-3 rounded-lg text-sm">
                                {usePage().props.flash.error}
                            </div>
                        )}

                        <div className="mb-6 sm:mb-8">
                            <div
                                className="flex gap-2 sm:gap-3 justify-center mb-4 sm:mb-6"
                                onPaste={handlePaste}
                            >
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) =>
                                            (inputRefs.current[index] = el)
                                        }
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) =>
                                            handleChange(index, e.target.value)
                                        }
                                        onKeyDown={(e) =>
                                            handleKeyDown(index, e)
                                        }
                                        className={`w-11 h-11 sm:w-14 sm:h-14 text-center text-xl sm:text-2xl font-bold rounded-lg sm:rounded-xl border-2 transition-all duration-200 outline-none ${
                                            isVerified
                                                ? "border-emerald-500 bg-emerald-50 text-emerald-600"
                                                : digit
                                                ? "border-emerald-400 bg-emerald-50 text-gray-800"
                                                : "border-gray-200 bg-white text-gray-800 focus:border-emerald-400 focus:bg-emerald-50"
                                        }`}
                                        disabled={isVerified}
                                    />
                                ))}
                            </div>

                            {!isVerified ? (
                                <form onSubmit={handleSubmit}>
                                    <button
                                        type="submit"
                                        disabled={
                                            !otp.every(
                                                (digit) => digit !== ""
                                            ) || form.processing
                                        }
                                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                                    >
                                        {form.processing ? (
                                            <>
                                                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Memverifikasi...
                                            </>
                                        ) : (
                                            <>
                                                Verifikasi
                                                <ArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                                    <Check className="w-5 h-5" />
                                    Verifikasi Berhasil!
                                </div>
                            )}
                        </div>

                        {!isVerified && (
                            <div className="text-center">
                                <p className="text-gray-600 text-xs sm:text-sm mb-2">
                                    Tidak menerima kode?
                                </p>
                                <button
                                    onClick={handleResend}
                                    className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm sm:text-base"
                                >
                                    Kirim Ulang Kode
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatsappVerification;
