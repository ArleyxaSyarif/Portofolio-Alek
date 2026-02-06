"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface WarningModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const WarningModal: React.FC<WarningModalProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
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

                <h3 className="text-2xl font-bold text-white mb-2">
                    Fitur Belum Tersedia
                </h3>
                <p className="text-gray-400 mb-6">
                    Halaman ini masih dalam tahap pengembangan. Formulir kontak belum
                    berfungsi sepenuhnya.
                </p>

                <button
                    onClick={onClose}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all w-full md:w-auto hover:shadow-lg hover:shadow-red-900/20"
                >
                    Saya Mengerti
                </button>
            </motion.div>
        </div>
    );
};

export default WarningModal;
