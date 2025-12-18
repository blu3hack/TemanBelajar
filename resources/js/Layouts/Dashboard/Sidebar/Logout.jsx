import { router } from "@inertiajs/react";

export default function Logout() {
    const logout = () => {
        router.post(route("logout"));
    };

    return (
        <div className="pt-6 border-t border-gray-200">
            <button
                onClick={logout}
                className="w-full lg:w-auto lg:px-8 bg-red-50 text-red-600 font-semibold py-4 rounded-2xl hover:bg-red-100 active:scale-98 transition-all"
            >
                Keluar
            </button>
        </div>
    );
}
