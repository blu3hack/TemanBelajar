import { useEffect } from "react";
import { router, usePage } from "@inertiajs/react";

export default function PaymentGateway() {
    const { flash } = usePage().props; // untuk ambil session data seperti snapToken

    // Load Snap.js
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        script.setAttribute(
            "data-client-key",
            import.meta.env.VITE_MIDTRANS_CLIENT_KEY
        );
        script.async = true;
        document.body.appendChild(script);

        return () => document.body.removeChild(script);
    }, []);

    // Jika Laravel mengembalikan snapToken → popup Snap langsung muncul
    useEffect(() => {
        if (flash.snapToken) {
            window.snap.pay(flash.snapToken, {
                onSuccess: (result) => {
                    console.log("Success", result);
                    alert("Pembayaran sukses!");
                },
                onPending: (result) => {
                    console.log("Pending", result);
                    alert("Menunggu pembayaran...");
                },
                onError: (result) => {
                    console.log("Error", result);
                    alert("Terjadi kesalahan pembayaran");
                },
                onClose: () => {
                    alert("Popup pembayaran ditutup");
                },
            });
        }
    }, [flash.snapToken]);

    // Kirim POST ke Laravel menggunakan Inertia
    const handlePayment = () => {
        router.post(route("create-payment"), {
            name: "Danang",
            email: "danang@example.com",
            amount: 150000,
        });
    };

    return (
        <div>
            <h1>Pembayaran Midtrans</h1>

            <button
                onClick={handlePayment}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Bayar Sekarang
            </button>
        </div>
    );
}
