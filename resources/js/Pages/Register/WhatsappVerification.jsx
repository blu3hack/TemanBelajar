import { useForm, usePage } from "@inertiajs/react";
import {
    MessageCircle,
    Check,
    Lock,
    ShieldCheck,
    AlertCircle,
} from "lucide-react";

export default function SimpleForm() {
    const { token, no_wa } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        otp: "",
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

        // return `+62 ${op}-${part1}-${part2}`;
        return `+62 XXX-XXXX-${part2}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/whatsapp-verification", {});
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2325D366' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                ></div>
            </div>

            <div className="relative w-full max-w-md">
                {/* WhatsApp Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-100">
                    {/* Header with WhatsApp branding */}
                    <div className="bg-gradient-to-r from-[#25D366] to-[#20c75a] px-8 py-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full"></div>

                        <div className="relative flex flex-col items-center">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-5 shadow-xl">
                                <MessageCircle
                                    className="w-14 h-14 text-[#25D366]"
                                    strokeWidth={2}
                                />
                            </div>
                            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
                                WhatsApp
                            </h1>
                            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                <ShieldCheck className="w-4 h-4 text-white" />
                                <p className="text-white font-semibold text-sm">
                                    Verifikasi Aman
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="px-8 py-10">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                Verifikasi Nomor Anda
                            </h2>
                            <p className="text-gray-600 text-base leading-relaxed mb-3">
                                Masukkan kode OTP 6 digit yang telah kami
                                kirimkan melalui WhatsApp
                            </p>
                            <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
                                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                                <p className="text-[#25D366] text-sm font-semibold">
                                    {formatWaNumber(no_wa)}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="otp"
                                        name="otp"
                                        value={data.otp}
                                        onChange={(e) =>
                                            setData("otp", e.target.value)
                                        }
                                        className={`w-full px-6 py-6 text-center text-4xl font-bold tracking-[1.2rem] bg-gray-50 border-3 rounded-2xl outline-none transition-all duration-300 placeholder-gray-300 ${
                                            errors.otp
                                                ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 text-red-600 bg-red-50"
                                                : "border-gray-200 focus:border-[#25D366] focus:ring-4 focus:ring-green-100 text-gray-800"
                                        }`}
                                        placeholder="------"
                                        maxLength="6"
                                    />
                                    {!errors.otp && data.otp.length === 6 && (
                                        <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
                                            <div className="bg-green-500 rounded-full p-1">
                                                <Check
                                                    className="w-5 h-5 text-white"
                                                    strokeWidth={3}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {usePage().props.flash?.error && (
                                    <div className="mt-4 bg-red-50 border-2 border-red-200 rounded-xl p-4">
                                        <div className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 mt-0.5">
                                                <AlertCircle className="w-5 h-5 text-red-500" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-sm font-bold text-red-800 mb-1">
                                                    {
                                                        usePage().props.flash
                                                            .error
                                                    }
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={processing}
                                className="w-full bg-gradient-to-r from-[#25D366] to-[#20c75a] text-white py-5 rounded-2xl font-bold text-lg hover:from-[#20bd5a] hover:to-[#1db851] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-green-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
                            >
                                {processing ? (
                                    <>
                                        <svg
                                            className="animate-spin h-6 w-6 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        <span>Memverifikasi...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Verifikasi Sekarang</span>
                                        <Check
                                            className="w-6 h-6"
                                            strokeWidth={3}
                                        />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
