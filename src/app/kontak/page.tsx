"use client";

import React, { useState } from "react";
import { ChevronLeft, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import WarningModal from "./components/WarningModal";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import { Toaster } from "react-hot-toast";

export default function KontakPage() {
    const [showWarning, setShowWarning] = useState(true);

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <section className="relative w-full min-h-screen bg-[#121214] text-[#e5e1e4] py-16 md:py-24 overflow-hidden flex flex-col justify-center font-body">
            {/* Global Style Injections */}
            <style jsx global>{`
                @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap");

                .font-display {
                    font-family: "Plus Jakarta Sans", sans-serif;
                }

                .font-body {
                    font-family: "Inter", sans-serif;
                }

                .bg-grid-pattern {
                    background-image: radial-gradient(
                        rgba(255, 255, 255, 0.08) 1px,
                        transparent 1px
                    );
                    background-size: 24px 24px;
                }

                .radial-mask {
                    mask-image: radial-gradient(
                        ellipse at center,
                        black 40%,
                        transparent 80%
                    );
                    -webkit-mask-image: radial-gradient(
                        ellipse at center,
                        black 40%,
                        transparent 80%
                    );
                }

                .text-gradient {
                    background: linear-gradient(to right, #ffffff, #8e9192);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>

            {/* Background Atmosphere & Grid */}
            <div className="absolute inset-0 z-0 bg-grid-pattern radial-mask pointer-events-none opacity-50" />
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

            {/* Notifications & Modals */}
            <Toaster position="top-right" />

            <AnimatePresence>
                <WarningModal
                    isVisible={showWarning}
                    onClose={() => setShowWarning(false)}
                />
            </AnimatePresence>

            {/* Main Container */}
            <div className="max-w-[1280px] mx-auto px-5 md:px-16 relative z-10 w-full">
                {/* Navigation / Back Button */}
                <div className="mb-8">
                    <button
                        onClick={handleGoBack}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#201f21]/80 hover:bg-white/10 text-[#e5e1e4] hover:text-white transition-all duration-300 text-xs font-semibold backdrop-blur-md group"
                    >
                        <ChevronLeft
                            size={16}
                            className="group-hover:-translate-x-0.5 transition-transform text-[#8e9192] group-hover:text-white"
                        />
                        <span>Kembali</span>
                    </button>
                </div>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 md:mb-16 max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#201f21]/80 backdrop-blur-md mb-6 text-xs font-semibold tracking-wider text-[#e5e1e4] uppercase shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-[#8e9192]" />
                        <span>Mari Terhubung</span>
                    </div>

                    <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-gradient mb-4">
                        Hubungi Saya
                    </h1>
                    <p className="font-body text-base md:text-lg text-[#c4c7c8] leading-relaxed">
                        Tertarik untuk berkolaborasi atau sekadar berdiskusi tentang teknologi?
                        Jangan ragu untuk mengirim pesan.
                    </p>
                </motion.div>

                {/* Content Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Form Section */}
                    <div className="order-2 lg:order-1">
                        <ContactForm />
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