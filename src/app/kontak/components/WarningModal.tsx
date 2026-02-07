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
                    {/* Backdrop with stronger blur for focus */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#0f1021]/80 backdrop-blur-xl shadow-2xl shadow-purple-500/20"
                    >
                        {/* Gradient Border/Glow Effect */}
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
                        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-30" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            <X size={18} />
                        </button>

                        <div className="flex flex-col items-center text-center p-8 pt-10">
                            {/* Animated Icon Container */}
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                className="relative mb-6"
                            >
                                <div className="absolute inset-0 animate-pulse rounded-full bg-amber-500/20 blur-xl" />
                                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 shadow-inner">
                                    <AlertCircle className="text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" size={32} />
                                </div>
                            </motion.div>

                            {/* Text Content */}
                            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                                Informasi Kontak
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-[260px]">
                                Mohon lengkapi data email dan nama dengan benar.
                            </p>

                            {/* Action Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={onClose}
                                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0f1021]"
                            >
                                <div className="relative rounded-[10px] bg-[#0f1021] px-4 py-3 transition-all group-hover:bg-opacity-0">
                                    <span className="bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text font-semibold text-transparent group-hover:text-white transition-colors">
                                        Mengerti
                                    </span>
                                </div>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WarningModal;
