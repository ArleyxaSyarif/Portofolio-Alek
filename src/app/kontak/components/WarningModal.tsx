"use client";

import React from "react";
import { Info } from "lucide-react";
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
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/20 backdrop-blur-[2px]"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-md rounded-2xl bg-white p-0 border border-gray-100 overflow-hidden transform"
                        style={{
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)"
                        }}
                    >
                        <div className="flex flex-col sm:flex-row">
                            <div className="flex justify-center sm:justify-start pt-8 sm:pt-8 sm:pl-8">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fffbeb] text-[#d97706] ring-8 ring-[#fffbeb]/50">
                                    <Info size={32} />
                                </div>
                            </div>
                            <div className="flex-1 p-8 sm:pl-6 text-center sm:text-left">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
                                    Informasi Kontak
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed mb-6 font-sans">
                                    Mohon isi kontak email dan nama yang benar. Data ini diperlukan untuk verifikasi identitas Anda.
                                </p>
                                <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 justify-end">
                                    <button
                                        onClick={onClose}
                                        className="inline-flex justify-center items-center px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors font-sans"
                                    >
                                        Tutup
                                    </button>

                                </div>
                            </div>
                        </div>
                        {/* Decorative Gradient Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent opacity-0"></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WarningModal;
