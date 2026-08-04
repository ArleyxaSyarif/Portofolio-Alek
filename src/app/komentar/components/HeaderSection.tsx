"use client";

import React from "react";
import { ChevronLeft, RefreshCw, LogIn, UserCheck, LogOut } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderSectionProps {
    onGoBack: () => void;
    onRefresh: () => void;
    isLoading: boolean;
    isAdmin: boolean;
    onOpenLogin: () => void;
    onLogout: () => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
    onGoBack,
    onRefresh,
    isLoading,
    isAdmin,
    onOpenLogin,
    onLogout,
}) => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            {/* Section Atas: Tombol Kembali & Judul Utama */}
            <div className="mb-8 md:mb-12 text-center relative">
                {/* Tombol Kembali */}
                <div className="flex justify-start mb-6 md:mb-8">
                    <motion.button
                        whileHover={{ scale: 1.02, x: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onGoBack}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#8e9192] hover:text-white bg-[#201f21]/80 hover:bg-[#201f21] border border-white/10 px-4 py-2 rounded-full backdrop-blur-md transition-all duration-200 shadow-sm"
                    >
                        <ChevronLeft size={16} />
                        <span>Kembali ke Halaman Sebelumnya</span>
                    </motion.button>
                </div>

                {/* Judul & Deskripsi */}
                <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-3">
                    Komunitas Komentar
                </h2>
                <p className="font-body text-xs sm:text-sm md:text-base text-[#8e9192] max-w-lg mx-auto font-normal">
                    Bagikan pendapat atau tinggalkan jejak digital Anda di sini.
                </p>
            </div>

            {/* Control Bar: Refresh & Status Admin */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 md:mb-10 pb-5 border-b border-white/10">
                {/* Tombol Refresh */}
                <motion.button
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    onClick={onRefresh}
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#8e9192] hover:text-white transition duration-200 disabled:opacity-50"
                >
                    <RefreshCw
                        size={15}
                        className={`transition-transform duration-500 ${isLoading ? "animate-spin text-white" : ""
                            }`}
                    />
                    <span>{isLoading ? "Memuat..." : "Muat Ulang Komentar"}</span>
                </motion.button>

                {/* Area Login / Status Admin */}
                {!isAdmin ? (
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onOpenLogin}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8e9192] hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md transition-all duration-200 opacity-40 hover:opacity-100"
                        title="Akses Admin"
                    >
                        <LogIn size={14} />
                        <span>Login Admin</span>
                    </motion.button>
                ) : (
                    <div className="inline-flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full backdrop-blur-md">
                            <UserCheck size={14} />
                            <span>ADMIN MODE</span>
                        </span>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onLogout}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8e9192] hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full transition-all duration-200"
                        >
                            <LogOut size={13} />
                            <span>Logout</span>
                        </motion.button>
                    </div>
                )}
            </div>
        </motion.header>
    );
};

export default HeaderSection;