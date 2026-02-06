"use client";

import React from "react";
import { ChevronLeft, RefreshCw, LogIn, UserCheck } from "lucide-react";

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
        <>
            <div className="mb-8">
                <button
                    onClick={onGoBack}
                    className="inline-flex items-center space-x-1 text-cyan-400 border border-cyan-400 px-4 py-2 rounded-full font-medium bg-cyan-900/20 hover:bg-cyan-900/50 transition duration-300 transform hover:scale-[1.03] active:scale-100 shadow-md shadow-cyan-900/40 mb-8"
                >
                    <ChevronLeft size={20} />
                    <span>Kembali ke Halaman Sebelumnya</span>
                </button>

                <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-lg transition duration-500">
                    Komunitas Komentar
                </h2>
                <p className="text-center text-gray-400 mb-10 md:mb-16 italic text-base md:text-lg font-light">
                    Bagikan pendapat atau tinggalkan jejak digital Anda di sini. 🌌
                </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-10 border-b border-purple-700/50 pb-4 md:pb-6 space-y-3 sm:space-y-0">
                <button
                    onClick={onRefresh}
                    className="inline-flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-105 disabled:opacity-50"
                    disabled={isLoading}
                >
                    <RefreshCw size={18} className={isLoading ? "animate-spin" : ""} />
                    <span className="text-sm font-medium">
                        {isLoading ? "Memuat..." : "Muat Ulang Komentar"}
                    </span>
                </button>

                {!isAdmin ? (
                    <button
                        onClick={onOpenLogin}
                        className="inline-flex opacity-0 items-center space-x-2 text-indigo-400 border border-indigo-400 px-4 py-2 rounded-full font-medium bg-indigo-900/20 hover:bg-indigo-900/50 transition duration-300 transform hover:scale-[1.03] active:scale-100 shadow-md shadow-indigo-900/40"
                    >
                        <LogIn size={16} />
                        <span>Login Admin</span>
                    </button>
                ) : (
                    <div className="inline-flex items-center space-x-3">
                        <span className="text-xs sm:text-sm font-bold text-lime-400 bg-lime-900/50 px-3 py-1 rounded-full border border-lime-500 shadow-lg shadow-lime-800/30 transition duration-300">
                            <UserCheck size={14} className="inline mr-1" /> ADMIN MODE AKTIF
                        </span>
                        <button
                            onClick={onLogout}
                            className="text-gray-400 border border-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition duration-300 transform active:scale-95"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default HeaderSection;
