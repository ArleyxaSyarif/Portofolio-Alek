"use client";

import React from "react";
import { Lock, X, User, KeyRound } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AdminLoginModalProps {
    isVisible: boolean;
    onClose: () => void;
    onLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
    isVisible,
    onClose,
    onLogin,
}) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
                    {/* Backdrop Blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/75 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#201f21]/90 backdrop-blur-xl p-6 sm:p-8 text-[#e5e1e4] shadow-2xl"
                    >
                        {/* Top Light Accent Line */}
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            type="button"
                            className="absolute top-4 right-4 p-1.5 rounded-full text-[#8e9192] hover:text-white hover:bg-white/10 transition-colors duration-200"
                            aria-label="Tutup modal"
                        >
                            <X size={16} />
                        </button>

                        {/* Header */}
                        <div className="flex items-center gap-3.5 mb-6">
                            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                                <Lock size={18} />
                            </div>
                            <div>
                                <h3 className="font-display text-lg font-bold text-white tracking-tight">
                                    Akses Admin
                                </h3>
                                <p className="font-body text-xs text-[#8e9192]">
                                    Masuk untuk mengelola komentar
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={onLogin} className="space-y-4">
                            <div className="relative">
                                <User
                                    size={16}
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8e9192]"
                                />
                                <input
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-[#8e9192] focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all duration-200"
                                    required
                                    autoComplete="username"
                                />
                            </div>

                            <div className="relative">
                                <KeyRound
                                    size={16}
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8e9192]"
                                />
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-[#8e9192] focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all duration-200"
                                    required
                                    autoComplete="current-password"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-3.5 mt-2 rounded-xl bg-white text-[#121214] font-bold text-xs uppercase tracking-wider hover:bg-[#e5e1e4] transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            >
                                Login
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AdminLoginModal;