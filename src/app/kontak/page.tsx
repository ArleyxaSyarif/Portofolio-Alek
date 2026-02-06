"use client";

import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import CustomAlert from "@/components/ui/CustomAlert";
import WarningModal from "./components/WarningModal";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

export default function KontakPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [alertType, setAlertType] = useState<"success" | "error">("success");
    const [showWarning, setShowWarning] = useState(true);

    const triggerAlert = (msg: string, type: "success" | "error") => {
        setAlertMessage(msg);
        setAlertType(type);
        setTimeout(() => setAlertMessage(null), 4000);
    };

    const handleGoBack = () => {
        window.history.back();
    };

    const handleSubmit = async (e: React.FormEvent, data: { name: string; email: string; message: string }) => {
        e.preventDefault();
        if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
            triggerAlert("Harap isi semua kolom!", "error");
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            triggerAlert("Pesan berhasil dikirim! Saya akan segera membalasnya. 🚀", "success");
            // Form clearing logic would typically happen here if controlled by parent state
        }, 1500);
    };

    return (
        <section className="min-h-screen py-12 md:py-20 bg-[#0A0A1F] text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Warning Popup Modal */}
            <AnimatePresence>
                <WarningModal isVisible={showWarning} onClose={() => setShowWarning(false)} />
            </AnimatePresence>

            {alertMessage && <CustomAlert message={alertMessage} type={alertType} />}

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Header */}
                <div className="mb-10">
                    <button
                        onClick={handleGoBack}
                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-white transition duration-300 mb-6 group"
                    >
                        <div className="p-2 rounded-full bg-cyan-900/20 group-hover:bg-cyan-900/50 border border-cyan-500/30 transition-all">
                            <ChevronLeft size={20} />
                        </div>
                        <span className="font-medium text-sm">Kembali</span>
                    </button>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 drop-shadow-lg">
                        Hubungi Saya
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl font-light">
                        Tertarik untuk berkolaborasi atau sekadar berdiskusi tentang teknologi?
                        Jangan ragu untuk mengirim pesan.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Form Section */}
                    <div className="order-2 lg:order-1">
                        <ContactForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
                    </div>

                    {/* Info Section */}
                    <div className="order-1 lg:order-2">
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </section>
    );
}
