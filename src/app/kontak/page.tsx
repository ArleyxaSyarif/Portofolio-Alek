"use client";

import React, { useState, useEffect } from "react";
import {
    Mail,
    MapPin,
    Send,
    User,
    MessageSquare,
    ArrowRight,
    ChevronLeft,
    CheckCircle,
    AlertTriangle,
    Github,
    Linkedin,
    Instagram,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Custom Alert Component
const CustomAlert: React.FC<{ message: string; type: "success" | "error" }> = ({
    message,
    type,
}) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, [message]);

    if (!isVisible) return null;

    const icon =
        type === "success" ? (
            <CheckCircle size={20} className="text-lime-300" />
        ) : (
            <AlertTriangle size={20} className="text-red-300" />
        );
    const bgColor =
        type === "success"
            ? "bg-lime-950/90 border-lime-600 shadow-lg shadow-lime-800/30"
            : "bg-red-950/90 border-red-600 shadow-lg shadow-red-800/30";

    return (
        <div
            className={`fixed top-4 right-4 p-4 rounded-xl z-50 flex items-center space-x-3 text-white backdrop-blur-sm transition-all duration-500 ease-in-out ${bgColor} transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                }`}
        >
            {icon}
            <p className="font-semibold text-sm">{message}</p>
        </div>
    );
};

export default function KontakPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !message.trim()) {
            triggerAlert("Harap isi semua kolom!", "error");
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            triggerAlert("Pesan berhasil dikirim! Saya akan segera membalasnya. 🚀", "success");
            setName("");
            setEmail("");
            setMessage("");
        }, 1500);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "workarleyxa@gmail.com",
            link: "mailto:workarleyxa@gmail.com",
            color: "text-purple-400",
            borderColor: "border-purple-500/50",
            bgHover: "hover:bg-purple-900/30",
        },
        {
            icon: MapPin,
            label: "Lokasi",
            value: "Bogor, Indonesia",
            link: "#",
            color: "text-cyan-400",
            borderColor: "border-cyan-500/50",
            bgHover: "hover:bg-cyan-900/30",
        },
    ];

    const socialLinks = [
        { icon: Github, url: "https://github.com/ArleyxaSyarif", color: "hover:text-white" },
        { icon: Linkedin, url: "https://www.linkedin.com/in/mohamad-arleyxa-syarif/", color: "hover:text-blue-400" },
        { icon: Instagram, url: "https://instagram.com/mohamad._arleyxa", color: "hover:text-pink-400" },
    ];

    return (
        <section className="min-h-screen py-12 md:py-20 bg-[#0A0A1F] text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Warning Popup Modal */}
            <AnimatePresence>
                {showWarning && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowWarning(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-[#161633] border border-red-500/50 p-6 md:p-8 rounded-2xl shadow-2xl shadow-red-900/40 max-w-md w-full text-center"
                        >
                            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                                <AlertTriangle className="text-red-500" size={32} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">Fitur Belum Tersedia</h3>
                            <p className="text-gray-400 mb-6">
                                Halaman ini masih dalam tahap pengembangan. Formulir kontak belum berfungsi sepenuhnya.
                            </p>

                            <button
                                onClick={() => setShowWarning(false)}
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all w-full md:w-auto hover:shadow-lg hover:shadow-red-900/20"
                            >
                                Saya Mengerti
                            </button>
                        </motion.div>
                    </div>
                )}
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
                        <div className="bg-[#161633]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                                <Send className="text-purple-400" size={24} />
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Kirim Pesan
                                </span>
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-400">
                                        Nama Lengkap
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-3.5 text-gray-500" size={18} />
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full pl-12 pr-4 py-3 bg-[#0f0f25] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-gray-600"
                                            placeholder="Masukkan nama Anda"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-400">
                                        Alamat Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-3.5 text-gray-500" size={18} />
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full pl-12 pr-4 py-3 bg-[#0f0f25] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-gray-600"
                                            placeholder="contoh@email.com"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-400">
                                        Pesan
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-3.5 text-gray-500" size={18} />
                                        <textarea
                                            id="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            rows={4}
                                            className="w-full pl-12 pr-4 py-3 bg-[#0f0f25] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-gray-600 resize-none"
                                            placeholder="Tulis pesan Anda di sini..."
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] ${isSubmitting
                                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                                        : "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-lg shadow-purple-900/40"
                                        }`}
                                >
                                    {isSubmitting ? "Mengirim..." : "Kirim Sekarang"}
                                    {!isSubmitting && <ArrowRight size={20} />}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="prose prose-invert">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Informasi Kontak
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Saya selalu terbuka untuk mendiskusikan proyek pengembangan web,
                                desain produk, atau peluang kemitraan. Silakan hubungi saya melalui form
                                atau kontak langsung di bawah ini.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((info, idx) => {
                                const Icon = info.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={info.link}
                                        className={`block p-6 rounded-2xl bg-[#161633]/60 border ${info.borderColor} backdrop-blur-md transition-all group ${info.bgHover}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-xl bg-white/5 ${info.color}`}>
                                                <Icon size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
                                                    {info.label}
                                                </p>
                                                <p className="text-lg font-medium text-white group-hover:text-cyan-300 transition-colors">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Social Media */}
                        <div>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
                                Social Media
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((social, idx) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={idx}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-4 rounded-xl bg-[#161633] border border-white/10 text-gray-400 transition-all hover:scale-110 hover:border-white/30 ${social.color}`}
                                        >
                                            <Icon size={24} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Map Placeholder Graphic */}
                        <div className="h-40 w-full rounded-2xl overflow-hidden relative border border-white/10 group">
                            <div className="absolute inset-0 bg-[#0f0f25] flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="mx-auto text-cyan-500 mb-2 opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
                                    <span className="text-xs text-gray-500 font-mono">Bogor, West Java, ID</span>
                                </div>
                            </div>
                            {/* Decorative grid lines */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
