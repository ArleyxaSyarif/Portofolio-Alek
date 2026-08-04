"use client";

import React from "react";
import { AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WarningModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const WarningModal: React.FC<WarningModalProps> = ({ isVisible, onClose }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop with smooth blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/75 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#201f21]/90 backdrop-blur-xl shadow-2xl text-[#e5e1e4]"
                    >
                        {/* Top Light Accent Line */}
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3.5 right-3.5 p-1.5 rounded-full text-[#8e9192] hover:text-white hover:bg-white/10 transition-colors duration-200"
                            aria-label="Tutup modal"
                        >
                            <X size={16} />
                        </button>

                        <div className="flex flex-col items-center text-center p-6 sm:p-8 pt-9">
                            {/* Icon Container */}
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                className="relative mb-5"
                            >
                                <div className="absolute inset-0 animate-pulse rounded-full bg-white/5 blur-xl" />
                                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner text-white">
                                    <AlertCircle size={26} className="text-[#e5e1e4]" />
                                </div>
                            </motion.div>

                            {/* Text Content */}
                            <h3 className="font-display text-lg font-bold text-white mb-2 tracking-tight">
                                Informasi Kontak
                            </h3>
                            <p className="font-body text-xs sm:text-sm text-[#8e9192] leading-relaxed mb-6 max-w-[260px]">
                                Mohon lengkapi data email dan nama dengan benar.
                            </p>

                            {/* Action Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={onClose}
                                className="w-full py-3 px-5 rounded-xl bg-white text-[#121214] font-bold text-xs uppercase tracking-wider hover:bg-[#e5e1e4] transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            >
                                Mengerti
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WarningModal;