"use client";

import React from "react";
import { MessageSquare, RefreshCw, Send } from "lucide-react";

interface CommentFormProps {
    onSubmit: (e: React.FormEvent) => void;
    isSubmitting: boolean;
    nama: string;
    setNama: (value: string) => void;
    isiKomentar: string;
    setIsiKomentar: (value: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({
    onSubmit,
    isSubmitting,
    nama,
    setNama,
    isiKomentar,
    setIsiKomentar,
}) => {
    return (
        <div className="p-6 md:p-8 border border-purple-700/50 rounded-2xl shadow-2xl shadow-purple-900/30 bg-[#161633]/95 backdrop-blur-sm transition duration-500 h-fit order-1 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-purple-400 flex items-center space-x-2">
                <MessageSquare size={24} /> <span>Tulis Komentar</span>
            </h3>

            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="nama"
                        className="block text-sm font-medium mb-2 text-purple-300"
                    >
                        Nama Anda
                    </label>
                    <input
                        type="text"
                        id="nama"
                        className="w-full p-3 border border-gray-700 rounded-lg bg-[#1F1F47] text-white focus:ring-purple-500 focus:border-purple-500 transition duration-200 placeholder-gray-500"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="komentar"
                        className="block text-sm font-medium mb-2 text-purple-300"
                    >
                        Komentar Anda
                    </label>
                    <textarea
                        id="komentar"
                        rows={4}
                        className="w-full p-3 border border-gray-700 rounded-lg bg-[#1F1F47] text-white focus:ring-purple-500 focus:border-purple-500 transition duration-200 placeholder-gray-500"
                        value={isiKomentar}
                        onChange={(e) => setIsiKomentar(e.target.value)}
                        required
                        disabled={isSubmitting}
                    />
                </div>

                {/* Tombol Gradient Neon Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-block font-bold py-3 px-6 md:px-8 rounded-full text-white transition duration-300 ease-in-out transform active:scale-95 w-full text-base md:text-lg flex items-center justify-center space-x-2 ${isSubmitting
                        ? "bg-gray-600 cursor-not-allowed shadow-none"
                        : "bg-gradient-to-r from-purple-600 to-cyan-500 shadow-xl shadow-purple-900/50 hover:scale-[1.02] hover:shadow-cyan-500/50"
                        }`}
                >
                    {isSubmitting ? (
                        <>
                            <RefreshCw size={20} className="animate-spin" />
                            <span>Mengirim...</span>
                        </>
                    ) : (
                        <>
                            <Send size={20} />
                            <span>Kirim Komentar</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default CommentForm;
