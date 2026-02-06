"use client";

import React from "react";
import { Lock, X } from "lucide-react";

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
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] transition-opacity duration-300">
            <div className="bg-[#1F1F47] p-8 rounded-2xl border border-blue-700/50 w-full max-w-sm mx-4 shadow-2xl shadow-blue-900/40 transform scale-100 transition-transform duration-300 ease-out">
                <h3 className="text-2xl mb-4 text-blue-400 font-bold flex items-center space-x-2">
                    <Lock size={20} /> <span>Akses Admin</span>
                </h3>

                <form onSubmit={onLogin}>
                    <input
                        name="username"
                        placeholder="Username"
                        className="bg-[#161633] w-full p-3 mb-3 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        required
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="bg-[#161633] w-full p-3 mb-5 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        required
                    />

                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full w-full font-bold transition duration-200 transform active:scale-[0.98] shadow-md hover:shadow-lg shadow-blue-900/50">
                        Login
                    </button>
                </form>

                <button
                    className="text-blue-400 border border-blue-600 hover:bg-blue-900/40 hover:text-cyan-300 transition duration-300 block mx-auto mt-5 flex items-center space-x-1 py-2 px-4 rounded-full text-sm font-medium transform active:scale-95"
                    onClick={onClose}
                >
                    <X size={14} /> <span>Batal</span>
                </button>
            </div>
        </div>
    );
};

export default AdminLoginModal;
