import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({
    children,
    title = "Login",
    subtitle = "Langkah pertama menuju pembelajaran yang lebih baik",
}) {
    return (
        <div className="flex min-h-screen">
            {/* Left Side - Decorative */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
                {/* Animated gradient orbs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-40 w-96 h-96 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>

                {/* Geometric shapes */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/20 rounded-3xl rotate-12 animate-float"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-white/20 rounded-full animate-float delay-1000"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center items-center w-full px-16 text-white">
                    <div className="text-center space-y-6">
                        <div className="inline-block p-4 bg-white/10 rounded-3xl backdrop-blur-sm mb-4">
                            <svg
                                className="w-20 h-20"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h1 className="text-6xl font-bold tracking-tight">
                            {title}
                        </h1>
                        <p className="text-xl text-white/80 max-w-md">
                            {subtitle}
                        </p>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes float {
                        0%,
                        100% {
                            transform: translateY(0px) rotate(0deg);
                        }
                        50% {
                            transform: translateY(-20px) rotate(5deg);
                        }
                    }
                    .animate-float {
                        animation: float 6s ease-in-out infinite;
                    }
                    .delay-1000 {
                        animation-delay: 1s;
                    }
                    .delay-2000 {
                        animation-delay: 2s;
                    }
                `}</style>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-12">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-3xl shadow-2xl px-10 py-12 border border-gray-200/50 backdrop-blur-sm">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
