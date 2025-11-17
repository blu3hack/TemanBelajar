import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, ArrowRight, Check } from "lucide-react";

function WhatsappVerification() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [phoneNumber] = useState("+62 812-3456-7890");
    const inputRefs = useRef([]);

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

    const handleVerify = () => {
        if (otp.every((digit) => digit !== "")) {
            setIsVerifying(true);
            setTimeout(() => {
                setIsVerifying(false);
                setIsVerified(true);
            }, 2000);
        }
    };

    const handleResend = () => {
        setOtp(["", "", "", "", "", ""]);
        setIsVerified(false);
        inputRefs.current[0]?.focus();
    };

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
                                {phoneNumber}
                            </span>
                        </p>

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
                                <button
                                    onClick={handleVerify}
                                    disabled={
                                        !otp.every((digit) => digit !== "") ||
                                        isVerifying
                                    }
                                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-sm sm:text-base"
                                >
                                    {isVerifying ? (
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

                <p className="text-center text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6 px-4">
                    Kode akan kadaluarsa dalam 5 menit
                </p>
            </div>
        </div>
    );
}

export default WhatsappVerification;
