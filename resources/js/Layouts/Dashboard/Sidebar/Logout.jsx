import React, { useState, useEffect } from "react";

function Logout() {
    const [csrf, setCsrf] = useState("");

    useEffect(() => {
        const token = document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute("content");
        if (token) setCsrf(token);
    }, []);

    return (
        <div className="pt-6 border-t border-gray-200">
            <form action="/logout" method="POST">
                <input type="hidden" name="_token" value={csrf} />
                <button className="w-full lg:w-auto lg:px-8 bg-red-50 text-red-600 font-semibold py-4 rounded-2xl hover:bg-red-100 active:scale-98 transition-all">
                    Keluar
                </button>
            </form>
        </div>
    );
}

export default Logout;
